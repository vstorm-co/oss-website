// ---------------------------------------------------------------------------
// Type system for the FastAPI project configurator.
// Ported from fastapi_gen/config.py — all enums, the ProjectConfig interface,
// and human-readable labels for the wizard UI.
// ---------------------------------------------------------------------------

// ---- String literal union types (enum equivalents) ------------------------

export type DatabaseType = "postgresql" | "mongodb" | "sqlite" | "none";
export type AuthType = "jwt" | "api_key" | "both" | "none";
export type BackgroundTaskType = "none" | "celery" | "taskiq" | "arq";
export type CIType = "github" | "gitlab" | "none";
export type FrontendType = "none" | "nextjs";
export type WebSocketAuthType = "none" | "jwt" | "api_key";
export type AdminEnvironmentType = "all" | "dev_only" | "dev_staging" | "disabled";
export type OAuthProvider = "none" | "google";
export type AIFrameworkType = "pydantic_ai" | "langchain" | "langgraph" | "crewai" | "deepagents";
export type LLMProviderType = "openai" | "anthropic" | "openrouter";
export type RateLimitStorageType = "memory" | "redis";
export type ReverseProxyType =
  | "traefik_included"
  | "traefik_external"
  | "nginx_included"
  | "nginx_external"
  | "none";
export type OrmType = "sqlalchemy" | "sqlmodel";

// ---- Logfire feature flags ------------------------------------------------

export interface LogfireFeatures {
  fastapi: boolean;
  database: boolean;
  redis: boolean;
  celery: boolean;
  httpx: boolean;
}

// ---- Main project configuration -------------------------------------------

export interface ProjectConfig {
  // Basic info
  project_name: string;
  project_description: string;
  author_name: string;
  author_email: string;

  // Database
  database: DatabaseType;
  orm_type: OrmType;
  db_pool_size: number;
  db_max_overflow: number;
  db_pool_timeout: number;

  // Authentication
  auth: AuthType;
  oauth_provider: OAuthProvider;
  enable_session_management: boolean;

  // Observability
  enable_logfire: boolean;
  logfire_features: LogfireFeatures;

  // Background tasks
  background_tasks: BackgroundTaskType;

  // Optional integrations
  enable_redis: boolean;
  enable_caching: boolean;
  enable_rate_limiting: boolean;
  rate_limit_requests: number;
  rate_limit_period: number;
  rate_limit_storage: RateLimitStorageType;
  enable_pagination: boolean;
  enable_sentry: boolean;
  enable_prometheus: boolean;
  enable_admin_panel: boolean;
  admin_environments: AdminEnvironmentType;
  admin_require_auth: boolean;
  enable_websockets: boolean;
  enable_file_storage: boolean;
  enable_ai_agent: boolean;
  ai_framework: AIFrameworkType;
  llm_provider: LLMProviderType;
  enable_conversation_persistence: boolean;
  enable_webhooks: boolean;
  websocket_auth: WebSocketAuthType;
  enable_cors: boolean;
  enable_orjson: boolean;

  // Frontend features
  enable_i18n: boolean;

  // Example CRUD
  include_example_crud: boolean;

  // Dev tools
  enable_pytest: boolean;
  enable_precommit: boolean;
  enable_makefile: boolean;
  enable_docker: boolean;
  reverse_proxy: ReverseProxyType;
  ci_type: CIType;
  enable_kubernetes: boolean;
  generate_env: boolean;

  // Python version
  python_version: string;

  // Frontend
  frontend: FrontendType;
  frontend_port: number;

  // Backend
  backend_port: number;
}

// ---- Human-readable labels for the wizard UI ------------------------------

export const databaseLabels: Record<DatabaseType, string> = {
  postgresql: "PostgreSQL",
  mongodb: "MongoDB",
  sqlite: "SQLite",
  none: "None",
};

export const authLabels: Record<AuthType, string> = {
  jwt: "JWT",
  api_key: "API Key",
  both: "JWT + API Key",
  none: "None",
};

