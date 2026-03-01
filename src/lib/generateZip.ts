/**
 * Client-side project ZIP generator.
 * Fetches the bundled template files, renders Jinja2/Nunjucks templates,
 * applies post-generation cleanup (matching post_gen_project.py), and
 * produces a downloadable ZIP.
 */

import JSZip from "jszip";
import nunjucks from "nunjucks";
import { generateCookiecutterJson } from "./generateJson";
import type { ProjectConfig } from "./types";

// Configure nunjucks for cookiecutter/Jinja2 compatibility
const env = new nunjucks.Environment(undefined, {
  autoescape: false,
  throwOnUndefined: false,
  trimBlocks: true,
  lstripBlocks: true,
});

interface TemplateBundle {
  files: Record<string, string>;
}

let cachedBundle: TemplateBundle | null = null;

async function loadBundle(base: string): Promise<TemplateBundle> {
  if (cachedBundle) return cachedBundle;
  const url = `${base}templates.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load templates: ${res.status}`);
  cachedBundle = (await res.json()) as TemplateBundle;
  return cachedBundle;
}

/** Render a single template string with cookiecutter context. */
function render(template: string, ctx: Record<string, unknown>): string {
  try {
    return env.renderString(template, { cookiecutter: ctx });
  } catch {
    // If template has syntax errors, return as-is
    return template;
  }
}

/** Render a file path that may contain {{ cookiecutter.X }} placeholders. */
function renderPath(pathTemplate: string, ctx: Record<string, unknown>): string {
  return pathTemplate.replace(/\{\{[\s]*cookiecutter\.(\w+)[\s]*\}\}/g, (_m, key) => {
    return String(ctx[key] ?? key);
  });
}

/**
 * Determine which files to delete based on config, mirroring post_gen_project.py.
 * Returns a Set of path prefixes/exact paths to exclude.
 */
function getExcludedPaths(ctx: Record<string, unknown>): Set<string> {
  const excluded = new Set<string>();
  const rm = (p: string) => excluded.add(p);
  const rmDir = (p: string) => excluded.add(p + "/"); // prefix match

  const b = "backend/app";

  // --- AI Agent ---
  if (!ctx.enable_ai_agent) {
    rmDir(`${b}/agents`);
    rm(`${b}/api/routes/v1/agent.py`);
  } else {
    if (!ctx.use_pydantic_ai) rm(`${b}/agents/assistant.py`);
    if (!ctx.use_langchain) rm(`${b}/agents/langchain_assistant.py`);
    if (!ctx.use_langgraph) rm(`${b}/agents/langgraph_assistant.py`);
    if (!ctx.use_crewai) rm(`${b}/agents/crewai_assistant.py`);
    if (!ctx.use_deepagents) rm(`${b}/agents/deepagents_assistant.py`);
  }

  // --- Example CRUD ---
  if (!ctx.include_example_crud || !ctx.use_database) {
    for (const f of ["api/routes/v1/items.py", "db/models/item.py", "repositories/item.py", "services/item.py", "schemas/item.py"]) {
      rm(`${b}/${f}`);
    }
  }

  // --- Conversation persistence ---
  if (!ctx.enable_conversation_persistence) {
    for (const f of ["api/routes/v1/conversations.py", "db/models/conversation.py", "repositories/conversation.py", "services/conversation.py", "schemas/conversation.py"]) {
      rm(`${b}/${f}`);
    }
  }

  // --- Webhooks ---
  if (!ctx.enable_webhooks || !ctx.use_database) {
    for (const f of ["api/routes/v1/webhooks.py", "db/models/webhook.py", "repositories/webhook.py", "services/webhook.py", "schemas/webhook.py"]) {
      rm(`${b}/${f}`);
    }
  }

  // --- Session management ---
  if (!ctx.enable_session_management || !ctx.use_jwt) {
    for (const f of ["api/routes/v1/sessions.py", "db/models/session.py", "repositories/session.py", "services/session.py", "schemas/session.py"]) {
      rm(`${b}/${f}`);
    }
  }

  // --- WebSockets ---
  if (!ctx.enable_websockets) rm(`${b}/api/routes/v1/ws.py`);

  // --- Admin panel ---
  if (!ctx.enable_admin_panel || (!ctx.use_postgresql && !ctx.use_sqlite) || !ctx.use_sqlalchemy) {
    rm(`${b}/admin.py`);
  }

  // --- Redis/Cache ---
  if (!ctx.enable_redis) rm(`${b}/clients/redis.py`);
  if (!ctx.enable_caching) rm(`${b}/core/cache.py`);
  if (!ctx.enable_rate_limiting) rm(`${b}/core/rate_limit.py`);

  // --- OAuth ---
  if (!ctx.enable_oauth) {
    rm(`${b}/api/routes/v1/oauth.py`);
    rm(`${b}/core/oauth.py`);
  }

  // --- Security ---
  if (!ctx.use_jwt && !ctx.use_api_key) rm(`${b}/core/security.py`);

  // --- Auth/User ---
  if (!ctx.use_jwt) {
    for (const f of ["api/routes/v1/auth.py", "api/routes/v1/users.py", "db/models/user.py", "repositories/user.py", "services/user.py", "schemas/user.py", "schemas/token.py"]) {
      rm(`${b}/${f}`);
    }
  }

  // --- Logfire ---
  if (!ctx.enable_logfire) rm(`${b}/core/logfire_setup.py`);

  // --- Background tasks ---
  const useAnyBg = ctx.use_celery || ctx.use_taskiq || ctx.use_arq;
  if (!useAnyBg) {
    rmDir(`${b}/worker`);
  } else {
    if (!ctx.use_celery) {
      rm(`${b}/worker/celery_app.py`);
      rm(`${b}/worker/tasks/examples.py`);
      rm(`${b}/worker/tasks/schedules.py`);
    }
    if (!ctx.use_taskiq) {
      rm(`${b}/worker/taskiq_app.py`);
      rm(`${b}/worker/tasks/taskiq_examples.py`);
    }
    if (!ctx.use_arq) {
      rm(`${b}/worker/arq_app.py`);
    }
  }

  // --- CI/CD ---
  if (!ctx.use_github_actions) rmDir(".github");
  if (!ctx.use_gitlab_ci) rm(".gitlab-ci.yml");
  if (!ctx.enable_kubernetes) rmDir("kubernetes");
  if (!ctx.use_nginx) rmDir("nginx");

  // --- Frontend ---
  if (!ctx.use_frontend) rmDir("frontend");

  // --- .env files ---
  if (!ctx.generate_env) {
    rm("backend/.env");
    rm("frontend/.env.local");
  }

  // --- i18n files (when frontend is enabled but i18n is disabled) ---
  if (ctx.use_frontend && !ctx.enable_i18n) {
    rm("frontend/src/middleware.ts");
    rm("frontend/src/i18n.ts");
    rmDir("frontend/messages");
    rm("frontend/src/components/language-switcher.tsx");
  }

  return excluded;
}

