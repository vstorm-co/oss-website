import type { Plugin, ViteDevServer } from "vite";
import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.resolve(process.cwd(), "src/data/blog");
const IMAGES_DIR = path.resolve(process.cwd(), "public/images/blog");
const PUBLIC_DIR = path.resolve(process.cwd(), "public");
const COMPONENTS_DIR = path.resolve(process.cwd(), "src/components/blog");

const IMAGE_EXT_RE = /\.(png|jpe?g|webp|avif|svg|gif|ico)$/i;
const PUBLIC_IGNORE = new Set([
  "_astro",
  "templates.json",
  "site.webmanifest",
]);

const LANGS = ["en", "pl", "de", "es"] as const;
type Lang = (typeof LANGS)[number];

function isLang(v: string): v is Lang {
  return (LANGS as readonly string[]).includes(v);
}

function safeSlug(slug: string): string {
  // slug may contain subdirs but not allow path traversal
  const normalized = path.posix.normalize(slug).replace(/^\/+/, "");
  if (normalized.includes("..") || path.isAbsolute(normalized)) {
    throw new Error("Invalid slug");
  }
  return normalized;
}

function postPath(lang: Lang, slug: string): string {
  return path.join(BLOG_DIR, lang, `${safeSlug(slug)}.mdx`);
}

async function readJson<T = unknown>(req: import("http").IncomingMessage): Promise<T> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => {
      try {
        const raw = Buffer.concat(chunks).toString("utf8");
        resolve(raw ? (JSON.parse(raw) as T) : ({} as T));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res: import("http").ServerResponse, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

function notFound(res: import("http").ServerResponse) {
  sendJson(res, 404, { error: "Not found" });
}

function bad(res: import("http").ServerResponse, msg: string) {
  sendJson(res, 400, { error: msg });
}

async function listPosts() {
  const out: Array<{
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
  }> = [];
  for (const lang of LANGS) {
    const dir = path.join(BLOG_DIR, lang);
    let entries: string[] = [];
    try {
      entries = await fs.readdir(dir);
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (!entry.endsWith(".mdx") && !entry.endsWith(".md")) continue;
      const filePath = path.join(dir, entry);
      const raw = await fs.readFile(filePath, "utf8");
      const { data } = matter(raw);
      const slug = entry.replace(/\.(mdx|md)$/, "");
      out.push({
        lang,
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        pubDate: data.pubDate ? new Date(data.pubDate).toISOString() : null,
        updatedDate: data.updatedDate ? new Date(data.updatedDate).toISOString() : null,
        translationKey: String(data.translationKey ?? slug),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        category: String(data.category ?? "open-source"),
        draft: Boolean(data.draft ?? false),
        path: path.relative(process.cwd(), filePath),
      });
    }
  }
  out.sort((a, b) => (b.pubDate ?? "").localeCompare(a.pubDate ?? ""));
  return out;
}

async function readPost(lang: Lang, slug: string) {
  const filePath = postPath(lang, slug);
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  // Serialize dates as ISO for the client
  const frontmatter: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(data)) {
    if (v instanceof Date) frontmatter[k] = v.toISOString().slice(0, 10);
    else frontmatter[k] = v;
  }
  return { frontmatter, content, raw };
}

function stringifyPost(frontmatter: Record<string, unknown>, content: string): string {
  const data: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(frontmatter)) {
    if (v === "" || v === null || v === undefined) continue;
    if (k === "pubDate" || k === "updatedDate") {
      // Normalize to YYYY-MM-DD string (matches existing posts)
      if (v instanceof Date) data[k] = v.toISOString().slice(0, 10);
      else if (typeof v === "string") data[k] = v.slice(0, 10);
      else continue;
    } else {
      data[k] = v;
    }
  }
  let out = matter.stringify(content.startsWith("\n") ? content : `\n${content}`, data);
  // Normalize quoted date strings back to bare YAML dates — matches existing post format.
  out = out.replace(/^(pubDate|updatedDate):\s*['"](\d{4}-\d{2}-\d{2})['"]$/gm, "$1: $2");
  return out;
}

async function savePost(lang: Lang, slug: string, frontmatter: Record<string, unknown>, content: string) {
  const filePath = postPath(lang, slug);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  const out = stringifyPost(frontmatter, content);
  // Skip the write if the file is already byte-identical — Astro's content layer
  // re-indexes on every mtime change, so a no-op write still triggers its store.
  try {
    const existing = await fs.readFile(filePath, "utf8");
    if (existing === out) {
      return { path: path.relative(process.cwd(), filePath), unchanged: true };
    }
  } catch {
    /* file doesn't exist yet — fall through to write */
  }
  await fs.writeFile(filePath, out, "utf8");
  return { path: path.relative(process.cwd(), filePath) };
}

async function createPost(
  lang: Lang,
  slug: string,
  frontmatter: Record<string, unknown>,
  content: string,
) {
  const filePath = postPath(lang, slug);
  try {
    await fs.access(filePath);
    throw new Error("Post already exists");
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code !== "ENOENT") throw e;
  }
  return savePost(lang, slug, frontmatter, content);
}

async function deletePost(lang: Lang, slug: string) {
  await fs.unlink(postPath(lang, slug));
}

async function renamePost(lang: Lang, slug: string, newSlug: string) {
  const from = postPath(lang, slug);
  const to = postPath(lang, newSlug);
  await fs.mkdir(path.dirname(to), { recursive: true });
  await fs.rename(from, to);
  return { path: path.relative(process.cwd(), to) };
}

async function listImages(slug: string) {
  const safe = safeSlug(slug);
  const dir = path.join(IMAGES_DIR, safe);
  let entries: string[] = [];
  try {
    entries = await fs.readdir(dir);
  } catch {
    return [];
  }
  return entries
    .filter((e) => IMAGE_EXT_RE.test(e))
    .map((name) => ({ name, url: `/images/blog/${safe}/${name}` }));
}

interface ImageGroup {
  key: string;
  label: string;
  kind: "blog" | "public";
  slug?: string; // for blog groups
  images: Array<{ name: string; url: string }>;
}

async function listAllImageGroups(): Promise<ImageGroup[]> {
  const groups = new Map<string, ImageGroup>();

  async function walk(dir: string, depth = 0): Promise<void> {
    if (depth > 6) return;
    let entries: import("fs").Dirent[];
    try {
      entries = await fs.readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.name.startsWith(".")) continue;
      if (depth === 0 && PUBLIC_IGNORE.has(e.name)) continue;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        await walk(full, depth + 1);
      } else if (e.isFile() && IMAGE_EXT_RE.test(e.name)) {
        const rel = path.relative(PUBLIC_DIR, full).split(path.sep).join("/");
        const url = "/" + rel;
        const parentRel = path.posix.dirname(rel);
        const groupKey = parentRel === "." ? "(root)" : parentRel;

        if (!groups.has(groupKey)) {
          const blogMatch = groupKey.match(/^images\/blog\/(.+)$/);
          groups.set(groupKey, {
            key: groupKey,
            label: blogMatch ? `blog / ${blogMatch[1]}` : groupKey,
            kind: blogMatch ? "blog" : "public",
            slug: blogMatch?.[1],
            images: [],
          });
        }
        groups.get(groupKey)!.images.push({ name: e.name, url });
      }
    }
  }

  await walk(PUBLIC_DIR);

  const arr = Array.from(groups.values());
  // Sort: blog groups first (alphabetically), then other folders
  arr.sort((a, b) => {
    if (a.kind !== b.kind) return a.kind === "blog" ? -1 : 1;
    return a.label.localeCompare(b.label);
  });
  // Sort images within each group by name
  for (const g of arr) g.images.sort((a, b) => a.name.localeCompare(b.name));
  return arr;
}

