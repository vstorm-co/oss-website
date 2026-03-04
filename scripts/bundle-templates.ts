/**
 * Build-time script: bundles the cookiecutter template directory into a JSON file
 * that can be loaded in the browser for client-side project generation.
 *
 * Usage: bun run scripts/bundle-templates.ts
 * Output: public/templates.json
 */

import { readdir, readFile, writeFile, stat, access } from "node:fs/promises";
import { join, relative } from "node:path";

// Path to the full-stack-fastapi-nextjs-llm-template repo's template directory
const TEMPLATE_ROOT = join(import.meta.dir, "../../full-stack-fastapi-nextjs-llm-template/template");
const SLUG_DIR = join(TEMPLATE_ROOT, "{{cookiecutter.project_slug}}");
const OUTPUT = join(import.meta.dir, "../public/templates.json");

// Binary extensions to skip (can't be Jinja2-rendered or included as text)
const BINARY_EXTENSIONS = new Set([
  ".png", ".jpg", ".jpeg", ".gif", ".ico", ".svg", ".woff", ".woff2",
  ".ttf", ".eot", ".lock", ".pyc", ".pyo", ".so", ".dylib",
]);

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const paths: string[] = [];

  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip __pycache__, .git, node_modules
      if (["__pycache__", ".git", "node_modules", ".next"].includes(entry.name)) continue;
      paths.push(...(await walk(full)));
    } else {
      const ext = entry.name.substring(entry.name.lastIndexOf(".")).toLowerCase();
      if (BINARY_EXTENSIONS.has(ext)) continue;
      paths.push(full);
    }
  }
  return paths;
}

async function main() {
  const files: Record<string, string> = {};
  const allPaths = await walk(SLUG_DIR);

  for (const absPath of allPaths) {
    const relPath = relative(SLUG_DIR, absPath);
    try {
      const content = await readFile(absPath, "utf-8");
      files[relPath] = content;
    } catch {
      // Skip files that can't be read as text
    }
  }

  const bundle = { files };
  const json = JSON.stringify(bundle);
  await writeFile(OUTPUT, json, "utf-8");

  const stats = await stat(OUTPUT);
  const kb = (stats.size / 1024).toFixed(0);
  console.log(`Bundled ${Object.keys(files).length} template files → public/templates.json (${kb} KB)`);
}

main().catch(async (err) => {
  if (err?.code === "ENOENT") {
    try {
      await access(OUTPUT);
      console.log("Template repo not found — using existing public/templates.json");
      process.exit(0);
    } catch {}
  }
  console.error("Bundle failed:", err);
  process.exit(1);
});
