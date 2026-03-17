import type { Lang } from "../i18n/translations";

export interface UseCaseStep {
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}

export interface UseCasePage {
  slug: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  heroSubtitle: Record<Lang, string>;
  difficulty: "beginner" | "intermediate" | "advanced";
  timeToComplete: string;
  projectSlug: string;
  tags: string[];
  problem: Record<Lang, string>;
  solution: Record<Lang, string>;
  codeExample: { label: string; code: string };
  steps: UseCaseStep[];
  relatedUseCases: string[];
  relatedComparisons: string[];
}

export const useCasePages: UseCasePage[] = [
  // ─── 1. deep-research-agent ─────────────────────────────────────────
  {
    slug: "deep-research-agent",
    title: {
      en: "Deep Research Agent with Sub-Agents",
      pl: "Agent badawczy z podagentami",
      de: "Deep-Research-Agent mit Sub-Agenten",
      es: "Agente de investigacion profunda con subagentes",
    },
    description: {
      en: "Build a research agent that breaks complex topics into sub-tasks, delegates to specialist sub-agents, searches the web, and synthesizes findings into a structured report.",
      pl: "Zbuduj agenta badawczego, ktory rozbija zlozoone tematy na podzadania, deleguje je do wyspecjalizowanych podagentow, przeszukuje internet i syntetyzuje wyniki w ustrukturyzowany raport.",
      de: "Erstelle einen Research-Agenten, der komplexe Themen in Teilaufgaben zerlegt, an spezialisierte Sub-Agenten delegiert, das Web durchsucht und die Ergebnisse in einem strukturierten Bericht zusammenfasst.",
      es: "Construye un agente de investigacion que descompone temas complejos en subtareas, las delega a subagentes especializados, busca en la web y sintetiza los hallazgos en un informe estructurado.",
    },
    heroSubtitle: {
      en: "Orchestrate multiple AI specialists to research any topic in depth",
      pl: "Orkiestruj wielu specjalistow AI, aby doglebnie zbadac dowolny temat",
      de: "Orchestriere mehrere KI-Spezialisten fur die Tiefenrecherche beliebiger Themen",
      es: "Orquesta multiples especialistas de IA para investigar cualquier tema en profundidad",
    },
    difficulty: "intermediate",
    timeToComplete: "20 min",
    projectSlug: "pydantic-deepagents",
    tags: ["research", "subagents", "web-search"],
    problem: {
      en: "Building a research agent that can break complex topics into sub-tasks, search the web, and synthesize findings requires coordinating multiple specialists — web searchers, analyzers, writers — while maintaining context across all of them.",
      pl: "Stworzenie agenta badawczego, ktory potrafi rozlozyc zlozoone tematy na podzadania, przeszukiwac internet i syntetyzowac wyniki, wymaga koordynacji wielu specjalistow — wyszukiwarek, analitykow, redaktorow — przy jednoczesnym utrzymaniu kontekstu miedzy nimi wszystkimi.",
      de: "Ein Research-Agent, der komplexe Themen in Teilaufgaben zerlegen, das Web durchsuchen und Ergebnisse zusammenfassen kann, erfordert die Koordination mehrerer Spezialisten — Websuche, Analyse, Redaktion — bei gleichzeitiger Aufrechterhaltung des Kontexts zwischen allen Beteiligten.",
      es: "Construir un agente de investigacion capaz de descomponer temas complejos en subtareas, buscar en la web y sintetizar hallazgos requiere coordinar multiples especialistas — buscadores, analistas, redactores — manteniendo el contexto entre todos ellos.",
    },
    solution: {
      en: "Deep Agents provides built-in sub-agent delegation via the `task` tool, web search integration, and automatic context management. Define specialist sub-agents, give them tools, and the orchestrator handles coordination, context isolation, and result aggregation.",
      pl: "Deep Agents oferuje wbudowana delegacje do podagentow poprzez narzedzie `task`, integracje z wyszukiwaniem w internecie i automatyczne zarzadzanie kontekstem. Zdefiniuj wyspecjalizowanych podagentow, przypisz im narzedzia, a orkiestrator zajmie sie koordynacja, izolacja kontekstu i agregacja wynikow.",
      de: "Deep Agents bietet eingebaute Sub-Agenten-Delegation uber das `task`-Tool, Web-Suche-Integration und automatisches Kontextmanagement. Definiere spezialisierte Sub-Agenten, gib ihnen Tools, und der Orchestrator ubernimmt Koordination, Kontextisolierung und Ergebnisaggregation.",
      es: "Deep Agents ofrece delegacion integrada a subagentes mediante la herramienta `task`, integracion con busqueda web y gestion automatica del contexto. Define subagentes especializados, asignales herramientas, y el orquestador se encarga de la coordinacion, el aislamiento de contexto y la agregacion de resultados.",
    },
    codeExample: {
      label: "deep_research_agent.py",
      code: `from deepagents import create_deep_agent
from langchain.chat_models import init_chat_model
from langchain_core.tools import tool

@tool
def web_search(query: str, max_results: int = 5) -> dict:
    """Search the web for current information."""
    from tavily import TavilyClient
    client = TavilyClient()
    return client.search(query, max_results=max_results)

research_sub_agent = {
    "name": "researcher",
    "description": "Delegate research to a specialist sub-agent.",
    "system_prompt": "You are a research specialist. Search thoroughly and synthesize findings.",
    "tools": [web_search],
}

agent = create_deep_agent(
    model=init_chat_model("anthropic:claude-sonnet-4-5-20250929"),
    tools=[web_search],
    system_prompt="You are a research orchestrator. Break complex topics into sub-tasks and delegate to researchers.",
    subagents=[research_sub_agent],
)

result = agent.invoke({"messages": [("user", "Research the latest advances in AI agent architectures")]})`,
    },
    steps: [
      {
        title: {
          en: "Install & configure",
          pl: "Instalacja i konfiguracja",
          de: "Installation & Konfiguration",
          es: "Instalacion y configuracion",
        },
        description: {
          en: "Install deepagents with `pip install deepagents` and set your API keys for Anthropic and Tavily (web search).",
          pl: "Zainstaluj deepagents poleceniem `pip install deepagents` i ustaw klucze API dla Anthropic oraz Tavily (wyszukiwanie w internecie).",
          de: "Installiere deepagents mit `pip install deepagents` und setze deine API-Schlussel fur Anthropic und Tavily (Websuche).",
          es: "Instala deepagents con `pip install deepagents` y configura tus claves API para Anthropic y Tavily (busqueda web).",
        },
      },
      {
        title: {
          en: "Define search tools",
          pl: "Zdefiniuj narzedzia wyszukiwania",
          de: "Suchwerkzeuge definieren",
          es: "Definir herramientas de busqueda",
        },
        description: {
          en: "Create a `web_search` tool using Tavily that the agent and sub-agents can use to find current information on any topic.",
          pl: "Stworz narzedzie `web_search` korzystajace z Tavily, ktore agent i podagenci moga wykorzystywac do wyszukiwania aktualnych informacji na dowolny temat.",
          de: "Erstelle ein `web_search`-Tool mit Tavily, das Agent und Sub-Agenten nutzen konnen, um aktuelle Informationen zu beliebigen Themen zu finden.",
          es: "Crea una herramienta `web_search` usando Tavily que el agente y los subagentes puedan usar para encontrar informacion actual sobre cualquier tema.",
        },
      },
      {
        title: {
          en: "Create sub-agents",
          pl: "Stworz podagentow",
          de: "Sub-Agenten erstellen",
          es: "Crear subagentes",
        },
        description: {
          en: "Define specialist sub-agents as dictionaries with a name, description, system prompt, and tools. The orchestrator will delegate tasks to them automatically via the `task` tool.",
          pl: "Zdefiniuj wyspecjalizowanych podagentow jako slowniki z nazwa, opisem, promptem systemowym i narzedziami. Orkiestrator automatycznie deleguje do nich zadania za pomoca narzedzia `task`.",
          de: "Definiere spezialisierte Sub-Agenten als Dictionaries mit Name, Beschreibung, System-Prompt und Tools. Der Orchestrator delegiert Aufgaben automatisch uber das `task`-Tool an sie.",
          es: "Define subagentes especializados como diccionarios con nombre, descripcion, prompt de sistema y herramientas. El orquestador les delegara tareas automaticamente mediante la herramienta `task`.",
        },
      },
      {
        title: {
          en: "Run the orchestrator",
          pl: "Uruchom orkiestratora",
          de: "Orchestrator ausfuhren",
          es: "Ejecutar el orquestador",
        },
        description: {
          en: "Invoke the agent with your research question. It will plan sub-tasks, delegate to researchers, collect results, and synthesize everything into a comprehensive answer.",
          pl: "Wywolaj agenta z pytaniem badawczym. Zaplanuje podzadania, deleguje je do badaczy, zbierze wyniki i zsyntetyzuje wszystko w kompleksowa odpowiedz.",
          de: "Rufe den Agenten mit deiner Forschungsfrage auf. Er plant Teilaufgaben, delegiert an Forscher, sammelt Ergebnisse und fasst alles zu einer umfassenden Antwort zusammen.",
          es: "Invoca al agente con tu pregunta de investigacion. Planificara subtareas, las delegara a los investigadores, recopilara resultados y sintetizara todo en una respuesta completa.",
        },
      },
    ],
    relatedUseCases: ["text-to-sql-agent", "content-generation-agent"],
    relatedComparisons: ["deepagents-vs-langchain"],
  },

  // ─── 2. text-to-sql-agent ──────────────────────────────────────────
  {
    slug: "text-to-sql-agent",
    title: {
      en: "Text-to-SQL Agent with Memory",
      pl: "Agent Text-to-SQL z pamiecia",
      de: "Text-to-SQL-Agent mit Gedachtnis",
      es: "Agente Text-to-SQL con memoria",
    },
    description: {
      en: "Build an agent that converts natural language questions into SQL queries, explores database schemas, and learns from past interactions through persistent filesystem-backed memory.",
      pl: "Zbuduj agenta, ktory konwertuje pytania w jezyku naturalnym na zapytania SQL, eksploruje schematy baz danych i uczy sie z poprzednich interakcji dzieki trwalej pamieci opartej na systemie plikow.",
      de: "Erstelle einen Agenten, der naturlichsprachliche Fragen in SQL-Abfragen umwandelt, Datenbankschemata erkundet und aus vergangenen Interaktionen durch persistenten dateisystembasierten Speicher lernt.",
      es: "Construye un agente que convierte preguntas en lenguaje natural a consultas SQL, explora esquemas de bases de datos y aprende de interacciones anteriores mediante memoria persistente respaldada por el sistema de archivos.",
    },
    heroSubtitle: {
      en: "Query any database with natural language — powered by persistent memory and SQL skills",
      pl: "Odpytuj dowolna baze danych w jezyku naturalnym — z trwala pamiecia i umiejetnosciami SQL",
      de: "Befrage jede Datenbank in naturlicher Sprache — mit persistentem Gedachtnis und SQL-Fahigkeiten",
      es: "Consulta cualquier base de datos en lenguaje natural — con memoria persistente y habilidades SQL",
    },
    difficulty: "intermediate",
    timeToComplete: "15 min",
    projectSlug: "pydantic-deepagents",
    tags: ["sql", "database", "data-analysis"],
    problem: {
      en: "Querying databases with natural language requires understanding schemas, writing correct SQL, handling edge cases, and explaining results — all while keeping the agent grounded in the actual data structure.",
      pl: "Odpytywanie baz danych w jezyku naturalnym wymaga rozumienia schematow, pisania poprawnego SQL-a, obslugiwania przypadkow brzegowych i wyjasniania wynikow — przy jednoczesnym utrzymaniu agenta zakotwiczonego w rzeczywistej strukturze danych.",
      de: "Datenbanken mit naturlicher Sprache abzufragen erfordert Schemaverstandnis, korrektes SQL-Schreiben, Behandlung von Sonderfallen und Erklarung der Ergebnisse — und dabei muss der Agent stets an der tatsachlichen Datenstruktur verankert bleiben.",
      es: "Consultar bases de datos en lenguaje natural requiere comprender esquemas, escribir SQL correcto, manejar casos especiales y explicar resultados — todo manteniendo al agente anclado en la estructura real de los datos.",
    },
    solution: {
      en: "Deep Agents combines LangChain's SQLDatabaseToolkit with persistent memory (AGENTS.md for identity/rules) and skills (specialized SQL workflows). The agent explores schemas, writes queries, and learns from past interactions through filesystem-backed memory.",
      pl: "Deep Agents laczy SQLDatabaseToolkit z LangChain z trwala pamiecia (AGENTS.md jako tozsamosc i reguly) oraz umiejetnosciami (wyspecjalizowane przeplywy SQL). Agent eksploruje schematy, pisze zapytania i uczy sie z poprzednich interakcji dzieki pamieci opartej na systemie plikow.",
      de: "Deep Agents kombiniert LangChains SQLDatabaseToolkit mit persistentem Gedachtnis (AGENTS.md fur Identitat und Regeln) und Skills (spezialisierte SQL-Workflows). Der Agent erkundet Schemata, schreibt Abfragen und lernt aus vergangenen Interaktionen durch dateisystembasiertes Gedachtnis.",
      es: "Deep Agents combina el SQLDatabaseToolkit de LangChain con memoria persistente (AGENTS.md para identidad y reglas) y habilidades (flujos de trabajo SQL especializados). El agente explora esquemas, escribe consultas y aprende de interacciones anteriores mediante memoria respaldada por el sistema de archivos.",
    },
    codeExample: {
      label: "text_to_sql_agent.py",
      code: `from deepagents import create_deep_agent
from deepagents.backends import FilesystemBackend
from langchain_anthropic import ChatAnthropic
from langchain_community.agent_toolkits import SQLDatabaseToolkit
from langchain_community.utilities import SQLDatabase

db = SQLDatabase.from_uri("sqlite:///my_database.db", sample_rows_in_table_info=3)
model = ChatAnthropic(model="claude-sonnet-4-5-20250929", temperature=0)
toolkit = SQLDatabaseToolkit(db=db, llm=model)

agent = create_deep_agent(
    model=model,
    memory=["./AGENTS.md"],
    skills=["./skills/"],
    tools=toolkit.get_tools(),
    backend=FilesystemBackend(root_dir="."),
)

result = agent.invoke({"messages": [("user", "What are the top 5 best-selling artists?")]})`,
    },
    steps: [
      {
        title: {
          en: "Set up database connection",
          pl: "Skonfiguruj polaczenie z baza danych",
          de: "Datenbankverbindung einrichten",
          es: "Configurar la conexion a la base de datos",
        },
        description: {
          en: "Connect to your database using SQLAlchemy URI. Deep Agents supports SQLite, PostgreSQL, MySQL, and any database supported by SQLAlchemy. The `sample_rows_in_table_info` parameter helps the agent understand data patterns.",
          pl: "Polacz sie z baza danych za pomoca URI SQLAlchemy. Deep Agents obsluguje SQLite, PostgreSQL, MySQL i kazda baze danych wspierana przez SQLAlchemy. Parametr `sample_rows_in_table_info` pomaga agentowi zrozumiec wzorce danych.",
          de: "Verbinde dich uber SQLAlchemy-URI mit deiner Datenbank. Deep Agents unterstutzt SQLite, PostgreSQL, MySQL und jede von SQLAlchemy unterstutzte Datenbank. Der Parameter `sample_rows_in_table_info` hilft dem Agenten, Datenmuster zu verstehen.",
          es: "Conectate a tu base de datos usando URI de SQLAlchemy. Deep Agents soporta SQLite, PostgreSQL, MySQL y cualquier base de datos compatible con SQLAlchemy. El parametro `sample_rows_in_table_info` ayuda al agente a entender los patrones de datos.",
        },
      },
      {
        title: {
          en: "Create agent identity (AGENTS.md)",
          pl: "Stworz tozsamosc agenta (AGENTS.md)",
          de: "Agenten-Identitat erstellen (AGENTS.md)",
          es: "Crear identidad del agente (AGENTS.md)",
        },
        description: {
          en: "Write an AGENTS.md file defining the agent's role, database-specific rules, and query conventions. This persistent memory ensures consistent behavior across sessions.",
          pl: "Napisz plik AGENTS.md definiujacy role agenta, reguly specyficzne dla bazy danych i konwencje zapytan. Ta trwala pamiec zapewnia spojne zachowanie miedzy sesjami.",
          de: "Schreibe eine AGENTS.md-Datei, die Rolle des Agenten, datenbankspezifische Regeln und Abfragekonventionen definiert. Dieses persistente Gedachtnis sichert konsistentes Verhalten uber Sitzungen hinweg.",
          es: "Escribe un archivo AGENTS.md que defina el rol del agente, las reglas especificas de la base de datos y las convenciones de consulta. Esta memoria persistente asegura un comportamiento consistente entre sesiones.",
        },
      },
      {
        title: {
          en: "Add SQL skills",
          pl: "Dodaj umiejetnosci SQL",
          de: "SQL-Skills hinzufugen",
          es: "Agregar habilidades SQL",
        },
        description: {
          en: "Create skill files in `skills/` directory for common SQL workflows: schema exploration, complex joins, aggregation patterns, and report generation.",
          pl: "Stworz pliki umiejetnosci w katalogu `skills/` dla typowych przeplywow SQL: eksploracja schematu, zlozone zlaczenia, wzorce agregacji i generowanie raportow.",
          de: "Erstelle Skill-Dateien im `skills/`-Verzeichnis fur gangige SQL-Workflows: Schema-Erkundung, komplexe Joins, Aggregationsmuster und Berichtserstellung.",
          es: "Crea archivos de habilidades en el directorio `skills/` para flujos de trabajo SQL comunes: exploracion de esquemas, joins complejos, patrones de agregacion y generacion de informes.",
        },
      },
      {
        title: {
          en: "Query in natural language",
          pl: "Zapytaj w jezyku naturalnym",
          de: "In naturlicher Sprache abfragen",
          es: "Consultar en lenguaje natural",
        },
        description: {
          en: "Invoke the agent with plain English questions. It will explore the schema, write SQL queries, execute them, and return human-readable results with explanations.",
          pl: "Wywolaj agenta z pytaniami w zwyklym jezyku. Zbada schemat, napisze zapytania SQL, wykona je i zwroci czytelne wyniki z wyjasnieniami.",
          de: "Rufe den Agenten mit einfachen Fragen in naturlicher Sprache auf. Er erkundet das Schema, schreibt SQL-Abfragen, fuhrt sie aus und liefert menschenlesbare Ergebnisse mit Erklarungen.",
          es: "Invoca al agente con preguntas en lenguaje cotidiano. Explorara el esquema, escribira consultas SQL, las ejecutara y devolvera resultados legibles con explicaciones.",
        },
      },
    ],
    relatedUseCases: ["deep-research-agent", "code-review-agent"],
    relatedComparisons: ["deepagents-vs-langchain"],
  },

  // ─── 3. content-generation-agent ────────────────────────────────────
  {
    slug: "content-generation-agent",
    title: {
      en: "Content Generation Agent with Image Creation",
      pl: "Agent generowania tresci z tworzeniem obrazow",
      de: "Content-Generierungsagent mit Bilderstellung",
      es: "Agente de generacion de contenido con creacion de imagenes",
    },
    description: {
      en: "Build a multi-agent content pipeline that researches topics, writes blog posts following brand guidelines, and generates cover images — all orchestrated by a single agent with sub-agents and custom tools.",
      pl: "Zbuduj wieloagentowy pipeline tresci, ktory bada tematy, pisze posty na bloga zgodnie z wytycznymi marki i generuje okladki — wszystko orkiestrowane przez jednego agenta z podagentami i wlasnymi narzedziami.",
      de: "Erstelle eine Multi-Agenten-Content-Pipeline, die Themen recherchiert, Blogbeitrage gema\u00df Markenrichtlinien verfasst und Titelbilder generiert — alles orchestriert von einem einzigen Agenten mit Sub-Agenten und benutzerdefinierten Tools.",
      es: "Construye un pipeline de contenido multiagente que investiga temas, escribe publicaciones de blog siguiendo las directrices de marca y genera imagenes de portada — todo orquestado por un unico agente con subagentes y herramientas personalizadas.",
    },
    heroSubtitle: {
      en: "Automate your content pipeline — from research to blog post to cover image",
      pl: "Zautomatyzuj swoj pipeline tresci — od badania przez post na blogu po okladke",
      de: "Automatisiere deine Content-Pipeline — von der Recherche uber den Blogbeitrag bis zum Titelbild",
      es: "Automatiza tu pipeline de contenido — desde la investigacion hasta la publicacion y la imagen de portada",
    },
    difficulty: "advanced",
    timeToComplete: "30 min",
    projectSlug: "pydantic-deepagents",
    tags: ["content", "writing", "subagents", "images"],
    problem: {
      en: "Content creation at scale — blog posts, social media, images — requires coordinating research, writing, image generation, and brand consistency. Manual workflows are slow and inconsistent.",
      pl: "Tworzenie tresci na skale — posty na blogu, media spolecznosciowe, grafiki — wymaga koordynacji badan, pisania, generowania obrazow i spojnosci marki. Reczne procesy sa wolne i niespojne.",
      de: "Content-Erstellung im gro\u00dfen Ma\u00dfstab — Blogbeitrage, Social Media, Bilder — erfordert die Koordination von Recherche, Schreiben, Bildgenerierung und Markenkonsistenz. Manuelle Workflows sind langsam und inkonsistent.",
      es: "La creacion de contenido a escala — publicaciones de blog, redes sociales, imagenes — requiere coordinar investigacion, redaccion, generacion de imagenes y consistencia de marca. Los flujos de trabajo manuales son lentos e inconsistentes.",
    },
    solution: {
      en: "Deep Agents' file-based configuration (AGENTS.md for brand voice, skills/ for content templates) creates a content pipeline. Sub-agents handle research, the main agent writes content following brand guidelines, and custom tools generate images via Gemini.",
      pl: "Konfiguracja Deep Agents oparta na plikach (AGENTS.md dla tonu marki, skills/ dla szablonow tresci) tworzy pipeline tresci. Podagenci zajmuja sie badaniami, glowny agent pisze tresci zgodnie z wytycznymi marki, a wlasne narzedzia generuja obrazy przez Gemini.",
      de: "Die dateibasierte Konfiguration von Deep Agents (AGENTS.md fur Markenstimme, skills/ fur Content-Vorlagen) schafft eine Content-Pipeline. Sub-Agenten ubernehmen die Recherche, der Hauptagent schreibt Inhalte gema\u00df Markenrichtlinien, und benutzerdefinierte Tools generieren Bilder uber Gemini.",
      es: "La configuracion basada en archivos de Deep Agents (AGENTS.md para el tono de marca, skills/ para plantillas de contenido) crea un pipeline de contenido. Los subagentes se encargan de la investigacion, el agente principal redacta contenido segun las directrices de marca, y las herramientas personalizadas generan imagenes a traves de Gemini.",
    },
    codeExample: {
      label: "content_builder_agent.py",
      code: `from deepagents import create_deep_agent
from deepagents.backends import FilesystemBackend
from langchain_core.tools import tool

@tool
def generate_cover(prompt: str, slug: str) -> str:
    """Generate a cover image for a blog post."""
    from google import genai
    client = genai.Client()
    response = client.models.generate_content(
        model="gemini-2.5-flash-image",
        contents=[prompt],
    )
    for part in response.parts:
        if part.inline_data is not None:
            image = part.as_image()
            image.save(f"blogs/{slug}/hero.png")
            return f"Image saved to blogs/{slug}/hero.png"
    return "No image generated"

agent = create_deep_agent(
    memory=["./AGENTS.md"],
    skills=["./skills/"],
    tools=[generate_cover],
    subagents=[{"name": "researcher", "description": "Research topics", "tools": [web_search]}],
    backend=FilesystemBackend(root_dir="."),
)`,
    },
    steps: [
      {
        title: {
          en: "Define brand voice (AGENTS.md)",
          pl: "Zdefiniuj glos marki (AGENTS.md)",
          de: "Markenstimme definieren (AGENTS.md)",
          es: "Definir la voz de marca (AGENTS.md)",
        },
        description: {
          en: "Create an AGENTS.md file that describes your brand voice, writing style, target audience, and content rules. The agent reads this at startup and follows it for every piece of content.",
          pl: "Stworz plik AGENTS.md opisujacy glos marki, styl pisania, grupe docelowa i reguly tresci. Agent wczytuje go przy starcie i stosuje do kazdego tworzonego materialu.",
          de: "Erstelle eine AGENTS.md-Datei, die deine Markenstimme, deinen Schreibstil, deine Zielgruppe und deine Content-Regeln beschreibt. Der Agent liest sie beim Start und befolgt sie bei jedem Content-Stuck.",
          es: "Crea un archivo AGENTS.md que describa la voz de tu marca, estilo de escritura, audiencia objetivo y reglas de contenido. El agente lo lee al iniciar y lo aplica a cada pieza de contenido.",
        },
      },
      {
        title: {
          en: "Create content skills",
          pl: "Stworz umiejetnosci tworzenia tresci",
          de: "Content-Skills erstellen",
          es: "Crear habilidades de contenido",
        },
        description: {
          en: "Add markdown skill files in `skills/` for different content types: blog posts, social media threads, newsletters. Each skill defines structure, tone, and formatting rules.",
          pl: "Dodaj pliki umiejetnosci w formacie markdown w katalogu `skills/` dla roznych typow tresci: posty na blogu, watki w mediach spolecznosciowych, newslettery. Kazda umiejetnosc definiuje strukture, ton i reguly formatowania.",
          de: "Fuge Markdown-Skill-Dateien in `skills/` fur verschiedene Content-Typen hinzu: Blogbeitrage, Social-Media-Threads, Newsletter. Jeder Skill definiert Struktur, Ton und Formatierungsregeln.",
          es: "Agrega archivos de habilidades en markdown en `skills/` para diferentes tipos de contenido: publicaciones de blog, hilos en redes sociales, boletines. Cada habilidad define estructura, tono y reglas de formato.",
        },
      },
      {
        title: {
          en: "Add image generation tools",
          pl: "Dodaj narzedzia generowania obrazow",
          de: "Bildgenerierungs-Tools hinzufugen",
          es: "Agregar herramientas de generacion de imagenes",
        },
        description: {
          en: "Create custom tools using the `@tool` decorator for image generation via Gemini, DALL-E, or other providers. The agent calls these tools automatically when creating visual content.",
          pl: "Stworz wlasne narzedzia za pomoca dekoratora `@tool` do generowania obrazow przez Gemini, DALL-E lub innych dostawcow. Agent automatycznie wywoluje te narzedzia przy tworzeniu tresci wizualnych.",
          de: "Erstelle benutzerdefinierte Tools mit dem `@tool`-Dekorator fur die Bildgenerierung uber Gemini, DALL-E oder andere Anbieter. Der Agent ruft diese Tools automatisch auf, wenn er visuellen Content erstellt.",
          es: "Crea herramientas personalizadas con el decorador `@tool` para la generacion de imagenes a traves de Gemini, DALL-E u otros proveedores. El agente llama a estas herramientas automaticamente al crear contenido visual.",
        },
      },
      {
        title: {
          en: "Configure research sub-agents",
          pl: "Skonfiguruj podagentow badawczych",
          de: "Recherche-Sub-Agenten konfigurieren",
          es: "Configurar subagentes de investigacion",
        },
        description: {
          en: "Add sub-agents for research tasks — web search, competitor analysis, trend monitoring. They gather information that the main content agent uses for writing.",
          pl: "Dodaj podagentow do zadan badawczych — wyszukiwanie w internecie, analiza konkurencji, monitorowanie trendow. Zbieraja informacje, ktore glowny agent tresci wykorzystuje do pisania.",
          de: "Fuge Sub-Agenten fur Rechercheaufgaben hinzu — Websuche, Wettbewerbsanalyse, Trend-Monitoring. Sie sammeln Informationen, die der Haupt-Content-Agent zum Schreiben nutzt.",
          es: "Agrega subagentes para tareas de investigacion — busqueda web, analisis de la competencia, monitoreo de tendencias. Recopilan informacion que el agente principal de contenido utiliza para escribir.",
        },
      },
      {
        title: {
          en: "Generate content",
          pl: "Generuj tresci",
          de: "Content generieren",
          es: "Generar contenido",
        },
        description: {
          en: "Invoke the agent with a content brief. It will research the topic, write the content following your brand guidelines, generate a cover image, and save everything to disk.",
          pl: "Wywolaj agenta z briefem tresci. Zbada temat, napisze tresc zgodnie z wytycznymi marki, wygeneruje okladke i zapisze wszystko na dysku.",
          de: "Rufe den Agenten mit einem Content-Briefing auf. Er recherchiert das Thema, schreibt den Inhalt gema\u00df deinen Markenrichtlinien, generiert ein Titelbild und speichert alles auf der Festplatte.",
          es: "Invoca al agente con un brief de contenido. Investigara el tema, redactara el contenido segun tus directrices de marca, generara una imagen de portada y guardara todo en el disco.",
        },
      },
    ],
    relatedUseCases: ["deep-research-agent", "code-review-agent"],
    relatedComparisons: [],
  },

  // ─── 4. rag-chatbot ────────────────────────────────────────────────
  {
    slug: "rag-chatbot",
    title: {
      en: "RAG Chatbot with Vector Store",
      pl: "Chatbot RAG z baza wektorowa",
      de: "RAG-Chatbot mit Vektorspeicher",
      es: "Chatbot RAG con almacen vectorial",
    },
    description: {
      en: "Generate a complete RAG chatbot with document ingestion, vector search, and a streaming chat UI — all from a single CLI command using the Full-Stack AI Agent Template.",
      pl: "Wygeneruj kompletnego chatbota RAG z ingestia dokumentow, wyszukiwaniem wektorowym i interfejsem czatu ze streamingiem — wszystko jednym poleceniem CLI przy uzyciu Full-Stack AI Agent Template.",
      de: "Generiere einen vollstandigen RAG-Chatbot mit Dokumentenaufnahme, Vektorsuche und einer Chat-Oberflache mit Streaming — alles mit einem einzigen CLI-Befehl uber das Full-Stack AI Agent Template.",
      es: "Genera un chatbot RAG completo con ingestion de documentos, busqueda vectorial y una interfaz de chat con streaming — todo con un unico comando CLI usando el Full-Stack AI Agent Template.",
    },
    heroSubtitle: {
      en: "From zero to a production RAG chatbot in 15 minutes — choose your vector store, ingest documents, chat",
      pl: "Od zera do produkcyjnego chatbota RAG w 15 minut — wybierz baze wektorowa, zaimportuj dokumenty, rozmawiaj",
      de: "In 15 Minuten vom Nullpunkt zum produktionsreifen RAG-Chatbot — Vektorspeicher wahlen, Dokumente aufnehmen, chatten",
      es: "De cero a un chatbot RAG en produccion en 15 minutos — elige tu almacen vectorial, ingiere documentos, chatea",
    },
    difficulty: "beginner",
    timeToComplete: "15 min",
    projectSlug: "full-stack-ai-agent-template",
    tags: ["rag", "chatbot", "vector-store", "documents"],
    problem: {
      en: "Building a RAG chatbot requires choosing and configuring a vector store, setting up document ingestion, implementing similarity search, and connecting it all to a chat interface with streaming — dozens of decisions before you write any AI logic.",
      pl: "Budowanie chatbota RAG wymaga wyboru i konfiguracji bazy wektorowej, ustawienia ingestii dokumentow, implementacji wyszukiwania podobienstwa i polaczenia tego wszystkiego z interfejsem czatu ze streamingiem — dziesiatki decyzji, zanim napiszesz jakakolwiek logike AI.",
      de: "Einen RAG-Chatbot zu bauen erfordert die Auswahl und Konfiguration eines Vektorspeichers, das Einrichten der Dokumentenaufnahme, die Implementierung der Ahnlichkeitssuche und die Verbindung mit einer Chat-Oberflache mit Streaming — Dutzende Entscheidungen, bevor du auch nur eine Zeile KI-Logik schreibst.",
      es: "Construir un chatbot RAG requiere elegir y configurar un almacen vectorial, configurar la ingestion de documentos, implementar la busqueda por similitud y conectar todo a una interfaz de chat con streaming — decenas de decisiones antes de escribir cualquier logica de IA.",
    },
    solution: {
      en: "The Full-Stack AI Agent Template generates a complete RAG pipeline with your choice of vector store (Milvus, Qdrant, ChromaDB, pgvector), document ingestion (PDF, Google Drive, S3, 130+ formats via LlamaParse), and a Next.js chat UI with WebSocket streaming — all in one command.",
      pl: "Full-Stack AI Agent Template generuje kompletny pipeline RAG z wybranym przez Ciebie magazynem wektorowym (Milvus, Qdrant, ChromaDB, pgvector), ingestia dokumentow (PDF, Google Drive, S3, ponad 130 formatow przez LlamaParse) i interfejsem czatu Next.js ze streamingiem WebSocket — wszystko jednym poleceniem.",
      de: "Das Full-Stack AI Agent Template generiert eine komplette RAG-Pipeline mit deiner Wahl des Vektorspeichers (Milvus, Qdrant, ChromaDB, pgvector), Dokumentenaufnahme (PDF, Google Drive, S3, 130+ Formate uber LlamaParse) und einer Next.js-Chat-Oberflache mit WebSocket-Streaming — alles mit einem Befehl.",
      es: "El Full-Stack AI Agent Template genera un pipeline RAG completo con tu eleccion de almacen vectorial (Milvus, Qdrant, ChromaDB, pgvector), ingestion de documentos (PDF, Google Drive, S3, mas de 130 formatos via LlamaParse) y una interfaz de chat Next.js con streaming WebSocket — todo en un solo comando.",
    },
    codeExample: {
      label: "rag.py",
      code: `# Generated by: fastapi-fullstack new --preset ai-agent

# backend/app/agent/rag.py
from pydantic_ai import Agent
from app.core.vectorstore import get_vector_store
from app.core.config import settings

agent = Agent(
    model=settings.LLM_MODEL,
    system_prompt="Answer questions using the provided context. Cite sources.",
)

@agent.tool
async def search_documents(ctx, query: str, top_k: int = 5) -> str:
    """Search the knowledge base for relevant documents."""
    store = get_vector_store()  # Milvus, Qdrant, ChromaDB, or pgvector
    results = await store.similarity_search(query, k=top_k)
    return "\\n\\n".join([f"[{r.metadata['source']}]: {r.page_content}" for r in results])`,
    },
    steps: [
      {
        title: {
          en: "Choose your stack (configurator)",
          pl: "Wybierz swoj stos technologiczny (konfigurator)",
          de: "Wahle deinen Stack (Konfigurator)",
          es: "Elige tu stack (configurador)",
        },
        description: {
          en: "Run the CLI configurator or use the web-based interactive tool to select your vector store, document sources, LLM provider, and deployment options. The template supports 75+ configuration options.",
          pl: "Uruchom konfigurator CLI lub uzyj interaktywnego narzedzia webowego, aby wybrac baze wektorowa, zrodla dokumentow, dostawce LLM i opcje wdrozenia. Szablon obsluguje ponad 75 opcji konfiguracji.",
          de: "Starte den CLI-Konfigurator oder nutze das webbasierte interaktive Tool, um Vektorspeicher, Dokumentenquellen, LLM-Anbieter und Deployment-Optionen auszuwahlen. Das Template unterstutzt uber 75 Konfigurationsoptionen.",
          es: "Ejecuta el configurador CLI o usa la herramienta interactiva web para seleccionar tu almacen vectorial, fuentes de documentos, proveedor de LLM y opciones de despliegue. La plantilla soporta mas de 75 opciones de configuracion.",
        },
      },
      {
        title: {
          en: "Ingest documents",
          pl: "Zaimportuj dokumenty",
          de: "Dokumente aufnehmen",
          es: "Ingerir documentos",
        },
        description: {
          en: "Upload PDFs, connect Google Drive, or point to an S3 bucket. The template handles chunking, embedding, and indexing in your chosen vector store automatically.",
          pl: "Przeslij pliki PDF, polacz Google Drive lub wskaaz zasobnik S3. Szablon automatycznie obsluguje dzielenie na fragmenty, tworzenie embeddingov i indeksowanie w wybranej bazie wektorowej.",
          de: "Lade PDFs hoch, verbinde Google Drive oder verweise auf einen S3-Bucket. Das Template ubernimmt Chunking, Embedding und Indexierung in deinem gewahlten Vektorspeicher automatisch.",
          es: "Sube PDFs, conecta Google Drive o apunta a un bucket de S3. La plantilla maneja el chunking, la generacion de embeddings y la indexacion en tu almacen vectorial elegido de forma automatica.",
        },
      },
      {
        title: {
          en: "Chat with your data",
          pl: "Rozmawiaj ze swoimi danymi",
          de: "Mit deinen Daten chatten",
          es: "Chatea con tus datos",
        },
        description: {
          en: "Open the Next.js chat interface with real-time WebSocket streaming. Ask questions about your documents and get cited answers with source references.",
          pl: "Otworz interfejs czatu Next.js ze streamingiem WebSocket w czasie rzeczywistym. Zadawaj pytania o swoje dokumenty i otrzymuj odpowiedzi z cytatami i odwolaniami do zrodel.",
          de: "Offne die Next.js-Chat-Oberflache mit Echtzeit-WebSocket-Streaming. Stelle Fragen zu deinen Dokumenten und erhalte zitierte Antworten mit Quellenangaben.",
          es: "Abre la interfaz de chat Next.js con streaming WebSocket en tiempo real. Haz preguntas sobre tus documentos y obtien respuestas citadas con referencias a las fuentes.",
        },
      },
      {
        title: {
          en: "Deploy with Docker",
          pl: "Wdroz za pomoca Dockera",
          de: "Mit Docker deployen",
          es: "Desplegar con Docker",
        },
        description: {
          en: "Run `docker compose up` to start the complete stack: FastAPI backend, Next.js frontend, vector store, and PostgreSQL — all pre-configured and ready for production.",
          pl: "Uruchom `docker compose up`, aby wystartowac kompletny stos: backend FastAPI, frontend Next.js, baze wektorowa i PostgreSQL — wszystko wstepnie skonfigurowane i gotowe do produkcji.",
          de: "Starte mit `docker compose up` den kompletten Stack: FastAPI-Backend, Next.js-Frontend, Vektorspeicher und PostgreSQL — alles vorkonfiguriert und produktionsbereit.",
          es: "Ejecuta `docker compose up` para iniciar el stack completo: backend FastAPI, frontend Next.js, almacen vectorial y PostgreSQL — todo preconfigurado y listo para produccion.",
        },
      },
    ],
    relatedUseCases: ["deep-research-agent", "text-to-sql-agent"],
    relatedComparisons: ["template-vs-manual-setup"],
  },

  // ─── 5. code-review-agent ──────────────────────────────────────────
  {
    slug: "code-review-agent",
    title: {
      en: "Automated Code Review Agent",
      pl: "Agent automatycznego przegladu kodu",
      de: "Automatisierter Code-Review-Agent",
      es: "Agente de revision de codigo automatizada",
    },
    description: {
      en: "Build an agent that navigates codebases, reads files, searches for patterns with grep/glob, identifies bugs and security issues, and writes detailed review reports — all with built-in filesystem tools and sandboxing.",
      pl: "Zbuduj agenta, ktory nawiguje po bazach kodu, czyta pliki, wyszukuje wzorce za pomoca grep/glob, identyfikuje bledy i problemy bezpieczenstwa oraz pisze szczegolowe raporty z przegladu — wszystko dzieki wbudowanym narzedziom systemu plikow i sandboxingowi.",
      de: "Erstelle einen Agenten, der durch Codebasen navigiert, Dateien liest, mit grep/glob nach Mustern sucht, Bugs und Sicherheitsprobleme identifiziert und detaillierte Review-Berichte schreibt — alles mit eingebauten Dateisystem-Tools und Sandboxing.",
      es: "Construye un agente que navega por bases de codigo, lee archivos, busca patrones con grep/glob, identifica bugs y problemas de seguridad, y escribe informes detallados de revision — todo con herramientas de sistema de archivos integradas y sandboxing.",
    },
    heroSubtitle: {
      en: "Let an AI agent review your code for bugs, security issues, and style problems — with safe filesystem access",
      pl: "Pozwol agentowi AI przejrzec Twoj kod pod katem bledow, problemow bezpieczenstwa i stylu — z bezpiecznym dostepem do systemu plikow",
      de: "Lass einen KI-Agenten deinen Code auf Bugs, Sicherheitsprobleme und Stilfehler prufen — mit sicherem Dateisystemzugriff",
      es: "Deja que un agente de IA revise tu codigo en busca de bugs, problemas de seguridad y estilo — con acceso seguro al sistema de archivos",
    },
    difficulty: "intermediate",
    timeToComplete: "20 min",
    projectSlug: "pydantic-deepagents",
    tags: ["code-review", "filesystem", "automation"],
    problem: {
      en: "Manual code reviews are time-consuming and inconsistent. Automating reviews requires giving an AI agent secure filesystem access to read code, understand project structure, and write reports — without risking destructive operations.",
      pl: "Reczne przeglady kodu sa czasochlonne i niespojne. Automatyzacja przegladow wymaga zapewnienia agentowi AI bezpiecznego dostepu do systemu plikow, aby mogl czytac kod, rozumiec strukture projektu i pisac raporty — bez ryzyka destrukcyjnych operacji.",
      de: "Manuelle Code-Reviews sind zeitaufwandig und inkonsistent. Die Automatisierung von Reviews erfordert, einem KI-Agenten sicheren Dateisystemzugriff zu geben, um Code zu lesen, Projektstrukturen zu verstehen und Berichte zu schreiben — ohne das Risiko destruktiver Operationen.",
      es: "Las revisiones de codigo manuales son lentas e inconsistentes. Automatizarlas requiere dar a un agente de IA acceso seguro al sistema de archivos para leer codigo, comprender la estructura del proyecto y escribir informes — sin arriesgar operaciones destructivas.",
    },
    solution: {
      en: "Deep Agents includes 7 built-in filesystem tools (read_file, write_file, edit_file, ls, glob, grep, execute) with sandboxing. The agent can navigate codebases, read files, search for patterns with grep/glob, and write review reports — all with configurable safety boundaries.",
      pl: "Deep Agents zawiera 7 wbudowanych narzedzi systemu plikow (read_file, write_file, edit_file, ls, glob, grep, execute) z sandboxingiem. Agent moze nawigowac po bazach kodu, czytac pliki, wyszukiwac wzorce za pomoca grep/glob i pisac raporty z przegladu — wszystko z konfigurowalnymi granicami bezpieczenstwa.",
      de: "Deep Agents enthalt 7 eingebaute Dateisystem-Tools (read_file, write_file, edit_file, ls, glob, grep, execute) mit Sandboxing. Der Agent kann durch Codebasen navigieren, Dateien lesen, mit grep/glob nach Mustern suchen und Review-Berichte schreiben — alles mit konfigurierbaren Sicherheitsgrenzen.",
      es: "Deep Agents incluye 7 herramientas de sistema de archivos integradas (read_file, write_file, edit_file, ls, glob, grep, execute) con sandboxing. El agente puede navegar por bases de codigo, leer archivos, buscar patrones con grep/glob y escribir informes de revision — todo con limites de seguridad configurables.",
    },
    codeExample: {
      label: "code_review_agent.py",
      code: `from deepagents import create_deep_agent
from langchain.chat_models import init_chat_model

agent = create_deep_agent(
    model=init_chat_model("anthropic:claude-sonnet-4-5-20250929"),
    system_prompt="""You are a senior code reviewer. For each file:
1. Read the code with read_file
2. Check for bugs, security issues, and style problems
3. Write a review report with write_file
4. If issues are fixable, apply the fix with edit_file""",
)

# The agent has built-in filesystem tools:
# read_file, write_file, edit_file, ls, glob, grep, execute
result = agent.invoke({
    "messages": [("user", "Review all Python files in src/ for security vulnerabilities and write a report to REVIEW.md")]
})`,
    },
    steps: [
      {
        title: {
          en: "Install deepagents",
          pl: "Zainstaluj deepagents",
          de: "deepagents installieren",
          es: "Instalar deepagents",
        },
        description: {
          en: "Install with `pip install deepagents` and set your Anthropic API key. The filesystem tools are included by default — no extra dependencies needed.",
          pl: "Zainstaluj poleceniem `pip install deepagents` i ustaw klucz API Anthropic. Narzedzia systemu plikow sa dolaczone domyslnie — nie sa potrzebne dodatkowe zaleznosci.",
          de: "Installiere mit `pip install deepagents` und setze deinen Anthropic-API-Schlussel. Die Dateisystem-Tools sind standardma\u00dfig enthalten — keine zusatzlichen Abhangigkeiten notig.",
          es: "Instala con `pip install deepagents` y configura tu clave API de Anthropic. Las herramientas de sistema de archivos estan incluidas por defecto — no se necesitan dependencias adicionales.",
        },
      },
      {
        title: {
          en: "Configure system prompt",
          pl: "Skonfiguruj prompt systemowy",
          de: "System-Prompt konfigurieren",
          es: "Configurar el prompt de sistema",
        },
        description: {
          en: "Write a detailed system prompt that defines the review process: what to look for (bugs, security, style), how to structure findings, and when to apply automatic fixes vs. just report.",
          pl: "Napisz szczegolowy prompt systemowy definiujacy proces przegladu: czego szukac (bledy, bezpieczenstwo, styl), jak strukturyzowac wyniki i kiedy stosowac automatyczne poprawki, a kiedy tylko raportowac.",
          de: "Schreibe einen detaillierten System-Prompt, der den Review-Prozess definiert: wonach gesucht werden soll (Bugs, Sicherheit, Stil), wie Ergebnisse strukturiert werden und wann automatische Fixes angewendet vs. nur berichtet werden sollen.",
          es: "Escribe un prompt de sistema detallado que defina el proceso de revision: que buscar (bugs, seguridad, estilo), como estructurar los hallazgos y cuando aplicar correcciones automaticas frente a solo reportar.",
        },
      },
      {
        title: {
          en: "Point at codebase",
          pl: "Wskaaz baze kodu",
          de: "Auf die Codebasis verweisen",
          es: "Apuntar a la base de codigo",
        },
        description: {
          en: "Invoke the agent with a message describing what to review. The built-in `ls`, `glob`, and `grep` tools let the agent discover and navigate the project structure on its own.",
          pl: "Wywolaj agenta z wiadomoscia opisujaca co przejrzec. Wbudowane narzedzia `ls`, `glob` i `grep` pozwalaja agentowi samodzielnie odkrywac i nawigowac po strukturze projektu.",
          de: "Rufe den Agenten mit einer Nachricht auf, die beschreibt, was reviewed werden soll. Die eingebauten `ls`-, `glob`- und `grep`-Tools lassen den Agenten die Projektstruktur selbststandig erkunden und navigieren.",
          es: "Invoca al agente con un mensaje que describa que revisar. Las herramientas integradas `ls`, `glob` y `grep` permiten al agente descubrir y navegar por la estructura del proyecto por si mismo.",
        },
      },
      {
        title: {
          en: "Review the generated report",
          pl: "Przejrzyj wygenerowany raport",
          de: "Den generierten Bericht prufen",
          es: "Revisar el informe generado",
        },
        description: {
          en: "The agent writes a structured REVIEW.md with findings categorized by severity (critical, warning, info), file references, and suggested fixes. If configured, it can also apply safe fixes automatically.",
          pl: "Agent zapisuje ustrukturyzowany plik REVIEW.md z wynikami skategoryzowanymi wedlug waznosci (krytyczne, ostrzezenia, informacyjne), odwolaniami do plikow i sugerowanymi poprawkami. Jesli skonfigurowany, moze tez automatycznie stosowac bezpieczne poprawki.",
          de: "Der Agent schreibt eine strukturierte REVIEW.md mit Ergebnissen, kategorisiert nach Schweregrad (kritisch, Warnung, Info), Dateireferenzen und vorgeschlagenen Fixes. Bei entsprechender Konfiguration kann er sichere Fixes auch automatisch anwenden.",
          es: "El agente escribe un REVIEW.md estructurado con hallazgos categorizados por severidad (critico, advertencia, informativo), referencias a archivos y correcciones sugeridas. Si esta configurado, tambien puede aplicar correcciones seguras automaticamente.",
        },
      },
    ],
    relatedUseCases: ["deep-research-agent", "text-to-sql-agent"],
    relatedComparisons: ["deepagents-vs-langchain", "deepagents-vs-autogen"],
  },
];

export function getAllUseCaseSlugs(): string[] {
  return useCasePages.map((p) => p.slug);
}

export function getUseCaseBySlug(slug: string): UseCasePage | undefined {
  return useCasePages.find((p) => p.slug === slug);
}
