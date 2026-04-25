import { useState, useEffect, useRef, useCallback } from "react";

export interface FrontmatterFormProps {
  value: Record<string, unknown>;
  slug: string;
  content?: string;
  images?: { name: string; url: string }[];
  onChange: (next: Record<string, unknown>) => void;
  onSlugChange?: (newSlug: string) => Promise<void>;
}

type Status = "empty" | "short" | "ok" | "warn" | "over";

function statusColor(s: Status) {
  if (s === "ok") return "#34d399";
  if (s === "warn") return "#fbbf24";
  if (s === "over") return "#fb7185";
  return "#52525b";
}

function statusLabel(s: Status, rng: [number, number]) {
  if (s === "empty") return "Required";
  if (s === "short") return `Aim for ${rng[0]}+`;
  if (s === "ok") return "Good";
  if (s === "warn") return "Getting long";
  return "Too long";
}

function titleStatus(len: number): Status {
  if (len === 0) return "empty";
  if (len < 20) return "short";
  if (len <= 60) return "ok";
  if (len <= 70) return "warn";
  return "over";
}

function descStatus(len: number): Status {
  if (len === 0) return "empty";
  if (len < 70) return "short";
  if (len <= 160) return "ok";
  if (len <= 280) return "warn";
  return "over";
}

function tagStatus(count: number): Status {
  if (count === 0) return "empty";
  if (count < 3) return "short";
  if (count <= 8) return "ok";
  return "over";
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

function Meter({ value, cap, status }: { value: number; cap: number; status: Status }) {
  const pct = Math.min(100, (value / cap) * 100);
  const color = statusColor(status);
  return (
    <div className="ap-meter">
      <div className="ap-meter-bar">
        <div className="ap-meter-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="ap-meter-count" style={{ color }}>
        {value}
        <span className="ap-meter-cap">/{cap}</span>
      </span>
    </div>
  );
}

const LockOpenIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>
);

const LockClosedIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="ap-fm-section-title">{children}</div>;
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: React.ReactNode;
}) {
  return (
    <div className="ap-form-row">
      <label>{label}</label>
      {children}
      {hint && <div className="ap-field-hint">{hint}</div>}
    </div>
  );
}

function SeoPreview({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) {
  const displayTitle = title || "Untitled post";
  const displayDesc = description || "No description yet.";
  const cappedTitle = displayTitle.length > 70 ? displayTitle.slice(0, 67) + "…" : displayTitle;
  const cappedDesc = displayDesc.length > 160 ? displayDesc.slice(0, 157) + "…" : displayDesc;

  return (
    <div className="ap-seo-preview">
      <div className="ap-seo-preview-label">Search preview</div>
      <div className="ap-seo-breadcrumb">yoursite.com › blog › {slug}</div>
      <div className="ap-seo-title">{cappedTitle}</div>
      <div className="ap-seo-desc">{cappedDesc}</div>
    </div>
  );
}

function TagBadgeInput({ tags, onChange }: { tags: string[]; onChange: (next: string[]) => void }) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTag = (raw: string) => {
    const trimmed = raw.trim().replace(/,+$/, "").trim();
    if (!trimmed || tags.includes(trimmed)) {
      setInput("");
      return;
    }
    onChange([...tags, trimmed]);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(input);
    } else if (e.key === "Backspace" && input === "" && tags.length > 0) {
      onChange(tags.slice(0, -1));
    }
  };

  const onBlur = () => {
    if (input.trim()) addTag(input);
  };

  return (
    <div className="ap-tag-input" onClick={() => inputRef.current?.focus()}>
      {tags.map((tag) => (
        <span key={tag} className="ap-tag-badge">
          {tag}
          <button
            type="button"
            className="ap-tag-remove"
            onClick={(e) => {
              e.stopPropagation();
              onChange(tags.filter((t) => t !== tag));
            }}
            aria-label={`Remove ${tag}`}
          >
            ×
          </button>
        </span>
      ))}
      <input
        ref={inputRef}
        className="ap-tag-text-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        placeholder={tags.length === 0 ? "Add tags…" : ""}
      />
    </div>
  );
}

