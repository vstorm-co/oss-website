import type { Lang } from "../i18n/translations";

// ─── Types ──────────────────────────────────────────────────────────

export interface SeoFramework {
  slug: string;
  name: string;
  projectSlug: string;
}

export interface SeoUseCase {
  slug: string;
  pageTitle: Record<Lang, string>; // {framework} placeholder
  description: Record<Lang, string>; // {framework} placeholder
  tags: string[];
}

export interface SeoGuide {
  slug: string;
  framework: SeoFramework;
  useCase: SeoUseCase;
  code: string;
}

// ─── Frameworks ─────────────────────────────────────────────────────

export const seoFrameworks: SeoFramework[] = [
  { slug: "pydantic-ai", name: "Pydantic AI", projectSlug: "pydantic-deepagents" },
  { slug: "langchain", name: "LangChain", projectSlug: "full-stack-ai-agent-template" },
  { slug: "langgraph", name: "LangGraph", projectSlug: "full-stack-ai-agent-template" },
  { slug: "crewai", name: "CrewAI", projectSlug: "full-stack-ai-agent-template" },
  { slug: "deepagents", name: "Deep Agents", projectSlug: "pydantic-deepagents" },
];

// ─── Use Cases ──────────────────────────────────────────────────────

export const seoUseCases: SeoUseCase[] = [
  {
    slug: "customer-support-chatbot",
    pageTitle: {
      en: "Customer Support Chatbot with {framework}",
      pl: "Chatbot obsługi klienta z {framework}",
      de: "Kundensupport-Chatbot mit {framework}",
      es: "Chatbot de soporte al cliente con {framework}",
    },
    description: {
      en: "Build an AI customer support chatbot that searches your FAQ knowledge base and answers questions accurately — with working {framework} code.",
      pl: "Zbuduj chatbota obsługi klienta AI, który przeszukuje bazę wiedzy FAQ i odpowiada na pytania — z działającym kodem {framework}.",
      de: "Erstellen Sie einen KI-Kundensupport-Chatbot, der Ihre FAQ-Wissensdatenbank durchsucht und Fragen präzise beantwortet — mit funktionierendem {framework}-Code.",
      es: "Construye un chatbot de soporte al cliente con IA que busca en tu base de conocimiento FAQ y responde preguntas — con código {framework} funcional.",
    },
    tags: ["chatbot", "customer support", "FAQ", "knowledge base"],
  },
  {
    slug: "rag-pipeline",
    pageTitle: {
      en: "RAG Pipeline with {framework}",
      pl: "Pipeline RAG z {framework}",
      de: "RAG-Pipeline mit {framework}",
      es: "Pipeline RAG con {framework}",
    },
    description: {
      en: "Build a Retrieval-Augmented Generation pipeline that searches documents with vector embeddings and answers questions with citations — using {framework}.",
      pl: "Zbuduj pipeline Retrieval-Augmented Generation, który przeszukuje dokumenty z embeddingami wektorowymi i odpowiada na pytania z cytatami — używając {framework}.",
      de: "Erstellen Sie eine Retrieval-Augmented-Generation-Pipeline, die Dokumente mit Vektor-Embeddings durchsucht und Fragen mit Quellenangaben beantwortet — mit {framework}.",
      es: "Construye un pipeline de Retrieval-Augmented Generation que busca documentos con embeddings vectoriales y responde preguntas con citas — usando {framework}.",
    },
    tags: ["RAG", "vector store", "embeddings", "documents"],
  },
  {
    slug: "research-agent",
    pageTitle: {
      en: "Research Agent with {framework}",
      pl: "Agent badawczy z {framework}",
      de: "Research-Agent mit {framework}",
      es: "Agente de investigación con {framework}",
    },
    description: {
      en: "Build an autonomous research agent that searches the web, synthesizes findings, and produces structured reports — powered by {framework}.",
      pl: "Zbuduj autonomicznego agenta badawczego, który przeszukuje internet, syntetyzuje wyniki i tworzy strukturalne raporty — z {framework}.",
      de: "Erstellen Sie einen autonomen Research-Agenten, der das Web durchsucht, Ergebnisse synthetisiert und strukturierte Berichte erstellt — mit {framework}.",
      es: "Construye un agente de investigación autónomo que busca en la web, sintetiza hallazgos y produce informes estructurados — con {framework}.",
    },
    tags: ["research", "web search", "reports", "automation"],
  },
  {
    slug: "text-to-sql",
    pageTitle: {
      en: "Text-to-SQL Agent with {framework}",
      pl: "Agent Text-to-SQL z {framework}",
      de: "Text-to-SQL-Agent mit {framework}",
      es: "Agente Text-to-SQL con {framework}",
    },
    description: {
      en: "Build a natural language to SQL agent that converts questions into database queries, validates them, and returns formatted results — using {framework}.",
      pl: "Zbuduj agenta konwertującego język naturalny na SQL, który zamienia pytania na zapytania do bazy danych, waliduje je i zwraca sformatowane wyniki — z {framework}.",
      de: "Erstellen Sie einen Natural-Language-to-SQL-Agenten, der Fragen in Datenbankabfragen umwandelt, validiert und formatierte Ergebnisse liefert — mit {framework}.",
      es: "Construye un agente de lenguaje natural a SQL que convierte preguntas en consultas de base de datos, las valida y devuelve resultados formateados — con {framework}.",
    },
    tags: ["SQL", "database", "NL2SQL", "data"],
  },
  {
    slug: "content-generation",
    pageTitle: {
      en: "Content Generation Agent with {framework}",
      pl: "Agent generujący treści z {framework}",
      de: "Content-Generierungs-Agent mit {framework}",
      es: "Agente de generación de contenido con {framework}",
    },
    description: {
      en: "Build an AI content generation agent that researches topics, writes blog posts and social media content with consistent brand voice — using {framework}.",
      pl: "Zbuduj agenta AI generującego treści, który bada tematy, pisze posty blogowe i treści social media ze spójnym głosem marki — z {framework}.",
      de: "Erstellen Sie einen KI-Content-Generierungs-Agenten, der Themen recherchiert, Blogposts und Social-Media-Inhalte mit konsistenter Markenstimme schreibt — mit {framework}.",
      es: "Construye un agente de generación de contenido con IA que investiga temas, escribe posts de blog y contenido para redes sociales con voz de marca consistente — con {framework}.",
    },
    tags: ["content", "blog", "social media", "writing"],
  },
  {
    slug: "code-review-agent",
    pageTitle: {
      en: "Code Review Agent with {framework}",
      pl: "Agent do code review z {framework}",
      de: "Code-Review-Agent mit {framework}",
      es: "Agente de revisión de código con {framework}",
    },
    description: {
      en: "Build an AI code review agent that reads files, searches for patterns, analyzes code quality, and suggests improvements — with {framework}.",
      pl: "Zbuduj agenta AI do code review, który czyta pliki, szuka wzorców, analizuje jakość kodu i sugeruje ulepszenia — z {framework}.",
      de: "Erstellen Sie einen KI-Code-Review-Agenten, der Dateien liest, nach Mustern sucht, die Codequalität analysiert und Verbesserungen vorschlägt — mit {framework}.",
      es: "Construye un agente de revisión de código con IA que lee archivos, busca patrones, analiza la calidad del código y sugiere mejoras — con {framework}.",
    },
    tags: ["code review", "static analysis", "quality", "developer tools"],
  },
  {
    slug: "data-analysis-agent",
    pageTitle: {
      en: "Data Analysis Agent with {framework}",
      pl: "Agent analizy danych z {framework}",
      de: "Datenanalyse-Agent mit {framework}",
      es: "Agente de análisis de datos con {framework}",
    },
    description: {
      en: "Build an AI data analysis agent that processes datasets, runs Python computations, generates charts, and produces insights — powered by {framework}.",
      pl: "Zbuduj agenta AI do analizy danych, który przetwarza zbiory danych, wykonuje obliczenia Python, generuje wykresy i tworzy wnioski — z {framework}.",
      de: "Erstellen Sie einen KI-Datenanalyse-Agenten, der Datensätze verarbeitet, Python-Berechnungen ausführt, Diagramme generiert und Erkenntnisse liefert — mit {framework}.",
      es: "Construye un agente de análisis de datos con IA que procesa conjuntos de datos, ejecuta cálculos Python, genera gráficos y produce insights — con {framework}.",
    },
    tags: ["data analysis", "Python", "charts", "analytics"],
  },
  {
    slug: "email-assistant",
    pageTitle: {
      en: "Email Assistant with {framework}",
      pl: "Asystent email z {framework}",
      de: "E-Mail-Assistent mit {framework}",
      es: "Asistente de email con {framework}",
    },
    description: {
      en: "Build an AI email assistant that searches your inbox, drafts replies, and manages email workflows — using {framework}.",
      pl: "Zbuduj asystenta email AI, który przeszukuje skrzynkę, tworzy odpowiedzi i zarządza przepływami email — z {framework}.",
      de: "Erstellen Sie einen KI-E-Mail-Assistenten, der Ihren Posteingang durchsucht, Antworten entwirft und E-Mail-Workflows verwaltet — mit {framework}.",
      es: "Construye un asistente de email con IA que busca en tu bandeja, redacta respuestas y gestiona flujos de email — con {framework}.",
    },
    tags: ["email", "automation", "productivity", "assistant"],
  },
  {
    slug: "web-scraper",
    pageTitle: {
      en: "Web Scraping Agent with {framework}",
      pl: "Agent web scraping z {framework}",
      de: "Web-Scraping-Agent mit {framework}",
      es: "Agente de web scraping con {framework}",
    },
    description: {
      en: "Build an intelligent web scraping agent that fetches pages, extracts structured data, and handles pagination — powered by {framework}.",
      pl: "Zbuduj inteligentnego agenta web scraping, który pobiera strony, wyodrębnia strukturalne dane i obsługuje paginację — z {framework}.",
      de: "Erstellen Sie einen intelligenten Web-Scraping-Agenten, der Seiten abruft, strukturierte Daten extrahiert und Paginierung verarbeitet — mit {framework}.",
      es: "Construye un agente inteligente de web scraping que obtiene páginas, extrae datos estructurados y maneja paginación — con {framework}.",
    },
    tags: ["web scraping", "data extraction", "HTTP", "parsing"],
  },
  {
    slug: "task-automation",
    pageTitle: {
      en: "Task Automation Agent with {framework}",
      pl: "Agent automatyzacji zadań z {framework}",
      de: "Aufgabenautomatisierungs-Agent mit {framework}",
      es: "Agente de automatización de tareas con {framework}",
    },
    description: {
      en: "Build a task automation agent that creates, assigns, and tracks tasks across your project management workflow — using {framework}.",
      pl: "Zbuduj agenta automatyzacji zadań, który tworzy, przypisuje i śledzi zadania w przepływie zarządzania projektem — z {framework}.",
      de: "Erstellen Sie einen Aufgabenautomatisierungs-Agenten, der Aufgaben erstellt, zuweist und im Projektmanagement-Workflow verfolgt — mit {framework}.",
      es: "Construye un agente de automatización de tareas que crea, asigna y rastrea tareas en tu flujo de gestión de proyectos — con {framework}.",
    },
    tags: ["automation", "project management", "tasks", "workflow"],
  },
];

