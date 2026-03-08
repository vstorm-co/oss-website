import type { Lang } from "../i18n/translations";

export interface ChangelogEntry {
  date: string;
  version: string;
  project: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  tag: "framework" | "template" | "tool" | "resource";
  breaking?: boolean;
}

export const changelog: ChangelogEntry[] = [
  // ── March 2026 ──────────────────────────────────────────
  {
    date: "2026-03-06",
    version: "v0.2.19",
    project: "pydantic-deepagents",
    title: {
      en: "Todo sync fix & Model object support",
      pl: "Naprawa synchronizacji todo i wsparcie obiektow Model",
      de: "Todo-Sync-Fix & Model-Objekt-Unterstutzung",
      es: "Correccion de sincronizacion de todo y soporte de objetos Model",
    },
    description: {
      en: "Fixed deps.todos not synchronized with todo tools — create_todo_toolset() created isolated storage. Fixed Model objects (e.g. TestModel(), AnthropicModel()) being silently discarded for subagents.",
      pl: "Naprawiono brak synchronizacji deps.todos z narzediami todo. Naprawiono ciche odrzucanie obiektow Model (np. TestModel(), AnthropicModel()) dla subagentow.",
      de: "deps.todos-Synchronisation mit Todo-Tools behoben. Model-Objekte (z.B. TestModel(), AnthropicModel()) wurden fur Subagenten stillschweigend verworfen — behoben.",
      es: "Se corrigio la falta de sincronizacion de deps.todos con las herramientas todo. Se corrigio el descarte silencioso de objetos Model para subagentes.",
    },
    tag: "framework",
  },
  {
    date: "2026-03-06",
    version: "v0.0.8",
    project: "subagents-pydantic-ai",
    title: {
      en: "Model objects & ask_parent async fix",
      pl: "Obiekty Model i naprawa ask_parent w trybie async",
      de: "Model-Objekte & ask_parent Async-Fix",
      es: "Objetos Model y correccion de ask_parent en modo async",
    },
    description: {
      en: "Subagent configuration now accepts Model objects (not just strings). Fixed ask_parent tool broken in async mode — state injection and Future-based coordination replaced message bus Q&A.",
      pl: "Konfiguracja subagentow akceptuje teraz obiekty Model (nie tylko stringi). Naprawiono narzedzie ask_parent w trybie async — wstrzykiwanie stanu i koordynacja oparta na Future.",
      de: "Subagenten-Konfiguration akzeptiert jetzt Model-Objekte (nicht nur Strings). ask_parent-Tool im Async-Modus repariert — Future-basierte Koordination.",
      es: "La configuracion de subagentes ahora acepta objetos Model (no solo strings). Se corrigio ask_parent en modo async — coordinacion basada en Future.",
    },
    tag: "tool",
  },
  {
    date: "2026-03-05",
    version: "v0.2.1",
    project: "full-stack-ai-agent-template",
    title: {
      en: "LangSmith observability & CLI improvements",
      pl: "Obserwowalnosc LangSmith i ulepszenia CLI",
      de: "LangSmith-Observability & CLI-Verbesserungen",
      es: "Observabilidad LangSmith y mejoras de CLI",
    },
    description: {
      en: "LangSmith integration for LangChain, LangGraph and DeepAgents frameworks. CLI runs interactive wizard by default. Fixed unconditional logfire imports, frontend chat cleanup, and 3 missing framework choices.",
      pl: "Integracja LangSmith dla frameworkow LangChain, LangGraph i DeepAgents. CLI domyslnie uruchamia interaktywny kreator. Naprawiono importy logfire, czyszczenie chatu frontendowego i 3 brakujace frameworki.",
      de: "LangSmith-Integration fur LangChain, LangGraph und DeepAgents. CLI startet standardmassig den interaktiven Assistenten. Logfire-Imports, Frontend-Chat-Bereinigung und 3 fehlende Frameworks behoben.",
      es: "Integracion de LangSmith para LangChain, LangGraph y DeepAgents. CLI ejecuta el asistente interactivo por defecto. Se corrigieron imports de logfire, limpieza de chat frontend y 3 frameworks faltantes.",
    },
    tag: "template",
  },

  // ── February 2026 ───────────────────────────────────────
  {
    date: "2026-02-27",
    version: "v0.2.0",
    project: "full-stack-ai-agent-template",
    title: {
      en: "Repository renamed to full-stack-ai-agent-template",
      pl: "Repozytorium przemianowane na full-stack-ai-agent-template",
      de: "Repository umbenannt zu full-stack-ai-agent-template",
      es: "Repositorio renombrado a full-stack-ai-agent-template",
    },
    description: {
      en: "Repository renamed from full-stack-fastapi-nextjs-llm-template. Marked as GitHub Template — users can click 'Use this template' to create a new repo directly.",
      pl: "Repozytorium przemianowane z full-stack-fastapi-nextjs-llm-template. Oznaczone jako GitHub Template — uzytkownicy moga kliknac 'Use this template'.",
      de: "Repository von full-stack-fastapi-nextjs-llm-template umbenannt. Als GitHub-Template markiert — Benutzer konnen 'Use this template' klicken.",
      es: "Repositorio renombrado desde full-stack-fastapi-nextjs-llm-template. Marcado como GitHub Template — los usuarios pueden hacer clic en 'Use this template'.",
    },
    tag: "template",
  },
  {
    date: "2026-02-27",
    version: "v0.2.18",
    project: "pydantic-deepagents",
    title: {
      en: "Custom commands, diff viewer & tool descriptions",
      pl: "Niestandardowe komendy, przegladarka diff i opisy narzedzi",
      de: "Benutzerdefinierte Befehle, Diff-Viewer & Tool-Beschreibungen",
      es: "Comandos personalizados, visor de diff y descripciones de herramientas",
    },
    description: {
      en: "User-triggered slash commands from .md files (/commit, /pr, /review, /test). Colored unified diffs for file approvals. Tool guidance moved from system prompt to tool descriptions. Removed Textual TUI.",
      pl: "Komendy slash z plikow .md (/commit, /pr, /review, /test). Kolorowe ujednolicone diffy do zatwierdzania plikow. Wskazowki przeniesione z promptu systemowego do opisow narzedzi. Usunieto Textual TUI.",
      de: "Slash-Befehle aus .md-Dateien (/commit, /pr, /review, /test). Farbige Unified-Diffs fur Datei-Genehmigungen. Tool-Anleitungen von Systemprompt zu Tool-Beschreibungen verschoben. Textual TUI entfernt.",
      es: "Comandos slash desde archivos .md (/commit, /pr, /review, /test). Diffs unificados coloreados para aprobacion de archivos. Guia movida del prompt del sistema a descripciones de herramientas. Se elimino Textual TUI.",
    },
    tag: "framework",
  },
  {
    date: "2026-02-26",
    version: "v0.2.2",
    project: "pydantic-ai-middleware",
    title: {
      en: "Switched to pydantic-ai-slim dependency",
      pl: "Przejscie na zaleznosc pydantic-ai-slim",
      de: "Umstellung auf pydantic-ai-slim-Abhangigkeit",
      es: "Cambio a dependencia pydantic-ai-slim",
    },
    description: {
      en: "Replaced pydantic-ai dependency with pydantic-ai-slim to reduce dependency bloat and avoid pulling unnecessary model provider SDKs.",
      pl: "Zastapiono zaleznosc pydantic-ai na pydantic-ai-slim, aby zredukowac zbedne zalesnosci i uniknac pobierania niepotrzebnych SDK dostawcow modeli.",
      de: "pydantic-ai-Abhangigkeit durch pydantic-ai-slim ersetzt, um Abhangigkeits-Bloat zu reduzieren.",
      es: "Se reemplazo la dependencia pydantic-ai por pydantic-ai-slim para reducir dependencias innecesarias.",
    },
    tag: "tool",
  },
  {
    date: "2026-02-25",
    version: "v0.1.12",
    project: "pydantic-ai-backend",
    title: {
      en: "DaytonaSandbox — cloud sandbox backend",
      pl: "DaytonaSandbox — backendowy sandbox w chmurze",
      de: "DaytonaSandbox — Cloud-Sandbox-Backend",
      es: "DaytonaSandbox — backend de sandbox en la nube",
    },
    description: {
      en: "New cloud sandbox powered by Daytona ephemeral sandboxes. Sub-90ms startup, no Docker daemon required. Native file APIs for efficient binary and large file handling.",
      pl: "Nowy sandbox w chmurze zasilany efemerycznymi sandboxami Daytona. Start ponizej 90ms, bez wymaganego demona Docker. Natywne API plikow.",
      de: "Neuer Cloud-Sandbox mit Daytona-Ephemeral-Sandboxes. Start unter 90ms, kein Docker-Daemon erforderlich. Native Datei-APIs.",
      es: "Nuevo sandbox en la nube con sandboxes efimeros de Daytona. Inicio en menos de 90ms, sin daemon Docker. APIs de archivos nativos.",
    },
    tag: "tool",
  },
  {
    date: "2026-02-25",
    version: "v0.0.4",
    project: "summarization-pydantic-ai",
    title: {
      en: "Compression callbacks, persistence & auto-detection",
      pl: "Callbacki kompresji, persystencja i auto-detekcja",
      de: "Komprimierungs-Callbacks, Persistenz & Auto-Erkennung",
      es: "Callbacks de compresion, persistencia y auto-deteccion",
    },
    description: {
      en: "on_before_compress and on_after_compress callbacks for history archival. Continuous message persistence via messages_path. Auto-detection of model context window from genai-prices. Manual compact() method for CLI commands.",
      pl: "Callbacki on_before_compress i on_after_compress do archiwizacji historii. Ciagla persystencja wiadomosci przez messages_path. Auto-detekcja okna kontekstowego modelu z genai-prices.",
      de: "on_before_compress und on_after_compress Callbacks fur Verlaufsarchivierung. Kontinuierliche Nachrichtenpersistenz uber messages_path. Auto-Erkennung des Modell-Kontextfensters.",
      es: "Callbacks on_before_compress y on_after_compress para archivado de historial. Persistencia continua de mensajes via messages_path. Auto-deteccion de ventana de contexto del modelo.",
    },
    tag: "tool",
  },
  {
    date: "2026-02-20",
    version: "v0.1.9",
    project: "pydantic-ai-backend",
    title: {
      en: "Hashline edit format — +5 to +64pp accuracy",
      pl: "Format edycji hashline — +5 do +64pp dokladnosci",
      de: "Hashline-Bearbeitungsformat — +5 bis +64pp Genauigkeit",
      es: "Formato de edicion hashline — +5 a +64pp de precision",
    },
    description: {
      en: "Alternative to str_replace that tags each line with a 2-char content hash. Models reference lines by number:hash pairs, eliminating whitespace-matching errors and reducing output tokens. Based on Can Boluk's hashline research.",
      pl: "Alternatywa dla str_replace, ktora taguje kazda linie 2-znakowym hashem zawartosci. Modele odwoluja sie do linii przez pary numer:hash, eliminujac bledy dopasowywania bialych znakow.",
      de: "Alternative zu str_replace, die jede Zeile mit einem 2-Zeichen-Content-Hash taggt. Modelle referenzieren Zeilen uber Nummer:Hash-Paare, eliminiert Whitespace-Matching-Fehler.",
      es: "Alternativa a str_replace que etiqueta cada linea con un hash de contenido de 2 caracteres. Los modelos referencian lineas por pares numero:hash, eliminando errores de coincidencia de espacios.",
    },
    tag: "tool",
  },
  {
    date: "2026-02-17",
    version: "v0.2.17",
    project: "pydantic-deepagents",
    title: {
      en: "Checkpointing, Teams, Hooks, Memory & Plan Mode",
      pl: "Checkpointing, Zespoly, Hooki, Pamiec i Tryb Planu",
      de: "Checkpointing, Teams, Hooks, Speicher & Plan-Modus",
      es: "Checkpointing, Equipos, Hooks, Memoria y Modo Plan",
    },
    description: {
      en: "Major release: checkpoint/rewind/fork sessions, multi-agent teams with shared TODOs, Claude Code-style hooks, persistent agent memory (MEMORY.md), context file discovery, eviction processor, output styles, and plan mode with planner subagent.",
      pl: "Duze wydanie: checkpoint/rewind/fork sesji, zespoly wieloagentowe ze wspoldzielonymi TODO, hooki w stylu Claude Code, trwala pamiec agenta (MEMORY.md), odkrywanie plikow kontekstowych, procesor eviction, style wyjscia i tryb planu.",
      de: "Grosses Release: Checkpoint/Rewind/Fork-Sessions, Multi-Agent-Teams mit geteilten TODOs, Claude Code-Style Hooks, persistenter Agent-Speicher (MEMORY.md), Kontextdatei-Erkennung, Eviction-Prozessor, Ausgabestile und Plan-Modus.",
      es: "Gran lanzamiento: checkpoint/rewind/fork de sesiones, equipos multi-agente con TODOs compartidos, hooks estilo Claude Code, memoria persistente del agente (MEMORY.md), descubrimiento de archivos de contexto, procesador de eviccion, estilos de salida y modo plan.",
    },
    tag: "framework",
  },
  {
    date: "2026-02-15",
    version: "v0.2.1",
    project: "pydantic-ai-middleware",
    title: {
      en: "Cost Tracking Middleware",
      pl: "Middleware sledzenia kosztow",
      de: "Kosten-Tracking-Middleware",
      es: "Middleware de seguimiento de costos",
    },
    description: {
      en: "CostTrackingMiddleware for automatic token usage and USD cost monitoring. Budget limits with BudgetExceededError. Uses genai-prices library for cost calculation.",
      pl: "CostTrackingMiddleware do automatycznego monitorowania uzycia tokenow i kosztow w USD. Limity budzetowe z BudgetExceededError. Uzywa biblioteki genai-prices.",
      de: "CostTrackingMiddleware fur automatisches Token-Nutzungs- und USD-Kosten-Monitoring. Budget-Limits mit BudgetExceededError. Verwendet genai-prices Bibliothek.",
      es: "CostTrackingMiddleware para monitoreo automatico de uso de tokens y costos en USD. Limites de presupuesto con BudgetExceededError. Usa la libreria genai-prices.",
    },
    tag: "tool",
  },
  {
    date: "2026-02-12",
    version: "v0.2.0",
    project: "pydantic-ai-middleware",
    title: {
      en: "Chains, Parallel, Guardrails & Permissions",
      pl: "Lancuchy, Rownolegle, Guardrails i Uprawnienia",
      de: "Ketten, Parallel, Guardrails & Berechtigungen",
      es: "Cadenas, Paralelo, Guardrails y Permisos",
    },
    description: {
      en: "Major release: MiddlewareChain for composable pipelines, ParallelMiddleware with 4 aggregation strategies, AsyncGuardrailMiddleware with 3 timing modes, Permission Decision Protocol (ALLOW/DENY/ASK), context sharing between hooks, config loaders (JSON/YAML), and on_tool_error hook.",
      pl: "Duze wydanie: MiddlewareChain dla komponowalnych pipeline'ow, ParallelMiddleware z 4 strategiami agregacji, AsyncGuardrailMiddleware z 3 trybami, Protocol Decyzji Uprawnien (ALLOW/DENY/ASK), wspoldzielenie kontekstu miedzy hookami.",
      de: "Grosses Release: MiddlewareChain fur komponierbare Pipelines, ParallelMiddleware mit 4 Aggregationsstrategien, AsyncGuardrailMiddleware mit 3 Timing-Modi, Permission Decision Protocol (ALLOW/DENY/ASK), Kontext-Sharing zwischen Hooks.",
      es: "Gran lanzamiento: MiddlewareChain para pipelines componibles, ParallelMiddleware con 4 estrategias de agregacion, AsyncGuardrailMiddleware con 3 modos de temporalizacion, Protocolo de Decision de Permisos (ALLOW/DENY/ASK).",
    },
    tag: "tool",
    breaking: true,
  },
  {
    date: "2026-02-07",
    version: "v0.2.15",
    project: "pydantic-deepagents",
    title: {
      en: "Configurable retries & llms.txt support",
      pl: "Konfigurowalne powtorzenia i wsparcie llms.txt",
      de: "Konfigurierbare Retries & llms.txt-Unterstutzung",
      es: "Reintentos configurables y soporte llms.txt",
    },
    description: {
      en: "New retries parameter for create_deep_agent() (default: 3) — controls max retries for tool calls across all toolsets. Fixed write_file tool exceeding max retries of 1. Added llms.txt generation for documentation.",
      pl: "Nowy parametr retries dla create_deep_agent() (domyslnie: 3) — kontroluje maksymalna liczbe prob dla narzedzi. Naprawiono write_file przekraczajacy limit 1 proby. Dodano generowanie llms.txt.",
      de: "Neuer retries-Parameter fur create_deep_agent() (Standard: 3) — kontrolliert max. Wiederholungen fur Tool-Aufrufe. write_file Tool-Retry-Limit behoben. llms.txt-Generierung hinzugefugt.",
      es: "Nuevo parametro retries para create_deep_agent() (defecto: 3) — controla reintentos maximos para herramientas. Se corrigio write_file excediendo limite de 1 reintento. Se anadio generacion de llms.txt.",
    },
    tag: "framework",
  },
  {
    date: "2026-02-02",
    version: "v0.0.1",
    project: "database-pydantic-ai",
    title: {
      en: "SQL Toolset — Initial release",
      pl: "SQL Toolset — Pierwsze wydanie",
      de: "SQL Toolset — Erstverrffentlichung",
      es: "SQL Toolset — Lanzamiento inicial",
    },
    description: {
      en: "SQLite and PostgreSQL backends with 5 tools: list_tables, get_schema, describe_table, explain_query, query. Read-only mode, multi-statement prevention, query timeout, and row limit enforcement. 100% test coverage.",
      pl: "Backendy SQLite i PostgreSQL z 5 narzedziami: list_tables, get_schema, describe_table, explain_query, query. Tryb read-only, blokowanie wielu zapytan, timeout i limity wierszy. 100% pokrycia testow.",
      de: "SQLite- und PostgreSQL-Backends mit 5 Tools: list_tables, get_schema, describe_table, explain_query, query. Read-only-Modus, Multi-Statement-Schutz, Query-Timeout und Row-Limits. 100% Testabdeckung.",
      es: "Backends SQLite y PostgreSQL con 5 herramientas: list_tables, get_schema, describe_table, explain_query, query. Modo read-only, prevencion de multi-statement, timeout y limites de filas. 100% cobertura de tests.",
    },
    tag: "tool",
  },

  // ── January 2026 ────────────────────────────────────────
  {
    date: "2026-01-24",
    version: "v0.1.17",
    project: "full-stack-ai-agent-template",
    title: {
      en: "MkDocs documentation site",
      pl: "Strona dokumentacji MkDocs",
      de: "MkDocs-Dokumentationsseite",
      es: "Sitio de documentacion MkDocs",
    },
    description: {
      en: "Full documentation site with Material theme: installation guide, architecture overview with Mermaid diagrams, step-by-step guides, and configuration reference. Auto-deployed via GitHub Actions.",
      pl: "Pelna strona dokumentacji z motywem Material: przewodnik instalacji, przeglad architektury z diagramami Mermaid, przewodniki krok po kroku i odniesienie konfiguracji.",
      de: "Vollstandige Dokumentationsseite mit Material-Theme: Installationsanleitung, Architekturabersicht mit Mermaid-Diagrammen, Schritt-fur-Schritt-Anleitungen und Konfigurationsreferenz.",
      es: "Sitio de documentacion completo con tema Material: guia de instalacion, vision general de arquitectura con diagramas Mermaid, guias paso a paso y referencia de configuracion.",
    },
    tag: "template",
  },
  {
    date: "2026-01-21",
    version: "v0.2.14",
    project: "pydantic-deepagents",
    title: {
      en: "Modular extraction — external packages",
      pl: "Modularyzacja — zewnetrzne pakiety",
      de: "Modulare Extraktion — externe Pakete",
      es: "Extraccion modular — paquetes externos",
    },
    description: {
      en: "Extracted processors to summarization-pydantic-ai and subagents to subagents-pydantic-ai as standalone PyPI packages. Added dual-mode subagent execution (sync/async), auto mode, task management tools, and dynamic agent creation.",
      pl: "Wyodrebniono procesory do summarization-pydantic-ai i subagenty do subagents-pydantic-ai jako samodzielne pakiety PyPI. Dodano tryb dual-mode, auto, narzedzia zarzadzania zadaniami i dynamiczne tworzenie agentow.",
      de: "Prozessoren nach summarization-pydantic-ai und Subagenten nach subagents-pydantic-ai als eigenstandige PyPI-Pakete extrahiert. Dual-Mode-Ausfuhrung, Auto-Modus, Task-Management-Tools hinzugefugt.",
      es: "Se extrajeron procesadores a summarization-pydantic-ai y subagentes a subagents-pydantic-ai como paquetes PyPI independientes. Se anadio ejecucion dual-mode, modo auto y herramientas de gestion de tareas.",
    },
    tag: "framework",
    breaking: true,
  },
  {
    date: "2026-01-21",
    version: "v0.1.2",
    project: "pydantic-ai-backend",
    title: {
      en: "Fine-grained permission system",
      pl: "Szczegolowy system uprawnien",
      de: "Feingranulares Berechtigungssystem",
      es: "Sistema de permisos detallado",
    },
    description: {
      en: "Pattern-based access control with ALLOW/DENY/ASK actions. 4 presets: DEFAULT, PERMISSIVE, READONLY, STRICT. Glob pattern matching for file operations and shell execution. Async callback support for interactive prompts.",
      pl: "Kontrola dostepu oparta na wzorcach z akcjami ALLOW/DENY/ASK. 4 presety: DEFAULT, PERMISSIVE, READONLY, STRICT. Dopasowywanie glob dla operacji plikowych i powloki.",
      de: "Muster-basierte Zugriffskontrolle mit ALLOW/DENY/ASK-Aktionen. 4 Presets: DEFAULT, PERMISSIVE, READONLY, STRICT. Glob-Pattern-Matching fur Datei- und Shell-Operationen.",
      es: "Control de acceso basado en patrones con acciones ALLOW/DENY/ASK. 4 presets: DEFAULT, PERMISSIVE, READONLY, STRICT. Coincidencia de patrones glob para operaciones de archivos y shell.",
    },
    tag: "tool",
  },
  {
    date: "2026-01-18",
    version: "v0.1.15",
    project: "full-stack-ai-agent-template",
    title: {
      en: "DeepAgents framework & Human-in-the-Loop",
      pl: "Framework DeepAgents i Human-in-the-Loop",
      de: "DeepAgents-Framework & Human-in-the-Loop",
      es: "Framework DeepAgents y Human-in-the-Loop",
    },
    description: {
      en: "DeepAgents as 5th AI framework with built-in file ops, code execution, and task management tools. Human-in-the-Loop tool approval workflow with frontend dialog for approve/edit/reject decisions. WebSocket protocol for interrupt handling.",
      pl: "DeepAgents jako 5. framework AI z wbudowanymi operacjami plikowymi, wykonywaniem kodu i narzedziami zarzadzania zadaniami. Workflow zatwierdzania narzedzi Human-in-the-Loop z dialogiem frontendowym.",
      de: "DeepAgents als 5. KI-Framework mit eingebauten Dateioperationen, Code-Ausfuhrung und Task-Management. Human-in-the-Loop Tool-Genehmigungs-Workflow mit Frontend-Dialog.",
      es: "DeepAgents como 5to framework de IA con operaciones de archivos, ejecucion de codigo y gestion de tareas. Flujo de aprobacion Human-in-the-Loop con dialogo frontend.",
    },
    tag: "template",
  },
  {
    date: "2026-01-18",
    version: "v0.1.3",
    project: "pydantic-ai-todo",
    title: {
      en: "Todo IDs, subtasks, events & PostgreSQL",
      pl: "ID zadah, podzadania, zdarzenia i PostgreSQL",
      de: "Todo-IDs, Unteraufgaben, Events & PostgreSQL",
      es: "IDs de todo, subtareas, eventos y PostgreSQL",
    },
    description: {
      en: "Auto-generated hex IDs, atomic CRUD operations, async storage protocol. Task hierarchy with subtasks and dependency cycle detection. Event system with 5 event types. PostgreSQL backend with multi-tenancy.",
      pl: "Automatycznie generowane ID hex, atomowe operacje CRUD, protokol asynchronicznej pamieci. Hierarchia zadan z podzadaniami i wykrywaniem cykli. System zdarzen z 5 typami. Backend PostgreSQL z multi-tenancy.",
      de: "Auto-generierte Hex-IDs, atomare CRUD-Operationen, Async-Storage-Protokoll. Aufgabenhierarchie mit Unteraufgaben und Zykluserkennung. Event-System mit 5 Event-Typen. PostgreSQL-Backend mit Multi-Tenancy.",
      es: "IDs hex autogenerados, operaciones CRUD atomicas, protocolo de almacenamiento asincrono. Jerarquia de tareas con subtareas y deteccion de ciclos. Sistema de eventos con 5 tipos. Backend PostgreSQL con multi-tenancy.",
    },
    tag: "tool",
  },
  {
    date: "2026-01-17",
    version: "v0.1.0",
    project: "pydantic-ai-backend",
    title: {
      en: "Backend 0.1 — LocalBackend & Console Toolset",
      pl: "Backend 0.1 — LocalBackend i Console Toolset",
      de: "Backend 0.1 — LocalBackend & Console Toolset",
      es: "Backend 0.1 — LocalBackend y Console Toolset",
    },
    description: {
      en: "Unified LocalBackend replacing FilesystemBackend and LocalSandbox. Console Toolset with 7 tools: ls, read_file, write_file, edit_file, glob, grep, execute. Write/execute approval flows and full MkDocs documentation.",
      pl: "Zunifikowany LocalBackend zastepujacy FilesystemBackend i LocalSandbox. Console Toolset z 7 narzedziami: ls, read_file, write_file, edit_file, glob, grep, execute.",
      de: "Vereinheitlichtes LocalBackend ersetzt FilesystemBackend und LocalSandbox. Console Toolset mit 7 Tools: ls, read_file, write_file, edit_file, glob, grep, execute.",
      es: "LocalBackend unificado reemplazando FilesystemBackend y LocalSandbox. Console Toolset con 7 herramientas: ls, read_file, write_file, edit_file, glob, grep, execute.",
    },
    tag: "tool",
  },
  {
    date: "2026-01-15",
    version: "v0.0.1",
    project: "subagents-pydantic-ai",
    title: {
      en: "Subagents — Initial release",
      pl: "Subagents — Pierwsze wydanie",
      de: "Subagents — Erstverrffentlichung",
      es: "Subagents — Lanzamiento inicial",
    },
    description: {
      en: "Multi-agent delegation toolset for Pydantic AI. Dual-mode execution (sync/async) with auto-mode selection. Parent-child Q&A, soft/hard task cancellation, pluggable message bus, and dynamic agent registry. 100% test coverage.",
      pl: "Zestaw narzedzi delegacji wieloagentowej dla Pydantic AI. Dwutrybowe wykonanie (sync/async) z automatycznym wyborem trybu. Q&A rodzic-dziecko, anulowanie zadan, szyna wiadomosci.",
      de: "Multi-Agent-Delegations-Toolset fur Pydantic AI. Dual-Mode-Ausfuhrung (Sync/Async) mit Auto-Modus-Auswahl. Eltern-Kind-Q&A, Task-Stornierung, Message Bus.",
      es: "Toolset de delegacion multi-agente para Pydantic AI. Ejecucion dual-mode (sync/async) con seleccion automatica. Q&A padre-hijo, cancelacion de tareas, bus de mensajes.",
    },
    tag: "tool",
  },
  {
    date: "2026-01-06",
    version: "v0.1.13",
    project: "full-stack-ai-agent-template",
    title: {
      en: "Comprehensive configuration validation",
      pl: "Kompleksowa walidacja konfiguracji",
      de: "Umfassende Konfigurationsvalidierung",
      es: "Validacion integral de configuracion",
    },
    description: {
      en: "11 new validation rules preventing invalid option combinations (WebSocket auth, admin panel, conversation persistence, webhooks, background tasks). Dynamic integration prompts with context-aware options. 290+ new test lines.",
      pl: "11 nowych regul walidacji zapobiegajacych nieprawidlowym kombinacjom opcji (uwierzytelnianie WebSocket, panel admina, persystencja konwersacji). Dynamiczne prompty integracji. 290+ nowych linii testow.",
      de: "11 neue Validierungsregeln zur Verhinderung ungultiger Optionskombinationen (WebSocket-Auth, Admin-Panel, Konversationspersistenz). Dynamische Integrationsprompts. 290+ neue Testzeilen.",
      es: "11 nuevas reglas de validacion para prevenir combinaciones invalidas (autenticacion WebSocket, panel admin, persistencia de conversaciones). Prompts de integracion dinamicos. 290+ nuevas lineas de tests.",
    },
    tag: "template",
  },
  {
    date: "2026-01-02",
    version: "v0.1.11",
    project: "full-stack-ai-agent-template",
    title: {
      en: "LangGraph ReAct Agent support",
      pl: "Wsparcie agenta ReAct LangGraph",
      de: "LangGraph ReAct Agent-Unterstutzung",
      es: "Soporte de agente ReAct LangGraph",
    },
    description: {
      en: "LangGraph as 3rd AI framework with ReAct (Reasoning + Acting) agent pattern. Graph-based architecture with conditional edges, memory-based checkpointing, and full WebSocket streaming via astream().",
      pl: "LangGraph jako 3. framework AI ze wzorcem agenta ReAct (Reasoning + Acting). Architektura grafowa z kraweddziami warunkowymi, checkpointing i pelny streaming WebSocket.",
      de: "LangGraph als 3. KI-Framework mit ReAct (Reasoning + Acting) Agent-Muster. Graph-basierte Architektur mit bedingten Kanten, Memory-Checkpointing und vollstandigem WebSocket-Streaming.",
      es: "LangGraph como 3er framework de IA con patron de agente ReAct (Reasoning + Acting). Arquitectura basada en grafos con aristas condicionales, checkpointing y streaming WebSocket completo.",
    },
    tag: "template",
  },

  // ── December 2025 ───────────────────────────────────────
  {
    date: "2025-12-28",
    version: "v0.0.1",
    project: "pydantic-ai-backend",
    title: {
      en: "Backend Toolset — Initial release",
      pl: "Backend Toolset — Pierwsze wydanie",
      de: "Backend Toolset — Erstverrffentlichung",
      es: "Backend Toolset — Lanzamiento inicial",
    },
    description: {
      en: "Extracted from pydantic-deepagents. StateBackend, FilesystemBackend, CompositeBackend, DockerSandbox with SessionManager, 5 built-in runtimes. Ripgrep integration, PDF reading, and encoding detection.",
      pl: "Wyodrebnione z pydantic-deepagents. StateBackend, FilesystemBackend, CompositeBackend, DockerSandbox z SessionManager, 5 wbudowanych srodowisk. Integracja Ripgrep, odczyt PDF i wykrywanie kodowania.",
      de: "Aus pydantic-deepagents extrahiert. StateBackend, FilesystemBackend, CompositeBackend, DockerSandbox mit SessionManager, 5 eingebaute Runtimes. Ripgrep-Integration, PDF-Lesen und Encoding-Erkennung.",
      es: "Extraido de pydantic-deepagents. StateBackend, FilesystemBackend, CompositeBackend, DockerSandbox con SessionManager, 5 runtimes integrados. Integracion Ripgrep, lectura de PDF y deteccion de codificacion.",
    },
    tag: "tool",
  },
  {
    date: "2025-12-27",
    version: "v0.1.10",
    project: "full-stack-ai-agent-template",
    title: {
      en: "Nginx reverse proxy support",
      pl: "Wsparcie reverse proxy Nginx",
      de: "Nginx Reverse-Proxy-Unterstutzung",
      es: "Soporte de reverse proxy Nginx",
    },
    description: {
      en: "Nginx as alternative to Traefik with two modes: included in docker-compose or external config template. SSL/TLS configuration, security headers, WebSocket support, and Let's Encrypt ACME.",
      pl: "Nginx jako alternatywa dla Traefik z dwoma trybami: zawarty w docker-compose lub zewnetrzny szablon konfiguracji. Konfiguracja SSL/TLS, naglowki bezpieczenstwa, WebSocket i Let's Encrypt.",
      de: "Nginx als Alternative zu Traefik mit zwei Modi: in docker-compose enthalten oder externe Konfigurationsvorlage. SSL/TLS-Konfiguration, Sicherheitsheader, WebSocket und Let's Encrypt.",
      es: "Nginx como alternativa a Traefik con dos modos: incluido en docker-compose o plantilla de configuracion externa. Configuracion SSL/TLS, headers de seguridad, WebSocket y Let's Encrypt.",
    },
    tag: "template",
  },
  {
    date: "2025-12-26",
    version: "v0.1.9",
    project: "full-stack-ai-agent-template",
    title: {
      en: "SQLModel ORM support",
      pl: "Wsparcie ORM SQLModel",
      de: "SQLModel ORM-Unterstutzung",
      es: "Soporte de ORM SQLModel",
    },
    description: {
      en: "Optional SQLModel as alternative to SQLAlchemy for PostgreSQL and SQLite. Simplified syntax combining SQLAlchemy and Pydantic. Full Alembic and SQLAdmin compatibility maintained.",
      pl: "Opcjonalny SQLModel jako alternatywa dla SQLAlchemy dla PostgreSQL i SQLite. Uproszczona skladnia laczaca SQLAlchemy i Pydantic. Zachowano pelna kompatybilnosc z Alembic i SQLAdmin.",
      de: "Optionales SQLModel als Alternative zu SQLAlchemy fur PostgreSQL und SQLite. Vereinfachte Syntax, die SQLAlchemy und Pydantic kombiniert. Volle Alembic- und SQLAdmin-Kompatibilitat.",
      es: "SQLModel opcional como alternativa a SQLAlchemy para PostgreSQL y SQLite. Sintaxis simplificada combinando SQLAlchemy y Pydantic. Compatibilidad completa con Alembic y SQLAdmin.",
    },
    tag: "template",
  },
  {
    date: "2025-12-22",
    version: "v0.1.6",
    project: "full-stack-ai-agent-template",
    title: {
      en: "Multi-LLM providers, CLI & presets",
      pl: "Wielu dostawcow LLM, CLI i presety",
      de: "Multi-LLM-Anbieter, CLI & Presets",
      es: "Multiples proveedores LLM, CLI y presets",
    },
    description: {
      en: "OpenAI, Anthropic, and OpenRouter providers. Comprehensive CLI with 20+ flags. Configuration presets: production (Redis, Sentry, K8s) and ai-agent (WebSocket streaming, conversation persistence). Generator version metadata.",
      pl: "Dostawcy OpenAI, Anthropic i OpenRouter. Kompletny CLI z 20+ flagami. Presety konfiguracji: production (Redis, Sentry, K8s) i ai-agent (streaming WebSocket, persystencja konwersacji).",
      de: "OpenAI, Anthropic und OpenRouter Anbieter. Umfassendes CLI mit 20+ Flags. Konfigurationspresets: Production (Redis, Sentry, K8s) und AI-Agent (WebSocket-Streaming, Konversationspersistenz).",
      es: "Proveedores OpenAI, Anthropic y OpenRouter. CLI completo con 20+ flags. Presets de configuracion: production (Redis, Sentry, K8s) y ai-agent (streaming WebSocket, persistencia de conversaciones).",
    },
    tag: "template",
  },
  {
    date: "2024-12-29",
    version: "v0.1.0",
    project: "pydantic-ai-middleware",
    title: {
      en: "Middleware — Initial release",
      pl: "Middleware — Pierwsze wydanie",
      de: "Middleware — Erstverrffentlichung",
      es: "Middleware — Lanzamiento inicial",
    },
    description: {
      en: "AgentMiddleware base class with 6 lifecycle hooks: before_run, after_run, before_model_request, before_tool_call, after_tool_call, on_error. MiddlewareAgent wrapper, decorator-based creation, and custom exceptions. 100% test coverage.",
      pl: "Klasa bazowa AgentMiddleware z 6 hookami cyklu zycia: before_run, after_run, before_model_request, before_tool_call, after_tool_call, on_error. Wrapper MiddlewareAgent, tworzenie dekoratorami. 100% pokrycia testow.",
      de: "AgentMiddleware Basisklasse mit 6 Lifecycle-Hooks: before_run, after_run, before_model_request, before_tool_call, after_tool_call, on_error. MiddlewareAgent-Wrapper, Dekorator-basierte Erstellung. 100% Testabdeckung.",
      es: "Clase base AgentMiddleware con 6 hooks de ciclo de vida: before_run, after_run, before_model_request, before_tool_call, after_tool_call, on_error. Wrapper MiddlewareAgent, creacion basada en decoradores. 100% cobertura de tests.",
    },
    tag: "tool",
  },

  // ── January 2025 ────────────────────────────────────────
  {
    date: "2025-01-20",
    version: "v0.0.1",
    project: "summarization-pydantic-ai",
    title: {
      en: "Summarization — Initial release",
      pl: "Summarization — Pierwsze wydanie",
      de: "Summarization — Erstverrffentlichung",
      es: "Summarization — Lanzamiento inicial",
    },
    description: {
      en: "SummarizationProcessor with LLM-based intelligent summarization and SlidingWindowProcessor for zero-cost message trimming. Configurable triggers (message count, tokens, fraction), safe cutoff detection that preserves tool call pairs.",
      pl: "SummarizationProcessor z inteligentnym podsumowywaniem LLM i SlidingWindowProcessor do bezkosztowego przycinania wiadomosci. Konfigurowalne wyzwalacze, bezpieczne wykrywanie punktow ciecia.",
      de: "SummarizationProcessor mit LLM-basierter intelligenter Zusammenfassung und SlidingWindowProcessor fur kostenfreies Nachrichtentrimmen. Konfigurierbare Trigger, sichere Cutoff-Erkennung.",
      es: "SummarizationProcessor con resumen inteligente basado en LLM y SlidingWindowProcessor para recorte de mensajes sin costo. Triggers configurables, deteccion segura de puntos de corte.",
    },
    tag: "tool",
  },
];
