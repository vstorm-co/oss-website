import { useState } from "react";
import type { Lang } from "./api";

export interface NewPostDialogProps {
  onCancel: () => void;
  onCreate: (values: {
    lang: Lang;
    slug: string;
    title: string;
    description: string;
    translationKey: string;
  }) => Promise<void>;
}

const LANGS: Lang[] = ["en", "pl", "de", "es"];

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

export function NewPostDialog({ onCancel, onCreate }: NewPostDialogProps) {
  const [lang, setLang] = useState<Lang>("en");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [translationKey, setTranslationKey] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const autoSlug = slug || slugify(title);
  const autoKey = translationKey || autoSlug;

  const submit = async (e: React.FormEvent) => {
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
        translationKey: autoKey,
      });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="ap-modal-backdrop" onClick={onCancel}>
      <form className="ap-modal" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <h2>New post</h2>
        <div className="ap-form-row">
          <label>Language</label>
          <select className="ap-input" value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
            {LANGS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div className="ap-form-row">
          <label>Title</label>
          <input
            className="ap-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </div>
        <div className="ap-form-row">
          <label>Slug</label>
          <input
            className="ap-input"
            value={slug}
            placeholder={slugify(title) || "my-post"}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>
        <div className="ap-form-row">
          <label>Description</label>
          <textarea
            className="ap-input"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="ap-form-row">
          <label>Translation key</label>
          <input
            className="ap-input"
            value={translationKey}
            placeholder={autoSlug}
            onChange={(e) => setTranslationKey(e.target.value)}
          />
          <small className="ap-hint">Shared across language versions of the same post.</small>
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