// ─── Tool Code Per Use Case ─────────────────────────────────────────

interface ToolConfig {
  langchain: string;
  pydanticAi: string;
  toolNames: string;
  systemPrompt: string;
  userQuery: string;
  extraImports?: string;
}

const toolConfigs: Record<string, ToolConfig> = {
  "customer-support-chatbot": {
    langchain: `@tool
def search_faq(query: str) -> str:
    """Search the FAQ knowledge base for relevant answers."""
    results = faq_store.similarity_search(query, k=3)
    return "\\n\\n".join(
        f"Q: {r.metadata['question']}\\nA: {r.page_content}"
        for r in results
    )`,
    pydanticAi: `@agent.tool
async def search_faq(ctx: RunContext, query: str) -> str:
    """Search the FAQ knowledge base for relevant answers."""
    results = await faq_store.asimilarity_search(query, k=3)
    return "\\n\\n".join(
        f"Q: {r.metadata['question']}\\nA: {r.page_content}"
        for r in results
    )`,
    toolNames: "search_faq",
    systemPrompt:
      "You are a helpful customer support agent. Use search_faq to find answers from the knowledge base before responding. Always cite the source FAQ.",
    userQuery: "How do I reset my password?",
  },
  "rag-pipeline": {
    langchain: `@tool
def search_documents(query: str, top_k: int = 5) -> str:
    """Search uploaded documents for relevant content."""
    results = vector_store.similarity_search(query, k=top_k)
    return "\\n\\n".join(
        f"[{i+1}] {r.metadata.get('source', 'unknown')}: {r.page_content}"
        for i, r in enumerate(results)
    )`,
    pydanticAi: `@agent.tool
async def search_documents(ctx: RunContext, query: str, top_k: int = 5) -> str:
    """Search uploaded documents for relevant content."""
    results = await vector_store.asimilarity_search(query, k=top_k)
    return "\\n\\n".join(
        f"[{i+1}] {r.metadata.get('source', 'unknown')}: {r.page_content}"
        for i, r in enumerate(results)
    )`,
    toolNames: "search_documents",
    systemPrompt:
      "You are a document Q&A assistant. Search documents before answering. Cite sources using [1], [2] format.",
    userQuery: "What does the refund policy say about digital products?",
  },
  "research-agent": {
    langchain: `@tool
def web_search(query: str, max_results: int = 3) -> str:
    """Search the web for current information."""
    from tavily import TavilyClient
    client = TavilyClient()
    results = client.search(query, max_results=max_results)
    return "\\n\\n".join(
        f"**{r['title']}**\\n{r['content']}" for r in results["results"]
    )`,
    pydanticAi: `@agent.tool
async def web_search(ctx: RunContext, query: str, max_results: int = 3) -> str:
    """Search the web for current information."""
    from tavily import TavilyClient
    client = TavilyClient()
    results = client.search(query, max_results=max_results)
    return "\\n\\n".join(
        f"**{r['title']}**\\n{r['content']}" for r in results["results"]
    )`,
    toolNames: "web_search",
    systemPrompt:
      "You are a research assistant. Search the web to gather information, then synthesize findings into a structured report with citations.",
    userQuery: "Compare the latest developments in AI agent frameworks in 2025",
  },
  "text-to-sql": {
    langchain: `db = SQLDatabase.from_uri("sqlite:///sales.db", sample_rows_in_table_info=3)
toolkit = SQLDatabaseToolkit(db=db, llm=model)
sql_tools = toolkit.get_tools()`,
    pydanticAi: `@agent.tool
async def list_tables(ctx: RunContext) -> str:
    """List all tables in the database."""
    return "\\n".join(inspector.get_table_names())

@agent.tool
async def run_query(ctx: RunContext, sql: str) -> str:
    """Execute a read-only SQL query and return results."""
    if not sql.strip().upper().startswith("SELECT"):
        return "Error: Only SELECT queries are allowed."
    result = db.execute(text(sql))
    rows = result.fetchmany(10)
    return "\\n".join(str(row) for row in rows)`,
    toolNames: "sql_tools",
    systemPrompt:
      "You are a SQL analyst. Convert natural language questions into SQL queries. Only use SELECT statements. Limit results to 10 rows.",
    userQuery: "Show me top 5 customers by total spending this quarter",
    extraImports:
      "from langchain_community.utilities import SQLDatabase\nfrom langchain_community.agent_toolkits import SQLDatabaseToolkit",
  },
  "content-generation": {
    langchain: `@tool
def web_search(query: str) -> str:
    """Research a topic before writing content."""
    from tavily import TavilyClient
    client = TavilyClient()
    results = client.search(query, max_results=3)
    return "\\n\\n".join(r["content"] for r in results["results"])

@tool
def save_content(filename: str, content: str) -> str:
    """Save generated content to a file."""
    Path(f"output/{filename}").write_text(content)
    return f"Saved to output/{filename}"`,
    pydanticAi: `@agent.tool
async def web_search(ctx: RunContext, query: str) -> str:
    """Research a topic before writing content."""
    from tavily import TavilyClient
    client = TavilyClient()
    results = client.search(query, max_results=3)
    return "\\n\\n".join(r["content"] for r in results["results"])

@agent.tool
async def save_content(ctx: RunContext, filename: str, content: str) -> str:
    """Save generated content to a file."""
    Path(f"output/{filename}").write_text(content)
    return f"Saved to output/{filename}"`,
    toolNames: "web_search, save_content",
    systemPrompt:
      "You are a content writer. Research the topic first, then write engaging content. Save the final output using save_content.",
    userQuery: "Write a blog post about the benefits of AI agents in customer service",
  },
  "code-review-agent": {
    langchain: `@tool
def read_file(path: str) -> str:
    """Read a file from the project."""
    return Path(path).read_text()

@tool
def find_files(pattern: str) -> str:
    """Find files matching a glob pattern."""
    files = list(Path(".").rglob(pattern))
    return "\\n".join(str(f) for f in files[:20])

@tool
def search_code(pattern: str, path: str = ".") -> str:
    """Search for a regex pattern in source files."""
    import subprocess
    result = subprocess.run(
        ["grep", "-rn", pattern, path, "--include=*.py"],
        capture_output=True, text=True,
    )
    return result.stdout[:3000] or "No matches found."`,
    pydanticAi: `@agent.tool
async def read_file(ctx: RunContext, path: str) -> str:
    """Read a file from the project."""
    return Path(path).read_text()

@agent.tool
async def find_files(ctx: RunContext, pattern: str) -> str:
    """Find files matching a glob pattern."""
    files = list(Path(".").rglob(pattern))
    return "\\n".join(str(f) for f in files[:20])

@agent.tool
async def search_code(ctx: RunContext, pattern: str, path: str = ".") -> str:
    """Search for a regex pattern in source files."""
    import subprocess
    result = subprocess.run(
        ["grep", "-rn", pattern, path, "--include=*.py"],
        capture_output=True, text=True,
    )
    return result.stdout[:3000] or "No matches found."`,
    toolNames: "read_file, find_files, search_code",
    systemPrompt:
      "You are a code reviewer. Find relevant files, read them, search for patterns, and provide a structured review covering security, performance, and best practices.",
    userQuery: "Review the Python files in src/ for common security issues",
  },
  "data-analysis-agent": {
    langchain: `@tool
def execute_python(code: str) -> str:
    """Execute Python code for data analysis. pandas and matplotlib are available."""
    import subprocess
    result = subprocess.run(
        ["python", "-c", code],
        capture_output=True, text=True, timeout=30,
    )
    return result.stdout or f"Error: {result.stderr}"

@tool
def read_csv_info(path: str) -> str:
    """Get info about a CSV file (columns, types, shape)."""
    import pandas as pd
    df = pd.read_csv(path)
    return f"Shape: {df.shape}\\nColumns: {list(df.columns)}\\nTypes:\\n{df.dtypes}"`,
    pydanticAi: `@agent.tool
async def execute_python(ctx: RunContext, code: str) -> str:
    """Execute Python code for data analysis. pandas and matplotlib are available."""
    import subprocess
    result = subprocess.run(
        ["python", "-c", code],
        capture_output=True, text=True, timeout=30,
    )
    return result.stdout or f"Error: {result.stderr}"

@agent.tool
async def read_csv_info(ctx: RunContext, path: str) -> str:
    """Get info about a CSV file (columns, types, shape)."""
    import pandas as pd
    df = pd.read_csv(path)
    return f"Shape: {df.shape}\\nColumns: {list(df.columns)}\\nTypes:\\n{df.dtypes}"`,
    toolNames: "execute_python, read_csv_info",
    systemPrompt:
      "You are a data analyst. Explore datasets using read_csv_info, then use execute_python to run analysis code. Present findings clearly with numbers.",
    userQuery: "Analyze sales_data.csv and find the top performing products by revenue",
  },
  "email-assistant": {
    langchain: `@tool
def search_emails(query: str, limit: int = 5) -> str:
    """Search the inbox for emails matching a query."""
    results = email_client.search(query, max_results=limit)
    return "\\n\\n".join(
        f"From: {e.sender}\\nSubject: {e.subject}\\nDate: {e.date}\\nPreview: {e.body[:200]}"
        for e in results
    )

@tool
def draft_email(to: str, subject: str, body: str) -> str:
    """Create an email draft."""
    draft_id = email_client.create_draft(to=to, subject=subject, body=body)
    return f"Draft created (ID: {draft_id}). Review before sending."`,
    pydanticAi: `@agent.tool
async def search_emails(ctx: RunContext, query: str, limit: int = 5) -> str:
    """Search the inbox for emails matching a query."""
    results = await email_client.search(query, max_results=limit)
    return "\\n\\n".join(
        f"From: {e.sender}\\nSubject: {e.subject}\\nDate: {e.date}\\nPreview: {e.body[:200]}"
        for e in results
    )

@agent.tool
async def draft_email(ctx: RunContext, to: str, subject: str, body: str) -> str:
    """Create an email draft."""
    draft_id = await email_client.create_draft(to=to, subject=subject, body=body)
    return f"Draft created (ID: {draft_id}). Review before sending."`,
    toolNames: "search_emails, draft_email",
    systemPrompt:
      "You are an email assistant. Search emails to find context, then help draft professional replies. Always create drafts — never send directly.",
    userQuery:
      "Find the latest email from the marketing team and draft a reply confirming the deadline",
  },
  "web-scraper": {
    langchain: `@tool
def fetch_url(url: str) -> str:
    """Fetch a webpage and return its content as markdown."""
    import httpx
    from markdownify import markdownify
    response = httpx.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=15)
    return markdownify(response.text)[:5000]

@tool
def extract_data(text: str, instruction: str) -> str:
    """Extract structured data from text based on instruction."""
    # Uses the LLM itself to parse — no regex needed
    return f"Extracting from {len(text)} chars: {instruction}"`,
    pydanticAi: `@agent.tool
async def fetch_url(ctx: RunContext, url: str) -> str:
    """Fetch a webpage and return its content as markdown."""
    import httpx
    from markdownify import markdownify
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=15)
    return markdownify(response.text)[:5000]

@agent.tool
async def extract_data(ctx: RunContext, text: str, instruction: str) -> str:
    """Extract structured data from text based on instruction."""
    return f"Extracting from {len(text)} chars: {instruction}"`,
    toolNames: "fetch_url, extract_data",
    systemPrompt:
      "You are a web scraping agent. Fetch pages, extract the requested data, and return it in structured format. Respect robots.txt.",
    userQuery:
      "Scrape the pricing page at example.com/pricing and extract all plan names and prices",
  },
  "task-automation": {
    langchain: `@tool
def create_task(title: str, description: str, assignee: str = "") -> str:
    """Create a new task in the project."""
    task_id = project.create_task(title=title, description=description, assignee=assignee)
    return f"Task created: #{task_id} - {title}"

@tool
def list_tasks(status: str = "open") -> str:
    """List tasks filtered by status (open, in_progress, done)."""
    tasks = project.list_tasks(status=status)
    return "\\n".join(f"#{t.id} [{t.status}] {t.title} -> {t.assignee}" for t in tasks)

@tool
def update_task(task_id: int, status: str) -> str:
    """Update task status."""
    project.update_task(task_id, status=status)
    return f"Task #{task_id} updated to {status}"`,
    pydanticAi: `@agent.tool
async def create_task(ctx: RunContext, title: str, description: str, assignee: str = "") -> str:
    """Create a new task in the project."""
    task_id = await project.create_task(title=title, description=description, assignee=assignee)
    return f"Task created: #{task_id} - {title}"

@agent.tool
async def list_tasks(ctx: RunContext, status: str = "open") -> str:
    """List tasks filtered by status (open, in_progress, done)."""
    tasks = await project.list_tasks(status=status)
    return "\\n".join(f"#{t.id} [{t.status}] {t.title} -> {t.assignee}" for t in tasks)

@agent.tool
async def update_task(ctx: RunContext, task_id: int, status: str) -> str:
    """Update task status."""
    await project.update_task(task_id, status=status)
    return f"Task #{task_id} updated to {status}"`,
    toolNames: "create_task, list_tasks, update_task",
    systemPrompt:
      "You are a project management assistant. Help organize tasks: create new ones, track progress, and update statuses. Be proactive about suggesting task breakdowns.",
    userQuery: "Break down 'Launch new website' into subtasks and assign them to the team",
  },
};