export const backgroundTaskLabels: Record<BackgroundTaskType, string> = {
  none: "None",
  celery: "Celery",
  taskiq: "TaskIQ",
  arq: "ARQ",
};

export const ciLabels: Record<CIType, string> = {
  github: "GitHub Actions",
  gitlab: "GitLab CI",
  none: "None",
};

export const frontendLabels: Record<FrontendType, string> = {
  none: "None",
  nextjs: "Next.js",
};

export const websocketAuthLabels: Record<WebSocketAuthType, string> = {
  none: "None",
  jwt: "JWT",
  api_key: "API Key",
};

export const adminEnvironmentLabels: Record<AdminEnvironmentType, string> = {
  all: "All environments",
  dev_only: "Development only",
  dev_staging: "Development + Staging",
  disabled: "Disabled",
};

export const oauthProviderLabels: Record<OAuthProvider, string> = {
  none: "None",
  google: "Google",
};

export const aiFrameworkLabels: Record<AIFrameworkType, string> = {
  pydantic_ai: "Pydantic AI",
  langchain: "LangChain",
  langgraph: "LangGraph",
  crewai: "CrewAI",
  deepagents: "DeepAgents",
};

export const llmProviderLabels: Record<LLMProviderType, string> = {
  openai: "OpenAI",
  anthropic: "Anthropic",
  openrouter: "OpenRouter",
};

export const rateLimitStorageLabels: Record<RateLimitStorageType, string> = {
  memory: "In-memory",
  redis: "Redis",
};

export const reverseProxyLabels: Record<ReverseProxyType, string> = {
  traefik_included: "Traefik (included in Docker Compose)",
  traefik_external: "Traefik (external, labels only)",
  nginx_included: "Nginx (included in Docker Compose)",
  nginx_external: "Nginx (external, config template only)",
  none: "None",
};

export const ormLabels: Record<OrmType, string> = {
  sqlalchemy: "SQLAlchemy",
  sqlmodel: "SQLModel",
};

// ---- Value arrays for iteration in UI components --------------------------

export const databaseValues: DatabaseType[] = ["postgresql", "mongodb", "sqlite", "none"];
export const authValues: AuthType[] = ["jwt", "api_key", "both", "none"];
export const backgroundTaskValues: BackgroundTaskType[] = ["none", "celery", "taskiq", "arq"];
export const ciValues: CIType[] = ["github", "gitlab", "none"];
export const frontendValues: FrontendType[] = ["none", "nextjs"];
export const websocketAuthValues: WebSocketAuthType[] = ["none", "jwt", "api_key"];
export const adminEnvironmentValues: AdminEnvironmentType[] = [
  "all",
  "dev_only",
  "dev_staging",
  "disabled",
];
export const oauthProviderValues: OAuthProvider[] = ["none", "google"];
export const aiFrameworkValues: AIFrameworkType[] = [
  "pydantic_ai",
  "langchain",
  "langgraph",
  "crewai",
  "deepagents",
];
export const llmProviderValues: LLMProviderType[] = ["openai", "anthropic", "openrouter"];
export const rateLimitStorageValues: RateLimitStorageType[] = ["memory", "redis"];
export const reverseProxyValues: ReverseProxyType[] = [
  "traefik_included",
  "traefik_external",
  "nginx_included",
  "nginx_external",
  "none",
];
export const ormValues: OrmType[] = ["sqlalchemy", "sqlmodel"];
export const pythonVersionValues = ["3.11", "3.12", "3.13"] as const;

// ---- Grouped labels for LivePreview and ReviewStep -------------------------

export const enumLabels = {
  database: databaseLabels,
  auth: authLabels,
  background_tasks: backgroundTaskLabels,
  ci_type: ciLabels,
  frontend: frontendLabels,
  websocket_auth: websocketAuthLabels,
  admin_environments: adminEnvironmentLabels,
  oauth_provider: oauthProviderLabels,
  ai_framework: aiFrameworkLabels,
  llm_provider: llmProviderLabels,
  rate_limit_storage: rateLimitStorageLabels,
  reverse_proxy: reverseProxyLabels,
  orm_type: ormLabels,
} as const;
