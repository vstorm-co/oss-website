import type { Lang } from "../i18n/translations";

export type ProjectStatus = "released" | "coming-soon";

export interface ProjectCategory {
  id: string;
  label: Record<Lang, string>;
  order: number;
}

export interface ProjectQuickStart {
  code: string;
  highlightedHtml: string;
  filename: string;
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
  longDescription?: Record<Lang, string>;
  quickStart?: ProjectQuickStart;
  useCases?: Record<Lang, { name: string; description: string }[]>;
  mermaidDiagram?: string;
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
    longDescription: {
      en: "Pydantic AI Middleware provides 7 lifecycle hooks that let you intercept every stage of an agent run: before_run, after_run, before_model_request, before_tool_call, after_tool_call, on_tool_error, and on_run_error. Multiple middleware hooks execute in parallel with configurable aggregation strategies (first_response, all_responses, majority_vote). Async guardrails support three timing modes — BLOCKING (wait before proceeding), CONCURRENT (run alongside the agent), and ASYNC_POST (fire-and-forget after completion).",
      pl: "Pydantic AI Middleware udostępnia 7 hooków cyklu życia pozwalających przechwycić każdy etap uruchomienia agenta: before_run, after_run, before_model_request, before_tool_call, after_tool_call, on_tool_error i on_run_error. Wiele hooków middleware wykonuje się równolegle z konfigurowalnymi strategiami agregacji (first_response, all_responses, majority_vote). Asynchroniczne guardrails wspierają trzy tryby — BLOCKING (czekaj przed kontynuacją), CONCURRENT (uruchom obok agenta) i ASYNC_POST (odpal-i-zapomnij po zakończeniu).",
      de: "Pydantic AI Middleware bietet 7 Lifecycle-Hooks zum Abfangen jeder Phase eines Agent-Laufs: before_run, after_run, before_model_request, before_tool_call, after_tool_call, on_tool_error und on_run_error. Mehrere Middleware-Hooks werden parallel mit konfigurierbaren Aggregationsstrategien ausgeführt (first_response, all_responses, majority_vote). Async Guardrails unterstützen drei Timing-Modi — BLOCKING (vor dem Fortfahren warten), CONCURRENT (neben dem Agenten ausführen) und ASYNC_POST (Fire-and-Forget nach Abschluss).",
      es: "Pydantic AI Middleware proporciona 7 hooks de ciclo de vida para interceptar cada etapa de una ejecución de agente: before_run, after_run, before_model_request, before_tool_call, after_tool_call, on_tool_error y on_run_error. Múltiples hooks middleware se ejecutan en paralelo con estrategias de agregación configurables (first_response, all_responses, majority_vote). Los guardrails async soportan tres modos — BLOCKING (esperar antes de continuar), CONCURRENT (ejecutar junto al agente) y ASYNC_POST (disparar-y-olvidar tras completar).",
    },
    quickStart: {
      filename: "middleware_example.py",
      code: `from pydantic_ai import Agent
from pydantic_ai_middleware import MiddlewareAgent, AgentMiddleware

class CostTracker(AgentMiddleware[None]):
    """Track token usage and costs across all agent runs."""

    async def after_run(self, prompt, output, deps, ctx=None):
        print(f"Tokens used: {ctx.usage.total_tokens}")
        return output

base_agent = Agent("openai:gpt-4o", instructions="You are a helpful assistant.")
agent = MiddlewareAgent(agent=base_agent, middleware=[CostTracker()])
result = await agent.run("Hello, how are you?")`,
      highlightedHtml: `<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">Agent</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai_middleware</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">MiddlewareAgent</span><span class="text-text-secondary">,</span> <span class="text-cyan-400">AgentMiddleware</span>

<span class="text-violet-400">class</span> <span class="text-cyan-400">CostTracker</span><span class="text-text-secondary">(</span><span class="text-cyan-400">AgentMiddleware</span><span class="text-text-secondary">[</span><span class="text-cyan-400">None</span><span class="text-text-secondary">]):</span>
    <span class="text-amber-400">"""Track token usage and costs across all agent runs."""</span>

    <span class="text-violet-400">async def</span> <span class="text-cyan-400">after_run</span><span class="text-text-secondary">(</span><span class="text-text">self</span><span class="text-text-secondary">,</span> <span class="text-text">prompt</span><span class="text-text-secondary">,</span> <span class="text-text">output</span><span class="text-text-secondary">,</span> <span class="text-text">deps</span><span class="text-text-secondary">,</span> <span class="text-text">ctx</span><span class="text-text-secondary">=</span><span class="text-cyan-400">None</span><span class="text-text-secondary">):</span>
        <span class="text-cyan-400">print</span><span class="text-text-secondary">(</span><span class="text-violet-400">f</span><span class="text-amber-400">"Tokens used: {ctx.usage.total_tokens}"</span><span class="text-text-secondary">)</span>
        <span class="text-violet-400">return</span> <span class="text-text">output</span>

<span class="text-text">base_agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">Agent</span><span class="text-text-secondary">(</span><span class="text-amber-400">"openai:gpt-4o"</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">instructions</span><span class="text-violet-400">=</span><span class="text-amber-400">"You are a helpful assistant."</span><span class="text-text-secondary">)</span>
<span class="text-text">agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">MiddlewareAgent</span><span class="text-text-secondary">(</span><span class="text-text-secondary">agent</span><span class="text-violet-400">=</span><span class="text-text">base_agent</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">middleware</span><span class="text-violet-400">=</span><span class="text-text-secondary">[</span><span class="text-cyan-400">CostTracker</span><span class="text-text-secondary">()])</span>
<span class="text-text">result</span> <span class="text-violet-400">=</span> <span class="text-violet-400">await</span> <span class="text-text">agent</span><span class="text-text-secondary">.</span><span class="text-cyan-400">run</span><span class="text-text-secondary">(</span><span class="text-amber-400">"Hello, how are you?"</span><span class="text-text-secondary">)</span>`,
    },
    useCases: {
      en: [
        { name: "Cost Tracking & Budgets", description: "Monitor token usage per run, set spending limits, and get alerts when agents exceed budget thresholds." },
        { name: "Content Filtering & Guardrails", description: "Block prompt injection attempts, redact PII from outputs, and enforce content safety policies." },
        { name: "Permission Control", description: "Authorize tool calls based on user roles, block dangerous operations, and enforce fine-grained access policies." },
        { name: "Logging & Observability", description: "Audit every agent decision, track request/response pairs, and integrate with observability platforms." },
      ],
      pl: [
        { name: "Śledzenie Kosztów i Budżetów", description: "Monitoruj zużycie tokenów na uruchomienie, ustaw limity wydatków i otrzymuj alerty gdy agenci przekroczą próg budżetu." },
        { name: "Filtrowanie Treści i Guardrails", description: "Blokuj próby prompt injection, redaguj PII z wyników i egzekwuj polityki bezpieczeństwa treści." },
        { name: "Kontrola Uprawnień", description: "Autoryzuj wywołania narzędzi na podstawie ról użytkowników, blokuj niebezpieczne operacje i egzekwuj szczegółowe polityki dostępu." },
        { name: "Logowanie i Obserwowalność", description: "Audytuj każdą decyzję agenta, śledź pary request/response i integruj z platformami obserwacyjnymi." },
      ],
      de: [
        { name: "Kostentracking & Budgets", description: "Token-Verbrauch pro Lauf überwachen, Ausgabenlimits setzen und Benachrichtigungen bei Budgetüberschreitung erhalten." },
        { name: "Inhaltsfilterung & Guardrails", description: "Prompt-Injection-Versuche blockieren, PII aus Ausgaben entfernen und Inhaltssicherheitsrichtlinien durchsetzen." },
        { name: "Berechtigungskontrolle", description: "Tool-Aufrufe basierend auf Benutzerrollen autorisieren, gefährliche Operationen blockieren und feingranulare Zugriffsrichtlinien durchsetzen." },
        { name: "Logging & Observability", description: "Jede Agentenentscheidung auditieren, Request/Response-Paare tracken und mit Observability-Plattformen integrieren." },
      ],
      es: [
        { name: "Seguimiento de Costos y Presupuestos", description: "Monitorea el uso de tokens por ejecución, establece límites de gasto y recibe alertas cuando los agentes exceden umbrales de presupuesto." },
        { name: "Filtrado de Contenido y Guardrails", description: "Bloquea intentos de inyección de prompts, redacta PII de las salidas y aplica políticas de seguridad de contenido." },
        { name: "Control de Permisos", description: "Autoriza llamadas a herramientas según roles de usuario, bloquea operaciones peligrosas y aplica políticas de acceso granulares." },
        { name: "Logging y Observabilidad", description: "Audita cada decisión del agente, rastrea pares request/response e integra con plataformas de observabilidad." },
      ],
    },
    mermaidDiagram: `flowchart LR
    Input[Input] --> before_run[before_run]
    before_run --> before_model[before_model_request]
    before_model --> Agent[Agent]
    Agent -->|tool call| before_tool[before_tool_call]
    before_tool --> Tool[Tool]
    Tool --> after_tool[after_tool_call]
    after_tool --> Agent
    Tool -.->|error| on_error[on_tool_error]
    on_error -.-> Agent
    Agent -->|finish| after_run[after_run]
    after_run --> Output[Output]`,
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
    longDescription: {
      en: "Define specialist subagents and let a parent agent delegate tasks to them automatically. Three execution modes give you full control: synchronous (blocking — wait for results), asynchronous (background — fire tasks and check later), and auto (the agent chooses the best mode). Subagents can spawn their own subagents for deep delegation chains, and a questions feature lets child agents ask the parent for clarification mid-task.",
      pl: "Zdefiniuj specjalistyczne subagenty i pozwól agentowi nadrzędnemu automatycznie delegować do nich zadania. Trzy tryby wykonania dają pełną kontrolę: synchroniczny (blokujący — czekaj na wyniki), asynchroniczny (w tle — uruchom zadania i sprawdź później) i auto (agent wybiera najlepszy tryb). Subagenty mogą tworzyć własne subagenty tworząc łańcuchy głębokiej delegacji, a funkcja pytań pozwala agentom podrzędnym prosić nadrzędnego o wyjaśnienia w trakcie zadania.",
      de: "Definiere spezialisierte Subagenten und lass einen Eltern-Agenten automatisch Aufgaben delegieren. Drei Ausführungsmodi geben volle Kontrolle: synchron (blockierend — auf Ergebnisse warten), asynchron (im Hintergrund — Aufgaben starten und später prüfen) und auto (der Agent wählt den besten Modus). Subagenten können eigene Subagenten spawnen für tiefe Delegationsketten, und eine Fragen-Funktion erlaubt Kind-Agenten, den Eltern-Agenten um Klärung zu bitten.",
      es: "Define subagentes especializados y deja que un agente padre les delegue tareas automáticamente. Tres modos de ejecución dan control total: síncrono (bloqueante — esperar resultados), asíncrono (en segundo plano — lanzar tareas y verificar después) y auto (el agente elige el mejor modo). Los subagentes pueden crear sus propios subagentes para cadenas de delegación profunda, y una función de preguntas permite a los agentes hijos pedir aclaraciones al padre durante la tarea.",
    },
    quickStart: {
      filename: "subagents_example.py",
      code: `from pydantic_ai import Agent
from subagents_pydantic_ai import create_subagent_toolset, SubAgentConfig

subagents = [
    SubAgentConfig(
        name="researcher",
        description="Researches topics and gathers information",
        instructions="You are a research assistant. Investigate thoroughly.",
    ),
    SubAgentConfig(
        name="writer",
        description="Writes content based on research",
        instructions="You are a technical writer. Write clear, concise content.",
    ),
]

toolset = create_subagent_toolset(subagents=subagents)
agent = Agent("openai:gpt-4o", deps_type=Deps, toolsets=[toolset])
result = agent.run_sync("Research Python async patterns and write a blog post", deps=Deps())`,
      highlightedHtml: `<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">Agent</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">subagents_pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">create_subagent_toolset</span><span class="text-text-secondary">,</span> <span class="text-cyan-400">SubAgentConfig</span>

<span class="text-text">subagents</span> <span class="text-violet-400">=</span> <span class="text-text-secondary">[</span>
    <span class="text-cyan-400">SubAgentConfig</span><span class="text-text-secondary">(</span>
        <span class="text-text-secondary">name</span><span class="text-violet-400">=</span><span class="text-amber-400">"researcher"</span><span class="text-text-secondary">,</span>
        <span class="text-text-secondary">description</span><span class="text-violet-400">=</span><span class="text-amber-400">"Researches topics and gathers information"</span><span class="text-text-secondary">,</span>
        <span class="text-text-secondary">instructions</span><span class="text-violet-400">=</span><span class="text-amber-400">"You are a research assistant. Investigate thoroughly."</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">),</span>
    <span class="text-cyan-400">SubAgentConfig</span><span class="text-text-secondary">(</span>
        <span class="text-text-secondary">name</span><span class="text-violet-400">=</span><span class="text-amber-400">"writer"</span><span class="text-text-secondary">,</span>
        <span class="text-text-secondary">description</span><span class="text-violet-400">=</span><span class="text-amber-400">"Writes content based on research"</span><span class="text-text-secondary">,</span>
        <span class="text-text-secondary">instructions</span><span class="text-violet-400">=</span><span class="text-amber-400">"You are a technical writer. Write clear, concise content."</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">),</span>
<span class="text-text-secondary">]</span>

<span class="text-text">toolset</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">create_subagent_toolset</span><span class="text-text-secondary">(</span><span class="text-text-secondary">subagents</span><span class="text-violet-400">=</span><span class="text-text">subagents</span><span class="text-text-secondary">)</span>
<span class="text-text">agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">Agent</span><span class="text-text-secondary">(</span><span class="text-amber-400">"openai:gpt-4o"</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">deps_type</span><span class="text-violet-400">=</span><span class="text-cyan-400">Deps</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">toolsets</span><span class="text-violet-400">=</span><span class="text-text-secondary">[</span><span class="text-text">toolset</span><span class="text-text-secondary">])</span>
<span class="text-text">result</span> <span class="text-violet-400">=</span> <span class="text-text">agent</span><span class="text-text-secondary">.</span><span class="text-cyan-400">run_sync</span><span class="text-text-secondary">(</span><span class="text-amber-400">"Research Python async patterns and write a blog post"</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">deps</span><span class="text-violet-400">=</span><span class="text-cyan-400">Deps</span><span class="text-text-secondary">())</span>`,
    },
    useCases: {
      en: [
        { name: "Research Pipelines", description: "Delegate research to specialist agents that gather, analyze, and synthesize information from multiple sources." },
        { name: "Code Review Delegation", description: "Spawn parallel review agents for security, style, and performance analysis, then merge their findings." },
        { name: "Multi-Step Analysis", description: "Chain agents for complex workflows — researcher gathers data, analyst interprets it, writer produces the report." },
        { name: "Parallel Task Execution", description: "Fire multiple background tasks simultaneously and collect results as they complete, with automatic status tracking." },
      ],
      pl: [
        { name: "Pipeline Badawcze", description: "Deleguj badania do specjalistycznych agentów, którzy gromadzą, analizują i syntezują informacje z wielu źródeł." },
        { name: "Delegacja Code Review", description: "Uruchamiaj równolegle agentów do przeglądu bezpieczeństwa, stylu i wydajności, a następnie łącz ich wnioski." },
        { name: "Analiza Wieloetapowa", description: "Łącz agentów w złożone przepływy — badacz zbiera dane, analityk je interpretuje, pisarz tworzy raport." },
        { name: "Równoległe Wykonywanie Zadań", description: "Uruchamiaj wiele zadań w tle jednocześnie i zbieraj wyniki w miarę ich ukończenia, z automatycznym śledzeniem statusu." },
      ],
      de: [
        { name: "Research-Pipelines", description: "Forschung an Spezialagenten delegieren, die Informationen aus mehreren Quellen sammeln, analysieren und synthetisieren." },
        { name: "Code-Review-Delegation", description: "Parallele Review-Agenten für Sicherheit, Stil und Performance spawnen, dann ihre Ergebnisse zusammenführen." },
        { name: "Mehrstufige Analyse", description: "Agenten für komplexe Workflows verketten — Forscher sammelt Daten, Analyst interpretiert, Autor erstellt den Bericht." },
        { name: "Parallele Aufgabenausführung", description: "Mehrere Hintergrundaufgaben gleichzeitig starten und Ergebnisse bei Fertigstellung sammeln, mit automatischem Status-Tracking." },
      ],
      es: [
        { name: "Pipelines de Investigación", description: "Delega investigación a agentes especializados que recopilan, analizan y sintetizan información de múltiples fuentes." },
        { name: "Delegación de Code Review", description: "Lanza agentes paralelos de revisión para seguridad, estilo y rendimiento, luego combina sus hallazgos." },
        { name: "Análisis Multi-Paso", description: "Encadena agentes para flujos complejos — investigador recopila datos, analista interpreta, escritor produce el informe." },
        { name: "Ejecución Paralela de Tareas", description: "Lanza múltiples tareas en segundo plano simultáneamente y recopila resultados a medida que se completan, con seguimiento automático." },
      ],
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
    longDescription: {
      en: "Choose from three backend options depending on your needs: StateBackend (in-memory, ephemeral — perfect for tests), LocalBackend (real filesystem with a sandboxed root directory), or DockerSandbox (full Docker container isolation with pre-configured runtimes for Python, Node.js, and data science). The console toolset provides 7 tools (ls, read_file, write_file, edit_file, glob, grep, execute) with a permission system offering 4 presets: DEFAULT, PERMISSIVE, READONLY, and STRICT.",
      pl: "Wybierz spośród trzech opcji backendów zależnie od potrzeb: StateBackend (w pamięci, efemeryczny — idealny do testów), LocalBackend (prawdziwy filesystem z sandboxowanym katalogiem głównym) lub DockerSandbox (pełna izolacja kontenerowa z prekonfigurowanymi runtimeami dla Pythona, Node.js i data science). Zestaw narzędzi konsolowych zapewnia 7 narzędzi (ls, read_file, write_file, edit_file, glob, grep, execute) z systemem uprawnień oferującym 4 presety: DEFAULT, PERMISSIVE, READONLY i STRICT.",
      de: "Wähle aus drei Backend-Optionen je nach Bedarf: StateBackend (In-Memory, ephemer — perfekt für Tests), LocalBackend (echtes Dateisystem mit sandboxed Root-Verzeichnis) oder DockerSandbox (volle Docker-Container-Isolation mit vorkonfigurierten Runtimes für Python, Node.js und Data Science). Das Konsolen-Toolset bietet 7 Tools (ls, read_file, write_file, edit_file, glob, grep, execute) mit einem Berechtigungssystem mit 4 Presets: DEFAULT, PERMISSIVE, READONLY und STRICT.",
      es: "Elige entre tres opciones de backend según tus necesidades: StateBackend (en memoria, efímero — perfecto para tests), LocalBackend (filesystem real con directorio raíz aislado) o DockerSandbox (aislamiento completo en contenedor Docker con runtimes preconfigurados para Python, Node.js y data science). El toolset de consola proporciona 7 herramientas (ls, read_file, write_file, edit_file, glob, grep, execute) con un sistema de permisos con 4 presets: DEFAULT, PERMISSIVE, READONLY y STRICT.",
    },
    quickStart: {
      filename: "backend_example.py",
      code: `from dataclasses import dataclass
from pydantic_ai import Agent
from pydantic_ai_backends import LocalBackend, create_console_toolset

@dataclass
class Deps:
    backend: LocalBackend

agent = Agent(
    "openai:gpt-4o",
    deps_type=Deps,
    toolsets=[create_console_toolset()],
)

backend = LocalBackend(root_dir="./workspace")
result = agent.run_sync(
    "Create a Python script that calculates fibonacci and run it",
    deps=Deps(backend=backend),
)`,
      highlightedHtml: `<span class="text-violet-400">from</span> <span class="text-cyan-400">dataclasses</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">dataclass</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">Agent</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai_backends</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">LocalBackend</span><span class="text-text-secondary">,</span> <span class="text-cyan-400">create_console_toolset</span>

<span class="text-cyan-400">@dataclass</span>
<span class="text-violet-400">class</span> <span class="text-cyan-400">Deps</span><span class="text-text-secondary">:</span>
    <span class="text-text">backend</span><span class="text-text-secondary">:</span> <span class="text-cyan-400">LocalBackend</span>

<span class="text-text">agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">Agent</span><span class="text-text-secondary">(</span>
    <span class="text-amber-400">"openai:gpt-4o"</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">deps_type</span><span class="text-violet-400">=</span><span class="text-cyan-400">Deps</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">toolsets</span><span class="text-violet-400">=</span><span class="text-text-secondary">[</span><span class="text-cyan-400">create_console_toolset</span><span class="text-text-secondary">()],</span>
<span class="text-text-secondary">)</span>

<span class="text-text">backend</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">LocalBackend</span><span class="text-text-secondary">(</span><span class="text-text-secondary">root_dir</span><span class="text-violet-400">=</span><span class="text-amber-400">"./workspace"</span><span class="text-text-secondary">)</span>
<span class="text-text">result</span> <span class="text-violet-400">=</span> <span class="text-text">agent</span><span class="text-text-secondary">.</span><span class="text-cyan-400">run_sync</span><span class="text-text-secondary">(</span>
    <span class="text-amber-400">"Create a Python script that calculates fibonacci and run it"</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">deps</span><span class="text-violet-400">=</span><span class="text-cyan-400">Deps</span><span class="text-text-secondary">(</span><span class="text-text-secondary">backend</span><span class="text-violet-400">=</span><span class="text-text">backend</span><span class="text-text-secondary">),</span>
<span class="text-text-secondary">)</span>`,
    },
    useCases: {
      en: [
        { name: "AI Coding Assistants", description: "Give agents full file read/write/execute capabilities with sandboxed access to your project workspace." },
        { name: "Sandboxed Code Execution", description: "Run untrusted agent-generated code safely inside Docker containers with pre-configured Python and Node.js runtimes." },
        { name: "File Management Agents", description: "Build agents that organize, search, and transform files using grep, glob, and edit tools with permission guardrails." },
        { name: "Testing & CI Pipelines", description: "Use ephemeral in-memory backends for fast, isolated test runs that leave no artifacts behind." },
      ],
      pl: [
        { name: "Asystenci Kodowania AI", description: "Daj agentom pełne możliwości odczytu/zapisu/wykonywania plików z sandboxowanym dostępem do przestrzeni roboczej projektu." },
        { name: "Sandboxowane Wykonywanie Kodu", description: "Bezpiecznie uruchamiaj niezaufany kod generowany przez agentów w kontenerach Docker z prekonfigurowanymi runtimeami Python i Node.js." },
        { name: "Agenci Zarządzania Plikami", description: "Buduj agentów organizujących, przeszukujących i transformujących pliki używając grep, glob i narzędzi edycji z guardrails uprawnień." },
        { name: "Testy i Pipelines CI", description: "Używaj efemerycznych backendów w pamięci do szybkich, izolowanych uruchomień testów, które nie zostawiają artefaktów." },
      ],
      de: [
        { name: "KI-Coding-Assistenten", description: "Agenten volle Lese-/Schreib-/Ausführungsrechte mit sandboxed Zugriff auf den Projekt-Workspace geben." },
        { name: "Sandboxed Code-Ausführung", description: "Nicht vertrauenswürdigen, vom Agenten generierten Code sicher in Docker-Containern mit vorkonfigurierten Python- und Node.js-Runtimes ausführen." },
        { name: "Dateiverwaltungs-Agenten", description: "Agenten bauen, die Dateien mit grep, glob und Edit-Tools mit Berechtigungs-Guardrails organisieren, suchen und transformieren." },
        { name: "Tests & CI-Pipelines", description: "Ephemere In-Memory-Backends für schnelle, isolierte Testläufe nutzen, die keine Artefakte hinterlassen." },
      ],
      es: [
        { name: "Asistentes de Codificación IA", description: "Da a los agentes capacidades completas de lectura/escritura/ejecución de archivos con acceso aislado al workspace del proyecto." },
        { name: "Ejecución de Código en Sandbox", description: "Ejecuta código no confiable generado por agentes de forma segura dentro de contenedores Docker con runtimes preconfigurados de Python y Node.js." },
        { name: "Agentes de Gestión de Archivos", description: "Construye agentes que organizan, buscan y transforman archivos usando grep, glob y herramientas de edición con guardrails de permisos." },
        { name: "Tests y Pipelines CI", description: "Usa backends efímeros en memoria para ejecuciones de tests rápidas y aisladas que no dejan artefactos." },
      ],
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
    longDescription: {
      en: "Give your AI agents the ability to break down complex tasks into manageable subtasks with dependency tracking. The toolset provides 8 tools including add_todo, add_subtask, set_dependency, complete_todo, and get_available_tasks. Automatic cycle detection prevents circular dependencies. Choose between in-memory storage for quick sessions or PostgreSQL for persistent, multi-tenant task management with session-based isolation.",
      pl: "Daj swoim agentom AI możliwość rozbijania złożonych zadań na zarządzalne podzadania ze śledzeniem zależności. Zestaw narzędzi zapewnia 8 narzędzi w tym add_todo, add_subtask, set_dependency, complete_todo i get_available_tasks. Automatyczne wykrywanie cykli zapobiega zależnościom kołowym. Wybierz między pamięcią podręczną dla szybkich sesji lub PostgreSQL dla trwałego, wielodostępnego zarządzania zadaniami z izolacją sesji.",
      de: "Gib deinen KI-Agenten die Fähigkeit, komplexe Aufgaben in handhabbare Unteraufgaben mit Abhängigkeitstracking zu zerlegen. Das Toolset bietet 8 Tools inklusive add_todo, add_subtask, set_dependency, complete_todo und get_available_tasks. Automatische Zykluserkennung verhindert zirkuläre Abhängigkeiten. Wähle zwischen In-Memory-Speicher für schnelle Sessions oder PostgreSQL für persistentes, mandantenfähiges Aufgabenmanagement mit Session-basierter Isolation.",
      es: "Da a tus agentes IA la capacidad de descomponer tareas complejas en subtareas manejables con seguimiento de dependencias. El toolset proporciona 8 herramientas incluyendo add_todo, add_subtask, set_dependency, complete_todo y get_available_tasks. La detección automática de ciclos previene dependencias circulares. Elige entre almacenamiento en memoria para sesiones rápidas o PostgreSQL para gestión de tareas persistente y multi-tenant con aislamiento por sesión.",
    },
    quickStart: {
      filename: "todo_example.py",
      code: `from pydantic_ai import Agent
from pydantic_ai_todo import create_todo_toolset

agent = Agent(
    "openai:gpt-4o",
    toolsets=[create_todo_toolset()],
)

result = await agent.run("Create a todo list for building a REST API")`,
      highlightedHtml: `<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">Agent</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai_todo</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">create_todo_toolset</span>

<span class="text-text">agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">Agent</span><span class="text-text-secondary">(</span>
    <span class="text-amber-400">"openai:gpt-4o"</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">toolsets</span><span class="text-violet-400">=</span><span class="text-text-secondary">[</span><span class="text-cyan-400">create_todo_toolset</span><span class="text-text-secondary">()],</span>
<span class="text-text-secondary">)</span>

<span class="text-text">result</span> <span class="text-violet-400">=</span> <span class="text-violet-400">await</span> <span class="text-text">agent</span><span class="text-text-secondary">.</span><span class="text-cyan-400">run</span><span class="text-text-secondary">(</span><span class="text-amber-400">"Create a todo list for building a REST API"</span><span class="text-text-secondary">)</span>`,
    },
    useCases: {
      en: [
        { name: "Project Planning Agents", description: "Let agents decompose complex features into trackable task hierarchies with dependencies and subtasks." },
        { name: "Development Workflow", description: "Automate sprint planning — agents create, prioritize, and track tasks with dependency-aware ordering." },
        { name: "Task Decomposition", description: "Break vague requests into concrete, actionable steps with clear completion criteria and blocking relationships." },
        { name: "Multi-User Apps", description: "Use PostgreSQL backend for persistent, session-isolated task management across multiple users and conversations." },
      ],
      pl: [
        { name: "Agenci Planowania Projektów", description: "Pozwól agentom dekomponować złożone funkcje na śledzone hierarchie zadań z zależnościami i podzadaniami." },
        { name: "Przepływ Pracy Deweloperskiej", description: "Automatyzuj planowanie sprintów — agenci tworzą, priorytetyzują i śledzą zadania z kolejnością uwzględniającą zależności." },
        { name: "Dekompozycja Zadań", description: "Rozbijaj niejasne żądania na konkretne, wykonalne kroki z jasnymi kryteriami ukończenia i relacjami blokowania." },
        { name: "Aplikacje Wieloużytkownikowe", description: "Używaj backendu PostgreSQL do trwałego, izolowanego sesyjnie zarządzania zadaniami dla wielu użytkowników i rozmów." },
      ],
      de: [
        { name: "Projektplanungs-Agenten", description: "Agenten komplexe Features in verfolgbare Aufgabenhierarchien mit Abhängigkeiten und Unteraufgaben zerlegen lassen." },
        { name: "Entwicklungs-Workflow", description: "Sprint-Planung automatisieren — Agenten erstellen, priorisieren und tracken Aufgaben mit abhängigkeitsbewusster Reihenfolge." },
        { name: "Aufgabenzerlegung", description: "Vage Anfragen in konkrete, umsetzbare Schritte mit klaren Abschlusskriterien und Blockierungsbeziehungen zerlegen." },
        { name: "Multi-User-Apps", description: "PostgreSQL-Backend für persistentes, session-isoliertes Aufgabenmanagement über mehrere Benutzer und Konversationen nutzen." },
      ],
      es: [
        { name: "Agentes de Planificación", description: "Deja que los agentes descompongan funcionalidades complejas en jerarquías de tareas rastreables con dependencias y subtareas." },
        { name: "Flujo de Trabajo de Desarrollo", description: "Automatiza la planificación de sprints — los agentes crean, priorizan y rastrean tareas con ordenamiento consciente de dependencias." },
        { name: "Descomposición de Tareas", description: "Divide solicitudes vagas en pasos concretos y accionables con criterios claros de finalización y relaciones de bloqueo." },
        { name: "Apps Multi-Usuario", description: "Usa el backend PostgreSQL para gestión de tareas persistente y aislada por sesión a través de múltiples usuarios y conversaciones." },
      ],
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
    longDescription: {
      en: "Two strategies for keeping agent conversations within context limits. LLM-based summarization intelligently compresses older messages while preserving key information — triggered by message count, token count, or context fraction. Zero-cost sliding window trimming simply drops the oldest messages with a safe cutoff that never breaks tool call/response pairs. A real-time context manager middleware tracks token usage live, truncates long tool outputs, and auto-detects model context windows.",
      pl: "Dwie strategie utrzymywania rozmów agentów w limitach kontekstu. Podsumowanie oparte na LLM inteligentnie kompresuje starsze wiadomości zachowując kluczowe informacje — wyzwalane przez liczbę wiadomości, liczbę tokenów lub ułamek kontekstu. Przycinanie przesuwającym się oknem bez kosztu po prostu usuwa najstarsze wiadomości z bezpiecznym odcięciem, które nigdy nie przerywa par wywołanie narzędzia/odpowiedź. Real-time context manager śledzi użycie tokenów na żywo, obcina długie wyniki narzędzi i automatycznie wykrywa okna kontekstowe modeli.",
      de: "Zwei Strategien um Agent-Konversationen innerhalb der Kontextlimits zu halten. LLM-basierte Zusammenfassung komprimiert ältere Nachrichten intelligent und bewahrt Schlüsselinformationen — ausgelöst durch Nachrichtenanzahl, Token-Anzahl oder Kontextanteil. Kostenfreies Sliding-Window-Trimming entfernt einfach die ältesten Nachrichten mit einem sicheren Cutoff, der Tool-Call/Response-Paare nie unterbricht. Ein Echtzeit-Context-Manager trackt Token-Nutzung live, kürzt lange Tool-Ausgaben und erkennt Modell-Kontextfenster automatisch.",
      es: "Dos estrategias para mantener las conversaciones de agentes dentro de los límites de contexto. El resumen basado en LLM comprime inteligentemente mensajes antiguos preservando información clave — activado por cantidad de mensajes, tokens o fracción de contexto. El recorte por ventana deslizante sin costo simplemente elimina los mensajes más antiguos con un corte seguro que nunca rompe pares de llamada/respuesta de herramientas. Un context manager en tiempo real rastrea el uso de tokens en vivo, trunca salidas largas de herramientas y auto-detecta ventanas de contexto de modelos.",
    },
    quickStart: {
      filename: "summarization_example.py",
      code: `from pydantic_ai import Agent
from pydantic_ai_summarization import create_summarization_processor

processor = create_summarization_processor(
    trigger=("tokens", 100000),
    keep=("messages", 20),
)

agent = Agent(
    "openai:gpt-4o",
    history_processors=[processor],
)

result = await agent.run("Hello!")`,
      highlightedHtml: `<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">Agent</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai_summarization</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">create_summarization_processor</span>

<span class="text-text">processor</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">create_summarization_processor</span><span class="text-text-secondary">(</span>
    <span class="text-text-secondary">trigger</span><span class="text-violet-400">=</span><span class="text-text-secondary">(</span><span class="text-amber-400">"tokens"</span><span class="text-text-secondary">,</span> <span class="text-cyan-400">100000</span><span class="text-text-secondary">),</span>
    <span class="text-text-secondary">keep</span><span class="text-violet-400">=</span><span class="text-text-secondary">(</span><span class="text-amber-400">"messages"</span><span class="text-text-secondary">,</span> <span class="text-cyan-400">20</span><span class="text-text-secondary">),</span>
<span class="text-text-secondary">)</span>

<span class="text-text">agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">Agent</span><span class="text-text-secondary">(</span>
    <span class="text-amber-400">"openai:gpt-4o"</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">history_processors</span><span class="text-violet-400">=</span><span class="text-text-secondary">[</span><span class="text-text">processor</span><span class="text-text-secondary">],</span>
<span class="text-text-secondary">)</span>

<span class="text-text">result</span> <span class="text-violet-400">=</span> <span class="text-violet-400">await</span> <span class="text-text">agent</span><span class="text-text-secondary">.</span><span class="text-cyan-400">run</span><span class="text-text-secondary">(</span><span class="text-amber-400">"Hello!"</span><span class="text-text-secondary">)</span>`,
    },
    useCases: {
      en: [
        { name: "Long Conversations", description: "Keep agents running for hours without hitting context limits — older messages get summarized automatically." },
        { name: "Customer Support Bots", description: "Preserve key customer details (name, issue, order ID) while discarding routine back-and-forth exchanges." },
        { name: "Research Assistants", description: "Maintain research context across deep investigation sessions where accumulated findings would exceed the context window." },
        { name: "Cost-Sensitive Apps", description: "Choose zero-cost sliding window for maximum throughput, or LLM summarization when quality matters more than speed." },
      ],
      pl: [
        { name: "Długie Rozmowy", description: "Utrzymuj agentów przez godziny bez przekraczania limitów kontekstu — starsze wiadomości są automatycznie podsumowywane." },
        { name: "Boty Obsługi Klienta", description: "Zachowuj kluczowe dane klienta (imię, problem, ID zamówienia) odrzucając rutynową wymianę wiadomości." },
        { name: "Asystenci Badawczy", description: "Utrzymuj kontekst badawczy w długich sesjach, gdzie zgromadzone wyniki przekroczyłyby okno kontekstowe." },
        { name: "Aplikacje Wrażliwe na Koszty", description: "Wybierz przesuwane okno bez kosztu dla maksymalnej przepustowości, lub podsumowanie LLM gdy jakość jest ważniejsza niż szybkość." },
      ],
      de: [
        { name: "Lange Konversationen", description: "Agenten stundenlang laufen lassen ohne Kontextlimits zu erreichen — ältere Nachrichten werden automatisch zusammengefasst." },
        { name: "Kundensupport-Bots", description: "Wichtige Kundendaten (Name, Problem, Bestell-ID) bewahren und routinemäßigen Austausch verwerfen." },
        { name: "Forschungsassistenten", description: "Forschungskontext über tiefe Untersuchungssessions bewahren, in denen gesammelte Ergebnisse das Kontextfenster überschreiten würden." },
        { name: "Kostensensitive Apps", description: "Kostenfreies Sliding Window für maximalen Durchsatz wählen, oder LLM-Zusammenfassung wenn Qualität wichtiger als Geschwindigkeit ist." },
      ],
      es: [
        { name: "Conversaciones Largas", description: "Mantén agentes ejecutándose por horas sin alcanzar límites de contexto — los mensajes antiguos se resumen automáticamente." },
        { name: "Bots de Soporte al Cliente", description: "Preserva datos clave del cliente (nombre, problema, ID de pedido) mientras descartas intercambios rutinarios." },
        { name: "Asistentes de Investigación", description: "Mantén el contexto de investigación en sesiones profundas donde los hallazgos acumulados excederían la ventana de contexto." },
        { name: "Apps Sensibles al Costo", description: "Elige ventana deslizante sin costo para máximo rendimiento, o resumen LLM cuando la calidad importa más que la velocidad." },
      ],
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
    longDescription: {
      en: "Five tools give agents full database interaction: list_tables, get_schema, describe_table, explain_query, and query. Supports both SQLite (via aiosqlite) and PostgreSQL (via asyncpg) with a unified interface. Security-first: read-only mode blocks 15+ dangerous SQL keywords including DROP, DELETE, and ALTER. Resource control with configurable query timeouts (30s default) and row limits (100 default). Comment-aware parsing detects dangerous keywords hidden behind -- and /* */ comments.",
      pl: "Pięć narzędzi daje agentom pełną interakcję z bazą danych: list_tables, get_schema, describe_table, explain_query i query. Obsługuje SQLite (przez aiosqlite) i PostgreSQL (przez asyncpg) z ujednoliconym interfejsem. Bezpieczeństwo na pierwszym miejscu: tryb read-only blokuje 15+ niebezpiecznych słów kluczowych SQL w tym DROP, DELETE i ALTER. Kontrola zasobów z konfigurowalnymi timeoutami zapytań (domyślnie 30s) i limitami wierszy (domyślnie 100). Parsowanie uwzględniające komentarze wykrywa niebezpieczne słowa kluczowe ukryte za -- i /* */.",
      de: "Fünf Tools geben Agenten volle Datenbankinteraktion: list_tables, get_schema, describe_table, explain_query und query. Unterstützt sowohl SQLite (via aiosqlite) als auch PostgreSQL (via asyncpg) mit einheitlichem Interface. Security-first: Read-only-Modus blockiert 15+ gefährliche SQL-Keywords inklusive DROP, DELETE und ALTER. Ressourcenkontrolle mit konfigurierbaren Query-Timeouts (30s Standard) und Zeilenlimits (100 Standard). Kommentar-bewusstes Parsing erkennt gefährliche Keywords hinter -- und /* */ Kommentaren.",
      es: "Cinco herramientas dan a los agentes interacción completa con bases de datos: list_tables, get_schema, describe_table, explain_query y query. Soporta tanto SQLite (via aiosqlite) como PostgreSQL (via asyncpg) con interfaz unificada. Seguridad primero: el modo read-only bloquea 15+ palabras clave SQL peligrosas incluyendo DROP, DELETE y ALTER. Control de recursos con timeouts configurables (30s por defecto) y límites de filas (100 por defecto). Parsing consciente de comentarios detecta palabras clave peligrosas ocultas tras -- y /* */.",
    },
    quickStart: {
      filename: "database_example.py",
      code: `from pydantic_ai import Agent
from database_pydantic_ai import (
    SQLiteDatabase,
    SQLDatabaseDeps,
    SQLITE_SYSTEM_PROMPT,
    create_database_toolset,
)

async with SQLiteDatabase("data.db") as db:
    deps = SQLDatabaseDeps(database=db, read_only=True)
    agent = Agent(
        "openai:gpt-4o",
        deps_type=SQLDatabaseDeps,
        toolsets=[create_database_toolset()],
        system_prompt=SQLITE_SYSTEM_PROMPT,
    )
    result = await agent.run("What are the top 5 most expensive products?", deps=deps)`,
      highlightedHtml: `<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">Agent</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">database_pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-text-secondary">(</span>
    <span class="text-cyan-400">SQLiteDatabase</span><span class="text-text-secondary">,</span>
    <span class="text-cyan-400">SQLDatabaseDeps</span><span class="text-text-secondary">,</span>
    <span class="text-cyan-400">SQLITE_SYSTEM_PROMPT</span><span class="text-text-secondary">,</span>
    <span class="text-cyan-400">create_database_toolset</span><span class="text-text-secondary">,</span>
<span class="text-text-secondary">)</span>

<span class="text-violet-400">async with</span> <span class="text-cyan-400">SQLiteDatabase</span><span class="text-text-secondary">(</span><span class="text-amber-400">"data.db"</span><span class="text-text-secondary">)</span> <span class="text-violet-400">as</span> <span class="text-text">db</span><span class="text-text-secondary">:</span>
    <span class="text-text">deps</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">SQLDatabaseDeps</span><span class="text-text-secondary">(</span><span class="text-text-secondary">database</span><span class="text-violet-400">=</span><span class="text-text">db</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">read_only</span><span class="text-violet-400">=</span><span class="text-cyan-400">True</span><span class="text-text-secondary">)</span>
    <span class="text-text">agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">Agent</span><span class="text-text-secondary">(</span>
        <span class="text-amber-400">"openai:gpt-4o"</span><span class="text-text-secondary">,</span>
        <span class="text-text-secondary">deps_type</span><span class="text-violet-400">=</span><span class="text-cyan-400">SQLDatabaseDeps</span><span class="text-text-secondary">,</span>
        <span class="text-text-secondary">toolsets</span><span class="text-violet-400">=</span><span class="text-text-secondary">[</span><span class="text-cyan-400">create_database_toolset</span><span class="text-text-secondary">()],</span>
        <span class="text-text-secondary">system_prompt</span><span class="text-violet-400">=</span><span class="text-cyan-400">SQLITE_SYSTEM_PROMPT</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">)</span>
    <span class="text-text">result</span> <span class="text-violet-400">=</span> <span class="text-violet-400">await</span> <span class="text-text">agent</span><span class="text-text-secondary">.</span><span class="text-cyan-400">run</span><span class="text-text-secondary">(</span><span class="text-amber-400">"What are the top 5 most expensive products?"</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">deps</span><span class="text-violet-400">=</span><span class="text-text">deps</span><span class="text-text-secondary">)</span>`,
    },
    useCases: {
      en: [
        { name: "Data Analysis Agents", description: "Let agents explore schemas, write queries, and analyze results from SQLite or PostgreSQL databases using natural language." },
        { name: "Report Generation", description: "Build agents that query production databases, format results, and generate human-readable reports automatically." },
        { name: "Database Administration", description: "Create assistants that help with schema discovery, query optimization via EXPLAIN, and database documentation." },
        { name: "Business Intelligence", description: "Give non-technical users natural language access to their data with read-only safety guarantees and query timeouts." },
      ],
      pl: [
        { name: "Agenci Analizy Danych", description: "Pozwól agentom eksplorować schematy, pisać zapytania i analizować wyniki z baz SQLite lub PostgreSQL używając języka naturalnego." },
        { name: "Generowanie Raportów", description: "Buduj agentów odpytujących produkcyjne bazy danych, formatujących wyniki i automatycznie generujących czytelne raporty." },
        { name: "Administracja Bazami Danych", description: "Twórz asystentów pomagających w odkrywaniu schematów, optymalizacji zapytań przez EXPLAIN i dokumentacji baz danych." },
        { name: "Business Intelligence", description: "Daj nietechnicznym użytkownikom dostęp do danych w języku naturalnym z gwarancjami bezpieczeństwa read-only i timeoutami zapytań." },
      ],
      de: [
        { name: "Datenanalyse-Agenten", description: "Agenten Schemas erkunden, Queries schreiben und Ergebnisse aus SQLite- oder PostgreSQL-Datenbanken in natürlicher Sprache analysieren lassen." },
        { name: "Berichterstellung", description: "Agenten bauen, die Produktionsdatenbanken abfragen, Ergebnisse formatieren und automatisch lesbare Berichte generieren." },
        { name: "Datenbank-Administration", description: "Assistenten erstellen, die bei Schema-Discovery, Query-Optimierung via EXPLAIN und Datenbankdokumentation helfen." },
        { name: "Business Intelligence", description: "Nicht-technischen Benutzern natürlichsprachigen Datenzugriff mit Read-only-Sicherheitsgarantien und Query-Timeouts geben." },
      ],
      es: [
        { name: "Agentes de Análisis de Datos", description: "Permite a los agentes explorar esquemas, escribir consultas y analizar resultados de bases SQLite o PostgreSQL usando lenguaje natural." },
        { name: "Generación de Reportes", description: "Construye agentes que consultan bases de producción, formatean resultados y generan reportes legibles automáticamente." },
        { name: "Administración de Bases de Datos", description: "Crea asistentes que ayudan con el descubrimiento de esquemas, optimización de consultas via EXPLAIN y documentación de bases de datos." },
        { name: "Business Intelligence", description: "Da a usuarios no técnicos acceso a sus datos en lenguaje natural con garantías de seguridad read-only y timeouts de consultas." },
      ],
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
    longDescription: {
      en: "A comprehensive, community-curated collection of the best Pydantic AI ecosystem resources. Browse production-grade frameworks and libraries (pydantic-deep, middleware, backend, subagents, summarization, database toolsets), full-stack templates with 20+ enterprise integrations, observability tools powered by Pydantic Logfire, and real-world case studies from companies like Mixam, Sophos, and Boosted.ai. Updated regularly with new projects and resources.",
      pl: "Kompleksowa, kuratowana przez społeczność kolekcja najlepszych zasobów ekosystemu Pydantic AI. Przeglądaj produkcyjne frameworki i biblioteki (pydantic-deep, middleware, backend, subagents, summarization, database toolsets), szablony full-stack z 20+ integracjami enterprise, narzędzia do obserwowalności oparte na Pydantic Logfire oraz studia przypadków z firm takich jak Mixam, Sophos i Boosted.ai. Regularnie aktualizowana o nowe projekty i zasoby.",
      de: "Eine umfassende, community-kuratierte Sammlung der besten Pydantic AI Ökosystem-Ressourcen. Produktionsreife Frameworks und Bibliotheken (pydantic-deep, middleware, backend, subagents, summarization, database toolsets), Full-Stack-Templates mit 20+ Enterprise-Integrationen, Observability-Tools powered by Pydantic Logfire und reale Fallstudien von Unternehmen wie Mixam, Sophos und Boosted.ai. Regelmäßig mit neuen Projekten und Ressourcen aktualisiert.",
      es: "Una colección completa y curada por la comunidad de los mejores recursos del ecosistema Pydantic AI. Explora frameworks y bibliotecas de producción (pydantic-deep, middleware, backend, subagents, summarization, database toolsets), plantillas full-stack con 20+ integraciones enterprise, herramientas de observabilidad potenciadas por Pydantic Logfire y casos de estudio reales de empresas como Mixam, Sophos y Boosted.ai. Actualizada regularmente con nuevos proyectos y recursos.",
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
