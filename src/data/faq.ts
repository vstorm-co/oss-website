import type { Lang } from "../i18n/translations";

export interface FaqItem {
  id: string;
  category?: "template" | "deepagents" | "logfire";
  question: Record<Lang, string>;
  answer: Record<Lang, string>;
}

export const faqItems: FaqItem[] = [
  {
    id: "what-is",
    category: "template",
    question: {
      en: "What is the Full-Stack AI Agent Template?",
      pl: "Czym jest Full-Stack AI Agent Template?",
      de: "Was ist das Full-Stack AI Agent Template?",
      es: "¿Qué es el Full-Stack AI Agent Template?",
    },
    answer: {
      en: "An open-source project generator that creates production-ready AI/LLM applications with a FastAPI backend and Next.js frontend. One CLI command or the web configurator generates a complete project with your choice of 5 AI frameworks, 3 databases, 4 vector stores, and 75+ configuration options. The project has 1,730+ GitHub stars and 830K+ downloads.",
      pl: "Open-source'owy generator projektów, który tworzy gotowe do produkcji aplikacje AI/LLM z backendem FastAPI i frontendem Next.js. Jedna komenda CLI lub konfigurator webowy generuje kompletny projekt z wybranym frameworkiem AI, bazą danych, uwierzytelnianiem i ponad 75 opcjami konfiguracji.",
      de: "Ein Open-Source-Projektgenerator, der produktionsreife AI/LLM-Anwendungen mit einem FastAPI-Backend und Next.js-Frontend erstellt. Ein CLI-Befehl oder der Web-Konfigurator generiert ein vollständiges Projekt mit Ihrer Wahl des AI-Frameworks, der Datenbank, Authentifizierung und über 75 Konfigurationsoptionen.",
      es: "Un generador de proyectos de código abierto que crea aplicaciones AI/LLM listas para producción con un backend FastAPI y frontend Next.js. Un comando CLI o el configurador web genera un proyecto completo con tu elección de framework de IA, base de datos, autenticación y más de 75 opciones de configuración.",
    },
  },
  {
    id: "which-framework",
    category: "template",
    question: {
      en: "Which AI framework should I choose?",
      pl: "Który framework AI powinienem wybrać?",
      de: "Welches AI-Framework sollte ich wählen?",
      es: "¿Qué framework de IA debería elegir?",
    },
    answer: {
      en: "The template supports 5 AI frameworks. Choose Pydantic AI for type-safe, production-grade agents with Logfire observability. Pick LangChain for its 700+ integrations. Use LangGraph for complex multi-step workflows with state management. Try CrewAI for multi-agent collaboration. Select DeepAgents for autonomous agents with planning and human-in-the-loop approval.",
      pl: "Wybierz Pydantic AI dla typowo bezpiecznych, produkcyjnych agentów z obserwowalnością Logfire. Wybierz LangChain dla największego ekosystemu integracji. Użyj LangGraph dla złożonych wieloetapowych przepływów pracy ze zarządzaniem stanem. Wypróbuj CrewAI dla współpracy wielu agentów. Wybierz DeepAgents dla autonomicznych agentów z planowaniem i zatwierdzaniem przez człowieka.",
      de: "Wählen Sie Pydantic AI für typsichere, produktionsreife Agenten mit Logfire-Observability. Nehmen Sie LangChain für das größte Ökosystem an Integrationen. Verwenden Sie LangGraph für komplexe mehrstufige Workflows mit State Management. Probieren Sie CrewAI für Multi-Agent-Kollaboration. Wählen Sie DeepAgents für autonome Agenten mit Planung und Human-in-the-Loop-Genehmigung.",
      es: "Elige Pydantic AI para agentes seguros con tipos y listos para producción con observabilidad Logfire. Escoge LangChain para el ecosistema más grande de integraciones. Usa LangGraph para flujos de trabajo complejos de múltiples pasos con gestión de estado. Prueba CrewAI para colaboración multi-agente. Selecciona DeepAgents para agentes autónomos con planificación y aprobación humana.",
    },
  },
  {
    id: "switch-framework",
    category: "template",
    question: {
      en: "Can I switch AI frameworks after generating a project?",
      pl: "Czy mogę zmienić framework AI po wygenerowaniu projektu?",
      de: "Kann ich das AI-Framework nach der Projektgenerierung wechseln?",
      es: "¿Puedo cambiar de framework de IA después de generar un proyecto?",
    },
    answer: {
      en: "Yes. Regenerate the project with a different --ai-framework flag. Your custom code outside the generated agent module is preserved if you use version control. The web configurator also lets you export your configuration as JSON and re-import it later. The agent module is isolated to ~150 lines, so switching frameworks requires no changes to your routes, auth, or frontend code.",
      pl: "Tak. Wygeneruj projekt ponownie z inną flagą --ai-framework. Twój niestandardowy kod poza wygenerowanym modułem agenta jest zachowany, jeśli używasz kontroli wersji. Konfigurator webowy pozwala też wyeksportować konfigurację jako JSON i zaimportować ją później.",
      de: "Ja. Generieren Sie das Projekt mit einem anderen --ai-framework-Flag neu. Ihr benutzerdefinierter Code außerhalb des generierten Agentenmoduls bleibt erhalten, wenn Sie Versionskontrolle verwenden. Der Web-Konfigurator ermöglicht auch den Export Ihrer Konfiguration als JSON zum späteren Re-Import.",
      es: "Sí. Regenera el proyecto con una flag --ai-framework diferente. Tu código personalizado fuera del módulo de agente generado se preserva si usas control de versiones. El configurador web también permite exportar tu configuración como JSON y reimportarla después.",
    },
  },
  {
    id: "is-free",
    category: "template",
    question: {
      en: "Is the template free to use?",
      pl: "Czy szablon jest darmowy?",
      de: "Ist das Template kostenlos?",
      es: "¿Es gratuita la plantilla?",
    },
    answer: {
      en: "Yes, completely free. The template is MIT licensed — use it for personal and commercial projects without restrictions. No premium tiers, no usage limits, no sign-up required. With 1,730+ GitHub stars and an active community, it is one of the most popular open-source AI app generators available.",
      pl: "Tak, całkowicie za darmo. Szablon jest na licencji MIT — używaj go do projektów osobistych i komercyjnych bez ograniczeń. Brak planów premium, brak limitów użytkowania, nie wymaga rejestracji.",
      de: "Ja, vollständig kostenlos. Das Template ist MIT-lizenziert — verwenden Sie es für persönliche und kommerzielle Projekte ohne Einschränkungen. Keine Premium-Stufen, keine Nutzungslimits, keine Registrierung erforderlich.",
      es: "Sí, completamente gratis. La plantilla tiene licencia MIT — úsala para proyectos personales y comerciales sin restricciones. Sin planes premium, sin límites de uso, sin registro necesario.",
    },
  },
  {
    id: "database-choice",
    category: "template",
    question: {
      en: "Which database should I use?",
      pl: "Jakiej bazy danych powinienem użyć?",
      de: "Welche Datenbank sollte ich verwenden?",
      es: "¿Qué base de datos debería usar?",
    },
    answer: {
      en: "PostgreSQL is recommended for production — it supports the admin panel, conversation persistence, and full SQLAlchemy/SQLModel ORM features. Use MongoDB for document-oriented workloads. SQLite is great for development and small deployments with zero configuration. Choose 'None' for stateless API-only services. The template also supports 4 vector stores (Qdrant, ChromaDB, Pinecone, pgvector) for RAG workflows.",
      pl: "PostgreSQL jest zalecany do produkcji — obsługuje panel administracyjny, historię konwersacji i pełne funkcje ORM SQLAlchemy/SQLModel. Użyj MongoDB dla obciążeń zorientowanych na dokumenty. SQLite jest świetny do developmentu i małych wdrożeń bez konfiguracji. Wybierz 'None' dla bezstanowych serwisów tylko z API.",
      de: "PostgreSQL wird für die Produktion empfohlen — es unterstützt das Admin-Panel, Konversationspersistenz und alle SQLAlchemy/SQLModel ORM-Funktionen. Verwenden Sie MongoDB für dokumentenorientierte Workloads. SQLite ist ideal für Entwicklung und kleine Deployments ohne Konfiguration. Wählen Sie 'None' für zustandslose API-only-Dienste.",
      es: "PostgreSQL es recomendado para producción — soporta el panel de administración, persistencia de conversaciones y todas las funciones ORM de SQLAlchemy/SQLModel. Usa MongoDB para cargas de trabajo orientadas a documentos. SQLite es ideal para desarrollo y despliegues pequeños sin configuración. Elige 'None' para servicios API sin estado.",
    },
  },
  {
    id: "websocket-streaming",
    category: "template",
    question: {
      en: "How does WebSocket streaming work?",
      pl: "Jak działa strumieniowanie WebSocket?",
      de: "Wie funktioniert WebSocket-Streaming?",
      es: "¿Cómo funciona el streaming por WebSocket?",
    },
    answer: {
      en: "The template includes a pre-built WebSocket endpoint that streams AI agent responses token-by-token to the frontend. It supports authenticated connections, tool call visualization, and automatic conversation persistence. The Next.js frontend includes a chat interface that renders streamed responses in real-time with Markdown support. All 5 AI frameworks use the same WebSocket contract, so switching frameworks requires zero frontend changes.",
      pl: "Szablon zawiera gotowy endpoint WebSocket, który strumieniuje odpowiedzi agenta AI token po tokenie do frontendu. Obsługuje uwierzytelnione połączenia, wizualizację wywołań narzędzi i automatyczne zapisywanie historii konwersacji. Frontend Next.js zawiera interfejs czatu renderujący odpowiedzi w czasie rzeczywistym.",
      de: "Das Template enthält einen vorgefertigten WebSocket-Endpunkt, der AI-Agent-Antworten Token für Token an das Frontend streamt. Es unterstützt authentifizierte Verbindungen, Tool-Call-Visualisierung und automatische Konversationspersistenz. Das Next.js-Frontend enthält eine Chat-Oberfläche, die die gestreamten Antworten in Echtzeit rendert.",
      es: "La plantilla incluye un endpoint WebSocket predefinido que transmite las respuestas del agente de IA token por token al frontend. Soporta conexiones autenticadas, visualización de llamadas a herramientas y persistencia automática de conversaciones. El frontend Next.js incluye una interfaz de chat que renderiza las respuestas en tiempo real.",
    },
  },
  {
    id: "configurator-how",
    category: "template",
    question: {
      en: "How does the web configurator work?",
      pl: "Jak działa konfigurator webowy?",
      de: "Wie funktioniert der Web-Konfigurator?",
      es: "¿Cómo funciona el configurador web?",
    },
    answer: {
      en: "The configurator is a 9-step wizard that runs entirely in your browser — no server required. It uses Nunjucks (a Jinja2-compatible JavaScript engine) to render 246 project templates client-side, then packages them into a ZIP with JSZip. The entire process takes 1-2 seconds and produces a project with 50-80 files depending on your selections. You can also export your configuration as a CLI command or JSON file.",
      pl: "Konfigurator to 9-etapowy kreator działający całkowicie w przeglądarce — nie wymaga serwera. Używa Nunjucks (silnika JavaScript kompatybilnego z Jinja2) do renderowania 246 szablonów projektów po stronie klienta, a następnie pakuje je do ZIP za pomocą JSZip. Cały proces trwa 1-2 sekundy. Możesz też wyeksportować konfigurację jako komendę CLI lub plik JSON.",
      de: "Der Konfigurator ist ein 9-Schritte-Assistent, der vollständig in Ihrem Browser läuft — kein Server erforderlich. Er verwendet Nunjucks (eine Jinja2-kompatible JavaScript-Engine), um 246 Projektvorlagen clientseitig zu rendern, und verpackt sie dann mit JSZip in eine ZIP-Datei. Der gesamte Prozess dauert 1-2 Sekunden. Sie können Ihre Konfiguration auch als CLI-Befehl oder JSON-Datei exportieren.",
      es: "El configurador es un asistente de 9 pasos que se ejecuta completamente en tu navegador — no requiere servidor. Usa Nunjucks (un motor JavaScript compatible con Jinja2) para renderizar 246 plantillas de proyecto del lado del cliente, y luego las empaqueta en un ZIP con JSZip. Todo el proceso toma 1-2 segundos. También puedes exportar tu configuración como comando CLI o archivo JSON.",
    },
  },
  {
    id: "deploy-production",
    category: "template",
    question: {
      en: "How do I deploy to production?",
      pl: "Jak wdrożyć na produkcję?",
      de: "Wie deploye ich in die Produktion?",
      es: "¿Cómo despliego a producción?",
    },
    answer: {
      en: "The template includes production Docker Compose files with health checks and restart policies. Copy .env.example to .env.prod, configure your credentials and database URL, then run: docker compose -f docker-compose.prod.yml up -d --build. Optional Traefik or Nginx reverse proxy handles automatic TLS certificates. The setup has been battle-tested across 30+ production deployments.",
      pl: "Szablon zawiera produkcyjne pliki Docker Compose z health checkami i politykami restartu. Skopiuj .env.example do .env.prod, skonfiguruj dane uwierzytelniające i URL bazy danych, a następnie uruchom: docker compose -f docker-compose.prod.yml up -d --build. Opcjonalny reverse proxy Traefik lub Nginx obsługuje automatyczne certyfikaty TLS.",
      de: "Das Template enthält produktionsreife Docker-Compose-Dateien mit Health Checks und Restart-Policies. Kopieren Sie .env.example nach .env.prod, konfigurieren Sie Ihre Anmeldedaten und Datenbank-URL, dann führen Sie aus: docker compose -f docker-compose.prod.yml up -d --build. Der optionale Traefik- oder Nginx-Reverse-Proxy handhabt automatische TLS-Zertifikate.",
      es: "La plantilla incluye archivos Docker Compose de producción con health checks y políticas de reinicio. Copia .env.example a .env.prod, configura tus credenciales y URL de base de datos, luego ejecuta: docker compose -f docker-compose.prod.yml up -d --build. El proxy inverso opcional Traefik o Nginx maneja certificados TLS automáticos.",
    },
  },
  {
    id: "python-versions",
    category: "template",
    question: {
      en: "What Python versions are supported?",
      pl: "Jakie wersje Pythona są obsługiwane?",
      de: "Welche Python-Versionen werden unterstützt?",
      es: "¿Qué versiones de Python son compatibles?",
    },
    answer: {
      en: "Python 3.11, 3.12, and 3.13. You select the version during project generation. All 5 AI frameworks and their dependencies are tested against each supported version in CI. The generated project includes a CI/CD pipeline (GitHub Actions) that runs tests on your chosen Python version automatically.",
      pl: "Python 3.11, 3.12 i 3.13. Wersję wybierasz podczas generowania projektu. Wszystkie frameworki AI i zależności są testowane dla każdej obsługiwanej wersji.",
      de: "Python 3.11, 3.12 und 3.13. Sie wählen die Version während der Projektgenerierung. Alle AI-Frameworks und Abhängigkeiten werden für jede unterstützte Version getestet.",
      es: "Python 3.11, 3.12 y 3.13. Seleccionas la versión durante la generación del proyecto. Todos los frameworks de IA y dependencias están probados para cada versión soportada.",
    },
  },
  {
    id: "modify-generated",
    category: "template",
    question: {
      en: "Can I modify the generated project?",
      pl: "Czy mogę modyfikować wygenerowany projekt?",
      de: "Kann ich das generierte Projekt modifizieren?",
      es: "¿Puedo modificar el proyecto generado?",
    },
    answer: {
      en: "Absolutely. The generated project is regular Python and TypeScript code — no lock-in, no proprietary runtime. It includes CLAUDE.md and AGENTS.md files so AI coding assistants like Claude Code, Cursor, or Copilot understand the project structure from day one. The codebase uses standard patterns (SQLAlchemy models, FastAPI routers, React components) that any Python or TypeScript developer can extend immediately.",
      pl: "Oczywiście. Wygenerowany projekt to zwykły kod Python i TypeScript — bez vendor lock-in, bez własnościowego runtime'u. Zawiera pliki CLAUDE.md i AGENTS.md, dzięki czemu asystenci programistyczni AI jak Claude Code, Cursor czy Copilot rozumieją strukturę projektu od pierwszego dnia.",
      de: "Absolut. Das generierte Projekt ist regulärer Python- und TypeScript-Code — kein Lock-in, keine proprietäre Laufzeitumgebung. Es enthält CLAUDE.md- und AGENTS.md-Dateien, damit AI-Coding-Assistenten wie Claude Code, Cursor oder Copilot die Projektstruktur vom ersten Tag an verstehen.",
      es: "Por supuesto. El proyecto generado es código Python y TypeScript regular — sin lock-in, sin runtime propietario. Incluye archivos CLAUDE.md y AGENTS.md para que asistentes de codificación IA como Claude Code, Cursor o Copilot entiendan la estructura del proyecto desde el primer día.",
    },
  },
  {
    id: "observability",
    category: "template",
    question: {
      en: "What observability tools are included?",
      pl: "Jakie narzędzia obserwacji są dołączone?",
      de: "Welche Observability-Tools sind enthalten?",
      es: "¿Qué herramientas de observabilidad están incluidas?",
    },
    answer: {
      en: "Three options: Logfire (by Pydantic) auto-instruments FastAPI, database queries, Redis, Celery, and HTTPX calls — ideal for Pydantic AI agents with full trace visibility. Sentry provides error tracking and performance monitoring. Prometheus collects metrics for Grafana dashboards. Enable any combination during generation. Each option adds fewer than 20 lines to your codebase thanks to auto-instrumentation.",
      pl: "Trzy opcje: Logfire (od Pydantic) automatycznie instrumentuje FastAPI, zapytania do bazy danych, Redis, Celery i wywołania HTTPX — idealne dla agentów Pydantic AI. Sentry zapewnia śledzenie błędów i monitorowanie wydajności. Prometheus zbiera metryki dla dashboardów Grafana. Włącz dowolną kombinację podczas generowania.",
      de: "Drei Optionen: Logfire (von Pydantic) instrumentiert automatisch FastAPI, Datenbankabfragen, Redis, Celery und HTTPX-Aufrufe — ideal für Pydantic AI-Agenten. Sentry bietet Fehlertracking und Performance-Monitoring. Prometheus sammelt Metriken für Grafana-Dashboards. Aktivieren Sie jede Kombination während der Generierung.",
      es: "Tres opciones: Logfire (de Pydantic) auto-instrumenta FastAPI, consultas de base de datos, Redis, Celery y llamadas HTTPX — ideal para agentes Pydantic AI. Sentry proporciona seguimiento de errores y monitoreo de rendimiento. Prometheus recopila métricas para dashboards de Grafana. Activa cualquier combinación durante la generación.",
    },
  },
  {
    id: "llm-providers",
    category: "template",
    question: {
      en: "Can I use multiple LLM providers?",
      pl: "Czy mogę używać wielu dostawców LLM?",
      de: "Kann ich mehrere LLM-Anbieter verwenden?",
      es: "¿Puedo usar múltiples proveedores de LLM?",
    },
    answer: {
      en: "The template configures one primary provider (OpenAI, Anthropic, or OpenRouter). With OpenRouter you get access to 200+ models from multiple providers through a single API key. You can also add additional providers manually after generation — the generated code is standard Python with no vendor lock-in. Provider configuration is centralized in a single settings file, so adding a new provider takes under 5 lines of code.",
      pl: "Szablon konfiguruje jednego głównego dostawcę (OpenAI, Anthropic lub OpenRouter). Z OpenRouter masz dostęp do 200+ modeli od wielu dostawców przez jeden klucz API. Możesz też ręcznie dodać dodatkowych dostawców po wygenerowaniu — wygenerowany kod to standardowy Python bez vendor lock-in.",
      de: "Das Template konfiguriert einen primären Anbieter (OpenAI, Anthropic oder OpenRouter). Mit OpenRouter erhalten Sie Zugang zu über 200 Modellen von mehreren Anbietern über einen einzigen API-Schlüssel. Sie können auch nach der Generierung manuell weitere Anbieter hinzufügen — der generierte Code ist Standard-Python ohne Vendor-Lock-in.",
      es: "La plantilla configura un proveedor principal (OpenAI, Anthropic u OpenRouter). Con OpenRouter obtienes acceso a más de 200 modelos de múltiples proveedores a través de una sola clave API. También puedes agregar proveedores adicionales manualmente después de la generación — el código generado es Python estándar sin lock-in de proveedor.",
    },
  },

  // ── DeepAgents FAQ ─────────────────────────────────────────
  {
    id: "da-what-is",
    category: "deepagents",
    question: {
      en: "What is pydantic-deep?",
      pl: "Czym jest pydantic-deep?",
      de: "Was ist pydantic-deep?",
      es: "¿Qué es pydantic-deep?",
    },
    answer: {
      en: "A Python framework for building autonomous AI agents inspired by Claude Code's architecture. It implements the deep agent pattern — agents that can plan, read/write files, delegate to subagents, and maintain persistent memory across sessions. Built on Pydantic AI, it provides type-safe tool definitions, structured outputs, and Logfire observability out of the box.",
      pl: "Framework Python do budowy autonomicznych agentów AI inspirowany architekturą Claude Code. Implementuje wzorzec deep agent — agenty, które mogą planować, czytać/pisać pliki, delegować do subagentów i utrzymywać trwałą pamięć między sesjami.",
      de: "Ein Python-Framework zum Erstellen autonomer KI-Agenten, inspiriert von der Claude-Code-Architektur. Es implementiert das Deep-Agent-Pattern — Agenten, die planen, Dateien lesen/schreiben, an Subagenten delegieren und persistenten Speicher über Sitzungen hinweg behalten.",
      es: "Un framework Python para construir agentes autónomos de IA inspirado en la arquitectura de Claude Code. Implementa el patrón deep agent — agentes que pueden planificar, leer/escribir archivos, delegar a subagentes y mantener memoria persistente entre sesiones.",
    },
  },
  {
    id: "da-vs-langchain",
    category: "deepagents",
    question: {
      en: "How does it differ from LangChain or CrewAI?",
      pl: "Czym się różni od LangChain lub CrewAI?",
      de: "Wie unterscheidet es sich von LangChain oder CrewAI?",
      es: "¿En qué se diferencia de LangChain o CrewAI?",
    },
    answer: {
      en: "DeepAgents is type-safe by default (Pydantic models, not dicts), modular (compose tools, not chains), and observable (Logfire integration). It focuses on the deep agent pattern — long-running agents that plan and execute autonomously — rather than simple chain-of-thought or multi-agent chat. A comparable LangChain agent typically requires 3-5x more boilerplate code for the same functionality.",
      pl: "DeepAgents jest domyślnie typowo bezpieczny (modele Pydantic, nie słowniki), modularny (kompozycja narzędzi, nie łańcuchy) i obserwowalny (integracja Logfire). Skupia się na wzorcu deep agent — długotrwałych agentach, które planują i wykonują autonomicznie — zamiast prostego chain-of-thought.",
      de: "DeepAgents ist standardmäßig typsicher (Pydantic-Modelle, keine Dicts), modular (Tools komponieren, keine Chains) und beobachtbar (Logfire-Integration). Es konzentriert sich auf das Deep-Agent-Pattern — langlebige Agenten, die autonom planen und ausführen.",
      es: "DeepAgents es type-safe por defecto (modelos Pydantic, no dicts), modular (componer herramientas, no cadenas) y observable (integración Logfire). Se enfoca en el patrón deep agent — agentes de larga duración que planifican y ejecutan autónomamente.",
    },
  },
  {
    id: "da-providers",
    category: "deepagents",
    question: {
      en: "Which LLM providers are supported?",
      pl: "Którzy dostawcy LLM są obsługiwani?",
      de: "Welche LLM-Anbieter werden unterstützt?",
      es: "¿Qué proveedores de LLM son compatibles?",
    },
    answer: {
      en: "Any provider supported by Pydantic AI — OpenAI, Anthropic, Google Gemini, Groq, Mistral, and any OpenAI-compatible API (like Ollama for local models). Swap providers with one line of configuration. That means 6+ cloud providers and unlimited local models via Ollama, all with the same agent code and zero changes to your tool definitions.",
      pl: "Każdy dostawca obsługiwany przez Pydantic AI — OpenAI, Anthropic, Google Gemini, Groq, Mistral i każde API kompatybilne z OpenAI (jak Ollama dla lokalnych modeli). Zmiana dostawcy jedną linią konfiguracji.",
      de: "Jeder von Pydantic AI unterstützte Anbieter — OpenAI, Anthropic, Google Gemini, Groq, Mistral und jede OpenAI-kompatible API (wie Ollama für lokale Modelle). Anbieterwechsel mit einer Konfigurationszeile.",
      es: "Cualquier proveedor soportado por Pydantic AI — OpenAI, Anthropic, Google Gemini, Groq, Mistral y cualquier API compatible con OpenAI (como Ollama para modelos locales). Cambia de proveedor con una línea de configuración.",
    },
  },
  {
    id: "da-custom-tools",
    category: "deepagents",
    question: {
      en: "Can I use my own tools?",
      pl: "Czy mogę używać własnych narzędzi?",
      de: "Kann ich eigene Tools verwenden?",
      es: "¿Puedo usar mis propias herramientas?",
    },
    answer: {
      en: "Yes. Define tools using the @tool decorator from Pydantic AI. Tools are type-checked at runtime, support async execution, and integrate with the human-in-the-loop permission system. You can also use pre-built toolsets (filesystem, database, console) from companion libraries. Each tool is a plain Python function — no special SDK or wrapper needed beyond the decorator.",
      pl: "Tak. Definiuj narzędzia za pomocą dekoratora @tool z Pydantic AI. Narzędzia są sprawdzane typowo, obsługują wykonanie asynchroniczne i integrują się z systemem uprawnień. Możesz też używać gotowych zestawów narzędzi (filesystem, baza danych, konsola) z bibliotek towarzyszących.",
      de: "Ja. Definieren Sie Tools mit dem @tool-Dekorator von Pydantic AI. Tools sind typgeprüft, unterstützen asynchrone Ausführung und integrieren sich in das Berechtigungssystem. Sie können auch vorgefertigte Toolsets (Dateisystem, Datenbank, Konsole) aus Begleitbibliotheken verwenden.",
      es: "Sí. Define herramientas usando el decorador @tool de Pydantic AI. Las herramientas son type-checked, soportan ejecución async e se integran con el sistema de permisos. También puedes usar toolsets preconstruidos (filesystem, base de datos, consola) de bibliotecas complementarias.",
    },
  },
  {
    id: "da-production",
    category: "deepagents",
    question: {
      en: "Is it production-ready?",
      pl: "Czy jest gotowy do produkcji?",
      de: "Ist es produktionsreif?",
      es: "¿Está listo para producción?",
    },
    answer: {
      en: "Yes. DeepAgents powers 30+ production deployments at Vstorm. It includes structured logging via Logfire, automatic error recovery with configurable retry policies, and token usage tracking per agent run. The framework has been battle-tested in real-world AI agent applications handling thousands of autonomous tasks.",
      pl: "Tak. DeepAgents napędza ponad 30 wdrożeń produkcyjnych w Vstorm. Zawiera strukturalne logowanie przez Logfire, odzyskiwanie po błędach, śledzenie zużycia tokenów i został przetestowany w prawdziwych aplikacjach agentów AI.",
      de: "Ja. DeepAgents betreibt über 30 Produktions-Deployments bei Vstorm. Es umfasst strukturiertes Logging über Logfire, Fehlerwiederherstellung, Token-Usage-Tracking und wurde in echten KI-Agenten-Anwendungen kampferprobt.",
      es: "Sí. DeepAgents impulsa más de 30 despliegues en producción en Vstorm. Incluye logging estructurado vía Logfire, recuperación de errores, seguimiento de uso de tokens y ha sido probado en aplicaciones reales de agentes IA.",
    },
  },

  // ── Logfire FAQ ────────────────────────────────────────────
  {
    id: "lf-what-is",
    category: "logfire",
    question: {
      en: "What is Logfire Assistant?",
      pl: "Czym jest Logfire Assistant?",
      de: "Was ist Logfire Assistant?",
      es: "¿Qué es Logfire Assistant?",
    },
    answer: {
      en: "A Chrome extension with a FastAPI backend that adds an AI-powered sidebar to the Pydantic Logfire dashboard. Ask questions about your traces in natural language, get SQL queries generated automatically, and see results as tables or charts — all without leaving your browser. It turns the Logfire SQL API into a conversational interface, eliminating the need to write raw trace queries manually.",
      pl: "Rozszerzenie Chrome z backendem FastAPI, które dodaje panel boczny z AI do dashboardu Pydantic Logfire. Zadawaj pytania o traces w języku naturalnym, otrzymuj automatycznie generowane zapytania SQL i zobacz wyniki jako tabele lub wykresy — bez opuszczania przeglądarki.",
      de: "Eine Chrome-Erweiterung mit FastAPI-Backend, die eine KI-gestützte Seitenleiste zum Pydantic-Logfire-Dashboard hinzufügt. Stellen Sie Fragen zu Ihren Traces in natürlicher Sprache, erhalten Sie automatisch generierte SQL-Abfragen und sehen Sie Ergebnisse als Tabellen oder Diagramme.",
      es: "Una extensión de Chrome con backend FastAPI que agrega un panel lateral con IA al dashboard de Pydantic Logfire. Haz preguntas sobre tus traces en lenguaje natural, obtén consultas SQL generadas automáticamente y ve resultados como tablas o gráficos.",
    },
  },
  {
    id: "lf-logfire-account",
    category: "logfire",
    question: {
      en: "Do I need a Logfire account?",
      pl: "Czy potrzebuję konta Logfire?",
      de: "Brauche ich ein Logfire-Konto?",
      es: "¿Necesito una cuenta de Logfire?",
    },
    answer: {
      en: "Yes. Logfire Assistant queries your Logfire data via the Logfire API. You need a Logfire account with at least one project that has trace data. The assistant uses your Logfire read token to access your data securely. Logfire offers a generous free tier, so you can start using the assistant at no cost with up to 50M spans per month.",
      pl: "Tak. Logfire Assistant odpytuje Twoje dane Logfire przez API Logfire. Potrzebujesz konta Logfire z co najmniej jednym projektem z danymi traces. Asystent używa Twojego tokenu odczytu Logfire do bezpiecznego dostępu do danych.",
      de: "Ja. Logfire Assistant fragt Ihre Logfire-Daten über die Logfire-API ab. Sie benötigen ein Logfire-Konto mit mindestens einem Projekt mit Trace-Daten. Der Assistent verwendet Ihr Logfire-Lesetoken für sicheren Datenzugriff.",
      es: "Sí. Logfire Assistant consulta tus datos de Logfire a través de la API de Logfire. Necesitas una cuenta de Logfire con al menos un proyecto que tenga datos de traces. El asistente usa tu token de lectura de Logfire para acceder a tus datos de forma segura.",
    },
  },
  {
    id: "lf-llm-providers",
    category: "logfire",
    question: {
      en: "Which LLM providers work?",
      pl: "Którzy dostawcy LLM działają?",
      de: "Welche LLM-Anbieter funktionieren?",
      es: "¿Qué proveedores de LLM funcionan?",
    },
    answer: {
      en: "OpenAI, Anthropic, Google Gemini, and any OpenAI-compatible API. Configure your preferred provider in the backend settings. The AI generates Logfire-specific SQL queries optimized for the traces schema, including span attributes, duration metrics, and exception fields. The system prompt includes the full Logfire schema so the LLM produces accurate queries on the first attempt.",
      pl: "OpenAI, Anthropic, Google Gemini i każde API kompatybilne z OpenAI. Skonfiguruj preferowanego dostawcę w ustawieniach backendu. AI generuje zapytania SQL specyficzne dla Logfire, zoptymalizowane dla schematu traces.",
      de: "OpenAI, Anthropic, Google Gemini und jede OpenAI-kompatible API. Konfigurieren Sie Ihren bevorzugten Anbieter in den Backend-Einstellungen. Die KI generiert Logfire-spezifische SQL-Abfragen, optimiert für das Traces-Schema.",
      es: "OpenAI, Anthropic, Google Gemini y cualquier API compatible con OpenAI. Configura tu proveedor preferido en los ajustes del backend. La IA genera consultas SQL específicas de Logfire optimizadas para el esquema de traces.",
    },
  },
  {
    id: "lf-custom-prompts",
    category: "logfire",
    question: {
      en: "Can I create custom prompts?",
      pl: "Czy mogę tworzyć własne prompty?",
      de: "Kann ich eigene Prompts erstellen?",
      es: "¿Puedo crear prompts personalizados?",
    },
    answer: {
      en: "Yes. Create reusable prompt templates with slash commands like /errors, /costs, or /slow. Templates can include variables (e.g., date ranges, service names) and are saved per-project in PostgreSQL. Share them across your team for consistent debugging workflows. This turns common observability questions into one-click actions.",
      pl: "Tak. Twórz wielorazowe szablony promptów z komendami slash jak /errors, /costs lub /slow. Szablony mogą zawierać zmienne i są zapisywane per-projekt. Udostępniaj je zespołowi dla spójnych procesów debugowania.",
      de: "Ja. Erstellen Sie wiederverwendbare Prompt-Templates mit Slash-Befehlen wie /errors, /costs oder /slow. Templates können Variablen enthalten und werden pro Projekt gespeichert. Teilen Sie sie im Team für konsistente Debugging-Workflows.",
      es: "Sí. Crea plantillas de prompts reutilizables con comandos slash como /errors, /costs o /slow. Las plantillas pueden incluir variables y se guardan por proyecto. Compártelas con tu equipo para flujos de debugging consistentes.",
    },
  },
  {
    id: "lf-data-storage",
    category: "logfire",
    question: {
      en: "Is my data stored?",
      pl: "Czy moje dane są przechowywane?",
      de: "Werden meine Daten gespeichert?",
      es: "¿Se almacenan mis datos?",
    },
    answer: {
      en: "Conversations are stored in your own PostgreSQL database that you host. No data is sent to third parties beyond the LLM API calls. The Chrome extension communicates only with your self-hosted FastAPI backend. Your Logfire read token never leaves your server — the extension sends natural language queries, and the backend handles all API communication.",
      pl: "Konwersacje są przechowywane w Twojej własnej bazie PostgreSQL, którą hostujesz. Żadne dane nie są wysyłane do stron trzecich poza wywołaniami API LLM. Rozszerzenie Chrome komunikuje się tylko z Twoim własnym backendem FastAPI.",
      de: "Konversationen werden in Ihrer eigenen PostgreSQL-Datenbank gespeichert, die Sie selbst hosten. Keine Daten werden an Dritte gesendet, außer den LLM-API-Aufrufen. Die Chrome-Erweiterung kommuniziert nur mit Ihrem selbst gehosteten FastAPI-Backend.",
      es: "Las conversaciones se almacenan en tu propia base de datos PostgreSQL que tú alojas. No se envían datos a terceros más allá de las llamadas a la API del LLM. La extensión de Chrome se comunica solo con tu backend FastAPI autoalojado.",
    },
  },
];
