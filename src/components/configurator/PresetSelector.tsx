import { useWizard } from "./WizardProvider";
import { Zap, Server, Bot } from "lucide-react";
import type { PresetName } from "../../lib/presets";

const PRESETS: { name: PresetName; label: string; desc: string; icon: typeof Zap }[] = [
  {
    name: "minimal",
    label: "Minimal",
    desc: "No database, no auth",
    icon: Zap,
  },
  {
    name: "production",
    label: "Production",
    desc: "Full infrastructure",
    icon: Server,
  },
  {
    name: "ai-agent",
    label: "AI Agent",
    desc: "WebSocket + persistence",
    icon: Bot,
  },
];

export function PresetSelector() {
  const { applyPreset, activePreset } = useWizard();

  return (
    <div className="space-y-2.5">
      <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider">Presets</p>
      <div className="flex flex-col gap-2">
        {PRESETS.map(({ name, label, desc, icon: Icon }) => (
          <button
            key={name}
            onClick={() => applyPreset(name)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              activePreset === name
                ? "border-accent/50 bg-accent/10"
                : "border-border bg-surface hover:border-border-hover"
            }`}
          >
            <Icon
              size={16}
              className={activePreset === name ? "text-accent" : "text-text-tertiary"}
            />
            <div className="min-w-0">
              <div className="text-sm font-medium text-text">{label}</div>
              <div className="text-[11px] text-text-tertiary truncate">{desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
