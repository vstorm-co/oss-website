import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CodeMirror, { EditorView, type ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";
import {
  api,
  type ComponentMeta,
  type ImageEntry,
  type ImageGroup,
  type Lang,
  type PostContent,
  type PostSummary,
} from "./api";
import { FrontmatterForm } from "./FrontmatterForm";
import { NewPostDialog } from "./NewPostDialog";
import "./admin.css";

type SaveState = "idle" | "dirty" | "saving" | "saved" | "error";
const LANGS: Lang[] = ["en", "pl", "de", "es"];
const AUTOSAVE_MS = 2000;

interface Selection {
  lang: Lang;
  slug: string;
}

export default function AdminApp() {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [components, setComponents] = useState<ComponentMeta[]>([]);
  const [selection, setSelection] = useState<Selection | null>(null);
  const [post, setPost] = useState<PostContent | null>(null);
  const [imageGroups, setImageGroups] = useState<ImageGroup[]>([]);
  const [langFilter, setLangFilter] = useState<Lang | "all">("all");
  const [search, setSearch] = useState("");
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [saveError, setSaveError] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [rightTab, setRightTab] = useState<"preview" | "components" | "images">("preview");
  const [leftTab, setLeftTab] = useState<"content" | "frontmatter">("content");
  const [previewNonce, setPreviewNonce] = useState(0);

  const editorRef = useRef<ReactCodeMirrorRef>(null);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // Latest content/frontmatter — refs keep flushes in sync even if state
  // updates haven't committed yet when a debounced save fires.
  const liveContent = useRef<string>("");
  const liveFrontmatter = useRef<Record<string, unknown>>({});
  const dirtyRef = useRef(false);
  // Snapshot of what we last persisted, used to skip no-op saves.
  const lastSavedContent = useRef<string>("");
  const lastSavedFrontmatter = useRef<string>("");

  // Prevent Vite from full-reloading the admin page when MDX/content files change
  // (which happens on every autosave). The iframe preview has its own HMR client
  // and will still reload on those changes — that's the behaviour we want.
  useEffect(() => {
    if (!import.meta.hot) return;
    const block = (e: Event) => e.preventDefault();
    import.meta.hot.on("vite:beforeFullReload", block);
    import.meta.hot.on("vite:beforeUpdate", (payload: { updates?: Array<{ path?: string }> }) => {
      // Drop MDX/content-collection updates that would cascade through the admin bundle.
      if (!payload?.updates) return;
      payload.updates = payload.updates.filter((u) => {
        const p = u.path ?? "";
        return !p.includes("/src/data/blog/") && !p.includes("astro:content");
      });
    });
    return () => {
      import.meta.hot?.off("vite:beforeFullReload", block);
    };
  }, []);

  const refreshImages = useCallback(async () => {
    setImageGroups(await api.listAllImageGroups());
  }, []);

  // Initial load
  useEffect(() => {
    Promise.all([api.listPosts(), api.listComponents(), api.listAllImageGroups()]).then(
      ([p, c, g]) => {
        setPosts(p);
        setComponents(c);
        setImageGroups(g);
      },
    );
  }, []);

  // Load selected post
  useEffect(() => {
    // Cancel any pending save from a previous selection
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
    }
    dirtyRef.current = false;
    if (!selection) {
      setPost(null);
      liveContent.current = "";
      liveFrontmatter.current = {};
      return;
    }
    let cancelled = false;
    setSaveState("idle");
    api.readPost(selection.lang, selection.slug).then((p) => {
      if (cancelled) return;
      setPost(p);
      liveContent.current = p.content;
      liveFrontmatter.current = p.frontmatter;
      lastSavedContent.current = p.content;
      lastSavedFrontmatter.current = JSON.stringify(p.frontmatter);
    });
    return () => {
      cancelled = true;
    };
  }, [selection]);

  const triggerSave = useCallback(
    async (immediate = false) => {
      if (!selection) return;
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
        saveTimerRef.current = null;
      }
      const doSave = async () => {
        if (!dirtyRef.current) return;
        const nextContent = liveContent.current;
        const nextFmString = JSON.stringify(liveFrontmatter.current);
        // Skip no-op saves — avoids triggering Astro content-layer rewrites for nothing.
        if (
          nextContent === lastSavedContent.current &&
          nextFmString === lastSavedFrontmatter.current
        ) {
          dirtyRef.current = false;
          setSaveState("saved");
          return;
        }
        dirtyRef.current = false;
        setSaveState("saving");
        setSaveError(null);
        try {
          await api.savePost(selection.lang, selection.slug, {
            frontmatter: liveFrontmatter.current,
            content: nextContent,
          });
          lastSavedContent.current = nextContent;
          lastSavedFrontmatter.current = nextFmString;
          setSaveState("saved");
          setPreviewNonce((n) => n + 1);
          api.listPosts().then(setPosts);
        } catch (e) {
          setSaveState("error");
          setSaveError((e as Error).message);
          dirtyRef.current = true;
        }
      };
      if (immediate) {
        await doSave();
      } else {
        setSaveState("dirty");
        saveTimerRef.current = setTimeout(doSave, AUTOSAVE_MS);
      }
    },
    [selection],
  );

  // Cmd/Ctrl+S handler
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        void triggerSave(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [triggerSave]);

  // Filtered posts
  const visiblePosts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return posts.filter((p) => {
      if (langFilter !== "all" && p.lang !== langFilter) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [posts, search, langFilter]);

  const updateContent = (next: string) => {
    liveContent.current = next;
    dirtyRef.current = true;
    if (post && next !== post.content) {
      // Only update React state for display purposes; avoid rerenders during typing
      // by only setting when materially different.
      setPost((p) => (p ? { ...p, content: next } : p));
    }
    void triggerSave(false);
  };

  const updateFrontmatter = (next: Record<string, unknown>) => {
    liveFrontmatter.current = next;
    dirtyRef.current = true;
    setPost((p) => (p ? { ...p, frontmatter: next } : p));
    void triggerSave(false);
  };

  const insertSnippet = (snippet: string, componentName?: string) => {
    const view = editorRef.current?.view;
    if (!view || !post) return;

    // --- Step 1: auto-inject the import (first, so its length shifts positions cleanly) ---
    if (componentName) {
      const importPath = `../../../components/blog/${componentName}.astro`;
      const importStmt = `import ${componentName} from "${importPath}";`;
      const docText = view.state.doc.toString();
      const hasImport =
        docText.includes(`from "${importPath}"`) ||
        docText.includes(`from '${importPath}'`);
      if (!hasImport) {
        // Walk from the top and find the end of the leading `import ...` block.
        const lines = docText.split("\n");
        let insertLine = 0;
        let sawImport = false;
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (/^import\s[^\n]*;?\s*$/.test(line)) {
            insertLine = i + 1;
            sawImport = true;
          } else if (line.trim() === "" && sawImport) {
            // allow blank lines inside leading import block
            continue;
          } else {
            break;
          }
        }
        // Convert line index → character offset.
        const offset = lines.slice(0, insertLine).join("\n").length + (insertLine > 0 ? 1 : 0);
        const insertText = sawImport ? `${importStmt}\n` : `${importStmt}\n\n`;
        view.dispatch({
          changes: { from: offset, to: offset, insert: insertText },
        });
      }
    }

    // --- Step 2: insert the snippet at (possibly updated) cursor ---
    const doc = view.state.doc;
    const sel = view.state.selection.main;
    const atDefault = sel.from === 0 && sel.to === 0 && !view.hasFocus;
    const target = atDefault && doc.length > 0 ? doc.length : sel.from;
    const targetTo = atDefault && doc.length > 0 ? doc.length : sel.to;

    const beforeCtx = doc.sliceString(Math.max(0, target - 2), target);
    let prefix = "";
    if (target > 0 && beforeCtx !== "\n\n") {
      prefix = beforeCtx.endsWith("\n") ? "\n" : "\n\n";
    }
    const snippetText = prefix + snippet + "\n";
    view.dispatch({
      changes: { from: target, to: targetTo, insert: snippetText },
      selection: { anchor: target + snippetText.length },
      scrollIntoView: true,
    });
    view.focus();

    const next = view.state.doc.toString();
    liveContent.current = next;
    dirtyRef.current = true;
    setPost((p) => (p ? { ...p, content: next } : p));
    void triggerSave(false);
  };

  const onCreate = async (values: {
    lang: Lang;
    slug: string;
    title: string;
    description: string;
    translationKey: string;
  }) => {
    const today = new Date().toISOString().slice(0, 10);
    await api.createPost({
      lang: values.lang,
      slug: values.slug,
      frontmatter: {
        title: values.title,
        description: values.description,
        pubDate: today,
        author: "Vstorm",
        lang: values.lang,
        translationKey: values.translationKey,
        tags: [],
        category: "article",
        draft: true,
      },
      content: "\n## Introduction\n\nStart writing…\n",
    });
    const fresh = await api.listPosts();
    setPosts(fresh);
    setSelection({ lang: values.lang, slug: values.slug });
    setShowNew(false);
  };

  const onDelete = async () => {
    if (!selection) return;
    if (!confirm(`Delete ${selection.lang}/${selection.slug}? This cannot be undone.`)) return;
    await api.deletePost(selection.lang, selection.slug);
    setPosts(await api.listPosts());
    setSelection(null);
    setPost(null);
  };

  const onRename = async () => {
    if (!selection) return;
    const input = prompt("New slug (lowercase, hyphens only):", selection.slug);
    if (!input || input === selection.slug) return;
    if (!/^[a-z0-9][a-z0-9-]*$/.test(input)) {
      alert("Invalid slug");
      return;
    }
    await api.renamePost(selection.lang, selection.slug, input);
    setPosts(await api.listPosts());
    setSelection({ lang: selection.lang, slug: input });
  };

  const onDuplicate = async () => {
    if (!post || !selection) return;
    const otherLangs = LANGS.filter((l) => l !== selection.lang);
    const target = prompt(
      `Duplicate to which language? Options: ${otherLangs.join(", ")}`,
      otherLangs[0],
    );
    if (!target || !LANGS.includes(target as Lang)) return;
    const targetLang = target as Lang;
    const exists = posts.find((p) => p.lang === targetLang && p.slug === selection.slug);
    if (exists) {
      alert(`${targetLang}/${selection.slug} already exists`);
      return;
    }
    await api.createPost({
      lang: targetLang,
      slug: selection.slug,
      frontmatter: { ...post.frontmatter, lang: targetLang },
      content: post.content,
    });
    setPosts(await api.listPosts());
    setSelection({ lang: targetLang, slug: selection.slug });
  };

  const previewUrl = selection
    ? `/admin/preview/${selection.lang}/${selection.slug}/?v=${previewNonce}`
    : "";

  return (
    <div className="ap-root">
      {/* SIDEBAR */}
      <aside className="ap-sidebar">
        <div className="ap-sidebar-header">
          <div className="ap-brand">
            <span className="ap-dot" />
            <span>Blog Admin</span>
          </div>
          <button className="ap-btn ap-btn-primary ap-btn-sm" onClick={() => setShowNew(true)}>
            + New
          </button>
        </div>
        <div className="ap-lang-tabs">
          <button
            className={langFilter === "all" ? "on" : ""}
            onClick={() => setLangFilter("all")}
          >
            all ({posts.length})
          </button>
          {LANGS.map((l) => (
            <button key={l} className={langFilter === l ? "on" : ""} onClick={() => setLangFilter(l)}>
              {l} ({posts.filter((p) => p.lang === l).length})
            </button>
          ))}
        </div>
        <input
          className="ap-input ap-search"
          placeholder="Search title, slug, tag…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="ap-post-list">
          {visiblePosts.map((p) => {
            const isSel = selection?.lang === p.lang && selection.slug === p.slug;
            return (
              <button
                key={`${p.lang}/${p.slug}`}
                className={`ap-post-item${isSel ? " on" : ""}`}
                onClick={() => setSelection({ lang: p.lang, slug: p.slug })}
              >
                <div className="ap-post-top">
                  <span className="ap-lang-pill">{p.lang}</span>
                  <span className="ap-post-title">{p.title || p.slug}</span>
                  {p.draft && <span className="ap-draft-pill">draft</span>}
                </div>
                <div className="ap-post-sub">{p.slug}</div>
              </button>
            );
          })}
          {visiblePosts.length === 0 && <div className="ap-empty">No posts match</div>}
        </div>
      </aside>

      {/* CENTER */}
      <main className="ap-main">
        {!selection || !post ? (
          <div className="ap-placeholder">
            <div>
              <h2>Select a post to start editing</h2>
              <p>Or create a new one with the + New button.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="ap-main-header">
              <div className="ap-tabs">
                <button
                  className={leftTab === "content" ? "on" : ""}
                  onClick={() => setLeftTab("content")}
                >
                  Content
                </button>
                <button
                  className={leftTab === "frontmatter" ? "on" : ""}
                  onClick={() => setLeftTab("frontmatter")}
                >
                  Frontmatter
                </button>
              </div>
              <div className="ap-main-actions">
                <SaveIndicator state={saveState} error={saveError} />
                <button className="ap-btn ap-btn-sm" onClick={onDuplicate}>
                  Duplicate →
                </button>
                <button className="ap-btn ap-btn-sm" onClick={onRename}>
                  Rename
                </button>
                <button className="ap-btn ap-btn-sm ap-btn-danger" onClick={onDelete}>
                  Delete
                </button>
              </div>
            </div>
            <div className="ap-editor-wrap">
              {/* Keep the editor always mounted so cursor/selection survive tab switches. */}
              <div
                className="ap-editor-pane"
                style={{ display: leftTab === "content" ? "flex" : "none" }}
              >
                <CodeMirror
                  ref={editorRef}
                  key={`${selection.lang}/${selection.slug}`}
                  value={post.content}
                  theme={oneDark}
                  extensions={[markdown(), EditorView.lineWrapping]}
                  basicSetup={{
                    lineNumbers: true,
                    foldGutter: true,
                    highlightActiveLine: true,
                    autocompletion: false,
                  }}
                  onChange={updateContent}
                  height="100%"
                  className="ap-cm"
                />
              </div>
              <div
                className="ap-frontmatter-scroll"
                style={{ display: leftTab === "frontmatter" ? "block" : "none" }}
              >
                <FrontmatterForm
                  value={post.frontmatter}
                  lang={selection.lang}
                  slug={selection.slug}
                  onChange={updateFrontmatter}
                />
              </div>
            </div>
          </>
        )}
      </main>

      {/* RIGHT */}
      <aside className="ap-right">
        <div className="ap-right-tabs">
          <button className={rightTab === "preview" ? "on" : ""} onClick={() => setRightTab("preview")}>
            Preview
          </button>
          <button
            className={rightTab === "components" ? "on" : ""}
            onClick={() => setRightTab("components")}
          >
            Components
          </button>
          <button className={rightTab === "images" ? "on" : ""} onClick={() => setRightTab("images")}>
            Images
          </button>
          {selection && (
            <a
              className="ap-right-open"
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open preview in new tab"
            >
              ↗
            </a>
          )}
        </div>
        <div className="ap-right-body">
          {rightTab === "preview" && (
            <>
              {selection ? (
                <iframe
                  ref={iframeRef}
                  key={`${selection.lang}/${selection.slug}`}
                  src={previewUrl}
                  className="ap-preview-frame"
                  title="Post preview"
                />
              ) : (
                <div className="ap-empty ap-pad">Select a post to preview.</div>
              )}
            </>
          )}
          {rightTab === "components" && (
            <ComponentPalette components={components} onInsert={insertSnippet} disabled={!post} />
          )}
          {rightTab === "images" && (
            <ImagePanel
              slug={selection?.slug ?? null}
              groups={imageGroups}
              onRefresh={refreshImages}
              onInsert={(url) =>
                insertSnippet(`<Figure src="${url}" alt="" caption="" />`, "Figure")
              }
            />
          )}
        </div>
      </aside>

      {showNew && <NewPostDialog onCancel={() => setShowNew(false)} onCreate={onCreate} />}
    </div>
  );
}