// ─── Code Composition ───────────────────────────────────────────────

function buildPydanticAiCode(config: ToolConfig): string {
  return `from pydantic_ai import Agent, RunContext
${config.extraImports ? config.extraImports + "\n" : ""}
agent = Agent(
    "openai:gpt-4o",
    system_prompt="${config.systemPrompt}",
)

${config.pydanticAi}

result = await agent.run("${config.userQuery}")
print(result.output)`;
}

function buildLangChainCode(config: ToolConfig): string {
  const isToolkit = config.toolNames === "sql_tools";
  return `from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
${config.extraImports ? config.extraImports + "\n" : ""}
${config.langchain}

model = ChatOpenAI(model="gpt-4o")
model_with_tools = model.bind_tools([${config.toolNames}])
response = model_with_tools.invoke([
    ("system", "${config.systemPrompt}"),
    ("user", "${config.userQuery}"),
])`;
}

function buildLangGraphCode(config: ToolConfig): string {
  const isToolkit = config.toolNames === "sql_tools";
  return `from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
from langgraph.prebuilt import create_react_agent
${config.extraImports ? config.extraImports + "\n" : ""}
${config.langchain}

agent = create_react_agent(
    ChatOpenAI(model="gpt-4o"),
    tools=[${config.toolNames}],
    prompt="${config.systemPrompt}",
)

result = await agent.ainvoke({
    "messages": [("user", "${config.userQuery}")]
})
print(result["messages"][-1].content)`;
}

