import { useEffect, useRef, useState } from "react";
import { LANG_LABELS, LANGS, type Lang } from "./api";

export interface NewPostDialogProps {
  initialLang?: Lang;
  onCancel: () => void;
  onCreate: (values: {
    lang: Lang;
    slug: string;
    title: string;
    description: string;
    pubDate: string;
    draft: boolean;
    translationKey?: string;
    category?: string;
  }) => Promise<void>;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

const CATEGORIES = ["open-source", "article", "news", "tutorial"] as const;

export function NewPostDialog({ initialLang = "en", onCancel, onCreate }: NewPostDialogProps) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [translationKey, setTranslationKey] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("open-source");
  const [pubDate, setPubDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [draft, setDraft] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  const isScheduled = !draft && pubDate > new Date().toISOString().slice(0, 10);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const autoSlug = slug || slugify(title);
  // translationKey defaults to slug — convention shared across all 4 language
  // versions of the same post so the language switcher can find them.
  const finalTranslationKey = translationKey || autoSlug;

  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!title || !autoSlug) return;
    setBusy(true);
    setError(null);
    try {
      await onCreate({
        lang,
        slug: autoSlug,
        title,
        description,
        pubDate,
        draft,
        translationKey: finalTranslationKey,
        category,
      });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div
      className="ap-modal-backdrop"
      role="presentation"
      onClick={onCancel}
      onKeyDown={(e) => e.key === "Escape" && onCancel()}
    >
      <form className="ap-modal" onSubmit={submit}>
        <h2>New blog post</h2>
        <div className="ap-form-row">
          <label htmlFor="np-lang">Language</label>
          <select
            id="np-lang"
            className="ap-input"
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
          >
            {LANGS.map((l) => (
              <option key={l} value={l}>
                {LANG_LABELS[l]}
              </option>
            ))}
          </select>
        </div>
        <div className="ap-form-row">
          <label htmlFor="np-title">Title</label>
          <input
            id="np-title"
            ref={titleRef}
            className="ap-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="ap-form-row">
          <label htmlFor="np-slug">Slug</label>
          <input
            id="np-slug"
            className="ap-input"
            value={slug}
            placeholder={slugify(title) || "my-post"}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>
        <div className="ap-form-row">
          <label htmlFor="np-trkey">Translation key</label>
          <input
            id="np-trkey"
            className="ap-input"
            value={translationKey}
            placeholder={autoSlug || "shared-key-across-languages"}
            onChange={(e) => setTranslationKey(e.target.value)}
          />
        </div>
        <div className="ap-form-row">
          <label htmlFor="np-cat">Category</label>
          <select
            id="np-cat"
            className="ap-input"
            value={category}
            onChange={(e) => setCategory(e.target.value as (typeof CATEGORIES)[number])}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="ap-form-row">
          <label htmlFor="np-desc">Description</label>
          <textarea
            id="np-desc"
            className="ap-input"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="ap-form-row">
          <label htmlFor="np-pubdate">Publish date</label>
          <input
            id="np-pubdate"
            type="date"
            className="ap-input"
            value={pubDate}
            onChange={(e) => setPubDate(e.target.value)}
          />
        </div>
        <div className="ap-form-row">
          <label>Status</label>
          <div style={{ display: "flex", gap: "1rem" }}>
            <label
              style={{ display: "flex", alignItems: "center", gap: "0.4rem", cursor: "pointer" }}
            >
              <input
                type="radio"
                name="np-status"
                checked={draft}
                onChange={() => setDraft(true)}
              />
              Draft
            </label>
            <label
              style={{ display: "flex", alignItems: "center", gap: "0.4rem", cursor: "pointer" }}
            >
              <input
                type="radio"
                name="np-status"
                checked={!draft}
                onChange={() => setDraft(false)}
              />
              {isScheduled ? "⏰ Scheduled" : "Published"}
            </label>
          </div>
          {isScheduled && (
            <p style={{ margin: "0.35rem 0 0", fontSize: "0.78rem", color: "#f59e0b" }}>
              Goes live on {pubDate} — needs a deploy after that date.
            </p>
          )}
        </div>
        {error && <div className="ap-error">{error}</div>}
        <div className="ap-modal-actions">
          <button type="button" className="ap-btn" onClick={onCancel} disabled={busy}>
            Cancel
          </button>
          <button type="submit" className="ap-btn ap-btn-primary" disabled={busy || !title}>
            {busy ? "Creating…" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}
