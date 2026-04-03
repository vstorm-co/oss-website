/**
 * Glossary data — AI / ML / LLM / Agent terminology
 *
 * Each entry has a kebab-case slug, display name, 2-4 sentence definition,
 * category, and related-term slugs for cross-linking.
 */

export type GlossaryCategory =
  | "frameworks"
  | "infrastructure"
  | "cloud"
  | "frontend"
  | "python-backend"
  | "security";

export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  category: GlossaryCategory;
  relatedTerms: string[];
}

export const categoryLabels: Record<GlossaryCategory, string> = {
  frameworks: "Frameworks & Tools",
  infrastructure: "Infrastructure",
  cloud: "Cloud & Deployment",
  frontend: "Next.js & Frontend",
  "python-backend": "FastAPI & Python",
  security: "AI Security & Ethics",
};

export const categoryColors: Record<GlossaryCategory, string> = {
  frameworks: "text-amber-700 bg-amber-100 border border-amber-200",
  infrastructure: "text-rose-700 bg-rose-100 border border-rose-200",
  cloud: "text-sky-700 bg-sky-100 border border-sky-200",
  frontend: "text-orange-700 bg-orange-100 border border-orange-200",
  "python-backend": "text-lime-700 bg-lime-100 border border-lime-200",
  security: "text-red-700 bg-red-100 border border-red-200",
};

