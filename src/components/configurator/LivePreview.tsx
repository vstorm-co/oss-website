import { useWizard } from "./WizardProvider";
import { enumLabels } from "../../lib/types";

export function LivePreview() {
  const { form } = useWizard();
  const config = form.watch();

  const lines: [string, string][] = [
    ["Project", config.project_name],
    ["Database", enumLabels.database[config.database]],
  ];

  if (config.database === "postgresql" || config.database === "sqlite") {
    lines.push(["ORM", enumLabels.orm_type[config.orm_type]]);
  }

  lines.push(["Auth", enumLabels.auth[config.auth]]);

  if (config.enable_ai_agent) {
    lines.push([
      "AI",
      `${enumLabels.ai_framework[config.ai_framework]} (${enumLabels.llm_provider[config.llm_provider]})`,
    ]);
  }

  lines.push(["Frontend", enumLabels.frontend[config.frontend]]);

  if (config.enable_docker) {
    const proxy = config.reverse_proxy !== "none"
      ? ` + ${enumLabels.reverse_proxy[config.reverse_proxy].split(" (")[0]}`
      : "";
    lines.push(["Docker", `Yes${proxy}`]);
  }

  if (config.ci_type !== "none") {
    lines.push(["CI/CD", enumLabels.ci_type[config.ci_type]]);
  }

  const features: string[] = [];
  if (config.enable_redis) features.push("Redis");
  if (config.enable_caching) features.push("Cache");
  if (config.enable_sentry) features.push("Sentry");
  if (config.enable_prometheus) features.push("Prom");
  if (config.enable_logfire) features.push("Logfire");
  if (config.enable_websockets) features.push("WS");
  if (config.enable_file_storage) features.push("S3");
  if (config.enable_webhooks) features.push("Hooks");
  if (config.enable_admin_panel) features.push("Admin");
  if (config.enable_kubernetes) features.push("K8s");

  if (features.length > 0) {
    lines.push(["Features", features.join(", ")]);
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <h3 className="text-xs text-text-tertiary font-medium uppercase tracking-wider mb-3">Preview</h3>
      <div className="space-y-2 font-mono text-xs">
        {lines.map(([key, value]) => (
          <div key={key} className="flex justify-between gap-2">
            <span className="text-text-tertiary shrink-0">{key}</span>
            <span className="text-text text-right truncate">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
