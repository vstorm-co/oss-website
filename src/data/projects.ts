import type { Lang } from "../i18n/translations";

export type ProjectStatus = "released" | "coming-soon";

export interface ProjectCategory {
  id: string;
  label: Record<Lang, string>;
  order: number;
}

export interface Project {
  slug: string;
  name: string;
  tagline: Record<Lang, string>;
  description: Record<Lang, string>;
  status: ProjectStatus;
  category: string;
  github?: string;
  pypi?: string;
  installCommand?: string;
  features: Record<Lang, string[]>;
  hasCustomLanding?: boolean;
  hasConfigurator?: boolean;
}

export const categories: ProjectCategory[] = [
  {
    id: "template",
    label: { en: "Project Template", pl: "Szablon Projektu", de: "Projektvorlage", es: "Plantilla de Proyecto" },
    order: 1,
  },
  {
    id: "framework",
    label: { en: "Agent Framework", pl: "Framework Agentów", de: "Agent-Framework", es: "Framework de Agentes" },
    order: 2,
  },
  {
    id: "toolset",
    label: { en: "Agent Toolsets", pl: "Narzędzia Agentów", de: "Agent-Toolsets", es: "Herramientas de Agentes" },
    order: 3,
  },
  {
    id: "resource",
    label: { en: "Resources & Examples", pl: "Zasoby i Przykłady", de: "Ressourcen & Beispiele", es: "Recursos y Ejemplos" },
    order: 4,
  },
];

