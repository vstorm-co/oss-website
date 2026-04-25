import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CodeMirror, { EditorView, type ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";
import {
  api,
  LANG_LABELS,
  LANGS,
  type ComponentMeta,
  type ImageGroup,
  type Lang,
  type PostContent,
  type PostSummary,
} from "./api";
import { FrontmatterForm } from "./FrontmatterForm";
import { NewPostDialog } from "./NewPostDialog";
import "./admin.css";

type SaveState = "idle" | "dirty" | "saving" | "saved" | "error";
const AUTOSAVE_MS = 900;

interface Selection {
  lang: Lang;
  slug: string;
}

interface ConfirmState {
  message: string;
  onConfirm: () => void;
}

function ConfirmDialog({
  message,
  onConfirm,
  onCancel,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="ap-modal-backdrop" onClick={onCancel}>
      <div className="ap-modal ap-confirm" onClick={(e) => e.stopPropagation()}>
        <p className="ap-confirm-msg">{message}</p>
        <div className="ap-modal-actions">
          <button className="ap-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="ap-btn ap-btn-danger" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminApp() {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [components, setComponents] = useState<ComponentMeta[]>([]);
  const [imageGroups, setImageGroups] = useState<ImageGroup[]>([]);
  const [selection, setSelection] = useState<Selection | null>(() => {
    try {
      const s = sessionStorage.getItem("ap-sel");
      return s ? (JSON.parse(s) as Selection) : null;
    } catch {
      return null;
    }
  });
  const [post, setPost] = useState<PostContent | null>(null);
  const [search, setSearch] = useState("");
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [saveError, setSaveError] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [confirmState, setConfirmState] = useState<ConfirmState | null>(null);
  const [rightTab, setRightTab] = useState<"preview" | "components" | "images">("preview");
  const [leftTab, setLeftTab] = useState<"content" | "frontmatter">("content");
  const previewFrameRef = useRef<HTMLIFrameElement>(null);
  const editorPaneRef = useRef<HTMLDivElement>(null);

  const [rightWidth, setRightWidth] = useState(() => {
    try {
      return parseInt(localStorage.getItem("ap-right-width") ?? "460", 10) || 460;
    } catch {
      return 460;
    }
  });
  const rootRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startW: number } | null>(null);

  const startDrag = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      dragRef.current = { startX: e.clientX, startW: rightWidth };
      const onMove = (ev: MouseEvent) => {
        if (!dragRef.current) return;
        const delta = dragRef.current.startX - ev.clientX;
        const newW = Math.max(280, Math.min(900, dragRef.current.startW + delta));
        setRightWidth(newW);
        try {
          localStorage.setItem("ap-right-width", String(newW));
        } catch {
          /* */
        }
      };
      const onUp = () => {
        dragRef.current = null;
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    },
    [rightWidth],
  );

  const editorRef = useRef<ReactCodeMirrorRef>(null);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const liveContent = useRef<string>("");
  const liveFrontmatter = useRef<Record<string, unknown>>({});
  const dirtyRef = useRef(false);
  const lastSavedContent = useRef<string>("");
  const lastSavedFrontmatter = useRef<string>("");

  useEffect(() => {
    try {
      if (selection) sessionStorage.setItem("ap-sel", JSON.stringify(selection));
      else sessionStorage.removeItem("ap-sel");
    } catch {
      /* ignore */
    }
  }, [selection]);

  const refreshImages = useCallback(async () => {
    setImageGroups(await api.listAllImageGroups());
  }, []);

  useEffect(() => {
    Promise.all([api.listPosts(), api.listComponents(), api.listAllImageGroups()]).then(
      ([p, c, g]) => {
        setPosts(p);
        setComponents(c);
        setImageGroups(g);
      },
    );
  }, []);

  useEffect(() => {
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
        const nextFmStr = JSON.stringify(liveFrontmatter.current);
        if (
          nextContent === lastSavedContent.current &&
          nextFmStr === lastSavedFrontmatter.current
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
          lastSavedFrontmatter.current = nextFmStr;
          setSaveState("saved");
          try {
            previewFrameRef.current?.contentWindow?.location.reload();
          } catch (_) {}
          api.listPosts().then(setPosts);
        } catch (e) {
          setSaveState("error");
          setSaveError((e as Error).message);
          dirtyRef.current = true;
        }
      };
      if (immediate) await doSave();
      else {
        setSaveState("dirty");
        saveTimerRef.current = setTimeout(doSave, AUTOSAVE_MS);
      }
    },
    [selection],
  );

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

  const currentImages = useMemo(() => {
    if (!selection) return [];
    return imageGroups.find((g) => g.slug === selection.slug)?.images ?? [];
  }, [imageGroups, selection]);

  const [langFilter, setLangFilter] = useState<Lang | "all">(() => {
    try {
      const v = localStorage.getItem("ap-lang-filter");
      return v && (v === "all" || (LANGS as readonly string[]).includes(v))
        ? (v as Lang | "all")
        : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("ap-lang-filter", langFilter);
    } catch {
      /* ignore */
    }
  }, [langFilter]);

  const visiblePosts = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = langFilter === "all" ? posts : posts.filter((p) => p.lang === langFilter);
    if (q) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.slug.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }
    return list;
  }, [posts, search, langFilter]);

  const langCounts = useMemo(() => {
    const counts: Record<Lang | "all", number> = { all: posts.length, en: 0, pl: 0, de: 0, es: 0 };
    for (const p of posts) counts[p.lang]++;
    return counts;
  }, [posts]);

  const updateContent = (next: string) => {
    liveContent.current = next;
    dirtyRef.current = true;
    setPost((p) => (p ? { ...p, content: next } : p));
    void triggerSave(false);
  };

  const updateFrontmatter = (next: Record<string, unknown>) => {
    liveFrontmatter.current = next;
    dirtyRef.current = true;
    setPost((p) => (p ? { ...p, frontmatter: next } : p));
    void triggerSave(false);
  };

  const flashEditor = () => {
    const pane = editorPaneRef.current;
    if (!pane) return;
    pane.classList.remove("ap-editor-flash");
    void pane.offsetWidth;
    pane.classList.add("ap-editor-flash");
  };

  const insertSnippet = (snippet: string, componentName?: string) => {
    const view = editorRef.current?.view;
    if (!view || !post) return;

    if (componentName) {
      const importPath = `@/components/blog/${componentName}.astro`;
      const importStmt = `import ${componentName} from "${importPath}";`;
      const docText = view.state.doc.toString();
      const hasImport =
        docText.includes(`from "${importPath}"`) || docText.includes(`from '${importPath}'`);
      if (!hasImport) {
        const lines = docText.split("\n");
        let insertLine = 0;
        let sawImport = false;
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i]!;
          if (/^import\s[^\n]*;?\s*$/.test(line)) {
            insertLine = i + 1;
            sawImport = true;
          } else if (line.trim() === "" && sawImport) {
            continue;
          } else {
            break;
          }
        }
        const offset = lines.slice(0, insertLine).join("\n").length + (insertLine > 0 ? 1 : 0);
        const insertText = sawImport ? `${importStmt}\n` : `${importStmt}\n\n`;
        view.dispatch({ changes: { from: offset, to: offset, insert: insertText } });
      }
    }

    const doc = view.state.doc;
    const sel = view.state.selection.main;
    const atDefault = sel.from === 0 && sel.to === 0 && !view.hasFocus;
    const target = atDefault && doc.length > 0 ? doc.length : sel.from;
    const targetTo = atDefault && doc.length > 0 ? doc.length : sel.to;
    const beforeCtx = doc.sliceString(Math.max(0, target - 2), target);
    let prefix = "";
    if (target > 0 && beforeCtx !== "\n\n") prefix = beforeCtx.endsWith("\n") ? "\n" : "\n\n";
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

    // Switch to content tab and flash the editor
    setLeftTab("content");
    setTimeout(flashEditor, 20);
  };

  const onCreate = async (values: {
    lang: Lang;
    slug: string;
    title: string;
    description: string;
    translationKey?: string;
    category?: string;
  }) => {
    const today = new Date().toISOString().slice(0, 10);
    const frontmatter: Record<string, unknown> = {
      title: values.title,
      description: values.description,
      pubDate: today,
      author: "Kacper Włodarczyk",
      lang: values.lang,
      translationKey: values.translationKey || values.slug,
      tags: [],
      category: values.category || "open-source",
      draft: true,
    };
    await api.createPost({
      lang: values.lang,
      slug: values.slug,
      frontmatter,
      content: "\nStart writing…\n",
    });
    const fresh = await api.listPosts();
    setPosts(fresh);
    setSelection({ lang: values.lang, slug: values.slug });
    setLeftTab("content");
    setRightTab("preview");
    setShowNew(false);
  };

  const onDelete = () => {
    if (!selection) return;
    setConfirmState({
      message: `Delete "${selection.slug}"? This cannot be undone.`,
      onConfirm: async () => {
        setConfirmState(null);
        await api.deletePost(selection.lang, selection.slug);
        setPosts(await api.listPosts());
        setSelection(null);
        setPost(null);
      },
    });
  };

  const onSlugChange = async (newSlug: string) => {
    if (!selection || newSlug === selection.slug) return;
    await api.renamePost(selection.lang, selection.slug, newSlug);
    setPosts(await api.listPosts());
    setSelection({ lang: selection.lang, slug: newSlug });
  };

  const onSetCover = useCallback(
    (url: string) => {
      if (!post) return;
      const fm = { ...liveFrontmatter.current };
      if (url) {
        fm.cover = url;
        delete fm.heroImage;
      } else {
        delete fm.cover;
        delete fm.heroImage;
      }
      const next = fm;
      liveFrontmatter.current = next;
      dirtyRef.current = true;
      setPost((p) => (p ? { ...p, frontmatter: next } : p));
      void triggerSave(false);
    },
    [post, triggerSave],
  );

  const currentCover = String(post?.frontmatter?.cover ?? post?.frontmatter?.heroImage ?? "");

  const previewUrl = (() => {
    if (!selection) return "";
    // Preview pre-renders English posts only (admin/preview/[slug].astro).
    // For pl/de/es show the live URL on the dev server instead.
    if (selection.lang === "en") return `/admin/preview/${selection.slug}/`;
    return `/${selection.lang}/blog/${selection.slug}/`;
  })();

  return (
    <div
      className="ap-root"
      ref={rootRef}
      style={{ gridTemplateColumns: `320px 1fr 4px ${rightWidth}px` }}
    >
      <aside className="ap-sidebar">
        <div className="ap-sidebar-header">
          <div className="ap-brand">
            <span className="ap-dot" />
            <span>Admin</span>
          </div>
          <button className="ap-btn ap-btn-primary ap-btn-sm" onClick={() => setShowNew(true)}>
            + New
          </button>
        </div>
        <div className="ap-lang-tabs">
          {(["all", ...LANGS] as const).map((lang) => (
            <button
              key={lang}
              className={`ap-lang-tab${langFilter === lang ? "on" : ""}`}
              onClick={() => setLangFilter(lang)}
              title={lang === "all" ? "All languages" : LANG_LABELS[lang]}
            >
              {lang === "all" ? "All" : lang.toUpperCase()}
              <span className="ap-lang-count">{langCounts[lang]}</span>
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
            const dateLabel = p.pubDate
              ? new Date(p.pubDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : null;
            return (
              <button
                key={`${p.lang}/${p.slug}`}
                className={`ap-post-item${isSel ? "on" : ""}`}
                onClick={() => setSelection({ lang: p.lang, slug: p.slug })}
              >
                <div className="ap-post-top">
                  <span className="ap-lang-pill" title={LANG_LABELS[p.lang]}>
                    {p.lang}
                  </span>
                  <span className="ap-post-title">{p.title || p.slug}</span>
                  {p.featured && (
                    <span className="ap-featured-pill" title="Featured">
                      ★
                    </span>
                  )}
                  {p.draft && <span className="ap-draft-pill">draft</span>}
                </div>
                {dateLabel && <div className="ap-post-date">{dateLabel}</div>}
                {p.tags.length > 0 && (
                  <div className="ap-post-tags">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="ap-post-tag">
                        {t}
                      </span>
                    ))}
                    {p.tags.length > 3 && (
                      <span className="ap-post-tag-more">+{p.tags.length - 3}</span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
          {visiblePosts.length === 0 && <div className="ap-empty">No entries match.</div>}
        </div>
      </aside>

      <main className="ap-main">
        {!selection || !post ? (
          <div className="ap-placeholder">
            <div>
              <h2>Select an entry to start editing</h2>
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
                <button className="ap-btn ap-btn-sm ap-btn-danger" onClick={onDelete}>
                  Delete
                </button>
              </div>
            </div>
            <div className="ap-editor-wrap">
              <div
                ref={editorPaneRef}
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
                  slug={selection.slug}
                  content={post.content}
                  images={currentImages}
                  onChange={updateFrontmatter}
                  onSlugChange={onSlugChange}
                />
              </div>
            </div>
          </>
        )}
      </main>

      <div className="ap-resize-handle" onMouseDown={startDrag} title="Drag to resize" />
      <aside className="ap-right">
        <div className="ap-right-tabs">
          <button
            className={rightTab === "preview" ? "on" : ""}
            onClick={() => setRightTab("preview")}
          >
            Preview
          </button>
          <button
            className={rightTab === "components" ? "on" : ""}
            onClick={() => {
              setRightTab("components");
              api.listComponents().then(setComponents);
            }}
          >
            Components
          </button>
          <button
            className={rightTab === "images" ? "on" : ""}
            onClick={() => setRightTab("images")}
          >
            Images
          </button>
          {selection && (
            <a
              className="ap-right-open"
              href={previewUrl}
              target="_blank"
              rel="noopener"
              title="Open preview"
            >
              ↗
            </a>
          )}
        </div>
        <div className="ap-right-body">
          {rightTab === "preview" &&
            (selection ? (
              <iframe
                ref={previewFrameRef}
                key={`${selection.lang}/${selection.slug}`}
                src={previewUrl}
                className="ap-preview-frame"
                title="Preview"
              />
            ) : (
              <div className="ap-empty ap-pad">Select an entry to preview.</div>
            ))}
          {rightTab === "components" && (
            <ComponentPalette components={components} onInsert={insertSnippet} disabled={!post} />
          )}
          {rightTab === "images" && (
            <ImagePanel
              slug={selection?.slug ?? null}
              groups={imageGroups}
              onRefresh={refreshImages}
              currentCover={currentCover}
              onInsert={(url) => {
                insertSnippet(`<Figure src="${url}" alt="" caption="" />`, "Figure");
              }}
              onSetCover={post ? onSetCover : undefined}
            />
          )}
        </div>
      </aside>

      {showNew && (
        <NewPostDialog
          initialLang={langFilter === "all" ? "en" : langFilter}
          onCancel={() => setShowNew(false)}
          onCreate={onCreate}
        />
      )}
      {confirmState && (
        <ConfirmDialog
          message={confirmState.message}
          onConfirm={confirmState.onConfirm}
          onCancel={() => setConfirmState(null)}
        />
      )}
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
  onInsert: (snippet: string, name: string) => void;
  disabled: boolean;
}) {
  const [showingCode, setShowingCode] = useState<Record<string, boolean>>({});
  const toggleCode = (name: string) => setShowingCode((p) => ({ ...p, [name]: !p[name] }));

  if (components.length === 0) {
    return (
      <div className="ap-pad ap-empty">
        No components registered. Add <code>@mdx-snippet</code> metadata to{" "}
        <code>src/components/blog/</code>.
      </div>
    );
  }
  return (
    <div className="ap-palette">
      <div className="ap-palette-grid">
        {components.map((c) => {
          const isCode = showingCode[c.name] || !c.preview;
          return (
            <div key={c.name} className="ap-card">
              <div className="ap-card-body">
                {isCode ? (
                  <pre className="ap-card-code">{c.snippet}</pre>
                ) : (
                  <div
                    className="ap-card-preview"
                    dangerouslySetInnerHTML={{ __html: c.preview }}
                  />
                )}
              </div>
              <div className="ap-card-foot">
                <div className="ap-card-info">
                  <span className="ap-card-label">{c.label}</span>
                </div>
                <div className="ap-card-actions">
                  {c.preview && (
                    <button
                      className="ap-btn ap-btn-sm ap-btn-ghost"
                      onClick={() => toggleCode(c.name)}
                      title={isCode ? "Show preview" : "Show code"}
                    >
                      {isCode ? "↩" : "</>"}
                    </button>
                  )}
                  <button
                    className="ap-btn ap-btn-sm ap-btn-primary"
                    disabled={disabled}
                    onClick={() => onInsert(c.snippet, c.name)}
                  >
                    Insert
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ImagePanel({
  slug,
  groups,
  onRefresh,
  onInsert,
  onSetCover,
  currentCover,
}: {
  slug: string | null;
  groups: ImageGroup[];
  onRefresh: () => Promise<void>;
  onInsert: (url: string) => void;
  onSetCover?: (url: string) => void;
  currentCover?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [confirmState, setConfirmState] = useState<{
    message: string;
    onConfirm: () => void;
  } | null>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0 || !slug) return;
    setUploading(true);
    setError(null);
    try {
      for (const file of Array.from(files)) await api.uploadImage(slug, file);
      await onRefresh();
      if (slug) setOpenGroups((prev) => ({ ...prev, [`images/blog/${slug}`]: true }));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl((c) => (c === url ? null : c)), 1500);
    });
  };

  const filteredGroups = useMemo<ImageGroup[]>(() => {
    const q = search.trim().toLowerCase();
    const base = q
      ? groups
          .map((g) => ({
            ...g,
            images: g.images.filter(
              (img) => img.name.toLowerCase().includes(q) || g.label.toLowerCase().includes(q),
            ),
          }))
          .filter((g) => g.images.length > 0)
      : [...groups];
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
    if (slug) {
      const idx = base.findIndex((g) => g.slug === slug);
      if (idx > 0) {
        const [g] = base.splice(idx, 1);
        if (g) base.unshift(g);
      }
    }
    return base;
  }, [groups, search, slug]);

  const isOpen = (key: string) => {
    if (key in openGroups) return openGroups[key]!;
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
            <div
              key={g.key}
              className={`ap-image-group${isCurrent ? "ap-image-group-current" : ""}`}
            >
              <button className="ap-image-group-head" onClick={() => toggle(g.key)}>
                <span className="ap-image-group-chevron">{open ? "▾" : "▸"}</span>
                <span className="ap-image-group-kind">{g.kind}</span>
                <span className="ap-image-group-label">{g.label.replace(/^blog \//, "")}</span>
                <span className="ap-image-group-count">{g.images.length}</span>
              </button>
              {open && (
                <div className="ap-image-grid">
                  {g.images.map((img) => {
                    const isCover = currentCover === img.url;
                    return (
                      <div
                        key={img.url}
                        className={`ap-image-card${isCover ? "ap-image-card-cover" : ""}`}
                      >
                        <div className="ap-image-thumb-wrap">
                          <img src={img.url} alt={img.name} loading="eager" />
                          {isCover && <span className="ap-cover-badge">Cover</span>}
                        </div>
                        <div className="ap-image-meta">
                          <span className="ap-image-name" title={img.name}>
                            {img.name}
                          </span>
                          <div className="ap-image-actions">
                            <button
                              className={`ap-btn ap-btn-sm${copiedUrl === img.url ? "ap-btn-copied" : ""}`}
                              onClick={() => copyUrl(img.url)}
                              title="Copy URL"
                            >
                              {copiedUrl === img.url ? "✓ Copied" : "Copy"}
                            </button>
                            {onSetCover && (
                              <button
                                className={`ap-btn ap-btn-sm${isCover ? "ap-btn-cover-active" : ""}`}
                                onClick={() => onSetCover(isCover ? "" : img.url)}
                                title={isCover ? "Remove cover" : "Set as cover image"}
                              >
                                {isCover ? "★ Cover" : "☆ Cover"}
                              </button>
                            )}
                            <button
                              className="ap-btn ap-btn-sm ap-btn-primary"
                              onClick={() => onInsert(img.url)}
                              disabled={!slug}
                            >
                              Insert
                            </button>
                            {isCurrent && (
                              <button
                                className="ap-btn ap-btn-sm ap-btn-danger"
                                onClick={() => {
                                  if (!slug) return;
                                  setConfirmState({
                                    message: `Delete ${img.name}?`,
                                    onConfirm: async () => {
                                      setConfirmState(null);
                                      await api.deleteImage(slug, img.name);
                                      await onRefresh();
                                    },
                                  });
                                }}
                              >
                                ×
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {g.images.length === 0 && (
                    <div className="ap-empty ap-pad">
                      {isCurrent ? "No images yet — drop some above." : "No images."}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
        {filteredGroups.length === 0 && <div className="ap-empty ap-pad">No matches.</div>}
      </div>
      {confirmState && (
        <ConfirmDialog
          message={confirmState.message}
          onConfirm={confirmState.onConfirm}
          onCancel={() => setConfirmState(null)}
        />
      )}
    </div>
  );
}