async function uploadImage(slug: string, filename: string, dataBase64: string) {
  const safe = safeSlug(slug);
  const dir = path.join(IMAGES_DIR, safe);
  await fs.mkdir(dir, { recursive: true });
  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
  const filePath = path.join(dir, safeName);
  const buf = Buffer.from(dataBase64, "base64");
  await fs.writeFile(filePath, buf);
  return { name: safeName, url: `/images/blog/${safe}/${safeName}` };
}

async function deleteImage(slug: string, filename: string) {
  const safe = safeSlug(slug);
  const safeName = path.basename(filename);
  await fs.unlink(path.join(IMAGES_DIR, safe, safeName));
}

async function listComponents() {
  let files: string[] = [];
  try {
    files = await fs.readdir(COMPONENTS_DIR);
  } catch {
    return [];
  }
  const out: Array<{ name: string; label: string; snippet: string; description: string }> = [];
  for (const file of files) {
    if (!file.endsWith(".astro") && !file.endsWith(".tsx") && !file.endsWith(".jsx")) continue;
    const raw = await fs.readFile(path.join(COMPONENTS_DIR, file), "utf8");
    const nameMatch = file.replace(/\.(astro|tsx|jsx)$/, "");
    // Parse optional snippet metadata from a leading HTML comment: <!-- @mdx-snippet ... -->
    // Accept JSX-style ({/* ... */}) or HTML ( <!-- ... --> ) comments, plus // line comments.
    const snippetMatch =
      raw.match(/\{\/\*\s*@mdx-snippet([\s\S]*?)\*\/\}/) ||
      raw.match(/<!--\s*@mdx-snippet([\s\S]*?)-->/);
    const labelMatch =
      raw.match(/\{\/\*\s*@mdx-label\s+(.+?)\s*\*\/\}/) ||
      raw.match(/<!--\s*@mdx-label\s+(.+?)\s*-->/);
    const descMatch =
      raw.match(/\{\/\*\s*@mdx-description\s+(.+?)\s*\*\/\}/) ||
      raw.match(/<!--\s*@mdx-description\s+(.+?)\s*-->/);
    if (snippetMatch) {
      out.push({
        name: nameMatch,
        label: labelMatch?.[1] ?? nameMatch,
        description: descMatch?.[1] ?? "",
        snippet: snippetMatch[1].trim(),
      });
    }
  }
  return out;
}

