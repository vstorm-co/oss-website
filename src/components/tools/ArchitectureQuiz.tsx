import { useState } from "react";

interface Question {
  id: string;
  label: string;
  options: { label: string; traits: string[] }[];
}

const questions: Question[] = [
  {
    id: "use_case",
    label: "What will your agent primarily do?",
    options: [
      { label: "Answer questions / customer support", traits: ["simple", "rag"] },
      { label: "Research and summarize information", traits: ["pipeline", "rag"] },
      { label: "Generate content (text, code, reports)", traits: ["pipeline", "multi"] },
      { label: "Analyze data and produce insights", traits: ["pipeline", "rag"] },
      { label: "Automate multi-step workflows", traits: ["multi", "hierarchical"] },
    ],
  },
  {
    id: "tools",
    label: "How many external tools or APIs will it use?",
    options: [
      { label: "0–2 (e.g. just an LLM + one API)", traits: ["simple"] },
      { label: "3–5 (search, database, a few APIs)", traits: ["pipeline", "react"] },
      { label: "6+ (many integrations)", traits: ["multi", "hierarchical"] },
    ],
  },
  {
    id: "delegation",
    label: "Does the agent need to delegate tasks?",
    options: [
      { label: "No — a single agent handles everything", traits: ["simple", "react"] },
      { label: "Maybe 1–2 specialist sub-agents", traits: ["multi"] },
      { label: "Yes — orchestrator + multiple specialists", traits: ["hierarchical"] },
    ],
  },
  {
    id: "memory",
    label: "What kind of memory does it need?",
    options: [
      { label: "Stateless — each request is independent", traits: ["simple"] },
      { label: "Session memory — remember the conversation", traits: ["react", "pipeline"] },
      { label: "Long-term memory + knowledge base (RAG)", traits: ["rag", "multi"] },
    ],
  },
  {
    id: "reliability",
    label: "How important is reliability and error recovery?",
    options: [
      { label: "Best-effort is fine (prototype / internal tool)", traits: ["simple", "react"] },
      { label: "Should retry and handle common failures", traits: ["pipeline", "multi"] },
      { label: "Mission-critical — needs checkpoints and recovery", traits: ["hierarchical"] },
    ],
  },
];

interface Architecture {
  id: string;
  name: string;
  description: string;
  when: string;
  framework: string;
  frameworkSlug: string;
  guideSlug: string;
  diagram: string[];
}

const architectures: Architecture[] = [
  {
    id: "simple",
    name: "Simple ReAct Agent",
    description:
      "A single agent that reasons and acts in a loop — picks a tool, observes the result, and decides next steps. Best for straightforward tasks with few tools.",
    when: "Customer support bots, Q&A systems, simple chatbots with 1-3 tools.",
    framework: "Pydantic AI",
    frameworkSlug: "pydantic-ai",
    guideSlug: "customer-support-chatbot-with-pydantic-ai",
    diagram: ["User", "→", "Agent", "→", "Tool(s)", "→", "Response"],
  },
  {
    id: "react",
    name: "Tool-Heavy ReAct Agent",
    description:
      "An enhanced ReAct agent with multiple tools and session memory. The agent dynamically selects tools based on the task and maintains conversation context.",
    when: "Interactive assistants, data exploration, code helpers with 3-5 integrated tools.",
    framework: "LangChain",
    frameworkSlug: "langchain",
    guideSlug: "data-analysis-agent-with-langchain",
    diagram: ["User", "→", "Agent", "⟲", "Tools (3-5)", "→", "Memory", "→", "Response"],
  },
  {
    id: "pipeline",
    name: "Pipeline Agent",
    description:
      "A sequential processing chain where each step transforms or enriches the data. Steps can include retrieval, processing, validation, and generation.",
    when: "Content generation, report building, data analysis with defined stages.",
    framework: "LangGraph",
    frameworkSlug: "langgraph",
    guideSlug: "content-generation-with-langgraph",
    diagram: ["Input", "→", "Retrieve", "→", "Process", "→", "Generate", "→", "Validate", "→", "Output"],
  },
  {
    id: "rag",
    name: "RAG Pipeline",
    description:
      "Retrieval-Augmented Generation — queries a knowledge base (vector store) to ground the LLM's response in real data. Reduces hallucination and adds domain expertise.",
    when: "Knowledge bases, documentation search, domain-specific Q&A where accuracy matters.",
    framework: "Pydantic AI",
    frameworkSlug: "pydantic-ai",
    guideSlug: "rag-pipeline-with-pydantic-ai",
    diagram: ["Query", "→", "Embed", "→", "Vector DB", "→", "Context + LLM", "→", "Answer"],
  },
  {
    id: "multi",
    name: "Multi-Agent System",
    description:
      "Multiple specialized agents that collaborate on a task. Each agent has its own tools and expertise. A router or coordinator distributes work.",
    when: "Complex tasks requiring different skills — research + writing, analysis + visualization, coding + review.",
    framework: "CrewAI",
    frameworkSlug: "crewai",
    guideSlug: "research-agent-with-crewai",
    diagram: ["Task", "→", "Router", "→", "Agent A", "+", "Agent B", "+", "Agent C", "→", "Result"],
  },
  {
    id: "hierarchical",
    name: "Hierarchical Agent System",
    description:
      "An orchestrator agent that plans, delegates sub-tasks to specialist agents, reviews their work, and synthesizes results. The most powerful but complex pattern.",
    when: "Enterprise workflows, deep research, complex automation where tasks can be decomposed and require error recovery.",
    framework: "Deep Agents",
    frameworkSlug: "deepagents",
    guideSlug: "research-agent-with-deepagents",
    diagram: ["Goal", "→", "Orchestrator", "→", "Plan", "→", "Sub-agents", "→", "Review", "→", "Synthesize"],
  },
];