export const projects: Project[] = [
  // ── Template ──────────────────────────────────────────────
  {
    slug: "full-stack-ai-agent-template",
    name: "Full-Stack AI Agent Template",
    tagline: {
      en: "Zero-to-production AI app in minutes",
      pl: "Od zera do produkcji w minuty",
      de: "Von Null zur Produktion in Minuten",
      es: "De cero a producción en minutos",
    },
    description: {
      en: "Generate complete FastAPI + Next.js projects with 5 AI frameworks, 75+ configuration options, and production-grade infrastructure. CLI generator + web configurator.",
      pl: "Generuj kompletne projekty FastAPI + Next.js z 5 frameworkami AI, 75+ opcjami konfiguracji i infrastrukturą produkcyjną. Generator CLI + konfigurator webowy.",
      de: "Generiere komplette FastAPI + Next.js Projekte mit 5 KI-Frameworks, 75+ Konfigurationsoptionen und produktionsreifer Infrastruktur.",
      es: "Genera proyectos completos FastAPI + Next.js con 5 frameworks de IA, 75+ opciones de configuración e infraestructura de producción.",
    },
    status: "released",
    category: "template",
    github: "vstorm-co/full-stack-ai-agent-template",
    pypi: "fastapi-fullstack",
    installCommand: "pip install fastapi-fullstack",
    features: {
      en: ["5 AI Frameworks", "75+ Config Options", "Web Configurator", "Docker + Kubernetes"],
      pl: ["5 Frameworków AI", "75+ Opcji Konfiguracji", "Konfigurator Webowy", "Docker + Kubernetes"],
      de: ["5 KI-Frameworks", "75+ Konfigurationsoptionen", "Web-Konfigurator", "Docker + Kubernetes"],
      es: ["5 Frameworks de IA", "75+ Opciones de Config", "Configurador Web", "Docker + Kubernetes"],
    },
    hasCustomLanding: true,
    hasConfigurator: true,
  },

  // ── Framework ─────────────────────────────────────────────
  {
    slug: "pydantic-deepagents",
    name: "Pydantic DeepAgents",
    tagline: {
      en: "Autonomous AI agents that plan, code, and ship",
      pl: "Autonomiczne agenty AI które planują, kodują i wdrażają",
      de: "Autonome KI-Agenten die planen, coden und deployen",
      es: "Agentes autónomos de IA que planifican, programan y despliegan",
    },
    description: {
      en: "Production-grade Python framework implementing the deep agent pattern (Claude Code architecture) with planning, filesystem access, subagents, persistent memory, and unlimited context.",
      pl: "Produkcyjny framework Python implementujący wzorzec deep agent (architektura Claude Code) z planowaniem, dostępem do systemu plików, subagentami i nieograniczonym kontekstem.",
      de: "Produktionsreifes Python-Framework mit Deep-Agent-Pattern (Claude-Code-Architektur): Planung, Dateizugriff, Subagenten, persistenter Speicher, unbegrenzter Kontext.",
      es: "Framework Python de producción con patrón de agente profundo (arquitectura Claude Code): planificación, acceso a archivos, subagentes, memoria persistente y contexto ilimitado.",
    },
    status: "released",
    category: "framework",
    github: "vstorm-co/pydantic-deepagents",
    pypi: "pydantic-deep",
    installCommand: "pip install pydantic-deep",
    features: {
      en: ["Unlimited Context", "Subagent Delegation", "Persistent Memory", "CLI Assistant"],
      pl: ["Nieograniczony Kontekst", "Delegacja Subagentów", "Trwała Pamięć", "Asystent CLI"],
      de: ["Unbegrenzter Kontext", "Subagent-Delegation", "Persistenter Speicher", "CLI-Assistent"],
      es: ["Contexto Ilimitado", "Delegación de Subagentes", "Memoria Persistente", "Asistente CLI"],
    },
    hasCustomLanding: true,
  },

  // ── Toolsets ──────────────────────────────────────────────
  {
    slug: "pydantic-ai-middleware",
    name: "Pydantic AI Middleware",
    tagline: {
      en: "Intercept, transform, and guard every AI call",
      pl: "Przechwytuj, transformuj i chroń każde wywołanie AI",
      de: "Jeden KI-Aufruf abfangen, transformieren und schützen",
      es: "Intercepta, transforma y protege cada llamada de IA",
    },
    description: {
      en: "Lightweight middleware library with 7 lifecycle hooks for Pydantic AI. Supports parallel execution, async guardrails, cost tracking, and permission decisions.",
      pl: "Lekka biblioteka middleware z 7 hookami cyklu życia dla Pydantic AI. Obsługuje równoległe wykonanie, asynchroniczne guardrails i śledzenie kosztów.",
      de: "Leichtgewichtige Middleware-Bibliothek mit 7 Lifecycle-Hooks für Pydantic AI. Parallele Ausführung, async Guardrails und Kostentracking.",
      es: "Biblioteca middleware ligera con 7 hooks de ciclo de vida para Pydantic AI. Ejecución paralela, guardrails async y seguimiento de costos.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/pydantic-ai-middleware",
    pypi: "pydantic-ai-middleware",
    installCommand: "pip install pydantic-ai-middleware",
    features: {
      en: ["7 Lifecycle Hooks", "Async Guardrails", "Cost Tracking", "Permission System"],
      pl: ["7 Hooków Cyklu Życia", "Asynchroniczne Guardrails", "Śledzenie Kosztów", "System Uprawnień"],
      de: ["7 Lifecycle-Hooks", "Async Guardrails", "Kostentracking", "Berechtigungssystem"],
      es: ["7 Hooks de Ciclo", "Guardrails Async", "Seguimiento de Costos", "Sistema de Permisos"],
    },
  },
  {
    slug: "subagents-pydantic-ai",
    name: "Subagents for Pydantic AI",
    tagline: {
      en: "Multi-agent orchestration with dynamic agent creation",
      pl: "Orkiestracja wielu agentów z dynamicznym tworzeniem",
      de: "Multi-Agenten-Orchestrierung mit dynamischer Erstellung",
      es: "Orquestación multi-agente con creación dinámica",
    },
    description: {
      en: "Multi-agent delegation toolset with synchronous, asynchronous, and auto-selected execution modes. Supports nested subagents, runtime agent creation, and parent-child communication.",
      pl: "Zestaw narzędzi do delegacji wielu agentów z synchronicznym, asynchronicznym i auto-wybranym trybem wykonania. Obsługuje zagnieżdżone subagenty i komunikację rodzic-dziecko.",
      de: "Multi-Agenten-Delegations-Toolset mit synchronen, asynchronen und automatisch gewählten Ausführungsmodi. Verschachtelte Subagenten und Eltern-Kind-Kommunikation.",
      es: "Toolset de delegación multi-agente con modos de ejecución síncronos, asíncronos y autoseleccionados. Subagentes anidados y comunicación padre-hijo.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/subagents-pydantic-ai",
    pypi: "subagents-pydantic-ai",
    installCommand: "pip install subagents-pydantic-ai",
    features: {
      en: ["Sync/Async/Auto Modes", "Nested Subagents", "Runtime Agent Creation", "Parent-Child Comms"],
      pl: ["Tryby Sync/Async/Auto", "Zagnieżdżone Subagenty", "Dynamiczne Tworzenie", "Komunikacja Rodzic-Dziecko"],
      de: ["Sync/Async/Auto-Modi", "Verschachtelte Subagenten", "Laufzeit-Erstellung", "Eltern-Kind-Komm."],
      es: ["Modos Sync/Async/Auto", "Subagentes Anidados", "Creación en Runtime", "Comunicación Padre-Hijo"],
    },
  },
  {
    slug: "pydantic-ai-backend",
    name: "Pydantic AI Backend",
    tagline: {
      en: "File storage, sandbox backends, and console toolset",
      pl: "Storage plików, sandboxe i zestaw narzędzi konsolowych",
      de: "Dateispeicher, Sandbox-Backends und Konsolen-Toolset",
      es: "Almacenamiento de archivos, sandboxes y toolset de consola",
    },
    description: {
      en: "Multiple backend options (in-memory, local filesystem, Docker sandbox) with a console toolset (ls, read, write, edit, grep, execute) and fine-grained permission system.",
      pl: "Wiele opcji backendów (pamięć, lokalny filesystem, Docker sandbox) z zestawem narzędzi konsolowych (ls, read, write, edit, grep, execute) i systemem uprawnień.",
      de: "Mehrere Backend-Optionen (In-Memory, lokales Dateisystem, Docker-Sandbox) mit Konsolen-Toolset und feingranularem Berechtigungssystem.",
      es: "Múltiples opciones de backend (memoria, filesystem local, sandbox Docker) con toolset de consola y sistema de permisos granular.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/pydantic-ai-backend",
    pypi: "pydantic-ai-backend",
    installCommand: "pip install pydantic-ai-backend",
    features: {
      en: ["State/Local/Docker Backends", "Console Toolset", "Permission Presets", "Docker Runtimes"],
      pl: ["Backendy State/Local/Docker", "Narzędzia Konsolowe", "Presety Uprawnień", "Runtime Docker"],
      de: ["State/Local/Docker-Backends", "Konsolen-Toolset", "Berechtigungs-Presets", "Docker-Runtimes"],
      es: ["Backends State/Local/Docker", "Toolset de Consola", "Presets de Permisos", "Runtimes Docker"],
    },
  },
  {
    slug: "pydantic-ai-todo",
    name: "Pydantic AI Todo",
    tagline: {
      en: "Task planning and tracking with subtasks and dependencies",
      pl: "Planowanie i śledzenie zadań z podzadaniami i zależnościami",
      de: "Aufgabenplanung mit Unteraufgaben und Abhängigkeiten",
      es: "Planificación de tareas con subtareas y dependencias",
    },
    description: {
      en: "Hierarchical task management toolset for AI agents with subtask support, dependency tracking, cycle detection, and multiple storage backends (in-memory, PostgreSQL).",
      pl: "Hierarchiczny system zarządzania zadaniami dla agentów AI z obsługą podzadań, śledzeniem zależności, wykrywaniem cykli i wieloma backendami (pamięć, PostgreSQL).",
      de: "Hierarchisches Aufgabenmanagement für KI-Agenten mit Unteraufgaben, Abhängigkeitstracking, Zykluserkennung und mehreren Storage-Backends.",
      es: "Gestión jerárquica de tareas para agentes IA con subtareas, seguimiento de dependencias, detección de ciclos y múltiples backends de almacenamiento.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/pydantic-ai-todo",
    pypi: "pydantic-ai-todo",
    installCommand: "pip install pydantic-ai-todo",
    features: {
      en: ["Subtask Hierarchy", "Dependency Tracking", "Cycle Detection", "PostgreSQL Backend"],
      pl: ["Hierarchia Podzadań", "Śledzenie Zależności", "Wykrywanie Cykli", "Backend PostgreSQL"],
      de: ["Unteraufgaben-Hierarchie", "Abhängigkeits-Tracking", "Zykluserkennung", "PostgreSQL-Backend"],
      es: ["Jerarquía de Subtareas", "Seguimiento de Dependencias", "Detección de Ciclos", "Backend PostgreSQL"],
    },
  },
  {
    slug: "summarization-pydantic-ai",
    name: "Summarization for Pydantic AI",
    tagline: {
      en: "Automatic conversation summarization for unlimited context",
      pl: "Automatyczne podsumowywanie rozmów dla nieograniczonego kontekstu",
      de: "Automatische Konversationszusammenfassung für unbegrenzten Kontext",
      es: "Resumen automático de conversaciones para contexto ilimitado",
    },
    description: {
      en: "Three strategies for managing agent context: intelligent LLM-based summarization, zero-cost sliding window trimming, and real-time context manager middleware with token tracking.",
      pl: "Trzy strategie zarządzania kontekstem: inteligentne podsumowanie LLM, przesuwane okno i real-time context manager z śledzeniem tokenów.",
      de: "Drei Strategien für Kontext-Management: intelligente LLM-Zusammenfassung, kostenfreies Sliding-Window und Echtzeit-Context-Manager mit Token-Tracking.",
      es: "Tres estrategias de gestión de contexto: resumen inteligente LLM, ventana deslizante sin costo y context manager en tiempo real con seguimiento de tokens.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/summarization-pydantic-ai",
    pypi: "summarization-pydantic-ai",
    installCommand: "pip install summarization-pydantic-ai",
    features: {
      en: ["LLM Summarization", "Sliding Window", "Real-time Context Manager", "Token Tracking"],
      pl: ["Podsumowanie LLM", "Przesuwane Okno", "Real-time Context Manager", "Śledzenie Tokenów"],
      de: ["LLM-Zusammenfassung", "Sliding Window", "Echtzeit-Context-Manager", "Token-Tracking"],
      es: ["Resumen LLM", "Ventana Deslizante", "Context Manager Real-time", "Seguimiento de Tokens"],
    },
  },
  {
    slug: "database-pydantic-ai",
    name: "Database Toolset for Pydantic AI",
    tagline: {
      en: "Empower AI agents with SQL database capabilities",
      pl: "Daj agentom AI możliwości baz danych SQL",
      de: "KI-Agenten mit SQL-Datenbankfähigkeiten ausstatten",
      es: "Potencia agentes IA con capacidades de bases de datos SQL",
    },
    description: {
      en: "SQL database toolset that lets AI agents query, analyze, and interact with databases. Supports schema introspection, safe query execution, and result formatting.",
      pl: "Zestaw narzędzi SQL umożliwiający agentom AI odpytywanie, analizę i interakcję z bazami danych. Obsługuje introspekcję schematu i bezpieczne wykonywanie zapytań.",
      de: "SQL-Datenbank-Toolset für KI-Agenten zum Abfragen, Analysieren und Interagieren mit Datenbanken. Schema-Introspektion und sichere Abfrageausführung.",
      es: "Toolset de bases de datos SQL para agentes IA. Consultas, análisis e interacción con bases de datos. Introspección de esquema y ejecución segura.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/database-pydantic-ai",
    pypi: "database-pydantic-ai",
    installCommand: "pip install database-pydantic-ai",
    features: {
      en: ["SQL Query Execution", "Schema Introspection", "Result Formatting", "Safe by Default"],
      pl: ["Wykonywanie Zapytań SQL", "Introspekcja Schematu", "Formatowanie Wyników", "Bezpieczne Domyślnie"],
      de: ["SQL-Abfrageausführung", "Schema-Introspektion", "Ergebnisformatierung", "Standardmäßig sicher"],
      es: ["Ejecución de Consultas SQL", "Introspección de Esquema", "Formateo de Resultados", "Seguro por Defecto"],
    },
  },
  {
    slug: "logfire-assistant",
    name: "Logfire Assistant",
    tagline: {
      en: "AI-powered debugging and analysis for Pydantic Logfire",
      pl: "Debugowanie i analiza AI dla Pydantic Logfire",
      de: "KI-gestütztes Debugging und Analyse für Pydantic Logfire",
      es: "Depuración y análisis IA para Pydantic Logfire",
    },
    description: {
      en: "AI assistant that queries and analyzes your Logfire traces, spans, and logs. Helps debug production AI agent systems with natural language queries.",
      pl: "Asystent AI do odpytywania i analizowania traces, spans i logów z Logfire. Pomaga debugować produkcyjne systemy agentów AI.",
      de: "KI-Assistent zum Abfragen und Analysieren von Logfire-Traces, Spans und Logs. Hilft beim Debugging von Produktions-KI-Systemen.",
      es: "Asistente IA para consultar y analizar traces, spans y logs de Logfire. Ayuda a depurar sistemas de agentes IA en producción.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/logfire-assistant",
    pypi: "polly-logfire",
    installCommand: "pip install polly-logfire",
    features: {
      en: ["Trace Analysis", "Natural Language Queries", "Span Debugging", "Production Insights"],
      pl: ["Analiza Traces", "Zapytania w Języku Naturalnym", "Debugowanie Spans", "Wgląd w Produkcję"],
      de: ["Trace-Analyse", "Natürlichsprachige Abfragen", "Span-Debugging", "Produktions-Einblicke"],
      es: ["Análisis de Traces", "Consultas en Lenguaje Natural", "Depuración de Spans", "Insights de Producción"],
    },
  },

  // ── Coming Soon ───────────────────────────────────────────
  {
    slug: "memv",
    name: "memv",
    tagline: {
      en: "Persistent memory for AI agents",
      pl: "Trwała pamięć dla agentów AI",
      de: "Persistenter Speicher für KI-Agenten",
      es: "Memoria persistente para agentes IA",
    },
    description: {
      en: "Coming soon. Persistent memory system for AI agents.",
      pl: "Wkrótce. System trwałej pamięci dla agentów AI.",
      de: "Demnächst. Persistentes Speichersystem für KI-Agenten.",
      es: "Próximamente. Sistema de memoria persistente para agentes IA.",
    },
    status: "coming-soon",
    category: "toolset",
    features: {
      en: ["Coming Soon"],
      pl: ["Wkrótce"],
      de: ["Demnächst"],
      es: ["Próximamente"],
    },
  },
  {
    slug: "pydantic-ai-rlm",
    name: "Pydantic AI RLM",
    tagline: {
      en: "Reinforcement learning for AI agent optimization",
      pl: "Uczenie ze wzmocnieniem do optymalizacji agentów AI",
      de: "Reinforcement Learning zur KI-Agenten-Optimierung",
      es: "Aprendizaje por refuerzo para optimización de agentes IA",
    },
    description: {
      en: "Coming soon. Reinforcement learning module for Pydantic AI agents.",
      pl: "Wkrótce. Moduł uczenia ze wzmocnieniem dla agentów Pydantic AI.",
      de: "Demnächst. Reinforcement-Learning-Modul für Pydantic-AI-Agenten.",
      es: "Próximamente. Módulo de aprendizaje por refuerzo para agentes Pydantic AI.",
    },
    status: "coming-soon",
    category: "toolset",
    features: {
      en: ["Coming Soon"],
      pl: ["Wkrótce"],
      de: ["Demnächst"],
      es: ["Próximamente"],
    },
  },

  // ── Resources ─────────────────────────────────────────────
  {
    slug: "awesome-pydantic-ai",
    name: "Awesome Pydantic AI",
    tagline: {
      en: "Curated list of Pydantic AI resources and libraries",
      pl: "Kuratowana lista zasobów i bibliotek Pydantic AI",
      de: "Kuratierte Liste von Pydantic AI Ressourcen und Bibliotheken",
      es: "Lista curada de recursos y bibliotecas de Pydantic AI",
    },
    description: {
      en: "Community-curated index of Pydantic AI resources: frameworks, templates, examples, observability tools, and production case studies.",
      pl: "Kuratowany przez społeczność indeks zasobów Pydantic AI: frameworki, szablony, przykłady, narzędzia do obserwacji i studia przypadków.",
      de: "Community-kuratierter Index von Pydantic AI Ressourcen: Frameworks, Templates, Beispiele, Observability-Tools und Fallstudien.",
      es: "Índice curado de recursos de Pydantic AI: frameworks, plantillas, ejemplos, herramientas de observabilidad y casos de estudio.",
    },
    status: "released",
    category: "resource",
    github: "vstorm-co/awesome-pydantic-ai",
    features: {
      en: ["30+ Projects Listed", "Frameworks & Templates", "Case Studies", "Community Curated"],
      pl: ["30+ Projektów", "Frameworki i Szablony", "Studia Przypadków", "Kuratowane"],
      de: ["30+ Projekte", "Frameworks & Templates", "Fallstudien", "Community-kuratiert"],
      es: ["30+ Proyectos", "Frameworks y Plantillas", "Casos de Estudio", "Curado por la Comunidad"],
    },
  },
  {
    slug: "pydantic-ai-examples",
    name: "Pydantic AI Examples",
    tagline: {
      en: "Production-ready example applications",
      pl: "Gotowe do produkcji przykładowe aplikacje",
      de: "Produktionsreife Beispielanwendungen",
      es: "Aplicaciones de ejemplo listas para producción",
    },
    description: {
      en: "Coming soon. Collection of production-ready example applications built with the Pydantic AI ecosystem.",
      pl: "Wkrótce. Kolekcja gotowych do produkcji przykładowych aplikacji zbudowanych z ekosystemem Pydantic AI.",
      de: "Demnächst. Sammlung produktionsreifer Beispielanwendungen mit dem Pydantic AI Ökosystem.",
      es: "Próximamente. Colección de aplicaciones de ejemplo listas para producción con el ecosistema Pydantic AI.",
    },
    status: "coming-soon",
    category: "resource",
    features: {
      en: ["Coming Soon"],
      pl: ["Wkrótce"],
      de: ["Demnächst"],
      es: ["Próximamente"],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(lang: Lang = "en") {
  return categories
    .sort((a, b) => a.order - b.order)
    .map((cat) => ({
      ...cat,
      projects: projects.filter((p) => p.category === cat.id),
    }));
}

export function getGenericProjects(): Project[] {
  return projects.filter((p) => !p.hasCustomLanding);
}
