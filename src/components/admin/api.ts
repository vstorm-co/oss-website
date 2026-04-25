export type Lang = "en" | "pl" | "de" | "es";

export interface PostSummary {
  lang: Lang;
  slug: string;
  title: string;
  description: string;
  pubDate: string | null;
  updatedDate: string | null;
  translationKey: string;
  tags: string[];
  category: string;
  draft: boolean;
  path: string;
}

export interface PostContent {
  frontmatter: Record<string, unknown>;
  content: string;
  raw: string;
}

export interface ComponentMeta {
  name: string;
  label: string;
  description: string;
  snippet: string;
}

export interface ImageEntry {
  name: string;
  url: string;
}

export interface ImageGroup {
  key: string;
  label: string;
  kind: "blog" | "public";
  slug?: string;
  images: ImageEntry[];
}

async function json<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) {
    let msg = `${res.status} ${res.statusText}`;
    try {
      const body = await res.json();
      if (body?.error) msg = body.error;
    } catch {
      /* ignore */
    }
    throw new Error(msg);
  }
  return res.json() as Promise<T>;
}

export const api = {
  listPosts: () => json<PostSummary[]>("/api/admin/posts"),
  readPost: (lang: Lang, slug: string) => json<PostContent>(`/api/admin/posts/${lang}/${slug}`),
  savePost: (lang: Lang, slug: string, body: { frontmatter: Record<string, unknown>; content: string }) =>
    json<{ path: string }>(`/api/admin/posts/${lang}/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
  createPost: (body: { lang: Lang; slug: string; frontmatter: Record<string, unknown>; content: string }) =>
    json<{ path: string }>("/api/admin/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
  deletePost: (lang: Lang, slug: string) =>
    json<{ ok: true }>(`/api/admin/posts/${lang}/${slug}`, { method: "DELETE" }),
  renamePost: (lang: Lang, slug: string, newSlug: string) =>
    json<{ path: string }>(`/api/admin/posts/${lang}/${slug}/rename`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newSlug }),
    }),
  listComponents: () => json<ComponentMeta[]>("/api/admin/components"),
  listImages: (slug: string) => json<ImageEntry[]>(`/api/admin/images/${slug}`),
  listAllImageGroups: () => json<ImageGroup[]>("/api/admin/images-all"),
  deleteImage: (slug: string, name: string) =>
    json<{ ok: true }>(`/api/admin/images/${slug}/${name}`, { method: "DELETE" }),
  uploadImage: async (slug: string, file: File): Promise<ImageEntry> => {
    const data = await fileToBase64(file);
    return json<ImageEntry>("/api/admin/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, filename: file.name, data }),
    });
  },
};

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const comma = result.indexOf(",");
      resolve(comma >= 0 ? result.slice(comma + 1) : result);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
