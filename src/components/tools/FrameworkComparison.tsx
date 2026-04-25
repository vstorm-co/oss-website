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

const frameworks: Framework[] = [
  {
    name: "Pydantic AI",
    slug: "pydantic-ai",
    color: "#e44d89",
    tagline: "Type-safe, production-ready agent framework",
    scores: [
      [5, 8, 10],
      [9, 7, 5],
      [8, 9, 7],
      [8, 6, 5],
      [7, 9, 10],
      [7, 8, 10],
    ],
  },
  {
    name: "LangChain",
    slug: "langchain",
    color: "#1c3c3c",
    tagline: "Most popular AI framework with huge ecosystem",
    scores: [
      [7, 5, 4],
      [7, 8, 5],
      [6, 7, 7],
      [5, 9, 10],
      [8, 7, 6],
      [7, 7, 6],
    ],
  },
  {
    name: "LangGraph",
    slug: "langgraph",
    color: "#3b82f6",
    tagline: "Graph-based orchestration for complex workflows",
    scores: [
      [6, 5, 5],
      [4, 9, 9],
      [4, 6, 9],
      [5, 8, 9],
      [6, 7, 8],
      [6, 7, 7],
    ],
  },
  {
    name: "CrewAI",
    slug: "crewai",
    color: "#f97316",
    tagline: "Role-based multi-agent collaboration",
    scores: [
      [7, 5, 3],
      [8, 6, 9],
      [9, 7, 5],
      [7, 6, 6],
      [8, 6, 4],
      [7, 6, 4],
    ],
  },
  {
    name: "Deep Agents",
    slug: "deepagents",
    color: "#8b5cf6",
    tagline: "Modular agent framework inspired by Claude Code",
    scores: [
      [5, 7, 8],
      [6, 8, 10],
      [7, 8, 9],
      [7, 8, 9],
      [7, 8, 9],
      [7, 8, 9],
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
          if (oi !== undefined) total += fw.scores[ci][oi];
        });
        return { ...fw, total };
      })
      .sort((a, b) => b.total - a.total);
  }

  const results = allAnswered ? getResults() : [];
  const maxScore = results.length > 0 ? results[0].total : 1;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {criteria.map((criterion) => (
          <div key={criterion.id} className="border-border bg-surface rounded-xl border p-5 sm:p-6">
            <h3 className="text-text text-base font-semibold">{criterion.label}</h3>
            <p className="text-text-secondary mt-1 text-sm">{criterion.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {criterion.options.map((option, oi) => {
                const selected = answers[criterion.id] === oi;
                return (
                  <button
                    key={oi}
                    onClick={() => selectOption(criterion.id, oi)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                      selected
                        ? "border-violet-500 bg-violet-500/20 text-violet-700"
                        : "border-border bg-bg text-text-secondary hover:border-border-hover hover:bg-surface-hover"
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

      <div className="text-text-secondary text-center text-sm">
        {Object.keys(answers).length} / {criteria.length} answered
        {Object.keys(answers).length > 0 && !allAnswered && (
          <span className="text-text-tertiary ml-2">— answer all to see results</span>
        )}
        {allAnswered && (
          <button
            onClick={reset}
            className="ml-3 text-violet-600 transition-colors hover:text-violet-500"
          >
            Reset
          </button>
        )}
      </div>

      {allAnswered && (
        <div className="border-border bg-surface space-y-4 rounded-xl border p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-text text-lg font-semibold">Your Results</h3>
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-700">
              #{1} {results[0].name}
            </span>
          </div>

          <div className="space-y-3">
            {results.map((fw, i) => {
              const pct = Math.round((fw.total / maxScore) * 100);
              return (
                <div key={fw.slug}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span
                      className={`font-medium ${i === 0 ? "text-text" : "text-text-secondary"}`}
                    >
                      {fw.name}
                    </span>
                    <span className="text-text-tertiary">{fw.total} pts</span>
                  </div>
                  <div className="bg-border h-3 w-full overflow-hidden rounded-full">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: fw.color,
                        opacity: i === 0 ? 1 : 0.6,
                      }}
                    />
                  </div>
                  {i === 0 && <p className="text-text-secondary mt-2 text-sm">{fw.tagline}</p>}
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-lg border border-violet-500/20 bg-violet-50 p-4">
            <p className="text-text-secondary text-sm">
              <strong className="text-text">Recommendation:</strong> Based on your priorities,{" "}
              <strong className="text-violet-700">{results[0].name}</strong> is the best fit.
              {results[1] && results[1].total >= results[0].total - 3 && (
                <span>
                  {" "}
                  <strong className="text-text">{results[1].name}</strong> is a close second —
                  consider trying both.
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
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/compare/"
              className="border-border text-text-secondary hover:border-border-hover hover:text-text inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-colors"
            >
              See detailed comparisons
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
