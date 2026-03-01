import type { Lang } from "../i18n/translations";

export interface ComparisonRow {
  feature: string;
  values: (boolean | string)[];
}

export interface ComparisonData {
  columns: string[];
  highlightColumn: number;
  rows: ComparisonRow[];
}

export function getTemplateComparison(t: Record<string, string>): ComparisonData {
  return {
    columns: [
      t["comparison.template.col.ours"],
      t["comparison.template.col.manual"],
      t["comparison.template.col.other"],
    ],
    highlightColumn: 0,
    rows: [
      { feature: t["comparison.template.row.ai"], values: [true, false, false] },
      { feature: t["comparison.template.row.multidb"], values: [true, false, "Partial"] },
      { feature: t["comparison.template.row.auth"], values: [true, false, "Partial"] },
      { feature: t["comparison.template.row.websocket"], values: [true, false, false] },
      { feature: t["comparison.template.row.configurator"], values: [true, false, false] },
      { feature: t["comparison.template.row.typesafe"], values: [true, "Varies", "Varies"] },
      { feature: t["comparison.template.row.observable"], values: [true, false, false] },
    ],
  };
}

export function getDeepagentsComparison(t: Record<string, string>): ComparisonData {
  return {
    columns: [
      t["comparison.deepagents.col.ours"],
      "LangChain",
      "CrewAI",
      "AutoGen",
    ],
    highlightColumn: 0,
    rows: [
      { feature: t["comparison.deepagents.row.typesafe"], values: [true, false, false, false] },
      { feature: t["comparison.deepagents.row.subagents"], values: [true, false, true, true] },
      { feature: t["comparison.deepagents.row.tools"], values: [true, true, true, true] },
      { feature: t["comparison.deepagents.row.multiprovider"], values: [true, true, "Partial", true] },
      { feature: t["comparison.deepagents.row.observability"], values: [true, "Partial", false, false] },
      { feature: t["comparison.deepagents.row.production"], values: [true, true, false, false] },
    ],
  };
}

export function getLogfireComparison(t: Record<string, string>): ComparisonData {
  return {
    columns: [
      t["comparison.logfire.col.ours"],
      t["comparison.logfire.col.manual"],
      t["comparison.logfire.col.generic"],
    ],
    highlightColumn: 0,
    rows: [
      { feature: t["comparison.logfire.row.sql"], values: [true, true, false] },
      { feature: t["comparison.logfire.row.context"], values: [true, false, false] },
      { feature: t["comparison.logfire.row.charts"], values: [true, false, false] },
      { feature: t["comparison.logfire.row.prompts"], values: [true, false, "Partial"] },
      { feature: t["comparison.logfire.row.history"], values: [true, false, true] },
      { feature: t["comparison.logfire.row.nl"], values: [true, false, true] },
    ],
  };
}