export function FrontmatterForm({
  value,
  slug,
  content = "",
  images = [],
  onChange,
  onSlugChange,
}: FrontmatterFormProps) {
  const set = (k: string, v: unknown) => onChange({ ...value, [k]: v });

  const dateStr = (v: unknown) => {
    if (!v) return "";
    if (typeof v === "string") return v.slice(0, 10);
    if (v instanceof Date) return v.toISOString().slice(0, 10);
    return "";
  };

  const title = String(value.title ?? "");
  const description = String(value.description ?? "");
  // oss-website schema uses `cover` (image asset) + `coverAlt`. Older posts
  // may also have `heroImage` (string URL) — read either, write `cover`.
  const cover = String(value.cover ?? value.heroImage ?? "");
  const coverAlt = String(value.coverAlt ?? "");
  const tags = Array.isArray(value.tags) ? (value.tags as string[]) : [];
  const lang = String(value.lang ?? "en");
  const translationKey = String(value.translationKey ?? "");
  const category = String(value.category ?? "open-source");

  const tStatus = titleStatus(title.length);
  const dStatus = descStatus(description.length);
  const tagSt = tagStatus(tags.length);
  const tagColor = statusColor(tagSt);

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const readingMin = Math.max(1, Math.ceil(wordCount / 200));

  // Slug editing state
  const [pendingSlug, setPendingSlug] = useState(slug);
  const [slugLocked, setSlugLocked] = useState(false);
  const [slugError, setSlugError] = useState<string | null>(null);
  const [slugSaving, setSlugSaving] = useState(false);
  const prevTitleRef = useRef(title);

  // Sync pendingSlug when slug prop changes (e.g. after rename)
  useEffect(() => {
    setPendingSlug(slug);
  }, [slug]);

  // Auto-derive slug from title when unlocked
  useEffect(() => {
    if (slugLocked) return;
    if (title === prevTitleRef.current) return;
    prevTitleRef.current = title;
    if (title) setPendingSlug(slugify(title));
  }, [title, slugLocked]);

  const commitSlug = useCallback(async () => {
    const trimmed = pendingSlug.trim();
    if (!trimmed || trimmed === slug) return;
    if (!/^[a-z0-9][a-z0-9-]*$/.test(trimmed)) {
      setSlugError("Lowercase letters, numbers and hyphens only");
      return;
    }
    setSlugError(null);
    if (!onSlugChange) return;
    setSlugSaving(true);
    try {
      await onSlugChange(trimmed);
    } catch (e) {
      setSlugError((e as Error).message);
    } finally {
      setSlugSaving(false);
    }
  }, [pendingSlug, slug, onSlugChange]);

  return (
    <div className="ap-form">
      {/* Slug bar */}
      <div className="ap-fm-section ap-fm-slug-section">
        <div className="ap-slug-wrap">
          <input
            className={`ap-input ap-slug-input${slugError ? "ap-input-status-over" : ""}`}
            value={pendingSlug}
            onChange={(e) => {
              setSlugLocked(true);
              setPendingSlug(e.target.value);
              setSlugError(null);
            }}
            onBlur={commitSlug}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                void commitSlug();
              }
            }}
            disabled={slugSaving}
          />
          <button
            type="button"
            className={`ap-slug-lock${slugLocked ? "locked" : ""}`}
            title={
              slugLocked ? "Unlock — slug auto-follows title" : "Lock — edit slug independently"
            }
            onClick={() => {
              if (slugLocked) {
                setSlugLocked(false);
                setPendingSlug(slug);
              } else {
                setSlugLocked(true);
              }
            }}
          >
            {slugLocked ? <LockClosedIcon /> : <LockOpenIcon />}
          </button>
        </div>
        {slugError && <div className="ap-slug-error">{slugError}</div>}
        <div className="ap-slug-meta">
          <span>{slugLocked ? "Slug locked" : "Auto-follows title"}</span>
          {wordCount > 0 && (
            <>
              <span className="ap-meta-sep">·</span>
              <span>{wordCount} words</span>
              <span className="ap-meta-sep">·</span>
              <span>{readingMin} min read</span>
            </>
          )}
        </div>
      </div>

      {/* SEO */}
      <div className="ap-fm-section">
        <SectionTitle>SEO</SectionTitle>
        <Field label="Title" hint={<Meter value={title.length} cap={70} status={tStatus} />}>
          <input
            className={`ap-input ap-input-status-${tStatus}`}
            value={title}
            placeholder="Post title…"
            onChange={(e) => set("title", e.target.value)}
          />
        </Field>
        <Field
          label="Description"
          hint={<Meter value={description.length} cap={160} status={dStatus} />}
        >
          <textarea
            className={`ap-input ap-input-status-${dStatus}`}
            rows={3}
            placeholder="Brief summary shown in search results and social previews…"
            value={description}
            onChange={(e) => set("description", e.target.value)}
          />
        </Field>
        <SeoPreview title={title} description={description} slug={slug} />
      </div>

      {/* Media */}
      <div className="ap-fm-section">
        <SectionTitle>Media</SectionTitle>
        <Field
          label="Cover image"
          hint={<span className="ap-hero-label">Shown in post cards and page header</span>}
        >
          <input
            className="ap-input"
            placeholder="/images/blog/your-slug/banner.png"
            value={cover}
            onChange={(e) => {
              const v = e.target.value || undefined;
              // Migrate legacy heroImage key to cover when the user edits it.
              const next = { ...value, cover: v };
              if ("heroImage" in next) delete next.heroImage;
              onChange(next);
            }}
          />
          {cover && (
            <div className="ap-hero-preview">
              <img src={cover} alt={coverAlt || "Cover preview"} loading="eager" />
            </div>
          )}
          {images.length > 0 && (
            <div className="ap-hero-picker">
              {images.map((img) => (
                <button
                  key={img.url}
                  type="button"
                  className={`ap-hero-pick-btn${cover === img.url ? "ap-hero-active" : ""}`}
                  onClick={() => set("cover", cover === img.url ? undefined : img.url)}
                  title={img.name}
                >
                  <img src={img.url} alt={img.name} loading="eager" />
                </button>
              ))}
            </div>
          )}
        </Field>
        <Field
          label="Cover alt"
          hint="Required for accessibility — describe the image for screen readers"
        >
          <input
            className="ap-input"
            placeholder="Diagram showing agent architecture…"
            value={coverAlt}
            onChange={(e) => set("coverAlt", e.target.value || undefined)}
          />
        </Field>
      </div>

      {/* i18n */}
      <div className="ap-fm-section">
        <SectionTitle>Localization</SectionTitle>
        <Field label="Language" hint="Tied to file location — change by moving the file">
          <input className="ap-input" value={lang} disabled readOnly />
        </Field>
        <Field
          label="Translation key"
          hint="Shared across all language versions of the same post — used by the language switcher"
        >
          <input
            className="ap-input"
            placeholder={slug}
            value={translationKey}
            onChange={(e) => set("translationKey", e.target.value)}
          />
        </Field>
        <Field label="Category" hint="Routes the post to the right blog section">
          <select
            className="ap-input"
            value={category}
            onChange={(e) => set("category", e.target.value)}
          >
            <option value="open-source">open-source</option>
            <option value="article">article</option>
            <option value="news">news</option>
            <option value="tutorial">tutorial</option>
          </select>
        </Field>
      </div>

      {/* Publishing */}
      <div className="ap-fm-section">
        <SectionTitle>Publishing</SectionTitle>
        <div className="ap-form-grid">
          <Field label="Publish date">
            <input
              type="date"
              className="ap-input"
              value={dateStr(value.pubDate)}
              onChange={(e) => set("pubDate", e.target.value)}
            />
          </Field>
          <Field label="Updated date">
            <input
              type="date"
              className="ap-input"
              value={dateStr(value.updatedDate)}
              onChange={(e) => set("updatedDate", e.target.value || undefined)}
            />
          </Field>
        </div>
        <Field label="Author">
          <input
            className="ap-input"
            value={String(value.author ?? "")}
            onChange={(e) => set("author", e.target.value)}
          />
        </Field>
        <Field
          label="Tags"
          hint={
            <span className="ap-tag-hint">
              <span style={{ color: tagColor }}>
                {tags.length} tag{tags.length !== 1 ? "s" : ""}
              </span>
              <span className="ap-tag-hint-sep">—</span>
              <span style={{ color: tagColor }}>{statusLabel(tagSt, [3, 8])}</span>
              <span className="ap-tag-hint-tip">Enter or comma to add</span>
            </span>
          }
        >
          <TagBadgeInput tags={tags} onChange={(next) => set("tags", next)} />
        </Field>
        <div className="ap-toggle-row">
          <label className="ap-toggle">
            <input
              type="checkbox"
              checked={Boolean(value.draft)}
              onChange={(e) => set("draft", e.target.checked)}
            />
            <div className="ap-toggle-track">
              <div className="ap-toggle-thumb" />
            </div>
            <div className="ap-toggle-text">
              <span className="ap-toggle-name">Draft</span>
              <span className="ap-toggle-sub">Hidden from production</span>
            </div>
          </label>
          <label className="ap-toggle">
            <input
              type="checkbox"
              checked={Boolean(value.featured)}
              onChange={(e) => set("featured", e.target.checked)}
            />
            <div className="ap-toggle-track">
              <div className="ap-toggle-thumb" />
            </div>
            <div className="ap-toggle-text">
              <span className="ap-toggle-name">Featured</span>
              <span className="ap-toggle-sub">Appears on home page</span>
            </div>
          </label>
        </div>
      </div>

      {/* Advanced */}
      <div className="ap-fm-section">
        <SectionTitle>Advanced</SectionTitle>
        <Field label="Canonical URL" hint="Leave empty to use the default post URL">
          <input
            className="ap-input"
            placeholder="https://…"
            value={String(value.canonicalURL ?? "")}
            onChange={(e) => set("canonicalURL", e.target.value || undefined)}
          />
        </Field>
        <Field label="OG Image" hint="Override the default social sharing image">
          <input
            className="ap-input"
            placeholder="/images/og/…"
            value={String(value.ogImage ?? "")}
            onChange={(e) => set("ogImage", e.target.value || undefined)}
          />
        </Field>
      </div>
    </div>
  );
}
