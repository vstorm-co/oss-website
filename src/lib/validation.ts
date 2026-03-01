// ---------------------------------------------------------------------------
// Conditional field visibility helpers.
// Determine which wizard fields/sections to show based on current config state.
// ---------------------------------------------------------------------------

import type { ProjectConfig } from "./types";

/** Show ORM type selector when a SQL database is selected. */
export function shouldShowOrmType(config: ProjectConfig): boolean {
  return config.database === "postgresql" || config.database === "sqlite";
}

/** Show OAuth provider selector when JWT auth is available. */
export function shouldShowOAuth(config: ProjectConfig): boolean {
  return config.auth === "jwt" || config.auth === "both";
}

/** Show session management toggle when JWT auth is available AND a database is selected. */
export function shouldShowSessionManagement(config: ProjectConfig): boolean {
  return (
    (config.auth === "jwt" || config.auth === "both") &&
    config.database !== "none"
  );
}

/** Show AI framework / LLM provider options when AI agent is enabled. */
export function shouldShowAIOptions(config: ProjectConfig): boolean {
  return config.enable_ai_agent;
}

/** Show OpenRouter as an LLM provider option only for Pydantic AI. */
export function shouldShowOpenRouter(config: ProjectConfig): boolean {
  return config.ai_framework === "pydantic_ai";
}

/** Show WebSocket auth options when both WebSockets and AI agent are enabled. */
export function shouldShowWebSocketAuth(config: ProjectConfig): boolean {
  return config.enable_websockets && config.enable_ai_agent;
}

/** Show conversation persistence toggle when AI agent is enabled AND a database is selected. */
export function shouldShowConversationPersistence(config: ProjectConfig): boolean {
  return config.enable_ai_agent && config.database !== "none";
}

/** Show admin panel sub-options (environments, auth) when admin panel is enabled. */
export function shouldShowAdminOptions(config: ProjectConfig): boolean {
  return config.enable_admin_panel;
}

/** Show reverse proxy selector when Docker is enabled. */
export function shouldShowReverseProxy(config: ProjectConfig): boolean {
  return config.enable_docker;
}

/** Show rate limit configuration (requests, period, storage) when rate limiting is enabled. */
export function shouldShowRateLimitConfig(config: ProjectConfig): boolean {
  return config.enable_rate_limiting;
}

/** Show Logfire feature toggles when Logfire is enabled. */
export function shouldShowLogfireFeatures(config: ProjectConfig): boolean {
  return config.enable_logfire;
}

/** Show frontend-specific features (i18n, port) when a frontend is selected. */
export function shouldShowFrontendFeatures(config: ProjectConfig): boolean {
  return config.frontend !== "none";
}

/** Show admin panel toggle only when the database and ORM support it. */
export function shouldShowAdminPanel(config: ProjectConfig): boolean {
  return (
    (config.database === "postgresql" || config.database === "sqlite") &&
    config.orm_type === "sqlalchemy"
  );
}
