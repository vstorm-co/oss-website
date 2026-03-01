import type { ProjectConfig } from "./types";

/**
 * Generate a CLI command string from the project configuration.
 * Maps form state to `fastapi-fullstack create` CLI flags.
 * Only includes flags that differ from CLI defaults.
 */
export function generateCommand(config: ProjectConfig): string {
  const parts: string[] = ["fastapi-fullstack create", config.project_name];

  // Database (default: postgresql)
  if (config.database !== "postgresql") {
    parts.push(`--database ${config.database}`);
  }

  // ORM (default: sqlalchemy)
  if (config.orm_type !== "sqlalchemy") {
    parts.push(`--orm ${config.orm_type}`);
  }

  // Auth (default: jwt)
  if (config.auth !== "jwt") {
    parts.push(`--auth ${config.auth}`);
  }

  // Logfire (default: enabled)
  if (!config.enable_logfire) {
    parts.push("--no-logfire");
  }

  // Docker (default: enabled)
  if (!config.enable_docker) {
    parts.push("--no-docker");
  }

  // Env generation (default: enabled)
  if (!config.generate_env) {
    parts.push("--no-env");
  }

  // Example CRUD (default: enabled)
  if (!config.include_example_crud) {
    parts.push("--no-example-crud");
  }

  // Frontend (default: none in CLI create)
  if (config.frontend !== "none") {
    parts.push(`--frontend ${config.frontend}`);
  }

  // Ports (only if non-default)
  if (config.backend_port !== 8000) {
    parts.push(`--backend-port ${config.backend_port}`);
  }
  if (config.frontend_port !== 3000) {
    parts.push(`--frontend-port ${config.frontend_port}`);
  }

  // DB pool (only if non-default)
  if (config.db_pool_size !== 5) {
    parts.push(`--db-pool-size ${config.db_pool_size}`);
  }
  if (config.db_max_overflow !== 10) {
    parts.push(`--db-max-overflow ${config.db_max_overflow}`);
  }

  // AI Agent
  if (config.enable_ai_agent) {
    parts.push("--ai-agent");
    if (config.ai_framework !== "pydantic_ai") {
      parts.push(`--ai-framework ${config.ai_framework}`);
    }
    if (config.llm_provider !== "openai") {
      parts.push(`--llm-provider ${config.llm_provider}`);
    }
  }

  // Boolean flags (only when enabled, since CLI defaults to false)
  if (config.enable_redis) parts.push("--redis");
  if (config.enable_caching) parts.push("--caching");
  if (config.enable_rate_limiting) parts.push("--rate-limiting");
  if (config.enable_admin_panel) parts.push("--admin-panel");
  if (config.enable_websockets) parts.push("--websockets");
  if (config.enable_sentry) parts.push("--sentry");
  if (config.enable_prometheus) parts.push("--prometheus");
  if (config.enable_file_storage) parts.push("--file-storage");
  if (config.enable_webhooks) parts.push("--webhooks");
  if (config.enable_kubernetes) parts.push("--kubernetes");
  if (config.enable_i18n) parts.push("--i18n");

  // OAuth
  if (config.oauth_provider === "google") {
    parts.push("--oauth-google");
  }

  // Session management
  if (config.enable_session_management) {
    parts.push("--session-management");
  }

  // Background tasks (default: none)
  if (config.background_tasks !== "none") {
    parts.push(`--task-queue ${config.background_tasks}`);
  }

  // CI (default: github)
  if (config.ci_type !== "github") {
    parts.push(`--ci ${config.ci_type}`);
  }

  // Python version (default: 3.12)
  if (config.python_version !== "3.12") {
    parts.push(`--python-version ${config.python_version}`);
  }

  return parts.join(" \\\n  ");
}

/**
 * Generate a single-line version of the command (for copying).
 */
export function generateCommandOneLine(config: ProjectConfig): string {
  return generateCommand(config).replace(/\s*\\\n\s*/g, " ");
}
