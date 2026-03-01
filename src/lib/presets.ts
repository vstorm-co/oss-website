// ---------------------------------------------------------------------------
// Preset configurations.
// Ported from fastapi_gen/cli.py lines 238-300.
// Each preset is a partial override applied on top of defaultConfig.
// ---------------------------------------------------------------------------

import type { ProjectConfig } from "./types";

export type PresetName = "minimal" | "production" | "ai-agent";

export interface PresetDefinition {
  name: PresetName;
  label: string;
  description: string;
  overrides: Partial<ProjectConfig>;
}

export const presets: Record<PresetName, PresetDefinition> = {
  minimal: {
    name: "minimal",
    label: "Minimal",
    description:
      "Bare-bones FastAPI project with no database, no auth, no Docker. Great for learning or quick prototypes.",
    overrides: {
      database: "none",
      auth: "none",
      enable_logfire: false,
      enable_redis: false,
      enable_caching: false,
      enable_rate_limiting: false,
      enable_pagination: false,
      enable_admin_panel: false,
      enable_websockets: false,
      enable_docker: false,
      enable_kubernetes: false,
      ci_type: "none",
      include_example_crud: false,
      enable_ai_agent: false,
    },
  },

  production: {
    name: "production",
    label: "Production",
    description:
      "Full production stack with PostgreSQL, JWT auth, Redis caching, Sentry, Prometheus, Docker, and Kubernetes.",
    overrides: {
      database: "postgresql",
      auth: "jwt",
      enable_logfire: true,
      enable_redis: true,
      enable_caching: true,
      enable_rate_limiting: true,
      enable_sentry: true,
      enable_prometheus: true,
      enable_docker: true,
      enable_kubernetes: true,
      ci_type: "github",
      include_example_crud: true,
    },
  },

  "ai-agent": {
    name: "ai-agent",
    label: "AI Agent",
    description:
      "AI-focused stack with Pydantic AI, WebSockets for streaming, conversation persistence, and Redis.",
    overrides: {
      database: "postgresql",
      auth: "jwt",
      enable_logfire: true,
      enable_redis: true,
      enable_ai_agent: true,
      ai_framework: "pydantic_ai",
      enable_websockets: true,
      enable_conversation_persistence: true,
      enable_docker: true,
      ci_type: "github",
    },
  },
};

export const presetNames: PresetName[] = ["minimal", "production", "ai-agent"];