function buildCrewAICode(config: ToolConfig): string {
  const isToolkit = config.toolNames === "sql_tools";
  const toolList = isToolkit ? "sql_tools" : `[${config.toolNames}]`;
  return `from crewai import Agent, Crew, Task
from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
${config.extraImports ? config.extraImports + "\n" : ""}
${config.langchain}

agent = Agent(
    role="Specialist",
    goal="${config.systemPrompt}",
    tools=${toolList},
    llm=ChatOpenAI(model="gpt-4o"),
)

task = Task(
    description="${config.userQuery}",
    expected_output="Detailed response",
    agent=agent,
)

crew = Crew(agents=[agent], tasks=[task])
result = crew.kickoff()
print(result.raw)`;
}

function buildDeepAgentsCode(config: ToolConfig): string {
  const isToolkit = config.toolNames === "sql_tools";
  return `from deepagents import create_deep_agent
from langchain_core.tools import tool
${config.extraImports ? config.extraImports + "\n" : ""}
${config.langchain}

agent = create_deep_agent(
    model="anthropic:claude-sonnet-4-5-20250929",
    tools=[${config.toolNames}],
    system_prompt="${config.systemPrompt}",
)

result = agent.invoke({
    "messages": [("user", "${config.userQuery}")]
})
print(result["messages"][-1].content)`;
}