export const glossaryTerms: GlossaryTerm[] = [
  // ── Frameworks & Tools ──────────────────────────────────────────────────────

  {
    slug: "pydantic-ai",
    term: "Pydantic AI",
    definition:
      "Pydantic AI is a Python agent framework built by the creators of Pydantic, designed for building production-grade AI agent applications with type safety and validation at the core. It provides a model-agnostic interface supporting OpenAI, Anthropic, Google, Groq, and other providers, with first-class support for structured outputs validated by Pydantic models. Key features include dependency injection, tool registration, streaming responses, and integration with Logfire for observability. Pydantic AI emphasizes developer experience with familiar Python patterns rather than complex abstractions.",
    category: "frameworks",
    relatedTerms: ["pydantic", "ai-agent", "tool-calling", "logfire", "fastapi"],
  },
  {
    slug: "langchain",
    term: "LangChain",
    definition:
      "LangChain is a popular open-source framework for building applications with large language models. It provides abstractions for chains (sequential LLM calls), tools, memory, retrieval, and output parsing. LangChain supports a wide range of LLM providers and integrations, making it a versatile toolkit for prototyping. While its flexibility makes it easy to get started, its extensive abstraction layers can add complexity and make debugging difficult in production systems. LangChain has a large community and ecosystem, including LangSmith for observability and LangGraph for agent orchestration.",
    category: "frameworks",
    relatedTerms: ["langgraph", "large-language-models", "rag-retrieval-augmented-generation", "pydantic-ai"],
  },
  {
    slug: "langgraph",
    term: "LangGraph",
    definition:
      "LangGraph is a library built on top of LangChain for constructing stateful, multi-agent AI applications using graph-based workflows. It models agent logic as a directed graph where nodes represent actions (LLM calls, tool usage, human input) and edges represent transitions between states. LangGraph supports cycles, conditional branching, parallel execution, and persistent state, making it suitable for complex agentic workflows. It provides built-in support for human-in-the-loop interactions and can be deployed via LangGraph Platform for production use.",
    category: "frameworks",
    relatedTerms: ["langchain", "multi-agent-system", "agentic-workflow", "agent-orchestration"],
  },
  {
    slug: "crewai",
    term: "CrewAI",
    definition:
      "CrewAI is a framework for building multi-agent AI systems where autonomous agents collaborate as a 'crew' to accomplish complex tasks. Each agent has a defined role, goal, and backstory, and they communicate with each other to divide and conquer tasks. CrewAI provides abstractions for sequential, hierarchical, and consensual process flows. It focuses on making multi-agent systems accessible by using a role-playing metaphor that is intuitive for developers to reason about.",
    category: "frameworks",
    relatedTerms: ["multi-agent-system", "agent-orchestration", "ai-agent", "pydantic-ai"],
  },
  {
    slug: "fastapi",
    term: "FastAPI",
    definition:
      "FastAPI is a modern, high-performance Python web framework for building APIs, built on top of Starlette (for async HTTP) and Pydantic (for data validation). It automatically generates interactive API documentation (Swagger/OpenAPI), provides type-safe request/response handling, and supports async/await for concurrent operations. FastAPI has become the go-to choice for building AI agent backends and LLM-powered API services because of its speed, developer experience, and native Pydantic integration. It handles WebSocket connections for streaming LLM responses and integrates seamlessly with Python AI libraries.",
    category: "frameworks",
    relatedTerms: ["pydantic", "pydantic-ai", "websocket-streaming", "api-gateway"],
  },
  {
    slug: "nextjs",
    term: "Next.js",
    definition:
      "Next.js is a React framework for building full-stack web applications with features like server-side rendering (SSR), static site generation (SSG), API routes, and edge functions. It provides file-based routing, automatic code splitting, and built-in optimization for images and fonts. In the AI agent ecosystem, Next.js is commonly used as the frontend framework for building chat interfaces, dashboards, and admin panels that connect to Python/FastAPI AI backends. It handles real-time streaming UI updates via Server-Sent Events or WebSockets.",
    category: "frameworks",
    relatedTerms: ["fastapi", "server-sent-events", "websocket-streaming"],
  },
  {
    slug: "docker",
    term: "Docker",
    definition:
      "Docker is a containerization platform that packages applications and their dependencies into portable, isolated containers that run consistently across any environment. Containers use OS-level virtualization to share the host kernel while maintaining process and filesystem isolation. In AI development, Docker is essential for reproducible environments (consistent Python versions, CUDA drivers, model dependencies), local development that mirrors production, and deploying multi-service architectures (API server, worker processes, vector database, cache). Docker Compose orchestrates multi-container setups for local development.",
    category: "frameworks",
    relatedTerms: ["kubernetes", "containerization", "ci-cd-pipeline", "agent-sandbox"],
  },
  {
    slug: "kubernetes",
    term: "Kubernetes",
    definition:
      "Kubernetes (K8s) is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications. It handles service discovery, load balancing, automated rollouts and rollbacks, self-healing, and secret management. For AI applications, Kubernetes manages the complex infrastructure of LLM-powered services — scaling worker pods based on queue depth, managing GPU resources, and coordinating multiple services (API servers, model servers, vector databases). It is the standard for production AI deployments at scale.",
    category: "frameworks",
    relatedTerms: ["docker", "containerization", "load-balancing", "infrastructure-as-code"],
  },
  {
    slug: "celery",
    term: "Celery",
    definition:
      "Celery is a distributed task queue library for Python that enables asynchronous execution of long-running tasks outside of the main application process. It supports multiple message brokers (Redis, RabbitMQ) and result backends, with features like task routing, retries, rate limiting, and scheduled tasks. In AI applications, Celery handles background processing of LLM calls, document ingestion pipelines, batch embedding generation, and other compute-intensive operations that would block the API server. It allows horizontal scaling by adding more worker processes.",
    category: "frameworks",
    relatedTerms: ["redis", "fastapi", "data-pipeline"],
  },
  {
    slug: "redis",
    term: "Redis",
    definition:
      "Redis is an open-source, in-memory data structure store used as a database, cache, message broker, and streaming engine. It supports strings, hashes, lists, sets, sorted sets, and streams with sub-millisecond latency. In AI agent systems, Redis serves multiple roles: caching LLM responses to reduce cost and latency, storing conversation history and agent state, acting as a message broker for Celery task queues, managing rate limiting, and providing pub/sub for real-time event streaming. Redis is a critical infrastructure component in production AI architectures.",
    category: "frameworks",
    relatedTerms: ["celery", "agent-memory", "rate-limiting", "fastapi"],
  },
  {
    slug: "postgresql",
    term: "PostgreSQL",
    definition:
      "PostgreSQL is an advanced open-source relational database known for its reliability, feature richness, and extensibility. It supports JSON/JSONB for semi-structured data, full-text search, and a vast ecosystem of extensions. In AI applications, PostgreSQL serves as the primary data store for application data, user information, conversation logs, and audit trails. With the pgvector extension, it also doubles as a vector database, enabling a single-database architecture for both relational and vector data. This simplifies infrastructure and reduces operational complexity.",
    category: "frameworks",
    relatedTerms: ["pgvector", "database-migration", "fastapi"],
  },
  {
    slug: "pgvector",
    term: "pgvector",
    definition:
      "pgvector is a PostgreSQL extension that adds vector similarity search capabilities to PostgreSQL, enabling it to function as a vector database within your existing relational database. It supports storing embeddings as vector columns, creating HNSW or IVFFlat indexes for approximate nearest neighbor search, and filtering by metadata using standard SQL WHERE clauses. pgvector is popular for small to medium RAG deployments because it eliminates the need for a separate vector database — you can store both application data and embeddings in one place. It supports cosine distance, L2 distance, and inner product similarity metrics.",
    category: "frameworks",
    relatedTerms: ["postgresql", "vector-database", "vector-embedding", "rag-retrieval-augmented-generation"],
  },
  {
    slug: "milvus",
    term: "Milvus",
    definition:
      "Milvus is an open-source, cloud-native vector database built for scalable similarity search and AI applications. It supports billion-scale vector storage with multiple index types (HNSW, IVF, DiskANN), hybrid search combining vector and scalar filtering, and multi-tenancy. Milvus is designed for high-throughput production workloads and offers features like data partitioning, replicas, and dynamic schema. It is available as a self-hosted solution or as a managed cloud service (Zilliz Cloud), making it suitable for large-scale RAG and recommendation systems.",
    category: "frameworks",
    relatedTerms: ["vector-database", "rag-retrieval-augmented-generation", "semantic-search", "qdrant"],
  },
  {
    slug: "qdrant",
    term: "Qdrant",
    definition:
      "Qdrant is an open-source vector database and similarity search engine written in Rust, designed for high performance and production reliability. It supports payload (metadata) filtering, multi-vector storage, quantization for reduced memory usage, and HNSW indexing for fast approximate nearest neighbor search. Qdrant offers a rich filtering query language, collection aliasing for zero-downtime updates, and horizontal scaling via sharding. It is available as a self-hosted Docker image or a managed cloud service and is popular in production RAG deployments.",
    category: "frameworks",
    relatedTerms: ["vector-database", "milvus", "pinecone", "chromadb"],
  },
  {
    slug: "chromadb",
    term: "ChromaDB",
    definition:
      "ChromaDB is an open-source embedding database designed for simplicity and ease of use in AI applications. It provides a Python-first API for storing, querying, and filtering vector embeddings with minimal setup — just pip install and go. ChromaDB supports in-memory storage for development, persistent storage for production, and includes built-in document embedding using default models. While not designed for billion-scale deployments, ChromaDB excels as a lightweight solution for prototyping, small to medium RAG applications, and local development.",
    category: "frameworks",
    relatedTerms: ["vector-database", "qdrant", "pinecone", "rag-retrieval-augmented-generation"],
  },
  {
    slug: "pinecone",
    term: "Pinecone",
    definition:
      "Pinecone is a fully managed, cloud-native vector database service that handles infrastructure operations like scaling, replication, and backups automatically. It provides a simple API for upserting, querying, and filtering vectors with metadata, and supports namespaces for multi-tenancy. Pinecone offers serverless and pod-based deployment options and integrates with major AI frameworks and embedding providers. Its managed nature makes it a popular choice for teams that want vector search capabilities without the operational overhead of running a self-hosted vector database.",
    category: "frameworks",
    relatedTerms: ["vector-database", "qdrant", "milvus", "chromadb"],
  },
  {
    slug: "llamaindex",
    term: "LlamaIndex",
    definition:
      "LlamaIndex (formerly GPT Index) is a data framework for building LLM-powered applications that connect to external data sources. It specializes in data ingestion, indexing, and retrieval, providing connectors for 160+ data sources (PDFs, databases, APIs, Slack, Notion, etc.) and various index structures (vector, keyword, knowledge graph, tree). LlamaIndex handles the RAG pipeline from document loading through query engines, with built-in re-ranking, query transformation, and response synthesis. It is often used alongside agent frameworks like Pydantic AI or LangChain for the retrieval layer.",
    category: "frameworks",
    relatedTerms: ["rag-retrieval-augmented-generation", "vector-database", "document-chunking", "langchain"],
  },
  {
    slug: "logfire",
    term: "Logfire",
    definition:
      "Logfire is an observability platform by Pydantic that provides deep visibility into Python applications, with first-class support for AI/LLM workloads. It captures structured logs, traces, and metrics with automatic instrumentation for Pydantic AI agents, FastAPI endpoints, database queries, and HTTP calls. Logfire displays LLM calls with full prompt/response content, token usage, latency, and cost breakdowns. Built on OpenTelemetry, it integrates with the existing observability ecosystem while providing a specialized UI for AI application debugging and monitoring.",
    category: "frameworks",
    relatedTerms: ["opentelemetry", "pydantic-ai", "agent-observability", "pydantic"],
  },
  {
    slug: "opentelemetry",
    term: "OpenTelemetry",
    definition:
      "OpenTelemetry (OTel) is a vendor-neutral, open-source observability framework for generating, collecting, and exporting telemetry data — traces, metrics, and logs — from applications. It provides auto-instrumentation libraries for popular frameworks and a standardized protocol (OTLP) for sending data to any compatible backend (Logfire, Jaeger, Datadog, Grafana). In AI applications, OpenTelemetry traces the full lifecycle of agent requests — from API call through LLM invocation, tool execution, and database queries — providing critical visibility into latency, errors, and resource usage.",
    category: "frameworks",
    relatedTerms: ["logfire", "agent-observability", "fastapi"],
  },
  {
    slug: "pydantic",
    term: "Pydantic",
    definition:
      "Pydantic is the most widely used data validation library for Python, using type annotations to define data schemas and automatically validate, serialize, and transform data. It is the validation backbone of FastAPI and is used extensively in AI applications for defining structured LLM outputs, API request/response models, configuration management, and data pipeline schemas. Pydantic v2, rewritten with a Rust core, offers significant performance improvements. The library's emphasis on type safety and developer experience has made it fundamental to the Python AI ecosystem.",
    category: "frameworks",
    relatedTerms: ["pydantic-ai", "fastapi", "logfire"],
  },

  // ── Infrastructure ──────────────────────────────────────────────────────────

  {
    slug: "websocket-streaming",
    term: "WebSocket Streaming",
    definition:
      "WebSocket streaming uses the WebSocket protocol to establish a persistent, full-duplex communication channel between the client and server, enabling real-time bidirectional data flow. In AI applications, WebSockets stream LLM-generated tokens to the client as they are produced, providing a responsive 'typing' experience rather than waiting for the complete response. WebSockets also allow the client to send interruption signals (stop generation) and receive structured events (tool calls, status updates) during agent execution. They are the preferred transport for interactive AI chat applications.",
    category: "infrastructure",
    relatedTerms: ["server-sent-events", "fastapi", "nextjs"],
  },
  {
    slug: "server-sent-events",
    term: "Server-Sent Events",
    definition:
      "Server-Sent Events (SSE) is a standard HTTP-based protocol for server-to-client streaming, where the server pushes events over a long-lived HTTP connection. SSE is simpler than WebSockets — it uses standard HTTP, works through proxies and load balancers without special configuration, and automatically reconnects on disconnection. In AI applications, SSE is commonly used to stream LLM token generation to the client. While it only supports server-to-client communication (unlike WebSocket's bidirectional flow), this is sufficient for most LLM streaming use cases. Many LLM APIs (OpenAI, Anthropic) use SSE as their streaming format.",
    category: "infrastructure",
    relatedTerms: ["websocket-streaming", "fastapi", "api-gateway"],
  },
  {
    slug: "api-gateway",
    term: "API Gateway",
    definition:
      "An API gateway is a reverse proxy that sits between clients and backend services, providing a single entry point for API requests. It handles cross-cutting concerns like authentication, rate limiting, request routing, load balancing, SSL termination, request/response transformation, and monitoring. In AI architectures, API gateways manage access to LLM endpoints, enforce per-user rate limits and token budgets, route requests to different model providers, and provide a unified API surface for multiple backend services. Popular options include Kong, Traefik, AWS API Gateway, and Nginx.",
    category: "infrastructure",
    relatedTerms: ["rate-limiting", "authentication-jwt", "reverse-proxy", "load-balancing"],
  },
  {
    slug: "rate-limiting",
    term: "Rate Limiting",
    definition:
      "Rate limiting is a technique for controlling the frequency of requests a client can make to an API or service within a specified time window. It protects services from abuse, ensures fair resource allocation among users, and prevents downstream services (like LLM APIs) from being overwhelmed. Common algorithms include fixed window, sliding window, token bucket, and leaky bucket. In AI applications, rate limiting is applied at multiple layers: API gateway (requests per minute), LLM proxy (tokens per minute), and application level (agent runs per user per day).",
    category: "infrastructure",
    relatedTerms: ["api-gateway", "token-budget", "cost-tracking", "load-balancing"],
  },
  {
    slug: "authentication-jwt",
    term: "Authentication (JWT)",
    definition:
      "JWT (JSON Web Token) authentication is a stateless authentication mechanism where the server issues a digitally signed token containing user identity claims after successful login. The client includes this token in subsequent requests (typically in the Authorization header), and the server verifies the signature without needing to query a session store. JWTs are self-contained, carry an expiration time, and can include custom claims like user roles and permissions. In AI applications, JWT authentication secures API endpoints, identifies users for cost tracking, and enforces per-user rate limits and token budgets.",
    category: "infrastructure",
    relatedTerms: ["oauth", "api-gateway", "rate-limiting"],
  },
  {
    slug: "oauth",
    term: "OAuth",
    definition:
      "OAuth 2.0 is an authorization framework that enables third-party applications to access resources on behalf of a user without exposing their credentials. It uses access tokens issued by an authorization server after the user grants permission, supporting flows like Authorization Code (web apps), Client Credentials (service-to-service), and PKCE (mobile/SPA). In AI applications, OAuth enables secure integration with external services (Google, GitHub, Slack), allows agents to act on behalf of users in other systems, and provides the standard authentication layer for MCP servers accessing user data.",
    category: "infrastructure",
    relatedTerms: ["authentication-jwt", "api-gateway", "mcp-model-context-protocol"],
  },
  {
    slug: "cors",
    term: "CORS",
    definition:
      "CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls which web origins can make requests to your API. By default, browsers block cross-origin requests (e.g., a frontend at app.example.com calling an API at api.example.com). CORS headers configure which origins, HTTP methods, and headers are allowed. In AI applications with separate frontend and backend services, proper CORS configuration is essential for the frontend to communicate with the API server, WebSocket endpoints, and SSE streams. Misconfigured CORS is a common source of deployment issues.",
    category: "infrastructure",
    relatedTerms: ["api-gateway", "content-security-policy", "fastapi"],
  },
  {
    slug: "content-security-policy",
    term: "Content Security Policy",
    definition:
      "Content Security Policy (CSP) is a browser security standard that defines which resources (scripts, styles, images, connections) a web page is allowed to load. It is delivered via HTTP headers and helps prevent cross-site scripting (XSS), data injection, and other code injection attacks. In AI applications, CSP is particularly important because chat interfaces may render LLM-generated content — a strict CSP prevents any injected scripts from executing. CSP also controls which origins can be connected to via WebSocket or fetch, adding defense-in-depth for streaming AI interfaces.",
    category: "infrastructure",
    relatedTerms: ["cors", "prompt-injection", "api-gateway"],
  },
  {
    slug: "ci-cd-pipeline",
    term: "CI/CD Pipeline",
    definition:
      "A CI/CD (Continuous Integration / Continuous Deployment) pipeline automates the process of building, testing, and deploying software changes. CI automatically runs tests, linting, and type checking on every commit. CD automatically deploys validated changes to staging or production environments. In AI applications, CI/CD pipelines additionally handle model validation, prompt regression testing, embedding model updates, and vector database re-indexing. Popular tools include GitHub Actions, GitLab CI, and Jenkins. Well-designed CI/CD is critical for maintaining the reliability of production AI systems through frequent, safe updates.",
    category: "infrastructure",
    relatedTerms: ["docker", "infrastructure-as-code", "containerization"],
  },
  {
    slug: "infrastructure-as-code",
    term: "Infrastructure as Code",
    definition:
      "Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable configuration files rather than manual processes. IaC enables version-controlled, reproducible, and auditable infrastructure changes — the same code always produces the same infrastructure. Tools include Terraform (multi-cloud), Pulumi (general-purpose programming languages), and cloud-specific tools like AWS CDK and Google Deployment Manager. In AI deployments, IaC manages GPU instances, vector database clusters, load balancers, and networking configurations that make up complex AI serving infrastructure.",
    category: "infrastructure",
    relatedTerms: ["kubernetes", "docker", "ci-cd-pipeline", "containerization"],
  },
  {
    slug: "containerization",
    term: "Containerization",
    definition:
      "Containerization is the process of packaging an application and all its dependencies (runtime, libraries, system tools, configuration) into a standardized, portable unit called a container. Containers share the host OS kernel but maintain isolated process and filesystem environments, making them lighter than virtual machines. Containerization ensures that applications run identically across development, testing, and production environments. In AI development, containerization is essential for managing complex dependency chains (CUDA, PyTorch, model files), enabling reproducible builds, and deploying multi-service architectures.",
    category: "infrastructure",
    relatedTerms: ["docker", "kubernetes", "agent-sandbox", "ci-cd-pipeline"],
  },
  {
    slug: "reverse-proxy",
    term: "Reverse Proxy",
    definition:
      "A reverse proxy is a server that sits in front of backend services and forwards client requests to the appropriate backend, adding capabilities like SSL termination, load balancing, caching, and request routing. Unlike a forward proxy (which acts on behalf of clients), a reverse proxy acts on behalf of servers. In AI architectures, reverse proxies (Nginx, Caddy, Traefik) handle SSL, route traffic to different services (API, WebSocket, static files), provide rate limiting, and enable zero-downtime deployments through upstream switching.",
    category: "infrastructure",
    relatedTerms: ["load-balancing", "api-gateway", "websocket-streaming"],
  },
  {
    slug: "load-balancing",
    term: "Load Balancing",
    definition:
      "Load balancing distributes incoming network traffic across multiple backend server instances to ensure no single server becomes a bottleneck, improving application availability and responsiveness. Algorithms include round-robin, least connections, IP hash, and weighted distribution. In AI applications, load balancing distributes LLM inference requests across multiple model-serving instances, routes WebSocket connections for streaming, and manages traffic spikes during high-usage periods. Health checks automatically remove unhealthy instances from the pool, ensuring requests only reach functional servers.",
    category: "infrastructure",
    relatedTerms: ["reverse-proxy", "api-gateway", "health-check", "kubernetes"],
  },
  {
    slug: "health-check",
    term: "Health Check",
    definition:
      "A health check is an endpoint or probe that reports whether a service is running and ready to accept requests. Health checks come in two flavors: liveness probes (is the process alive?) and readiness probes (is the service ready to handle traffic?). In AI deployments, health checks verify not only that the API server is running but also that model files are loaded, database connections are active, and vector database indexes are available. Kubernetes, load balancers, and orchestration systems use health checks to automatically restart failed services and route traffic away from unhealthy instances.",
    category: "infrastructure",
    relatedTerms: ["load-balancing", "kubernetes", "model-serving"],
  },
  {
    slug: "database-migration",
    term: "Database Migration",
    definition:
      "Database migration is the process of evolving a database schema over time through versioned, incremental change scripts that can be applied (and often rolled back) in order. Migration tools like Alembic (Python/SQLAlchemy), Prisma Migrate (TypeScript), and Flyway track which migrations have been applied and ensure consistent schema across environments. In AI applications, migrations manage conversation history tables, vector storage schemas, user preferences, agent run logs, and cost tracking records. Automated migration as part of CI/CD ensures database schema stays in sync with application code.",
    category: "infrastructure",
    relatedTerms: ["postgresql", "ci-cd-pipeline", "fastapi"],
  },

  // ── FastAPI & Python (python-backend) ───────────────────────────────────────

  {
    slug: "fastapi-framework",
    term: "FastAPI",
    definition:
      "FastAPI is a modern, high-performance Python web framework for building APIs, leveraging Python type hints and Pydantic for automatic request validation, serialization, and OpenAPI documentation generation. It is built on Starlette for async HTTP handling and Uvicorn as the ASGI server, achieving performance comparable to Node.js and Go. FastAPI's native async support makes it ideal for AI backends that need to handle concurrent LLM API calls, streaming responses, and WebSocket connections. It has become the standard Python framework for building AI agent API services.",
    category: "python-backend",
    relatedTerms: ["pydantic", "uvicorn", "asgi", "openapi-schema"],
  },
  {
    slug: "api-router",
    term: "APIRouter",
    definition:
      "APIRouter is a FastAPI class for organizing API endpoints into modular, reusable groups that can be included in the main application with a shared prefix, tags, and dependencies. It enables code organization by separating routes into different files by feature or domain — for example, separating chat endpoints, admin endpoints, and health check endpoints. APIRouter supports the same decorators and dependency injection as the main FastAPI app, promoting clean separation of concerns in large AI backend applications.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "depends", "path-parameter", "query-parameter"],
  },
  {
    slug: "depends",
    term: "Depends",
    definition:
      "Depends is FastAPI's dependency injection function that declares dependencies for route handlers, enabling automatic resolution and injection of shared resources. Dependencies can be functions or classes that provide database sessions, authentication, configuration, rate limiters, or any reusable logic. They support nesting (dependencies can depend on other dependencies), caching within a request, and yield-based cleanup (for resource management). Depends is central to FastAPI's architecture and is used extensively in AI backends for injecting LLM clients, vector database connections, and user context.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "dependency-injection-fastapi", "api-router"],
  },
  {
    slug: "path-parameter",
    term: "Path Parameter",
    definition:
      "A path parameter is a variable segment in a URL path that is extracted and passed to the route handler function — for example, /agents/{agent_id} extracts the agent_id value from the URL. In FastAPI, path parameters are declared as function parameters with type annotations and are automatically validated and converted to the specified type. They support enums for constrained values and Pydantic types for complex validation. Path parameters are used in RESTful API design to identify specific resources like conversations, agents, or documents.",
    category: "python-backend",
    relatedTerms: ["query-parameter", "fastapi-framework", "api-router"],
  },
  {
    slug: "query-parameter",
    term: "Query Parameter",
    definition:
      "A query parameter is a key-value pair appended to a URL after the '?' character (e.g., /search?q=vector+database&limit=10) used to filter, sort, paginate, or configure API responses. In FastAPI, query parameters are automatically extracted from any function parameter not in the path, with type validation, default values, and optional/required control. They are commonly used in AI APIs for specifying model selection, temperature, max tokens, search filters, and pagination of results.",
    category: "python-backend",
    relatedTerms: ["path-parameter", "fastapi-framework", "api-router"],
  },
  {
    slug: "http-exception",
    term: "HTTPException",
    definition:
      "HTTPException is FastAPI's mechanism for returning HTTP error responses with specific status codes and detail messages. It is raised within route handlers or dependencies to signal errors like 404 Not Found, 401 Unauthorized, 422 Validation Error, or 429 Too Many Requests. HTTPException automatically formats the error as a JSON response with the appropriate HTTP status code. In AI backends, it is used to handle cases like missing conversations, exhausted token budgets, rate limit violations, and invalid model configurations.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "status-code", "response-model"],
  },
  {
    slug: "status-code",
    term: "Status Code",
    definition:
      "HTTP status codes are three-digit numbers returned by a server indicating the result of an HTTP request. They are grouped into five classes: 1xx (informational), 2xx (success — 200 OK, 201 Created), 3xx (redirection), 4xx (client errors — 400 Bad Request, 401 Unauthorized, 404 Not Found, 429 Too Many Requests), and 5xx (server errors — 500 Internal Server Error, 503 Service Unavailable). In AI API design, proper status codes communicate to clients whether requests succeeded, what went wrong, and how to respond — for example, 429 signals the client to back off due to rate limiting.",
    category: "python-backend",
    relatedTerms: ["http-exception", "fastapi-framework", "rate-limiting"],
  },
  {
    slug: "response-model",
    term: "Response Model",
    definition:
      "In FastAPI, response_model is a parameter on route decorators that specifies a Pydantic model defining the shape and types of the API response. FastAPI uses this model to validate the response data, filter out any fields not in the schema (preventing data leakage), generate OpenAPI documentation, and provide IDE autocompletion for API clients. Response models ensure that your AI API always returns consistent, documented data structures. They can use model inheritance and Field configurations to handle different response scenarios.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "pydantic", "openapi-schema", "pydantic-basemodel"],
  },
  {
    slug: "openapi-schema",
    term: "OpenAPI Schema",
    definition:
      "OpenAPI Schema (formerly Swagger) is a standard specification for describing REST APIs in a machine-readable JSON/YAML format. It documents endpoints, request/response schemas, authentication methods, and error codes. FastAPI automatically generates an OpenAPI schema from route definitions and Pydantic models, providing interactive documentation UIs (Swagger UI, ReDoc) for free. In AI applications, the OpenAPI schema enables automatic client SDK generation, API testing, and serves as the foundation for LLM function calling — models use the schema to understand how to call your API.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "response-model", "pydantic", "function-calling"],
  },
  {
    slug: "uvicorn",
    term: "Uvicorn",
    definition:
      "Uvicorn is a lightning-fast ASGI (Asynchronous Server Gateway Interface) server implementation for Python, built on uvloop and httptools for maximum performance. It is the recommended server for running FastAPI applications in production, handling HTTP/1.1 and WebSocket connections with async I/O. Uvicorn supports auto-reload for development, SSL/TLS, and can be paired with Gunicorn as a process manager for multi-worker production deployments. In AI backends, Uvicorn's async capabilities are essential for efficiently handling concurrent LLM API calls and streaming responses.",
    category: "python-backend",
    relatedTerms: ["asgi", "fastapi-framework", "websocket-streaming"],
  },
  {
    slug: "asgi",
    term: "ASGI",
    definition:
      "ASGI (Asynchronous Server Gateway Interface) is the Python standard for building asynchronous web applications and servers, succeeding the synchronous WSGI standard. ASGI supports long-lived connections (WebSockets, Server-Sent Events), HTTP/2, and concurrent request handling through Python's async/await. It defines how the web server communicates with the Python application, enabling frameworks like FastAPI and Starlette to handle thousands of concurrent connections efficiently. ASGI is essential for AI backends that need to stream LLM responses, handle WebSocket chat connections, and make concurrent API calls.",
    category: "python-backend",
    relatedTerms: ["uvicorn", "fastapi-framework", "websocket-streaming", "middleware"],
  },
  {
    slug: "middleware",
    term: "Middleware",
    definition:
      "Middleware is a software layer that intercepts and processes HTTP requests and responses as they flow between the client and the application's route handlers. Middleware can modify requests (adding headers, authentication), modify responses (CORS, compression), perform cross-cutting concerns (logging, timing, error handling), or short-circuit the pipeline (blocking unauthorized requests). In FastAPI AI backends, middleware handles CORS configuration, request logging, authentication, rate limiting, token usage tracking, and adding observability traces to every request.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "cors", "rate-limiting", "asgi"],
  },
  {
    slug: "cors-fastapi",
    term: "CORS",
    definition:
      "CORS (Cross-Origin Resource Sharing) middleware in FastAPI configures which web origins, HTTP methods, and headers are permitted for cross-origin API requests. It adds the necessary Access-Control-Allow-* headers to responses and handles preflight OPTIONS requests. In AI applications with separate frontend (e.g., Next.js on localhost:3000) and backend (FastAPI on localhost:8000) services, CORS middleware is essential — without it, browsers block the frontend from calling the API. Production CORS configuration should whitelist specific origins rather than allowing all origins.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "middleware", "api-gateway"],
  },
  {
    slug: "dependency-injection-fastapi",
    term: "Dependency Injection (FastAPI)",
    definition:
      "Dependency Injection in FastAPI is the framework's built-in system for declaring, resolving, and injecting shared resources and logic into route handlers using the Depends() function. Dependencies can be simple functions, async functions, or classes that provide database sessions, authenticated users, configuration, LLM clients, or any reusable logic. FastAPI supports hierarchical dependencies, yield-based dependencies for cleanup, request-scoped caching, and dependency overrides for testing. This system is the backbone of well-structured AI backends, separating infrastructure from business logic.",
    category: "python-backend",
    relatedTerms: ["depends", "fastapi-framework", "dependency-injection"],
  },
  {
    slug: "webhook",
    term: "Webhook",
    definition:
      "A webhook is an HTTP callback mechanism where a server sends an automated POST request to a client-specified URL when a specific event occurs. Unlike polling (repeatedly checking for updates), webhooks push notifications in real-time. In AI applications, webhooks are used for async processing notifications (LLM batch job completed), payment events (Stripe subscription changes), external service integrations (GitHub PR events triggering agent analysis), and MCP tool callbacks. Webhook receivers must validate payloads (using signatures), handle retries, and be idempotent.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "api-router", "server-sent-events"],
  },
  {
    slug: "python-async-await",
    term: "Python Async Await",
    definition:
      "Python's async/await syntax enables cooperative multitasking through coroutines — functions that can pause execution (await) while waiting for I/O operations (network calls, file reads, database queries) and resume when the result is ready. This allows a single thread to handle thousands of concurrent operations efficiently. In AI backends, async/await is essential for concurrently calling multiple LLM APIs, streaming responses to multiple clients, performing parallel vector database queries, and handling WebSocket connections without blocking. FastAPI natively supports async route handlers.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "asgi", "uvicorn"],
  },
  {
    slug: "typeddict",
    term: "TypedDict",
    definition:
      "TypedDict is a Python typing construct that defines dictionaries with a fixed set of string keys, each associated with a specific value type. Unlike Pydantic BaseModel (which validates at runtime), TypedDict provides static type checking without runtime overhead. In AI applications, TypedDict is used for LangGraph state schemas, function return types, LLM response parsing, and API payloads where runtime validation is handled elsewhere. TypedDict offers lighter weight than Pydantic models while still providing full IDE autocompletion and type checker support.",
    category: "python-backend",
    relatedTerms: ["pydantic-basemodel", "pydantic", "graph-state", "json-schema"],
  },
  {
    slug: "json-schema",
    term: "JSON Schema",
    definition:
      "JSON Schema is a standard for describing the structure, constraints, and validation rules of JSON data. It specifies property types, required fields, value ranges, string patterns, array constraints, and nested structures in a machine-readable format. In AI applications, JSON Schema is foundational for LLM structured outputs (models generate JSON matching a schema), OpenAPI specifications (API documentation), Pydantic model definitions (which auto-generate JSON Schema), and tool/function definitions for function calling. JSON Schema is the universal language for describing data shapes in the AI stack.",
    category: "python-backend",
    relatedTerms: ["openapi-schema", "pydantic", "structured-output", "function-calling"],
  },
  {
    slug: "sdk",
    term: "SDK",
    definition:
      "An SDK (Software Development Kit) is a collection of tools, libraries, documentation, and code samples that simplifies integration with a service or platform. LLM providers offer SDKs in multiple languages — OpenAI's Python SDK, Anthropic's TypeScript SDK — that handle authentication, request formatting, streaming, error handling, and type definitions. SDKs abstract away low-level HTTP details, providing idiomatic interfaces (e.g., client.chat.completions.create()). In the AI ecosystem, SDKs also exist for vector databases, observability platforms, and agent frameworks, reducing integration time from days to minutes.",
    category: "python-backend",
    relatedTerms: ["openai-api", "fastapi-framework", "json-schema"],
  },

  // ── Next.js & Frontend (frontend) ───────────────────────────────────────────

  {
    slug: "nextjs-framework",
    term: "Next.js",
    definition:
      "Next.js is a React-based full-stack framework developed by Vercel that provides server-side rendering (SSR), static site generation (SSG), API routes, and edge functions out of the box. Its App Router architecture uses React Server Components for efficient server-side data fetching and streaming. Next.js is the dominant frontend framework for AI applications, powering chat interfaces, dashboards, and admin panels that connect to Python/FastAPI AI backends. It handles streaming UI updates, image optimization, SEO, and deployment to serverless platforms seamlessly.",
    category: "frontend",
    relatedTerms: ["app-router", "server-component", "vercel", "react-server-components"],
  },
  {
    slug: "app-router",
    term: "App Router",
    definition:
      "The App Router is Next.js's file-system-based routing architecture (introduced in Next.js 13) that uses React Server Components by default, supports nested layouts, loading states, error boundaries, and parallel routes. Routes are defined by directory structure in the app/ folder, with special files like page.tsx, layout.tsx, loading.tsx, and error.tsx. The App Router replaces the older Pages Router, offering improved performance through server-side rendering, streaming, and partial prerendering. It is the recommended architecture for new Next.js applications.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "server-component", "route-handler", "react-server-components"],
  },
  {
    slug: "server-component",
    term: "Server Component",
    definition:
      "A React Server Component (RSC) is a component that renders exclusively on the server, with its output (HTML) streamed to the client without sending its JavaScript to the browser. Server Components can directly access databases, file systems, and internal APIs without exposing credentials to the client, and they reduce the JavaScript bundle sent to the browser. In Next.js App Router, all components are Server Components by default unless marked with 'use client'. They are ideal for data-fetching pages, layouts, and any component that doesn't need client-side interactivity.",
    category: "frontend",
    relatedTerms: ["client-component", "react-server-components", "nextjs-framework", "app-router"],
  },
  {
    slug: "client-component",
    term: "Client Component",
    definition:
      "A Client Component in Next.js is a React component that runs in the browser, enabling interactivity through event handlers, state management (useState, useEffect), and browser APIs. Client Components are designated with the 'use client' directive at the top of the file. They are necessary for chat input forms, real-time message streaming displays, drag-and-drop interfaces, and any UI that responds to user interactions. In AI applications, Client Components handle the interactive chat UI while Server Components handle data fetching and initial rendering.",
    category: "frontend",
    relatedTerms: ["server-component", "nextjs-framework", "react-server-components"],
  },
  {
    slug: "server-action",
    term: "Server Action",
    definition:
      "Server Actions are async functions in Next.js that execute on the server but can be invoked directly from Client Components, eliminating the need to manually create API endpoints for form submissions and data mutations. Defined with the 'use server' directive, they handle form submissions, database writes, and cache revalidation. Server Actions provide type-safe server-client communication, automatic request handling, and progressive enhancement (forms work without JavaScript). In AI applications, they can trigger agent runs, save conversation feedback, or update user preferences.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "server-component", "route-handler", "app-router"],
  },
  {
    slug: "route-handler",
    term: "Route Handler",
    definition:
      "Route Handlers in Next.js are API endpoints defined using Web API Request and Response objects in route.ts files within the app/ directory. They support all HTTP methods (GET, POST, PUT, DELETE), streaming responses, cookies, headers, and dynamic segments. Route Handlers replace the older API Routes from the Pages Router and can run on both Node.js and Edge runtimes. In AI frontends, Route Handlers proxy requests to Python backends, handle authentication callbacks, serve SSE streams for chat responses, and implement BFF (Backend for Frontend) patterns.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "api-route", "app-router", "server-action"],
  },
  {
    slug: "api-route",
    term: "API Route",
    definition:
      "API Routes are server-side endpoints in Next.js that handle HTTP requests, enabling the frontend application to implement backend logic without a separate server. In the Pages Router, they are defined in pages/api/ directory, while in the App Router they are implemented as Route Handlers. API Routes can connect to databases, call external APIs, process form submissions, and handle authentication. In AI applications, they serve as a BFF (Backend for Frontend) layer that proxies requests to AI backends, handles streaming, and manages client authentication.",
    category: "frontend",
    relatedTerms: ["route-handler", "nextjs-framework", "server-action"],
  },
  {
    slug: "react-server-components",
    term: "React Server Components",
    definition:
      "React Server Components (RSC) is a React architecture where components render on the server by default, sending only HTML and a minimal serialized component tree to the client. RSCs can access server-side resources directly (databases, file systems, environment variables) and produce zero client-side JavaScript for non-interactive content. They interoperate with Client Components through a clear boundary — server components can pass serializable props to client components. RSC is the foundation of Next.js App Router and enables faster page loads, smaller bundles, and improved SEO for AI application frontends.",
    category: "frontend",
    relatedTerms: ["server-component", "client-component", "nextjs-framework", "app-router"],
  },
  {
    slug: "vercel",
    term: "Vercel",
    definition:
      "Vercel is a cloud platform optimized for deploying frontend applications, particularly Next.js, with automatic CI/CD, global CDN, serverless functions, and edge computing. It provides zero-configuration deployment, preview deployments for every PR, analytics, and speed insights. Vercel's infrastructure automatically scales serverless functions and edge functions, handles SSL, and optimizes asset delivery. For AI applications, Vercel offers the AI SDK for building streaming chat UIs, edge-compatible AI middleware, and seamless integration with AI backends through serverless proxy functions.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "serverless", "edge-runtime", "streaming-frontend"],
  },
  {
    slug: "serverless",
    term: "Serverless",
    definition:
      "Serverless computing is a cloud execution model where the cloud provider dynamically manages server allocation, scaling, and infrastructure — developers deploy functions that run on demand without provisioning servers. Functions are triggered by events (HTTP requests, queue messages, schedules) and scale automatically from zero to thousands of concurrent instances. Serverless platforms include AWS Lambda, Google Cloud Functions, Vercel Functions, and Cloudflare Workers. In AI applications, serverless handles API request processing, webhook handlers, and lightweight inference, though cold starts and execution time limits can be challenging for long-running LLM calls.",
    category: "frontend",
    relatedTerms: ["vercel", "edge-runtime", "aws-lambda", "serverless-function"],
  },
  {
    slug: "edge-runtime",
    term: "Edge Runtime",
    definition:
      "Edge runtime refers to lightweight JavaScript/WebAssembly execution environments deployed to edge locations (CDN nodes) around the world, enabling code to run geographically close to users with minimal latency. Next.js and Vercel support edge runtime for Route Handlers and Middleware, providing sub-millisecond cold starts and access to Web API standards. Edge runtime has limitations — no Node.js APIs, restricted package support, and smaller memory limits. In AI applications, edge runtime is used for authentication, request routing, A/B testing, and lightweight request transformation before proxying to AI backends.",
    category: "frontend",
    relatedTerms: ["vercel", "serverless", "nextjs-framework", "middleware-nextjs"],
  },
  {
    slug: "middleware-nextjs",
    term: "Middleware (Next.js)",
    definition:
      "Next.js Middleware is a function that runs before every request is processed, executing on the Edge Runtime at the CDN level. It can rewrite URLs, redirect users, modify headers, set cookies, and implement authentication checks — all before the page or API route handler executes. Middleware runs at the edge for minimal latency and is defined in a single middleware.ts file at the project root. In AI applications, middleware handles authentication guards, locale detection, bot filtering, and request logging across all routes.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "edge-runtime", "app-router", "middleware"],
  },
  {
    slug: "streaming-frontend",
    term: "Streaming (Frontend)",
    definition:
      "Frontend streaming in Next.js and React refers to progressively sending rendered HTML and data to the client as it becomes available, rather than waiting for the entire page to be ready. Next.js implements streaming through React Suspense boundaries — loading.tsx files show fallback UI while server components fetch data. For AI chat interfaces, streaming is critical: LLM tokens are displayed to the user as they arrive (via SSE or WebSocket), providing a responsive 'typing' experience. The Vercel AI SDK provides React hooks for easy streaming chat UI implementation.",
    category: "frontend",
    relatedTerms: ["server-sent-events", "websocket-streaming", "nextjs-framework", "server-component"],
  },
  {
    slug: "image-optimization",
    term: "Image Optimization",
    definition:
      "Image Optimization in Next.js is the automatic processing of images to serve the optimal format (WebP, AVIF), size, and quality for each user's device and viewport. The next/image component provides lazy loading (images load when entering the viewport), responsive sizing (serving different resolutions for different screen sizes), and automatic format conversion. Images are processed on-demand and cached for subsequent requests. This is relevant for AI applications that generate or display images, dashboards with data visualizations, and content-rich AI-powered applications.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "vercel"],
  },
  {
    slug: "metadata-nextjs",
    term: "Metadata",
    definition:
      "Metadata in Next.js refers to the system for defining HTML metadata (title, description, Open Graph tags, icons, robots directives) for pages using either a static metadata object or a dynamic generateMetadata function. This metadata is critical for SEO, social media sharing, and browser tab display. In AI-powered websites, dynamic metadata is used to generate unique titles and descriptions for each glossary page, blog post, or project page, improving search engine visibility. Next.js automatically handles metadata merging across nested layouts.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "app-router", "server-component"],
  },

  // ── Cloud & Deployment (cloud) ──────────────────────────────────────────────

  {
    slug: "aws",
    term: "AWS",
    definition:
      "Amazon Web Services (AWS) is the world's largest cloud computing platform, providing over 200 services including computing (EC2, Lambda), storage (S3), databases (RDS, DynamoDB), machine learning (SageMaker, Bedrock), and networking. For AI applications, AWS offers GPU instances for model training/inference, Bedrock for managed LLM access, SageMaker for MLOps, and a comprehensive ecosystem of supporting services. AWS's global infrastructure spans 30+ regions, providing the scale and reliability needed for production AI deployments.",
    category: "cloud",
    relatedTerms: ["aws-lambda", "google-cloud-platform", "azure", "kubernetes"],
  },
  {
    slug: "azure",
    term: "Azure",
    definition:
      "Microsoft Azure is a comprehensive cloud platform that provides strong AI capabilities through its partnership with OpenAI. Azure OpenAI Service offers enterprise-grade access to GPT-4, DALL-E, and Whisper models with data privacy guarantees, content filtering, and VNet integration. Azure also provides Azure Machine Learning for MLOps, Azure AI Search (formerly Cognitive Search) for RAG, and GPU computing for model training. Azure is particularly popular in enterprise AI deployments due to Microsoft's existing corporate relationships and compliance certifications.",
    category: "cloud",
    relatedTerms: ["aws", "google-cloud-platform", "microsoft-copilot", "openai-api"],
  },
  {
    slug: "google-cloud-platform",
    term: "Google Cloud Platform",
    definition:
      "Google Cloud Platform (GCP) is Google's suite of cloud computing services, with particular strength in AI/ML through services like Vertex AI (MLOps platform), Gemini API, Cloud TPUs (custom AI accelerators), BigQuery (serverless data warehouse), and Cloud Run (serverless containers). GCP provides access to Google's Gemini models through Vertex AI, along with managed services for the full ML lifecycle. Google's expertise in AI research (the Transformer paper originated at Google) translates into cutting-edge cloud AI services and infrastructure.",
    category: "cloud",
    relatedTerms: ["aws", "azure", "google-gemini", "cloud-run"],
  },
  {
    slug: "aws-lambda",
    term: "AWS Lambda",
    definition:
      "AWS Lambda is Amazon's serverless compute service that runs code in response to events without provisioning or managing servers. Functions are triggered by HTTP requests (via API Gateway), queue messages (SQS), file uploads (S3), schedules (EventBridge), and 200+ other event sources. Lambda automatically scales from zero to thousands of concurrent executions. For AI applications, Lambda handles webhook processing, lightweight API endpoints, async task triggering, and event-driven pipelines. Limitations include 15-minute execution timeout, 10GB memory limit, and cold start latency.",
    category: "cloud",
    relatedTerms: ["serverless-function", "aws", "serverless", "api-gateway"],
  },
  {
    slug: "kubernetes-cloud",
    term: "Kubernetes",
    definition:
      "Kubernetes (K8s) is the industry-standard container orchestration platform for deploying, scaling, and managing containerized applications in production. It automates container placement, load balancing, health monitoring, rolling updates, and secret management across clusters of machines. Managed Kubernetes services (EKS on AWS, GKE on GCP, AKS on Azure) reduce operational overhead. For AI workloads, Kubernetes manages GPU scheduling, model serving replicas, vector database clusters, and the complex multi-service architectures typical of production AI systems.",
    category: "cloud",
    relatedTerms: ["docker-cloud", "helm", "terraform", "container"],
  },
  {
    slug: "docker-cloud",
    term: "Docker",
    definition:
      "Docker is the standard containerization platform for packaging applications and dependencies into portable, isolated containers. A Dockerfile defines the container image (base OS, dependencies, application code), and Docker Compose orchestrates multi-container applications locally. For AI development, Docker ensures reproducible environments across teams and deployment stages — the same Python version, CUDA drivers, and library versions everywhere. Docker images are the deployment unit for Kubernetes, Cloud Run, and other orchestration platforms, making Docker the foundation of modern AI deployment workflows.",
    category: "cloud",
    relatedTerms: ["container", "kubernetes-cloud", "helm", "ci-cd-pipeline"],
  },
  {
    slug: "container",
    term: "Container",
    definition:
      "A container is a lightweight, standalone, executable package that includes an application and all its dependencies (runtime, libraries, system tools, configuration) isolated from the host system through OS-level virtualization. Containers share the host kernel but maintain separate process and filesystem namespaces, making them much lighter than virtual machines. In AI deployments, containers package model servers, API services, vector databases, and worker processes into portable units that run identically across development laptops, CI servers, and production clouds.",
    category: "cloud",
    relatedTerms: ["docker-cloud", "kubernetes-cloud", "containerization"],
  },
  {
    slug: "helm",
    term: "Helm",
    definition:
      "Helm is the package manager for Kubernetes, using 'charts' (templated YAML configurations) to define, version, and deploy complex multi-component applications. A Helm chart packages all Kubernetes resources (deployments, services, config maps, secrets, ingress) needed for an application with configurable values for different environments. For AI deployments, Helm charts manage the deployment of entire AI stacks — API server, model server, vector database, Redis cache, and monitoring — with environment-specific configurations for staging and production.",
    category: "cloud",
    relatedTerms: ["kubernetes-cloud", "terraform", "docker-cloud", "infrastructure-as-code"],
  },
  {
    slug: "terraform",
    term: "Terraform",
    definition:
      "Terraform is an open-source infrastructure-as-code tool by HashiCorp that enables declarative provisioning and management of cloud resources across multiple providers (AWS, Azure, GCP) using HCL (HashiCorp Configuration Language). Terraform tracks infrastructure state, plans changes before applying them, and supports modules for reusable infrastructure patterns. For AI deployments, Terraform provisions GPU instances, VPCs, load balancers, managed databases, Kubernetes clusters, and all supporting infrastructure needed for production AI systems, ensuring reproducible and version-controlled infrastructure.",
    category: "cloud",
    relatedTerms: ["infrastructure-as-code", "helm", "kubernetes-cloud", "aws"],
  },
  {
    slug: "serverless-function",
    term: "Serverless Function",
    definition:
      "A serverless function is a single-purpose piece of code deployed to a serverless platform that executes in response to events, automatically scaling from zero with no infrastructure management. Functions are stateless, short-lived, and billed only for actual execution time. Platforms include AWS Lambda, Google Cloud Functions, Azure Functions, and Vercel Functions. In AI applications, serverless functions handle webhook receivers, lightweight API proxies, scheduled tasks, and event processing. They are less suited for long-running LLM inference or GPU workloads due to timeout and resource limits.",
    category: "cloud",
    relatedTerms: ["aws-lambda", "serverless", "cloud-run", "vercel"],
  },
  {
    slug: "cloud-run",
    term: "Cloud Run",
    definition:
      "Google Cloud Run is a managed serverless platform that runs containerized applications with automatic scaling, including scale-to-zero. Unlike traditional serverless functions with strict size and time limits, Cloud Run supports any Docker container with configurable memory (up to 32GB), CPU, timeout (up to 60 minutes), and concurrency settings. For AI applications, Cloud Run is well-suited for hosting FastAPI backends, model serving endpoints, and RAG services because it supports long-running requests, WebSocket connections, and custom containers with GPU support.",
    category: "cloud",
    relatedTerms: ["google-cloud-platform", "docker-cloud", "serverless", "kubernetes-cloud"],
  },
  {
    slug: "hybrid-cloud",
    term: "Hybrid Cloud",
    definition:
      "Hybrid cloud is an IT architecture that combines on-premises infrastructure or private cloud with public cloud services, allowing workloads and data to move between them. Organizations use hybrid cloud for AI when they need to keep sensitive data on-premises (for compliance or privacy), leverage GPU compute from public clouds for training, run inference close to data sources, or gradually migrate workloads to the cloud. Kubernetes enables hybrid cloud by providing a consistent orchestration layer across on-premises and cloud environments.",
    category: "cloud",
    relatedTerms: ["private-cloud", "aws", "kubernetes-cloud", "edge-deployment"],
  },
  {
    slug: "private-cloud",
    term: "Private Cloud",
    definition:
      "A private cloud is a cloud computing environment dedicated exclusively to a single organization, either hosted on-premises or by a third-party provider. Private clouds provide the same cloud benefits (elasticity, self-service, automation) with enhanced security, compliance, and control over data residency. For AI applications handling sensitive data (healthcare, finance, government), private clouds ensure that training data, model weights, and inference requests never leave the organization's controlled environment. Running open-weight LLMs on private infrastructure eliminates concerns about data exposure to third-party API providers.",
    category: "cloud",
    relatedTerms: ["hybrid-cloud", "edge-deployment", "open-weights-model"],
  },
  {
    slug: "edge-deployment",
    term: "Edge Deployment",
    definition:
      "Edge deployment refers to running AI models and applications on edge devices or edge servers located close to end users or data sources, rather than in centralized cloud data centers. This reduces latency, minimizes bandwidth usage, enables offline operation, and keeps data local for privacy. Edge AI deployment requires optimized models (quantized, distilled, or pruned) that fit within edge hardware constraints. Common edge targets include smartphones, IoT gateways, retail kiosks, autonomous vehicles, and regional edge servers. Technologies like ONNX Runtime, TensorRT, and Core ML enable efficient edge model execution.",
    category: "cloud",
    relatedTerms: ["edge-computing", "quantization", "inference", "private-cloud"],
  },
  {
    slug: "inference-pipeline",
    term: "Inference Pipeline",
    definition:
      "An inference pipeline is a production system that orchestrates the complete flow of processing an AI prediction request — from receiving input, through preprocessing, model inference, postprocessing, and returning results. For LLM applications, the inference pipeline includes prompt assembly (combining system prompt, user input, retrieved context), model invocation (with retry and fallback logic), output parsing (extracting structured data), guardrail validation, and response formatting. Production inference pipelines include caching, load balancing, cost tracking, and observability at each stage.",
    category: "cloud",
    relatedTerms: ["inference", "model-serving", "rag-retrieval-augmented-generation", "data-pipeline"],
  },

  // ── Security & Ethics (security) ────────────────────────────────────────────

  {
    slug: "ai-ethics",
    term: "AI Ethics",
    definition:
      "AI ethics is the interdisciplinary field studying the moral implications of developing and deploying artificial intelligence systems. It addresses fairness (preventing discrimination), transparency (explainable decisions), privacy (protecting personal data), accountability (who is responsible for AI actions), and beneficence (ensuring AI benefits humanity). AI ethics frameworks guide organizations in developing responsible AI policies, conducting impact assessments, and implementing safeguards. As AI systems become more powerful and pervasive, ethical considerations are increasingly codified into regulations like the EU AI Act.",
    category: "security",
    relatedTerms: ["ai-safety", "ai-governance", "responsible-ai", "bias"],
  },
  {
    slug: "ai-safety",
    term: "AI Safety",
    definition:
      "AI safety is the research field focused on ensuring that AI systems behave safely and as intended, particularly as they become more capable. It encompasses alignment (ensuring AI goals match human values), robustness (maintaining safe behavior under adversarial conditions), interpretability (understanding model decisions), and containment (preventing unsafe actions). AI safety research includes red teaming, Constitutional AI, RLHF, guardrails, and formal verification. The field has gained urgency as frontier models approach capabilities that could cause significant harm if misaligned or misused.",
    category: "security",
    relatedTerms: ["ai-ethics", "alignment", "ai-governance", "llm-red-teaming"],
  },
  {
    slug: "ai-governance",
    term: "AI Governance",
    definition:
      "AI governance encompasses the policies, frameworks, regulations, and organizational structures that guide the development, deployment, and use of AI systems. It includes internal governance (model risk management, ethical review boards, responsible AI policies), industry standards (ISO 42001, NIST AI RMF), and governmental regulations (EU AI Act, Executive Order on AI). AI governance ensures accountability, transparency, and compliance throughout the AI lifecycle. Organizations implementing AI governance establish clear roles, risk assessments, documentation requirements, and monitoring procedures for their AI systems.",
    category: "security",
    relatedTerms: ["ai-ethics", "ai-safety", "responsible-ai", "bias-auditing"],
  },
  {
    slug: "data-poisoning",
    term: "Data Poisoning",
    definition:
      "Data poisoning is an adversarial attack where an attacker intentionally corrupts training data to manipulate a model's behavior. By injecting carefully crafted examples into the training set, attackers can introduce backdoors (the model behaves normally except on trigger inputs), degrade overall performance, or bias the model toward specific outputs. For LLMs, data poisoning risks include corrupted web-scraped training data, manipulated fine-tuning datasets, and poisoned RAG knowledge bases. Defenses include data validation, anomaly detection, and training data provenance tracking.",
    category: "security",
    relatedTerms: ["ai-safety", "prompt-injection", "training-data", "bias"],
  },
  {
    slug: "differential-privacy",
    term: "Differential Privacy",
    definition:
      "Differential privacy is a mathematical framework for quantifying and limiting the privacy risk of individual data points when sharing aggregate statistics or training machine learning models. It works by adding calibrated noise to computations, ensuring that the output does not significantly change whether any individual's data is included or not. Differential privacy is used in federated learning, census data, and model training to provide provable privacy guarantees. It enables organizations to derive insights from sensitive data while protecting individual privacy, with an epsilon parameter controlling the privacy-utility trade-off.",
    category: "security",
    relatedTerms: ["federated-learning", "privacy-enhancing-technologies", "ai-governance", "zero-data-retention"],
  },
  {
    slug: "zero-data-retention",
    term: "Zero Data Retention",
    definition:
      "Zero data retention (ZDR) is a data handling policy where an AI service provider commits to not storing, logging, or using customer input data and model outputs after the API request is completed. This is critical for organizations handling sensitive data (healthcare, legal, financial) that need LLM capabilities without the risk of data exposure. Major LLM providers offer ZDR options, typically at enterprise tiers — OpenAI's Enterprise API and Anthropic's API both offer ZDR commitments. ZDR policies must be verified through contracts, audits, and compliance certifications.",
    category: "security",
    relatedTerms: ["differential-privacy", "hipaa-compliance", "ai-governance", "privacy-enhancing-technologies"],
  },
  {
    slug: "hipaa-compliance",
    term: "HIPAA Compliance",
    definition:
      "HIPAA (Health Insurance Portability and Accountability Act) compliance in AI refers to meeting the regulatory requirements for handling protected health information (PHI) when building AI systems for healthcare. HIPAA-compliant AI deployments require encrypted data transmission and storage, access controls, audit logging, Business Associate Agreements (BAAs) with cloud and LLM providers, and policies preventing PHI from being used in model training. Running open-weight models on private infrastructure or using HIPAA-eligible managed services (Azure OpenAI, AWS HealthLake) are common approaches for compliant healthcare AI.",
    category: "security",
    relatedTerms: ["ai-governance", "zero-data-retention", "private-cloud", "differential-privacy"],
  },
  {
    slug: "privacy-enhancing-technologies",
    term: "Privacy-Enhancing Technologies",
    definition:
      "Privacy-Enhancing Technologies (PETs) are a collection of techniques and tools designed to protect personal data while still enabling useful computation and AI model training. PETs include differential privacy (adding noise to preserve individual privacy), federated learning (training models without centralizing data), homomorphic encryption (computing on encrypted data), secure multi-party computation (jointly computing without revealing inputs), and synthetic data generation. PETs are increasingly important for AI applications that process sensitive data, enabling organizations to leverage AI while complying with privacy regulations like GDPR.",
    category: "security",
    relatedTerms: ["differential-privacy", "federated-learning", "zero-data-retention", "ai-governance"],
  },
  {
    slug: "bias-auditing",
    term: "Bias Auditing",
    definition:
      "Bias auditing is the systematic evaluation of AI systems for unfair or discriminatory behavior across different demographic groups, use cases, and input distributions. It involves testing model outputs for disparities based on race, gender, age, language, and other protected attributes, using both automated metrics and human evaluation. Bias audits examine training data composition, model predictions, and downstream impact. Regulatory frameworks (EU AI Act, NYC Local Law 144) increasingly require bias audits for AI systems used in consequential decisions. Tools include Fairlearn, AI Fairness 360, and custom evaluation pipelines.",
    category: "security",
    relatedTerms: ["bias", "responsible-ai", "ai-governance", "ai-ethics"],
  },
  {
    slug: "responsible-ai",
    term: "Responsible AI",
    definition:
      "Responsible AI is an organizational approach to developing and deploying AI systems that are fair, transparent, accountable, safe, and privacy-preserving. It encompasses the full lifecycle — from data collection and model training through deployment and monitoring — with practices including bias auditing, explainability, human oversight, security testing, and environmental impact assessment. Responsible AI frameworks (Google's AI Principles, Microsoft's Responsible AI Standard, NIST AI RMF) provide structured approaches for organizations to implement AI governance. It is both an ethical imperative and increasingly a regulatory requirement.",
    category: "security",
    relatedTerms: ["ai-ethics", "ai-governance", "bias-auditing", "ai-safety"],
  },

  // ── Tools & Data (various categories) ───────────────────────────────────────

  {
    slug: "jupyter-notebook",
    term: "Jupyter Notebook",
    definition:
      "Jupyter Notebook is an open-source interactive computing environment that combines executable code, rich text, equations, and visualizations in a single document (notebook). It supports over 40 programming languages with Python being the most common. Jupyter Notebooks are the standard tool for data exploration, ML experimentation, model prototyping, and educational content in AI/ML. JupyterLab provides a more modern IDE-like experience, and Google Colab offers free cloud-hosted notebooks with GPU access. Notebooks are widely used for sharing reproducible AI research and tutorials.",
    category: "frameworks",
    relatedTerms: ["pandas", "numpy", "pytorch", "scikit-learn"],
  },
  {
    slug: "pandas",
    term: "Pandas",
    definition:
      "Pandas is the foundational Python library for data manipulation and analysis, providing the DataFrame data structure for working with tabular data. It supports reading/writing CSV, JSON, SQL, Excel, and Parquet formats, along with powerful operations for filtering, grouping, joining, pivoting, and aggregating data. In AI workflows, Pandas is used for data preprocessing, feature engineering, training data preparation, evaluation result analysis, and exploratory data analysis. While not designed for big data (use Polars or Spark for that), Pandas is the default tool for datasets that fit in memory.",
    category: "frameworks",
    relatedTerms: ["numpy", "jupyter-notebook", "scikit-learn", "big-data"],
  },
  {
    slug: "numpy",
    term: "NumPy",
    definition:
      "NumPy (Numerical Python) is the foundational Python library for numerical computing, providing efficient multi-dimensional array operations and mathematical functions. It is the backbone of the entire Python scientific computing ecosystem — Pandas, scikit-learn, PyTorch, and TensorFlow all build on NumPy arrays and conventions. NumPy's vectorized operations execute in optimized C code, providing orders-of-magnitude speedups over pure Python loops. In AI applications, NumPy handles vector operations, matrix mathematics, embedding manipulation, and data preprocessing.",
    category: "frameworks",
    relatedTerms: ["pandas", "pytorch", "tensorflow", "scikit-learn"],
  },
  {
    slug: "pytorch",
    term: "PyTorch",
    definition:
      "PyTorch is the dominant open-source deep learning framework, developed by Meta AI, used for research and production training of neural networks including large language models. It provides dynamic computational graphs (define-by-run), GPU acceleration via CUDA, automatic differentiation, and a rich ecosystem of model architectures and tools. PyTorch is the framework of choice for training LLMs, fine-tuning models (with libraries like Hugging Face Transformers, PEFT), and building custom neural architectures. Its eager execution mode and Pythonic API make it preferred for research, while TorchScript and torch.compile enable production optimization.",
    category: "frameworks",
    relatedTerms: ["tensorflow", "deep-learning", "numpy", "fine-tuning"],
  },
  {
    slug: "tensorflow",
    term: "TensorFlow",
    definition:
      "TensorFlow is an open-source deep learning framework developed by Google that provides tools for training and deploying machine learning models. It supports distributed training, model optimization, and deployment across platforms from mobile (TensorFlow Lite) to production servers (TensorFlow Serving) to browsers (TensorFlow.js). While PyTorch has become more popular for research, TensorFlow maintains a strong presence in production deployments, particularly in Google's ecosystem and enterprise environments. TensorFlow's Keras API provides a high-level interface for rapid model prototyping and training.",
    category: "frameworks",
    relatedTerms: ["pytorch", "deep-learning", "numpy", "model-serving"],
  },
  {
    slug: "scikit-learn",
    term: "Scikit-learn",
    definition:
      "Scikit-learn is the most widely used Python library for traditional machine learning, providing consistent APIs for classification, regression, clustering, dimensionality reduction, and model evaluation. It includes implementations of SVM, random forests, gradient boosting, K-means, PCA, and dozens of other algorithms, along with tools for data preprocessing, feature selection, cross-validation, and hyperparameter tuning. While deep learning frameworks handle neural networks, scikit-learn remains essential for classical ML tasks, baseline models, and the many production use cases where simpler models outperform deep learning.",
    category: "frameworks",
    relatedTerms: ["pandas", "numpy", "machine-learning", "supervised-learning"],
  },
];

