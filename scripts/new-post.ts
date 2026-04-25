#!/usr/bin/env bun
/**
 * Scaffold a new blog post.
 * Usage: bun run new-post "My post title"
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import slugify from "slugify";

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Usage: bun run new-post "My post title"');
  process.exit(1);
}

const slug = slugify(title, { lower: true, strict: true, trim: true });
if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
  console.error(`Could not derive a valid slug from "${title}".`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const filePath = path.join(process.cwd(), "src", "data", "blog", `${slug}.mdx`);

try {
  await fs.access(filePath);
  console.error(`Refusing to overwrite ${filePath}`);
  process.exit(1);
} catch {
  /* file does not exist — good, proceed */
}

const body = `---
title: "${title.replace(/"/g, '\\"')}"
description: "TODO — one-line description used for meta + cards."
pubDate: ${today}
author: "Jane Doe"
tags: []
draft: true
---

Start writing…
`;

await fs.mkdir(path.dirname(filePath), { recursive: true });
await fs.writeFile(filePath, body, "utf8");

console.log(`Created ${path.relative(process.cwd(), filePath)}`);
