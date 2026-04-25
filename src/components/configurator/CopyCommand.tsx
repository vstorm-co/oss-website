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
        <p className="text-text-secondary mb-2 text-sm">1. Install the generator:</p>
        <code className="bg-surface border-border block rounded-xl border p-3.5 font-mono text-sm text-emerald-400">
          pip install fastapi-fullstack
        </code>
      </div>

      <div>
        <p className="text-text-secondary mb-2 text-sm">2. Run this command:</p>
        <div className="relative">
          <pre className="bg-surface border-border text-text overflow-x-auto rounded-xl border p-4 font-mono text-sm">
            <code>{command}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="bg-surface-hover hover:bg-border border-border-hover absolute top-3 right-3 rounded-lg border p-2 transition-colors"
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
          className="bg-accent hover:bg-accent-hover flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-colors"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied!" : "Copy Command"}
        </button>
        <button
          onClick={handleDownload}
          className="border-border-hover hover:border-text-tertiary text-text flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors"
        >
          <Download size={16} />
          Download JSON
        </button>
      </div>
    </div>
  );
}
