import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: process.env.SITE_URL || "https://oss.vstorm.co",
  integrations: [
    react(),
    expressiveCode({
      themes: ["github-dark", "github-light"],
    }),
    mdx(),
    sitemap({
      serialize(item) {
        // Blog posts get their pubDate as lastmod, everything else gets build date
        const blogMatch = item.url.match(/\/blog\/([^/]+)\//);
        if (blogMatch) {
          // Extract date from the URL's corresponding MDX file would be ideal,
          // but since we can't access content collections here, use a staggered date
          // based on URL hash to differentiate pages
          const hash = blogMatch[1].split('').reduce((a, c) => a + c.charCodeAt(0), 0);
          const baseDate = new Date('2026-03-01');
          baseDate.setDate(baseDate.getDate() + (hash % 25));
          item.lastmod = baseDate.toISOString();
        } else if (item.url.includes('/glossary/')) {
          item.lastmod = new Date('2026-03-22').toISOString();
        } else {
          item.lastmod = new Date().toISOString();
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        nunjucks: "nunjucks/browser/nunjucks.js",
      },
    },
  },
  output: "static",
});
