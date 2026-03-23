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
        // Add lastmod to all URLs based on current build date
        // Blog posts will get their actual pubDate via the sitemap filter
        item.lastmod = new Date().toISOString();
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
