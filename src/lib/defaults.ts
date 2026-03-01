// ---------------------------------------------------------------------------
// Default configuration values.
// Matches the Pydantic model defaults from fastapi_gen/config.py.
// ---------------------------------------------------------------------------

import type { LogfireFeatures, ProjectConfig } from "./types";

export const defaultLogfireFeatures: LogfireFeatures = {
  fastapi: true,
  database: true,
  redis: false,
  celery: false,
  httpx: false,
};

export const defaultConfig: ProjectConfig = {
  // Basic info
  project_name: "my_project",
  project_description: "A FastAPI project",
  author_name: "Your Name",
  author_email: "your@email.com",

  // Database
  database: "postgresql",
  orm_type: "sqlalchemy",
  db_pool_size: 5,
  db_max_overflow: 10,
  db_pool_timeout: 30,

  // Authentication
  auth: "jwt",
  oauth_provider: "none",
  enable_session_management: false,

  // Observability
  enable_logfire: true,
  logfire_features: { ...defaultLogfireFeatures },

  // Background tasks
  background_tasks: "none",

  // Optional integrations
  enable_redis: false,
  enable_caching: false,
  enable_rate_limiting: false,
  rate_limit_requests: 100,
  rate_limit_period: 60,
  rate_limit_storage: "memory",
  enable_pagination: true,
  enable_sentry: false,
  enable_prometheus: false,
  enable_admin_panel: false,
  admin_environments: "dev_staging",
  admin_require_auth: true,
  enable_websockets: false,
  enable_file_storage: false,
  enable_ai_agent: true,
  ai_framework: "pydantic_ai",
  llm_provider: "openai",
  enable_conversation_persistence: false,
  enable_webhooks: false,
  websocket_auth: "none",
  enable_cors: true,
  enable_orjson: true,

  // Frontend features
  enable_i18n: false,

  // Example CRUD
  include_example_crud: true,

  // Dev tools
  enable_pytest: true,
  enable_precommit: true,
  enable_makefile: true,
  enable_docker: true,
  reverse_proxy: "traefik_included",
  ci_type: "github",
  enable_kubernetes: false,
  generate_env: true,

  // Python version
  python_version: "3.12",

  // Frontend
  frontend: "nextjs",
  frontend_port: 3000,

  // Backend
  backend_port: 8000,
};