async function handle(req: import("http").IncomingMessage, res: import("http").ServerResponse) {
  const url = new URL(req.url ?? "/", "http://localhost");
  const pathname = url.pathname;
  const method = req.method ?? "GET";

  // GET /api/admin/posts
  if (pathname === "/api/admin/posts" && method === "GET") {
    return sendJson(res, 200, await listPosts());
  }

  // POST /api/admin/posts  (create)
  if (pathname === "/api/admin/posts" && method === "POST") {
    const body = await readJson<{
      lang: string;
      slug: string;
      frontmatter: Record<string, unknown>;
      content: string;
    }>(req);
    if (!isLang(body.lang)) return bad(res, "Invalid lang");
    if (!body.slug || !/^[a-z0-9][a-z0-9-]*$/.test(body.slug)) return bad(res, "Invalid slug");
    try {
      const result = await createPost(body.lang, body.slug, body.frontmatter ?? {}, body.content ?? "");
      return sendJson(res, 201, result);
    } catch (e) {
      return sendJson(res, 409, { error: (e as Error).message });
    }
  }

  // /api/admin/posts/:lang/:slug [rename]
  const postMatch = pathname.match(/^\/api\/admin\/posts\/([a-z]{2})\/(.+?)(\/rename)?$/);
  if (postMatch) {
    const [, lang, slug, renameSuffix] = postMatch;
    if (!isLang(lang)) return bad(res, "Invalid lang");

    if (renameSuffix && method === "POST") {
      const body = await readJson<{ newSlug: string }>(req);
      if (!body.newSlug || !/^[a-z0-9][a-z0-9-]*$/.test(body.newSlug)) return bad(res, "Invalid slug");
      try {
        return sendJson(res, 200, await renamePost(lang, slug, body.newSlug));
      } catch (e) {
        return sendJson(res, 500, { error: (e as Error).message });
      }
    }

    if (method === "GET") {
      try {
        return sendJson(res, 200, await readPost(lang, slug));
      } catch {
        return notFound(res);
      }
    }
    if (method === "PUT") {
      const body = await readJson<{ frontmatter: Record<string, unknown>; content: string }>(req);
      try {
        return sendJson(res, 200, await savePost(lang, slug, body.frontmatter ?? {}, body.content ?? ""));
      } catch (e) {
        return sendJson(res, 500, { error: (e as Error).message });
      }
    }
    if (method === "DELETE") {
      try {
        await deletePost(lang, slug);
        return sendJson(res, 200, { ok: true });
      } catch (e) {
        return sendJson(res, 500, { error: (e as Error).message });
      }
    }
  }

  // POST /api/admin/upload
  if (pathname === "/api/admin/upload" && method === "POST") {
    const body = await readJson<{ slug: string; filename: string; data: string }>(req);
    if (!body.slug || !body.filename || !body.data) return bad(res, "Missing fields");
    try {
      return sendJson(res, 200, await uploadImage(body.slug, body.filename, body.data));
    } catch (e) {
      return sendJson(res, 500, { error: (e as Error).message });
    }
  }

  // GET /api/admin/images-all (must match before /images/:slug)
  if (pathname === "/api/admin/images-all" && method === "GET") {
    try {
      return sendJson(res, 200, await listAllImageGroups());
    } catch (e) {
      return sendJson(res, 500, { error: (e as Error).message });
    }
  }

  // /api/admin/images/:slug
  const imagesMatch = pathname.match(/^\/api\/admin\/images\/(.+?)(?:\/(.+))?$/);
  if (imagesMatch) {
    const [, slug, filename] = imagesMatch;
    if (method === "GET" && !filename) {
      try {
        return sendJson(res, 200, await listImages(slug));
      } catch (e) {
        return sendJson(res, 500, { error: (e as Error).message });
      }
    }
    if (method === "DELETE" && filename) {
      try {
        await deleteImage(slug, filename);
        return sendJson(res, 200, { ok: true });
      } catch (e) {
        return sendJson(res, 500, { error: (e as Error).message });
      }
    }
  }

  // GET /api/admin/components
  if (pathname === "/api/admin/components" && method === "GET") {
    return sendJson(res, 200, await listComponents());
  }

  return notFound(res);
}

export function adminPlugin(): Plugin {
  return {
    name: "oss-admin-plugin",
    apply: "serve", // dev only
    configureServer(server: ViteDevServer) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ?? "";
        if (!url.startsWith("/api/admin")) return next();
        try {
          await handle(req, res);
        } catch (e) {
          sendJson(res, 500, { error: (e as Error).message });
        }
      });
    },
  };
}