/** Check if a path should be excluded. */
function isExcluded(path: string, excluded: Set<string>): boolean {
  if (excluded.has(path)) return true;
  // Check directory prefixes
  for (const prefix of excluded) {
    if (prefix.endsWith("/") && path.startsWith(prefix)) return true;
  }
  return false;
}

/**
 * Generate a project ZIP from the given configuration.
 * Returns the Blob ready for download.
 */
export async function generateProjectZip(
  config: ProjectConfig,
  base: string,
  onProgress?: (pct: number) => void,
): Promise<Blob> {
  onProgress?.(5);

  // Load template bundle
  const bundle = await loadBundle(base);
  onProgress?.(20);

  // Build cookiecutter context
  const ctx = generateCookiecutterJson(config);
  const projectSlug = String(ctx.project_slug);

  // Determine excluded files
  const excluded = getExcludedPaths(ctx);

  // Process files
  const zip = new JSZip();
  const folder = zip.folder(projectSlug)!;

  const entries = Object.entries(bundle.files);
  let processed = 0;

  for (const [templatePath, templateContent] of entries) {
    // Render the path (replace cookiecutter variables in path)
    const renderedPath = renderPath(templatePath, ctx);

    // Check exclusion
    if (isExcluded(renderedPath, excluded)) {
      processed++;
      continue;
    }

    // Render file contents
    const renderedContent = render(templateContent, ctx);

    // Skip empty stub files (only docstring, no code)
    if (renderedPath.endsWith(".py") && isStubFile(renderedContent)) {
      processed++;
      continue;
    }

    folder.file(renderedPath, renderedContent);

    processed++;
    if (processed % 50 === 0) {
      onProgress?.(20 + Math.floor((processed / entries.length) * 70));
    }
  }

  onProgress?.(90);

  // Generate ZIP blob
  const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
  onProgress?.(100);

  return blob;
}

/** Check if a Python file is a stub (only contains a docstring). */
function isStubFile(content: string): boolean {
  const trimmed = content.trim();
  if (!trimmed) return true;
  if (trimmed.startsWith('"""') && trimmed.endsWith('"""')) {
    const inner = trimmed.slice(3, -3).trim();
    return !inner.includes('"""') && !content.includes("def ") && !content.includes("class ");
  }
  return false;
}

/** Trigger a browser download of a Blob. */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
