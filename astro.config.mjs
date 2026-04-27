import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { adminPlugin } from "./src/lib/admin/vite-plugin.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read real pubDate/updatedDate from MDX frontmatter at build time so
// the sitemap reports accurate <lastmod> values to search engines.
function buildBlogDateMap() {
  const map = new Map();
  const blogDir = path.join(__dirname, "src/data/blog/en");
  if (!fs.existsSync(blogDir)) return map;
  for (const file of fs.readdirSync(blogDir)) {
    if (!file.endsWith(".mdx") && !file.endsWith(".md")) continue;
    const slug = file.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;
    const fm = fmMatch[1];
    const draftMatch = fm.match(/^draft:\s*(.+)$/m);
    if (draftMatch && draftMatch[1].trim() === "true") continue;
    const updated = fm.match(/^updatedDate:\s*(.+)$/m);
    const pub = fm.match(/^pubDate:\s*(.+)$/m);
    const dateStr = (updated?.[1] ?? pub?.[1] ?? "").trim().replace(/['"]/g, "");
    if (!dateStr) continue;
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) continue;
    map.set(`/blog/${slug}/`, date.toISOString());
  }
  return map;
}

const blogDateMap = buildBlogDateMap();

// Only the meaningfully-noindexed/utility paths are excluded — admin is rewritten
// to /404 in vercel.json, and blog tag/category/pagination pages are intentionally
// noindex. Everything else (compare, glossary, use-cases, guides, tools, projects,
// about, faq, changelog, blog posts, home) ships in the sitemap.
function shouldIncludeInSitemap(page) {
  const url = new URL(page);
  const segments = url.pathname.split("/").filter(Boolean);

  if (segments.length === 0) return true;

  const [section, second] = segments;

  if (section === "admin") return false;
  if (section === "404") return false;

  // Programmatic guides (framework × use-case matrix) — kept reachable via
  // internal links but excluded from the sitemap to avoid signalling Google
  // to crawl pages it has historically rejected as too-similar.
  if (section === "guides" && segments.length > 1) return false;

  if (section === "blog") {
    if (second === "tag" || second === "category") return false;
    if (second && /^\d+$/.test(second)) return false;
  }

  return true;
}

export default defineConfig({
  site: process.env.SITE_URL || "https://oss.vstorm.co",
  integrations: [
    react(),
    expressiveCode({
      themes: ["github-dark", "github-light"],
    }),
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/admin") && shouldIncludeInSitemap(page),
      serialize(item) {
        const url = new URL(item.url);
        const realDate = blogDateMap.get(url.pathname);
        // Only emit <lastmod> when we have a real content date. Using the build
        // timestamp for every static page makes unchanged URLs look "fresh" on
        // every deploy, which needlessly burns crawl budget.
        if (realDate) item.lastmod = realDate;
        else delete item.lastmod;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss(), adminPlugin()],
    server: {
      // Prevent Vite from watching blog content files — the admin manages those
      // via its own API. Without this, saving a post triggers a full HMR reload
      // which interrupts the editor mid-session.
      watch: {
        ignored: ["**/src/data/blog/**"],
      },
    },
    resolve: {
      alias: {
        nunjucks: "nunjucks/browser/nunjucks.js",
        "@": path.resolve(__dirname, "src"),
      },
      // Prevent duplicate React copies — admin React + island React must match
      dedupe: ["react", "react-dom"],
    },
    optimizeDeps: {
      // Pre-bundle CodeMirror so the admin loads instantly in dev
      include: [
        "react",
        "react-dom",
        "@uiw/react-codemirror",
        "@codemirror/lang-markdown",
        "@codemirror/theme-one-dark",
        "@codemirror/language",
        "@codemirror/state",
        "@codemirror/view",
      ],
    },
  },
  output: "static",
  build: {
    // Inline small Astro-component stylesheets; keep the main Tailwind sheet
    // external so :root @theme variables stay intact. "always" inlines page
    // styles but loses the global theme bundle, which breaks dark backgrounds.
    inlineStylesheets: "auto",
  },
});