export default function ArchitectureQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [showResult, setShowResult] = useState(false);

  function selectOption(questionId: string, traits: string[]) {
    const newAnswers = { ...answers, [questionId]: traits };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep((s) => s + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  }

  function reset() {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  }

  function goBack() {
    if (showResult) {
      setShowResult(false);
    } else if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  }

  function getResult(): Architecture {
    const traitCounts: Record<string, number> = {};
    Object.values(answers).forEach((traits) => {
      traits.forEach((t) => {
        traitCounts[t] = (traitCounts[t] || 0) + 1;
      });
    });

    let best = architectures[0];
    let bestScore = -1;
    architectures.forEach((arch) => {
      const score = traitCounts[arch.id] || 0;
      if (score > bestScore) {
        bestScore = score;
        best = arch;
      }
    });
    return best;
  }

  const question = questions[currentStep];
  const result = showResult ? getResult() : null;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <span>
            {showResult
              ? "Result"
              : `Question ${currentStep + 1} of ${questions.length}`}
          </span>
          {(currentStep > 0 || showResult) && (
            <button
              onClick={goBack}
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              ← Back
            </button>
          )}
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-violet-500 transition-all duration-500"
            style={{
              width: `${showResult ? 100 : ((currentStep + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      {!showResult && question && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">{question.label}</h3>
          <div className="space-y-3">
            {question.options.map((option, i) => {
              const isSelected =
                answers[question.id] &&
                JSON.stringify(answers[question.id]) ===
                  JSON.stringify(option.traits);
              return (
                <button
                  key={i}
                  onClick={() => selectOption(question.id, option.traits)}
                  className={`w-full rounded-xl border p-4 text-left text-sm font-medium transition-all ${
                    isSelected
                      ? "border-violet-500 bg-violet-500/20 text-violet-300"
                      : "border-white/10 bg-white/[0.02] text-gray-300 hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Result */}
      {showResult && result && (
        <div className="space-y-6">
          <div className="rounded-xl border border-violet-500/30 bg-violet-500/5 p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                Recommended
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">{result.name}</h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              {result.description}
            </p>

            {/* Diagram */}
            <div className="mt-6 flex flex-wrap items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-4">
              {result.diagram.map((node, i) => (
                <span
                  key={i}
                  className={
                    node === "→" || node === "⟲" || node === "+"
                      ? "text-violet-400 text-lg"
                      : "rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-sm font-mono text-gray-300"
                  }
                >
                  {node}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-gray-400">
                <strong className="text-gray-200">Best for:</strong>{" "}
                {result.when}
              </p>
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-gray-400">
                <strong className="text-gray-200">Recommended framework:</strong>{" "}
                <span className="text-violet-300">{result.framework}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`/guides/${result.guideSlug}/`}
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
            >
              See {result.framework} Guide
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="/use-cases/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-white/20 hover:text-white"
            >
              Browse use cases
            </a>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-white/20 hover:text-white"
            >
              Retake quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