function SaveIndicator({ state, error }: { state: SaveState; error: string | null }) {
  const label =
    state === "idle"
      ? ""
      : state === "dirty"
      ? "● Unsaved"
      : state === "saving"
      ? "Saving…"
      : state === "saved"
      ? "✓ Saved"
      : `✕ ${error ?? "Error"}`;
  const cls =
    state === "error" ? "err" : state === "saved" ? "ok" : state === "saving" ? "info" : "dim";
  return <span className={`ap-save ap-save-${cls}`}>{label}</span>;
}

function ComponentPalette({
  components,
  onInsert,
  disabled,
}: {
  components: ComponentMeta[];
  onInsert: (snippet: string, componentName: string) => void;
  disabled: boolean;
}) {
  if (components.length === 0) {
    return (
      <div className="ap-pad ap-empty">
        No components registered. Add <code>@mdx-snippet</code> metadata comments to files in{" "}
        <code>src/components/blog/</code>.
      </div>
    );
  }
  return (
    <div className="ap-palette">
      <div className="ap-palette-intro">
        Click <b>Insert</b> to drop the snippet at the cursor (or append if the editor isn't focused
        yet). The matching <code>import</code> is added to the top of the file automatically if
        it's not already there.
      </div>
      {components.map((c) => (
        <div key={c.name} className="ap-palette-item">
          <div className="ap-palette-head">
            <div>
              <div className="ap-palette-label">{c.label}</div>
              {c.description && <div className="ap-palette-desc">{c.description}</div>}
            </div>
            <button
              className="ap-btn ap-btn-sm ap-btn-primary"
              disabled={disabled}
              onClick={() => onInsert(c.snippet, c.name)}
            >
              Insert
            </button>
          </div>
          <pre className="ap-palette-snippet">{c.snippet}</pre>
          <div className="ap-palette-import">
            <code>{`import ${c.name} from "../../../components/blog/${c.name}.astro";`}</code>
          </div>
        </div>
      ))}
    </div>
  );
}

