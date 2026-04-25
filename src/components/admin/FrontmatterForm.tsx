import { useMemo } from "react";
import type { Lang } from "./api";

export interface FrontmatterFormProps {
  value: Record<string, unknown>;
  lang: Lang;
  slug: string;
  onChange: (next: Record<string, unknown>) => void;
}

const CATEGORIES = ["open-source", "article", "news", "tutorial"];

export function FrontmatterForm({ value, lang, slug, onChange }: FrontmatterFormProps) {
  const tagsStr = useMemo(
    () => (Array.isArray(value.tags) ? (value.tags as string[]).join(", ") : ""),
    [value.tags],
  );

  const set = (k: string, v: unknown) => onChange({ ...value, [k]: v });
  const dateStr = (v: unknown) => {
    if (!v) return "";
    if (typeof v === "string") return v.slice(0, 10);
    if (v instanceof Date) return v.toISOString().slice(0, 10);
    return "";
  };

  return (
    <div className="ap-form">
      <div className="ap-form-row">
        <label>Language</label>
        <div className="ap-form-readonly">{lang}</div>
      </div>
      <div className="ap-form-row">
        <label>Slug</label>
        <div className="ap-form-readonly">{slug}</div>
      </div>
      <div className="ap-form-row">
        <label>Title</label>
        <input
          className="ap-input"
          value={String(value.title ?? "")}
          onChange={(e) => set("title", e.target.value)}
        />
      </div>
      <div className="ap-form-row">
        <label>SEO title</label>
        <input
          className="ap-input"
          value={String(value.seoTitle ?? "")}
          placeholder="Optional — overrides title in &lt;title&gt;"
          onChange={(e) => set("seoTitle", e.target.value || undefined)}
        />
      </div>
      <div className="ap-form-row">
        <label>Description</label>
        <textarea
          className="ap-input"
          rows={3}
          value={String(value.description ?? "")}
          onChange={(e) => set("description", e.target.value)}
        />
      </div>
      <div className="ap-form-grid">
        <div className="ap-form-row">
          <label>Publish date</label>
          <input
            type="date"
            className="ap-input"
            value={dateStr(value.pubDate)}
            onChange={(e) => set("pubDate", e.target.value)}
          />
        </div>
        <div className="ap-form-row">
          <label>Updated date</label>
          <input
            type="date"
            className="ap-input"
            value={dateStr(value.updatedDate)}
            onChange={(e) => set("updatedDate", e.target.value || undefined)}
          />
        </div>
      </div>
      <div className="ap-form-grid">
        <div className="ap-form-row">
          <label>Author</label>
          <input
            className="ap-input"
            value={String(value.author ?? "")}
            onChange={(e) => set("author", e.target.value)}
          />
        </div>
        <div className="ap-form-row">
          <label>Category</label>
          <select
            className="ap-input"
            value={String(value.category ?? "open-source")}
            onChange={(e) => set("category", e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="ap-form-row">
        <label>Tags (comma separated)</label>
        <input
          className="ap-input"
          value={tagsStr}
          onChange={(e) =>
            set(
              "tags",
              e.target.value
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean),
            )
          }
        />
      </div>
      <div className="ap-form-row">
        <label>Translation key</label>
        <input
          className="ap-input"
          value={String(value.translationKey ?? "")}
          onChange={(e) => set("translationKey", e.target.value)}
        />
      </div>
      <div className="ap-form-row">
        <label className="ap-checkbox">
          <input
            type="checkbox"
            checked={Boolean(value.draft)}
            onChange={(e) => set("draft", e.target.checked)}
          />
          <span>Draft (hidden from blog index & build)</span>
        </label>
      </div>
    </div>
  );
}
