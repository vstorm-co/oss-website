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
    },
    description: {
      en: "Build a research agent that breaks complex topics into sub-tasks, delegates to specialist sub-agents, searches the web, and synthesizes findings into a structured report.",
    },
    heroSubtitle: {
      en: "Orchestrate multiple AI specialists to research any topic in depth",
    },
    difficulty: "intermediate",
    timeToComplete: "20 min",
    projectSlug: "pydantic-deepagents",
    tags: ["research", "subagents", "web-search"],
    problem: {
      en: "Building a research agent that can break complex topics into sub-tasks, search the web, and synthesize findings requires coordinating multiple specialists — web searchers, analyzers, writers — while maintaining context across all of them.",
    },
    solution: {
      en: "Deep Agents provides built-in sub-agent delegation via the `task` tool, web search integration, and automatic context management. Define specialist sub-agents, give them tools, and the orchestrator handles coordination, context isolation, and result aggregation.",
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
        },
        description: {
          en: "Install deepagents with `pip install deepagents` and set your API keys for Anthropic and Tavily (web search).",
        },
      },
      {
        title: {
          en: "Define search tools",
        },
        description: {
          en: "Create a `web_search` tool using Tavily that the agent and sub-agents can use to find current information on any topic.",
        },
      },
      {
        title: {
          en: "Create sub-agents",
        },
        description: {
          en: "Define specialist sub-agents as dictionaries with a name, description, system prompt, and tools. The orchestrator will delegate tasks to them automatically via the `task` tool.",
        },
      },
      {
        title: {
          en: "Run the orchestrator",
        },
        description: {
          en: "Invoke the agent with your research question. It will plan sub-tasks, delegate to researchers, collect results, and synthesize everything into a comprehensive answer.",
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
    },
    description: {
      en: "Build an agent that converts natural language questions into SQL queries, explores database schemas, and learns from past interactions through persistent filesystem-backed memory.",
    },
    heroSubtitle: {
      en: "Query any database with natural language — powered by persistent memory and SQL skills",
    },
    difficulty: "intermediate",
    timeToComplete: "15 min",
    projectSlug: "pydantic-deepagents",
    tags: ["sql", "database", "data-analysis"],
    problem: {
      en: "Querying databases with natural language requires understanding schemas, writing correct SQL, handling edge cases, and explaining results — all while keeping the agent grounded in the actual data structure.",
    },
    solution: {
      en: "Deep Agents combines LangChain's SQLDatabaseToolkit with persistent memory (AGENTS.md for identity/rules) and skills (specialized SQL workflows). The agent explores schemas, writes queries, and learns from past interactions through filesystem-backed memory.",
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
        },
        description: {
          en: "Connect to your database using SQLAlchemy URI. Deep Agents supports SQLite, PostgreSQL, MySQL, and any database supported by SQLAlchemy. The `sample_rows_in_table_info` parameter helps the agent understand data patterns.",
        },
      },
      {
        title: {
          en: "Create agent identity (AGENTS.md)",
        },
        description: {
          en: "Write an AGENTS.md file defining the agent's role, database-specific rules, and query conventions. This persistent memory ensures consistent behavior across sessions.",
        },
      },
      {
        title: {
          en: "Add SQL skills",
        },
        description: {
          en: "Create skill files in `skills/` directory for common SQL workflows: schema exploration, complex joins, aggregation patterns, and report generation.",
        },
      },
      {
        title: {
          en: "Query in natural language",
        },
        description: {
          en: "Invoke the agent with plain English questions. It will explore the schema, write SQL queries, execute them, and return human-readable results with explanations.",
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
    },
    description: {
      en: "Build a multi-agent content pipeline that researches topics, writes blog posts following brand guidelines, and generates cover images — all orchestrated by a single agent with sub-agents and custom tools.",
    },
    heroSubtitle: {
      en: "Automate your content pipeline — from research to blog post to cover image",
    },
    difficulty: "advanced",
    timeToComplete: "30 min",
    projectSlug: "pydantic-deepagents",
    tags: ["content", "writing", "subagents", "images"],
    problem: {
      en: "Content creation at scale — blog posts, social media, images — requires coordinating research, writing, image generation, and brand consistency. Manual workflows are slow and inconsistent.",
    },
    solution: {
      en: "Deep Agents' file-based configuration (AGENTS.md for brand voice, skills/ for content templates) creates a content pipeline. Sub-agents handle research, the main agent writes content following brand guidelines, and custom tools generate images via Gemini.",
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
        },
        description: {
          en: "Create an AGENTS.md file that describes your brand voice, writing style, target audience, and content rules. The agent reads this at startup and follows it for every piece of content.",
        },
      },
      {
        title: {
          en: "Create content skills",
        },
        description: {
          en: "Add markdown skill files in `skills/` for different content types: blog posts, social media threads, newsletters. Each skill defines structure, tone, and formatting rules.",
        },
      },
      {
        title: {
          en: "Add image generation tools",
        },
        description: {
          en: "Create custom tools using the `@tool` decorator for image generation via Gemini, DALL-E, or other providers. The agent calls these tools automatically when creating visual content.",
        },
      },
      {
        title: {
          en: "Configure research sub-agents",
        },
        description: {
          en: "Add sub-agents for research tasks — web search, competitor analysis, trend monitoring. They gather information that the main content agent uses for writing.",
        },
      },
      {
        title: {
          en: "Generate content",
        },
        description: {
          en: "Invoke the agent with a content brief. It will research the topic, write the content following your brand guidelines, generate a cover image, and save everything to disk.",
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
    },
    description: {
      en: "Generate a complete RAG chatbot with document ingestion, vector search, and a streaming chat UI — all from a single CLI command using the Full-Stack AI Agent Template.",
    },
    heroSubtitle: {
      en: "From zero to a production RAG chatbot in 15 minutes — choose your vector store, ingest documents, chat",
    },
    difficulty: "beginner",
    timeToComplete: "15 min",
    projectSlug: "full-stack-ai-agent-template",
    tags: ["rag", "chatbot", "vector-store", "documents"],
    problem: {
      en: "Building a RAG chatbot requires choosing and configuring a vector store, setting up document ingestion, implementing similarity search, and connecting it all to a chat interface with streaming — dozens of decisions before you write any AI logic.",
    },
    solution: {
      en: "The Full-Stack AI Agent Template generates a complete RAG pipeline with your choice of vector store (Milvus, Qdrant, ChromaDB, pgvector), document ingestion (PDF, Google Drive, S3, 130+ formats via LlamaParse), and a Next.js chat UI with WebSocket streaming — all in one command.",
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
        },
        description: {
          en: "Run the CLI configurator or use the web-based interactive tool to select your vector store, document sources, LLM provider, and deployment options. The template supports 75+ configuration options.",
        },
      },
      {
        title: {
          en: "Ingest documents",
        },
        description: {
          en: "Upload PDFs, connect Google Drive, or point to an S3 bucket. The template handles chunking, embedding, and indexing in your chosen vector store automatically.",
        },
      },
      {
        title: {
          en: "Chat with your data",
        },
        description: {
          en: "Open the Next.js chat interface with real-time WebSocket streaming. Ask questions about your documents and get cited answers with source references.",
        },
      },
      {
        title: {
          en: "Deploy with Docker",
        },
        description: {
          en: "Run `docker compose up` to start the complete stack: FastAPI backend, Next.js frontend, vector store, and PostgreSQL — all pre-configured and ready for production.",
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
    },
    description: {
      en: "Build an agent that navigates codebases, reads files, searches for patterns with grep/glob, identifies bugs and security issues, and writes detailed review reports — all with built-in filesystem tools and sandboxing.",
    },
    heroSubtitle: {
      en: "Let an AI agent review your code for bugs, security issues, and style problems — with safe filesystem access",
    },
    difficulty: "intermediate",
    timeToComplete: "20 min",
    projectSlug: "pydantic-deepagents",
    tags: ["code-review", "filesystem", "automation"],
    problem: {
      en: "Manual code reviews are time-consuming and inconsistent. Automating reviews requires giving an AI agent secure filesystem access to read code, understand project structure, and write reports — without risking destructive operations.",
    },
    solution: {
      en: "Deep Agents includes 7 built-in filesystem tools (read_file, write_file, edit_file, ls, glob, grep, execute) with sandboxing. The agent can navigate codebases, read files, search for patterns with grep/glob, and write review reports — all with configurable safety boundaries.",
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
        },
        description: {
          en: "Install with `pip install deepagents` and set your Anthropic API key. The filesystem tools are included by default — no extra dependencies needed.",
        },
      },
      {
        title: {
          en: "Configure system prompt",
        },
        description: {
          en: "Write a detailed system prompt that defines the review process: what to look for (bugs, security, style), how to structure findings, and when to apply automatic fixes vs. just report.",
        },
      },
      {
        title: {
          en: "Point at codebase",
        },
        description: {
          en: "Invoke the agent with a message describing what to review. The built-in `ls`, `glob`, and `grep` tools let the agent discover and navigate the project structure on its own.",
        },
      },
      {
        title: {
          en: "Review the generated report",
        },
        description: {
          en: "The agent writes a structured REVIEW.md with findings categorized by severity (critical, warning, info), file references, and suggested fixes. If configured, it can also apply safe fixes automatically.",
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