// ── Helper functions ────────────────────────────────────────────────────────

export function getAllGlossarySlugs(): string[] {
  return glossaryTerms.map((t) => t.slug);
}

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getGlossaryTermsByCategory(category: GlossaryCategory): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}

export function getRelatedTerms(term: GlossaryTerm): GlossaryTerm[] {
  return term.relatedTerms
    .map((slug) => getGlossaryTermBySlug(slug))
    .filter((t): t is GlossaryTerm => t !== undefined);
}

/** Terms grouped by first letter, sorted alphabetically */
export function getTermsGroupedByLetter(): Map<string, GlossaryTerm[]> {
  const sorted = [...glossaryTerms].sort((a, b) =>
    a.term.localeCompare(b.term, "en", { sensitivity: "base" }),
  );
  const groups = new Map<string, GlossaryTerm[]>();
  for (const term of sorted) {
    const letter = term.term[0].toUpperCase();
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(term);
  }
  return groups;
}

/** Map of term slugs to relevant Vstorm project slugs */
export const termToProjectMap: Record<string, { slug: string; name: string }[]> = {
  "pydantic-ai": [
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
    { slug: "subagents-pydantic-ai", name: "Subagents for Pydantic AI" },
    { slug: "pydantic-ai-todo", name: "Pydantic AI Todo" },
  ],
  "ai-agent": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "agentic-ai": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
  "multi-agent-system": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "subagents-pydantic-ai", name: "Subagents for Pydantic AI" },
  ],
  "subagent-delegation": [
    { slug: "subagents-pydantic-ai", name: "Subagents for Pydantic AI" },
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
  "agent-orchestration": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
  "agentic-workflow": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "tool-calling": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "function-calling": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "human-in-the-loop": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
  "agent-memory": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
  ],
  "guardrails": [
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "agent-observability": [
    { slug: "logfire-assistant", name: "Logfire Assistant" },
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "cost-tracking": [
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
    { slug: "logfire-assistant", name: "Logfire Assistant" },
  ],
  "token-budget": [
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "logfire": [
    { slug: "logfire-assistant", name: "Logfire Assistant" },
  ],
  "opentelemetry": [
    { slug: "logfire-assistant", name: "Logfire Assistant" },
  ],
  "rag-retrieval-augmented-generation": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
  ],
  "vector-database": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "semantic-search": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "fastapi": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
  ],
  "docker": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "websocket-streaming": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
  ],
  "pydantic": [
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "prompt-injection": [
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "postgresql": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
    { slug: "database-pydantic-ai", name: "Database Pydantic AI" },
  ],
  "pgvector": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "celery": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "redis": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "agent-sandbox": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
  "large-language-models": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "mcp-model-context-protocol": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
  "document-chunking": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "hybrid-search": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "summarization-pydantic-ai": [
    { slug: "summarization-pydantic-ai", name: "Summarization Agent" },
  ],
  "database-migration": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "authentication-jwt": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
  ],
  "ci-cd-pipeline": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "containerization": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "agent-planning": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
};