export function getGuideCode(frameworkSlug: string, useCaseSlug: string): string {
  const config = toolConfigs[useCaseSlug];
  if (!config) return "// Code example not available";

  switch (frameworkSlug) {
    case "pydantic-ai":
      return buildPydanticAiCode(config);
    case "langchain":
      return buildLangChainCode(config);
    case "langgraph":
      return buildLangGraphCode(config);
    case "crewai":
      return buildCrewAICode(config);
    case "deepagents":
      return buildDeepAgentsCode(config);
    default:
      return "// Code example not available";
  }
}

// ─── Helpers ────────────────────────────────────────────────────────

export function getAllGuideSlugs(): string[] {
  return seoFrameworks.flatMap((fw) => seoUseCases.map((uc) => `${uc.slug}-with-${fw.slug}`));
}

export function getGuideBySlug(slug: string): SeoGuide | undefined {
  for (const fw of seoFrameworks) {
    for (const uc of seoUseCases) {
      const guideSlug = `${uc.slug}-with-${fw.slug}`;
      if (guideSlug === slug) {
        return {
          slug: guideSlug,
          framework: fw,
          useCase: uc,
          code: getGuideCode(fw.slug, uc.slug),
        };
      }
    }
  }
  return undefined;
}

export function getGuidesForFramework(frameworkSlug: string): SeoGuide[] {
  const fw = seoFrameworks.find((f) => f.slug === frameworkSlug);
  if (!fw) return [];
  return seoUseCases.map((uc) => ({
    slug: `${uc.slug}-with-${fw.slug}`,
    framework: fw,
    useCase: uc,
    code: getGuideCode(fw.slug, uc.slug),
  }));
}

export function getGuidesForUseCase(useCaseSlug: string): SeoGuide[] {
  const uc = seoUseCases.find((u) => u.slug === useCaseSlug);
  if (!uc) return [];
  return seoFrameworks.map((fw) => ({
    slug: `${uc.slug}-with-${fw.slug}`,
    framework: fw,
    useCase: uc,
    code: getGuideCode(fw.slug, uc.slug),
  }));
}