function ImagePanel({
  slug,
  groups,
  onRefresh,
  onInsert,
}: {
  slug: string | null;
  groups: ImageGroup[];
  onRefresh: () => Promise<void>;
  onInsert: (url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0 || !slug) return;
    setUploading(true);
    setError(null);
    try {
      for (const file of Array.from(files)) {
        await api.uploadImage(slug, file);
      }
      await onRefresh();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  // Filter groups/images by search and inject an empty group for the current post if it has no folder yet
  const filteredGroups = useMemo<ImageGroup[]>(() => {
    const q = search.trim().toLowerCase();
    const base = q
      ? groups
          .map((g) => ({
            ...g,
            images: g.images.filter(
              (img) =>
                img.name.toLowerCase().includes(q) ||
                g.label.toLowerCase().includes(q),
            ),
          }))
          .filter((g) => g.images.length > 0)
      : groups;

    if (slug && !base.some((g) => g.slug === slug)) {
      return [
        {
          key: `images/blog/${slug}`,
          label: `blog / ${slug}`,
          kind: "blog" as const,
          slug,
          images: [],
        },
        ...base,
      ];
    }
    // Make sure the current post's group is first
    if (slug) {
      const idx = base.findIndex((g) => g.slug === slug);
      if (idx > 0) {
        const [g] = base.splice(idx, 1);
        base.unshift(g);
      }
    }
    return base;
  }, [groups, search, slug]);

  const isOpen = (key: string) => {
    if (key in openGroups) return openGroups[key];
    // By default, expand the current post's group and collapse others.
    return slug ? key === `images/blog/${slug}` : false;
  };

  const toggle = (key: string) => setOpenGroups((o) => ({ ...o, [key]: !isOpen(key) }));

  return (
    <div className="ap-images">
      {slug && (
        <div
          className="ap-dropzone"
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "copy";
          }}
          onDrop={(e) => {
            e.preventDefault();
            void handleFiles(e.dataTransfer.files);
          }}
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            multiple
            accept="image/*"
            hidden
            onChange={(e) => void handleFiles(e.target.files)}
          />
          <div>{uploading ? "Uploading…" : "Drop images here or click to upload"}</div>
          <div className="ap-hint">
            Saved to <code>public/images/blog/{slug}/</code>
          </div>
        </div>
      )}
      {error && <div className="ap-error">{error}</div>}
      <input
        type="search"
        className="ap-input ap-image-search"
        placeholder="Search all images…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="ap-image-groups">
        {filteredGroups.map((g) => {
          const open = isOpen(g.key);
          const isCurrent = g.slug === slug;
          return (
            <div key={g.key} className={`ap-image-group${isCurrent ? " ap-image-group-current" : ""}`}>
              <button className="ap-image-group-head" onClick={() => toggle(g.key)}>
                <span className="ap-image-group-chevron">{open ? "▾" : "▸"}</span>
                <span className="ap-image-group-kind">{g.kind === "blog" ? "blog" : "public"}</span>
                <span className="ap-image-group-label">{g.label.replace(/^blog \//, "")}</span>
                <span className="ap-image-group-count">{g.images.length}</span>
              </button>
              {open && (
                <div className="ap-image-grid">
                  {g.images.map((img) => (
                    <div key={img.url} className="ap-image-card">
                      <img src={img.url} alt={img.name} loading="lazy" />
                      <div className="ap-image-meta">
                        <span className="ap-image-name" title={img.name}>
                          {img.name}
                        </span>
                        <div className="ap-image-actions">
                          <button
                            className="ap-btn ap-btn-sm"
                            onClick={() => navigator.clipboard.writeText(img.url)}
                            title="Copy URL"
                          >
                            Copy
                          </button>
                          <button
                            className="ap-btn ap-btn-sm ap-btn-primary"
                            onClick={() => onInsert(img.url)}
                            disabled={!slug}
                            title={!slug ? "Select a post first" : "Insert <Figure> at cursor"}
                          >
                            Insert
                          </button>
                          {isCurrent && (
                            <button
                              className="ap-btn ap-btn-sm ap-btn-danger"
                              onClick={async () => {
                                if (!slug) return;
                                if (!confirm(`Delete ${img.name}?`)) return;
                                await api.deleteImage(slug, img.name);
                                await onRefresh();
                              }}
                            >
                              ×
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {g.images.length === 0 && (
                    <div className="ap-empty ap-pad">
                      {isCurrent ? "No images yet — drop some above." : "No images in this folder."}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
        {filteredGroups.length === 0 && <div className="ap-empty ap-pad">No matches.</div>}
      </div>
    </div>
  );
}
