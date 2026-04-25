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
  const blogRoot = path.join(__dirname, "src/data/blog");
  if (!fs.existsSync(blogRoot)) return map;
  for (const lang of fs.readdirSync(blogRoot)) {
    const langDir = path.join(blogRoot, lang);
    if (!fs.statSync(langDir).isDirectory()) continue;
    for (const file of fs.readdirSync(langDir)) {
      if (!file.endsWith(".mdx") && !file.endsWith(".md")) continue;
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(langDir, file), "utf8");
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
      const urlKey = lang === "en" ? `/blog/${slug}/` : `/${lang}/blog/${slug}/`;
      map.set(urlKey, date.toISOString());
    }
  }
  return map;
}

const blogDateMap = buildBlogDateMap();
const buildDate = new Date().toISOString();

export default defineConfig({
  site: process.env.SITE_URL || "https://oss.vstorm.co",
  integrations: [
    react(),
    expressiveCode({
      themes: ["github-dark", "github-light"],
    }),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes("/admin") &&
        !page.includes("/blog/tag/") &&
        !page.includes("/blog/category/"),
      serialize(item) {
        const url = new URL(item.url);
        const realDate = blogDateMap.get(url.pathname);
        item.lastmod = realDate ?? buildDate;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss(), adminPlugin()],
    resolve: {
      alias: {
        nunjucks: "nunjucks/browser/nunjucks.js",
      },
    },
  },
  output: "static",
});