export const termToBlogMap: Record<string, { slug: string; title: string }[]> = {
  "rag-retrieval-augmented-generation": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "vector-database": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "hybrid-search": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "semantic-search": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "re-ranking": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "document-chunking": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "pydantic-ai": [
    { slug: "choosing-ai-framework", title: "Pydantic AI vs LangChain vs LangGraph vs CrewAI: Which to Choose?" },
    { slug: "pydantic-ai-vs-langchain", title: "Pydantic AI vs LangChain for Production AI Agents" },
  ],
  "langchain": [
    { slug: "choosing-ai-framework", title: "Pydantic AI vs LangChain vs LangGraph vs CrewAI: Which to Choose?" },
    { slug: "same-chat-app-4-frameworks", title: "Same Chat App, 4 AI Frameworks" },
  ],
  "langgraph": [
    { slug: "choosing-ai-framework", title: "Pydantic AI vs LangChain vs LangGraph vs CrewAI: Which to Choose?" },
    { slug: "same-chat-app-4-frameworks", title: "Same Chat App, 4 AI Frameworks" },
  ],
  "crewai": [
    { slug: "choosing-ai-framework", title: "Pydantic AI vs LangChain vs LangGraph vs CrewAI: Which to Choose?" },
    { slug: "same-chat-app-4-frameworks", title: "Same Chat App, 4 AI Frameworks" },
  ],
  "ai-agent": [
    { slug: "open-source-claude-code-alternative", title: "Building an Open-Source Claude Code Alternative" },
    { slug: "choosing-ai-framework", title: "Which AI Agent Framework to Choose?" },
  ],
  "agentic-ai": [
    { slug: "open-source-claude-code-alternative", title: "Building an Open-Source Claude Code Alternative" },
  ],
  "multi-agent-system": [
    { slug: "ai-pr-reviewer-parallel-subagents", title: "AI PR Reviewer with 3 Parallel Subagents" },
  ],
  "agent-memory": [
    { slug: "ai-agent-memory-management", title: "AI Agent Memory: Why Your Agent Forgets After 50 Messages" },
    { slug: "ai-agent-selective-memory", title: "AI Agent Selective Memory: Stop Storing Everything" },
  ],
  "agent-observability": [
    { slug: "ai-agent-observability", title: "Observability for AI Agents Is Broken. Here's What We Built." },
  ],
  "agent-planning": [
    { slug: "task-planning-ai-agents", title: "Task Planning for AI Agents: Dependencies and Hierarchical Todos" },
  ],
  "websocket-streaming": [
    { slug: "websocket-streaming-ai-agents", title: "Real-Time AI Agent Streaming with WebSockets and FastAPI" },
  ],
  "fastapi": [
    { slug: "fastapi-nextjs-ai-template-guide", title: "Build a Full-Stack AI App with FastAPI and Next.js" },
    { slug: "ship-production-ai-app-fast", title: "Ship a Production AI App in 5 Minutes" },
  ],
  "docker": [
    { slug: "predictive-ai-docker-sandbox", title: "Give Your Agent a Docker Lab to Run Models" },
    { slug: "daytona-sub-90ms-code-execution", title: "Sub-90ms Cloud Code Execution with Daytona" },
  ],
  "agent-sandbox": [
    { slug: "predictive-ai-docker-sandbox", title: "Give Your Agent a Docker Lab to Run Models" },
    { slug: "daytona-sub-90ms-code-execution", title: "Sub-90ms Cloud Code Execution with Daytona" },
  ],
  "human-in-the-loop": [
    { slug: "open-source-claude-code-alternative", title: "Building an Open-Source Claude Code Alternative" },
  ],
  "tool-calling": [
    { slug: "choosing-ai-framework", title: "Which AI Agent Framework to Choose?" },
  ],
  "function-calling": [
    { slug: "choosing-ai-framework", title: "Which AI Agent Framework to Choose?" },
  ],
  "prompt-engineering": [
    { slug: "agents-md-ai-friendly-codebase", title: "AGENTS.md: Making Your Codebase AI-Agent Friendly" },
  ],
  "guardrails": [
    { slug: "open-source-claude-code-alternative", title: "Building an Open-Source Claude Code Alternative" },
  ],
  "prompt-injection": [
    { slug: "open-source-claude-code-alternative", title: "Building an Open-Source Claude Code Alternative" },
  ],
  "knowledge-distillation": [
    { slug: "ai-agent-memory-management", title: "AI Agent Memory Management" },
  ],
  "transformer": [
    { slug: "choosing-ai-framework", title: "Which AI Agent Framework to Choose?" },
  ],
  "fine-tuning": [
    { slug: "choosing-ai-framework", title: "Which AI Agent Framework to Choose?" },
  ],
  "hallucination": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "milvus": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "qdrant": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "chromadb": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "pgvector": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "pinecone": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "embedding-model": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "vector-embedding": [
    { slug: "full-rag-pipeline-4-vector-stores", title: "Full RAG Pipeline: 4 Vector Stores, Hybrid Search, and Reranking" },
  ],
  "subagent-delegation": [
    { slug: "ai-pr-reviewer-parallel-subagents", title: "AI PR Reviewer with 3 Parallel Subagents" },
  ],
  "task-decomposition": [
    { slug: "task-planning-ai-agents", title: "Task Planning for AI Agents" },
  ],
  "cost-tracking": [
    { slug: "ai-agent-observability", title: "Observability for AI Agents" },
  ],
  "nextjs": [
    { slug: "fastapi-nextjs-ai-template-guide", title: "Build a Full-Stack AI App with FastAPI and Next.js" },
    { slug: "zero-to-production-ai-agent-30-minutes", title: "Zero to Production AI Agent in 30 Minutes" },
  ],
  "kubernetes": [
    { slug: "ship-production-ai-app-fast", title: "Ship a Production AI App in 5 Minutes" },
  ],
  "containerization": [
    { slug: "ship-production-ai-app-fast", title: "Ship a Production AI App in 5 Minutes" },
  ],
};
