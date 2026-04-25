import type { ProjectConfig } from "./types";

/**
 * Generate a cookiecutter.json object from the project configuration.
 * Maps form state to the template/cookiecutter.json format used by cookiecutter.
 */
export function generateCookiecutterJson(config: ProjectConfig): Record<string, unknown> {
  const projectSlug = config.project_name.replace(/-/g, "_");

  // Derive embedding provider from LLM provider
  const embeddingProvider =
    config.llm_provider === "anthropic"
      ? "voyage"
      : config.llm_provider === "google"
        ? "gemini"
        : config.llm_provider === "openrouter"
          ? "sentence_transformers"
          : "openai";

  return {
    project_name: config.project_name,
    project_slug: projectSlug,
    project_description: config.project_description,
    author_name: config.author_name,
    author_email: config.author_email,

    // Database
    database: config.database,
    use_postgresql: config.database === "postgresql",
    use_mongodb: config.database === "mongodb",
    use_sqlite: config.database === "sqlite",
    use_database: config.database !== "none",
    db_pool_size: config.db_pool_size,
    db_max_overflow: config.db_max_overflow,
    db_pool_timeout: config.db_pool_timeout,

    // ORM
    orm_type: config.orm_type,
    use_sqlalchemy: config.orm_type === "sqlalchemy",
    use_sqlmodel: config.orm_type === "sqlmodel",

    // Auth
    auth: config.auth,
    use_jwt: config.auth === "jwt" || config.auth === "both",
    use_api_key: config.auth === "api_key" || config.auth === "both",
    use_auth: config.auth !== "none",

    // OAuth
    oauth_provider: config.oauth_provider,
    enable_oauth: config.oauth_provider !== "none",
    enable_oauth_google: config.oauth_provider === "google",

    // Session
    enable_session_management: config.enable_session_management,

    // Logfire
    enable_logfire: config.enable_logfire,
    logfire_fastapi: config.logfire_features.fastapi,
    logfire_database: config.logfire_features.database,
    logfire_redis: config.logfire_features.redis,
    logfire_celery: config.logfire_features.celery,
    logfire_httpx: config.logfire_features.httpx,

    // Background tasks
    background_tasks: config.background_tasks,
    use_celery: config.background_tasks === "celery",
    use_taskiq: config.background_tasks === "taskiq",
    use_arq: config.background_tasks === "arq",

    // Integrations
    enable_redis: config.enable_redis,
    enable_caching: config.enable_caching,
    enable_rate_limiting: config.enable_rate_limiting,
    rate_limit_requests: config.rate_limit_requests,
    rate_limit_period: config.rate_limit_period,
    rate_limit_storage: config.rate_limit_storage,
    rate_limit_storage_memory: config.rate_limit_storage === "memory",
    rate_limit_storage_redis: config.rate_limit_storage === "redis",
    enable_pagination: config.enable_pagination,
    enable_sentry: config.enable_sentry,
    enable_prometheus: config.enable_prometheus,
    enable_admin_panel: config.enable_admin_panel,
    admin_environments: config.admin_environments,
    admin_env_all: config.admin_environments === "all",
    admin_env_dev_only: config.admin_environments === "dev_only",
    admin_env_dev_staging: config.admin_environments === "dev_staging",
    admin_env_disabled: config.admin_environments === "disabled",
    admin_require_auth: config.admin_require_auth,
    enable_websockets: config.enable_websockets,
    enable_file_storage: config.enable_file_storage,

    // AI Agent
    enable_ai_agent: config.enable_ai_agent,
    ai_framework: config.ai_framework,
    use_pydantic_ai: config.ai_framework === "pydantic_ai",
    use_langchain: config.ai_framework === "langchain",
    use_langgraph: config.ai_framework === "langgraph",
    use_crewai: config.ai_framework === "crewai",
    use_deepagents: config.ai_framework === "deepagents",
    use_pydantic_deep: config.ai_framework === "pydantic_deep",
    sandbox_backend: config.sandbox_backend,
    llm_provider: config.llm_provider,
    use_openai: config.llm_provider === "openai",
    use_anthropic: config.llm_provider === "anthropic",
    use_google: config.llm_provider === "google",
    use_openrouter: config.llm_provider === "openrouter",
    enable_conversation_persistence: config.enable_conversation_persistence,
    enable_langsmith: config.enable_langsmith,
    websocket_auth: config.websocket_auth,
    websocket_auth_jwt: config.websocket_auth === "jwt",
    websocket_auth_api_key: config.websocket_auth === "api_key",
    websocket_auth_none: config.websocket_auth === "none",

    // Messaging channels
    use_telegram: config.use_telegram,
    use_slack: config.use_slack,

    // RAG
    enable_rag: config.enable_rag,
    vector_store: config.vector_store,
    use_milvus: config.enable_rag && config.vector_store === "milvus",
    use_qdrant: config.enable_rag && config.vector_store === "qdrant",
    use_chromadb: config.enable_rag && config.vector_store === "chromadb",
    use_pgvector: config.enable_rag && config.vector_store === "pgvector",
    enable_google_drive_ingestion: config.enable_rag && config.enable_google_drive_ingestion,
    enable_s3_ingestion: config.enable_rag && config.enable_s3_ingestion,
    enable_reranker: config.enable_rag && config.reranker_type !== "none",
    reranker_type: config.reranker_type,
    use_cohere_reranker: config.enable_rag && config.reranker_type === "cohere",
    use_cross_encoder_reranker: config.enable_rag && config.reranker_type === "cross_encoder",
    pdf_parser: config.pdf_parser,
    use_pymupdf: config.enable_rag && config.pdf_parser === "pymupdf",
    use_llamaparse: config.enable_rag && config.pdf_parser === "llamaparse",
    use_liteparse: config.enable_rag && config.pdf_parser === "liteparse",
    use_all_pdf_parsers: config.enable_rag && config.pdf_parser === "all",
    enable_rag_image_description: config.enable_rag && config.enable_rag_image_description,
    // Embedding provider (auto-derived from LLM provider)
    embedding_provider: embeddingProvider,
    use_openai_embeddings: embeddingProvider === "openai",
    use_voyage_embeddings: embeddingProvider === "voyage",
    use_gemini_embeddings: embeddingProvider === "gemini",
    use_sentence_transformers: embeddingProvider === "sentence_transformers",

    // Other integrations
    enable_webhooks: config.enable_webhooks,
    enable_cors: config.enable_cors,
    enable_orjson: config.enable_orjson,

    // Frontend
    enable_i18n: config.enable_i18n,
    frontend: config.frontend,
    use_frontend: config.frontend !== "none",
    use_nextjs: config.frontend === "nextjs",
    frontend_port: config.frontend_port,

    // Example CRUD
    include_example_crud: config.include_example_crud,

    // Dev tools
    enable_pytest: config.enable_pytest,
    enable_precommit: config.enable_precommit,
    enable_makefile: config.enable_makefile,
    enable_docker: config.enable_docker,

    // Reverse proxy
    reverse_proxy: config.reverse_proxy,
    include_traefik_service: config.reverse_proxy === "traefik_included",
    include_traefik_labels:
      config.reverse_proxy === "traefik_included" || config.reverse_proxy === "traefik_external",
    use_traefik:
      config.reverse_proxy === "traefik_included" || config.reverse_proxy === "traefik_external",
    include_nginx_service: config.reverse_proxy === "nginx_included",
    include_nginx_config:
      config.reverse_proxy === "nginx_included" || config.reverse_proxy === "nginx_external",
    use_nginx:
      config.reverse_proxy === "nginx_included" || config.reverse_proxy === "nginx_external",

    // CI
    ci_type: config.ci_type,
    use_github_actions: config.ci_type === "github",
    use_gitlab_ci: config.ci_type === "gitlab",
    enable_kubernetes: config.enable_kubernetes,
    generate_env: config.generate_env,

    // Python
    python_version: config.python_version,

    // Backend
    backend_port: config.backend_port,
  };
}

/**
 * Download a JSON file in the browser.
 */
export function downloadJson(config: ProjectConfig): void {
  const json = generateCookiecutterJson(config);
  const blob = new Blob([JSON.stringify(json, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "cookiecutter.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
