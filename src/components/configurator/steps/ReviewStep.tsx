import { useState, useCallback } from "react";
import { useWizard } from "../WizardProvider";
import { Copy, Check, FileArchive, FileJson, Loader2, Database, Shield, Bot, Server, Monitor, Code2 } from "lucide-react";
import { enumLabels } from "../../../lib/types";
import type { ProjectConfig } from "../../../lib/types";
import { generateProjectZip, downloadBlob } from "../../../lib/generateZip";
import { generateCommandOneLine } from "../../../lib/generateCommand";
import { downloadJson } from "../../../lib/generateJson";

export function ReviewStep() {
  const { form } = useWizard();
  const config = form.watch();
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const projectName = config.project_name;

  const handleDownloadZip = useCallback(async () => {
    setGenerating(true);
    setProgress(0);
    try {
      const rawBase = import.meta.env.BASE_URL;
      const base = rawBase.endsWith("/") ? rawBase : rawBase + "/";
      const blob = await generateProjectZip(config, base, setProgress);
      downloadBlob(blob, `${projectName}.zip`);
    } catch (err) {
      console.error("ZIP generation failed:", err);
      alert("Failed to generate project. Check the console for details.");
    } finally {
      setGenerating(false);
    }
  }, [config, projectName]);

  const handleCopyCommand = useCallback(async () => {
    const cmd = generateCommandOneLine(config);
    try {
      await navigator.clipboard.writeText(cmd);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = cmd;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [config]);

  const handleDownloadJson = useCallback(() => {
    downloadJson(config);
  }, [config]);

  // Build feature badges
  const features: string[] = [];
  if (config.enable_redis) features.push("Redis");
  if (config.enable_caching) features.push("Caching");
  if (config.enable_rate_limiting) features.push("Rate Limit");
  if (config.enable_logfire) features.push("Logfire");
  if (config.enable_sentry) features.push("Sentry");
  if (config.enable_prometheus) features.push("Prometheus");
  if (config.enable_websockets) features.push("WebSockets");
  if (config.enable_file_storage) features.push("File Storage");
  if (config.enable_webhooks) features.push("Webhooks");
  if (config.enable_admin_panel) features.push("Admin");
  if (config.enable_kubernetes) features.push("K8s");

  return (
    <div className="space-y-6">
      {/* Header with project name */}
      <div className="text-center">
        <p className="text-sm text-text-tertiary mb-1">Your project is ready</p>
        <h2 className="text-2xl font-bold text-text tracking-tight font-mono">{projectName}</h2>
        <p className="text-sm text-text-tertiary mt-1">{config.project_description}</p>
      </div>

      {/* Summary cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <SummaryCard icon={<Database size={16} />} label="Database" value={enumLabels.database[config.database]} />
        <SummaryCard icon={<Shield size={16} />} label="Auth" value={enumLabels.auth[config.auth]} />
        {config.enable_ai_agent ? (
          <SummaryCard icon={<Bot size={16} />} label="AI" value={enumLabels.ai_framework[config.ai_framework]} />
        ) : (
          <SummaryCard icon={<Bot size={16} />} label="AI" value="None" muted />
        )}
        <SummaryCard icon={<Monitor size={16} />} label="Frontend" value={enumLabels.frontend[config.frontend]} />
        <SummaryCard icon={<Server size={16} />} label="Docker" value={config.enable_docker ? "Yes" : "No"} />
        <SummaryCard icon={<Code2 size={16} />} label="CI/CD" value={enumLabels.ci_type[config.ci_type]} />
      </div>

      {/* Extra details row */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
        <Badge>Python {config.python_version}</Badge>
        {(config.database === "postgresql" || config.database === "sqlite") && (
          <Badge>{enumLabels.orm_type[config.orm_type]}</Badge>
        )}
        {config.oauth_provider !== "none" && <Badge>OAuth: Google</Badge>}
        {config.enable_ai_agent && <Badge>{enumLabels.llm_provider[config.llm_provider]}</Badge>}
        {config.enable_ai_agent && config.enable_conversation_persistence && <Badge>Persistence</Badge>}
        {features.map((f) => (
          <Badge key={f}>{f}</Badge>
        ))}
      </div>

      {/* Download CTA */}
      <div className="pt-2">
        <button
          onClick={handleDownloadZip}
          disabled={generating}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-colors text-lg shadow-lg shadow-accent/20 hover:shadow-accent/30"
        >
          {generating ? (
            <>
              <Loader2 size={22} className="animate-spin" />
              Generating... {progress}%
            </>
          ) : (
            <>
              <FileArchive size={22} />
              Download Project ZIP
            </>
          )}
        </button>

        {/* Progress bar */}
        {generating && (
          <div className="w-full h-1.5 rounded-full bg-border overflow-hidden mt-3">
            <div
              className="h-full bg-accent rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Secondary actions */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={handleCopyCommand}
          className="flex items-center gap-2 px-4 py-2 text-text-tertiary hover:text-text text-sm transition-colors"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy CLI Command"}
        </button>
        <span className="text-border">|</span>
        <button
          onClick={handleDownloadJson}
          className="flex items-center gap-2 px-4 py-2 text-text-tertiary hover:text-text text-sm transition-colors"
        >
          <FileJson size={14} />
          Download JSON
        </button>
      </div>
    </div>
  );
}

function SummaryCard({ icon, label, value, muted }: { icon: React.ReactNode; label: string; value: string; muted?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-3 flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5 text-text-tertiary">
        {icon}
        <span className="text-[11px] font-medium uppercase tracking-wider">{label}</span>
      </div>
      <span className={`text-sm font-medium truncate ${muted ? "text-text-tertiary" : "text-text"}`}>{value}</span>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-full bg-surface-hover border border-border text-text-secondary text-[11px] font-medium">
      {children}
    </span>
  );
}
