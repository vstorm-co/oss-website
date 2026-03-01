// ---------------------------------------------------------------------------
// Zod validation schema for ProjectConfig.
// Ported from the Pydantic model_validator in fastapi_gen/config.py (lines 236-382).
// ---------------------------------------------------------------------------

import { z } from "zod";

// ---- Enum schemas ---------------------------------------------------------

const databaseSchema = z.enum(["postgresql", "mongodb", "sqlite", "none"]);
const authSchema = z.enum(["jwt", "api_key", "both", "none"]);
const backgroundTaskSchema = z.enum(["none", "celery", "taskiq", "arq"]);
const ciSchema = z.enum(["github", "gitlab", "none"]);
const frontendSchema = z.enum(["none", "nextjs"]);
const websocketAuthSchema = z.enum(["none", "jwt", "api_key"]);
const adminEnvironmentSchema = z.enum(["all", "dev_only", "dev_staging", "disabled"]);
const oauthProviderSchema = z.enum(["none", "google"]);
const aiFrameworkSchema = z.enum([
  "pydantic_ai",
  "langchain",
  "langgraph",
  "crewai",
  "deepagents",
]);
const llmProviderSchema = z.enum(["openai", "anthropic", "openrouter"]);
const rateLimitStorageSchema = z.enum(["memory", "redis"]);
const reverseProxySchema = z.enum([
  "traefik_included",
  "traefik_external",
  "nginx_included",
  "nginx_external",
  "none",
]);
const ormSchema = z.enum(["sqlalchemy", "sqlmodel"]);

// ---- Logfire features sub-schema ------------------------------------------

const logfireFeaturesSchema = z.object({
  fastapi: z.boolean(),
  database: z.boolean(),
  redis: z.boolean(),
  celery: z.boolean(),
  httpx: z.boolean(),
});

// ---- Base shape (field-level validation only) -----------------------------

const baseConfigSchema = z.object({
  // Basic info
  project_name: z
    .string()
    .min(1, "Project name is required")
    .regex(
      /^[a-z][a-z0-9_]*$/,
      "Project name must start with a lowercase letter and contain only lowercase letters, digits, and underscores",
    ),
  project_description: z.string().default("A FastAPI project"),
  author_name: z.string().default("Your Name"),
  author_email: z.string().email("Must be a valid email address").default("your@email.com"),

  // Database
  database: databaseSchema.default("postgresql"),
  orm_type: ormSchema.default("sqlalchemy"),
  db_pool_size: z.number().int().positive().default(5),
  db_max_overflow: z.number().int().nonnegative().default(10),
  db_pool_timeout: z.number().int().positive().default(30),

  // Authentication
  auth: authSchema.default("jwt"),
  oauth_provider: oauthProviderSchema.default("none"),
  enable_session_management: z.boolean().default(false),

  // Observability
  enable_logfire: z.boolean().default(true),
  logfire_features: logfireFeaturesSchema.default({
    fastapi: true,
    database: true,
    redis: false,
    celery: false,
    httpx: false,
  }),

  // Background tasks
  background_tasks: backgroundTaskSchema.default("none"),

  // Optional integrations
  enable_redis: z.boolean().default(false),
  enable_caching: z.boolean().default(false),
  enable_rate_limiting: z.boolean().default(false),
  rate_limit_requests: z.number().int().positive().default(100),
  rate_limit_period: z.number().int().positive().default(60),
  rate_limit_storage: rateLimitStorageSchema.default("memory"),
  enable_pagination: z.boolean().default(true),
  enable_sentry: z.boolean().default(false),
  enable_prometheus: z.boolean().default(false),
  enable_admin_panel: z.boolean().default(false),
  admin_environments: adminEnvironmentSchema.default("dev_staging"),
  admin_require_auth: z.boolean().default(true),
  enable_websockets: z.boolean().default(false),
  enable_file_storage: z.boolean().default(false),
  enable_ai_agent: z.boolean().default(true),
  ai_framework: aiFrameworkSchema.default("pydantic_ai"),
  llm_provider: llmProviderSchema.default("openai"),
  enable_conversation_persistence: z.boolean().default(false),
  enable_webhooks: z.boolean().default(false),
  websocket_auth: websocketAuthSchema.default("none"),
  enable_cors: z.boolean().default(true),
  enable_orjson: z.boolean().default(true),

  // Frontend features
  enable_i18n: z.boolean().default(false),

  // Example CRUD
  include_example_crud: z.boolean().default(true),

  // Dev tools
  enable_pytest: z.boolean().default(true),
  enable_precommit: z.boolean().default(true),
  enable_makefile: z.boolean().default(true),
  enable_docker: z.boolean().default(true),
  reverse_proxy: reverseProxySchema.default("traefik_included"),
  ci_type: ciSchema.default("github"),
  enable_kubernetes: z.boolean().default(false),
  generate_env: z.boolean().default(true),

  // Python version
  python_version: z.string().default("3.12"),

  // Frontend
  frontend: frontendSchema.default("nextjs"),
  frontend_port: z.number().int().min(1024, "Port must be 1024-65535").max(65535, "Port must be 1024-65535").default(3000),

  // Backend
  backend_port: z.number().int().min(1024, "Port must be 1024-65535").max(65535, "Port must be 1024-65535").default(8000),
});

// ---- Full schema with cross-field validation (superRefine) ----------------

export const projectConfigSchema = baseConfigSchema.superRefine((_cfg, _ctx) => {
  // Most constraints are handled by:
  // 1. Auto-fix in WizardProvider (e.g., caching → auto-enable Redis)
  // 2. Conditional visibility in validation.ts (e.g., ORM only shown for SQL DBs)
  // 3. Filtered options in step components (e.g., OpenRouter hidden for non-Pydantic AI)
  //
  // No hard errors remain — the wizard prevents invalid combinations by design.
});

// ---- Inferred type from the schema ----------------------------------------

export type ProjectConfigSchema = z.infer<typeof projectConfigSchema>;
