import { useState } from "react";

interface Criterion {
  id: string;
  label: string;
  description: string;
  options: string[];
}

const criteria: Criterion[] = [
  {
    id: "type_safety",
    label: "Type Safety",
    description: "How important is static typing and validation?",
    options: ["Not important", "Nice to have", "Critical"],
  },
  {
    id: "complexity",
    label: "Agent Complexity",
    description: "What level of agent orchestration do you need?",
    options: ["Simple chatbot", "Multi-step workflow", "Multi-agent system"],
  },
  {
    id: "learning",
    label: "Learning Curve",
    description: "What's your team's experience level?",
    options: ["Beginner-friendly", "Some AI experience", "Expert-level is fine"],
  },
  {
    id: "ecosystem",
    label: "Ecosystem Needs",
    description: "Do you need access to a large tool/integration ecosystem?",
    options: ["Standalone is fine", "Need common integrations", "Full ecosystem required"],
  },
  {
    id: "production",
    label: "Production Readiness",
    description: "What stage is your project?",
    options: ["Prototype / POC", "MVP", "Production-grade"],
  },
  {
    id: "observability",
    label: "Observability",
    description: "How much monitoring and tracing do you need?",
    options: ["None", "Basic logging", "Full tracing & metrics"],
  },
];

interface Framework {
  name: string;
  slug: string;
  color: string;
  tagline: string;
  scores: number[][];
}

// scores[criterionIndex][optionIndex] = 0-10
const frameworks: Framework[] = [
  {
    name: "Pydantic AI",
    slug: "pydantic-ai",
    color: "#e44d89",
    tagline: "Type-safe, production-ready agent framework",
    scores: [
      [5, 8, 10], // type_safety
      [9, 7, 5],  // complexity
      [8, 9, 7],  // learning
      [8, 6, 5],  // ecosystem
      [7, 9, 10], // production
      [7, 8, 10], // observability
    ],
  },
  {
    name: "LangChain",
    slug: "langchain",
    color: "#1c3c3c",
    tagline: "Most popular AI framework with huge ecosystem",
    scores: [
      [7, 5, 4],  // type_safety
      [7, 8, 5],  // complexity
      [6, 7, 7],  // learning
      [5, 9, 10], // ecosystem
      [8, 7, 6],  // production
      [7, 7, 6],  // observability
    ],
  },
  {
    name: "LangGraph",
    slug: "langgraph",
    color: "#3b82f6",
    tagline: "Graph-based orchestration for complex workflows",
    scores: [
      [6, 5, 5],  // type_safety
      [4, 9, 9],  // complexity
      [4, 6, 9],  // learning
      [5, 8, 9],  // ecosystem
      [6, 7, 8],  // production
      [6, 7, 7],  // observability
    ],
  },
  {
    name: "CrewAI",
    slug: "crewai",
    color: "#f97316",
    tagline: "Role-based multi-agent collaboration",
    scores: [
      [7, 5, 3],  // type_safety
      [8, 6, 9],  // complexity (great for multi-agent)
      [9, 7, 5],  // learning
      [7, 6, 6],  // ecosystem
      [8, 6, 4],  // production
      [7, 6, 4],  // observability
    ],
  },
  {
    name: "Deep Agents",
    slug: "deepagents",
    color: "#8b5cf6",
    tagline: "Modular agent framework inspired by Claude Code",
    scores: [
      [5, 7, 8],  // type_safety
      [6, 8, 10], // complexity
      [7, 8, 9],  // learning
      [7, 8, 9],  // ecosystem (uses LangGraph tools)
      [7, 8, 9],  // production
      [7, 8, 9],  // observability
    ],
  },
];

export default function FrameworkComparison() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const allAnswered = Object.keys(answers).length === criteria.length;

  function selectOption(criterionId: string, optionIndex: number) {
    setAnswers((prev) => ({ ...prev, [criterionId]: optionIndex }));
  }

  function reset() {
    setAnswers({});
  }

  function getResults() {
    return frameworks
      .map((fw) => {
        let total = 0;
        criteria.forEach((c, ci) => {
          const oi = answers[c.id];
          if (oi !== undefined) {
            total += fw.scores[ci][oi];
          }
        });
        return { ...fw, total };
      })
      .sort((a, b) => b.total - a.total);
  }

  const results = allAnswered ? getResults() : [];
  const maxScore = results.length > 0 ? results[0].total : 1;

  return (
    <div className="space-y-8">
      {/* Criteria */}
      <div className="space-y-6">
        {criteria.map((criterion) => (
          <div
            key={criterion.id}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
          >
            <h3 className="text-base font-semibold text-white">
              {criterion.label}
            </h3>
            <p className="mt-1 text-sm text-gray-400">{criterion.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {criterion.options.map((option, oi) => {
                const selected = answers[criterion.id] === oi;
                return (
                  <button
                    key={oi}
                    onClick={() => selectOption(criterion.id, oi)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                      selected
                        ? "border-violet-500 bg-violet-500/20 text-violet-300"
                        : "border-white/10 bg-white/[0.02] text-gray-300 hover:border-white/20 hover:bg-white/[0.05]"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="text-center text-sm text-gray-400">
        {Object.keys(answers).length} / {criteria.length} answered
        {Object.keys(answers).length > 0 && !allAnswered && (
          <span className="ml-2 text-gray-500">— answer all to see results</span>
        )}
        {allAnswered && (
          <button
            onClick={reset}
            className="ml-3 text-violet-400 hover:text-violet-300 transition-colors"
          >
            Reset
          </button>
        )}
      </div>

      {/* Results */}
      {allAnswered && (
        <div className="space-y-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">
              Your Results
            </h3>
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
              #{1} {results[0].name}
            </span>
          </div>

          <div className="space-y-3">
            {results.map((fw, i) => {
              const pct = Math.round((fw.total / maxScore) * 100);
              return (
                <div key={fw.slug}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className={`font-medium ${i === 0 ? "text-white" : "text-gray-300"}`}>
                      {fw.name}
                    </span>
                    <span className="text-gray-500">{fw.total} pts</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: fw.color,
                        opacity: i === 0 ? 1 : 0.6,
                      }}
                    />
                  </div>
                  {i === 0 && (
                    <p className="mt-2 text-sm text-gray-400">{fw.tagline}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-lg border border-violet-500/20 bg-violet-500/5 p-4">
            <p className="text-sm text-gray-300">
              <strong className="text-white">Recommendation:</strong>{" "}
              Based on your priorities, <strong className="text-violet-300">{results[0].name}</strong> is
              the best fit. {results[1] && results[1].total >= results[0].total - 3 && (
                <span>
                  <strong className="text-gray-200">{results[1].name}</strong> is a close second — consider trying both.
                </span>
              )}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`/guides/customer-support-chatbot-with-${results[0].slug}/`}
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
            >
              Try {results[0].name} Guide
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/compare/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-white/20 hover:text-white"
            >
              See detailed comparisons
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
