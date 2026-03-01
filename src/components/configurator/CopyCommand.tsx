import { useState, useCallback } from "react";
import { Copy, Check, Download } from "lucide-react";
import { generateCommand, generateCommandOneLine } from "../../lib/generateCommand";
import { downloadJson } from "../../lib/generateJson";
import type { ProjectConfig } from "../../lib/types";

interface CopyCommandProps {
  config: ProjectConfig;
}

export function CopyCommand({ config }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);
  const command = generateCommand(config);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(generateCommandOneLine(config));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = generateCommandOneLine(config);
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [config]);

  const handleDownload = useCallback(() => {
    downloadJson(config);
  }, [config]);

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm text-text-secondary mb-2">1. Install the generator:</p>
        <code className="block bg-surface border border-border rounded-xl p-3.5 text-sm text-emerald-400 font-mono">
          pip install fastapi-fullstack
        </code>
      </div>

      <div>
        <p className="text-sm text-text-secondary mb-2">2. Run this command:</p>
        <div className="relative">
          <pre className="bg-surface border border-border rounded-xl p-4 text-sm text-text font-mono overflow-x-auto">
            <code>{command}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 rounded-lg bg-surface-hover hover:bg-border border border-border-hover transition-colors"
            title="Copy command"
          >
            {copied ? (
              <Check size={14} className="text-emerald-400" />
            ) : (
              <Copy size={14} className="text-text-secondary" />
            )}
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-6 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-full text-sm font-medium transition-colors"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied!" : "Copy Command"}
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-5 py-2.5 border border-border-hover hover:border-text-tertiary text-text rounded-full text-sm transition-colors"
        >
          <Download size={16} />
          Download JSON
        </button>
      </div>
    </div>
  );
}
