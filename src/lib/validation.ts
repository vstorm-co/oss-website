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
  return (config.auth === "jwt" || config.auth === "both") && config.database !== "none";
}

/** Show AI framework / LLM provider options when AI agent is enabled. */
export function shouldShowAIOptions(config: ProjectConfig): boolean {
  return config.enable_ai_agent;
}

/** Show OpenRouter as an LLM provider option only for Pydantic AI and PydanticDeep. */
export function shouldShowOpenRouter(config: ProjectConfig): boolean {
  return config.ai_framework === "pydantic_ai" || config.ai_framework === "pydantic_deep";
}

/** Show sandbox backend selection for DeepAgents and PydanticDeep. */
export function shouldShowSandboxBackend(config: ProjectConfig): boolean {
  return (
    config.enable_ai_agent &&
    (config.ai_framework === "deepagents" || config.ai_framework === "pydantic_deep")
  );
}

/** Show Daytona sandbox option only for PydanticDeep. */
export function shouldShowDaytona(config: ProjectConfig): boolean {
  return config.enable_ai_agent && config.ai_framework === "pydantic_deep";
}

/** Show WebSocket auth options when both WebSockets and AI agent are enabled. */
export function shouldShowWebSocketAuth(config: ProjectConfig): boolean {
  return config.enable_websockets && config.enable_ai_agent;
}

/** Show conversation persistence toggle when AI agent is enabled AND a database is selected. */
export function shouldShowConversationPersistence(config: ProjectConfig): boolean {
  return config.enable_ai_agent && config.database !== "none";
}

/** Show LangSmith toggle when AI agent uses a LangChain-ecosystem framework. */
export function shouldShowLangsmith(config: ProjectConfig): boolean {
  return (
    config.enable_ai_agent &&
    (config.ai_framework === "langchain" ||
      config.ai_framework === "langgraph" ||
      config.ai_framework === "deepagents")
  );
}

/** Show RAG sub-options when RAG is enabled. */
export function shouldShowRAGOptions(config: ProjectConfig): boolean {
  return config.enable_rag;
}

/** Show pgvector option only when PostgreSQL is selected. */
export function shouldShowPgVector(config: ProjectConfig): boolean {
  return config.database === "postgresql";
}

/** Show image description toggle when parser supports image extraction. */
export function shouldShowImageDescription(config: ProjectConfig): boolean {
  return config.enable_rag && (config.pdf_parser === "pymupdf" || config.pdf_parser === "all");
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
