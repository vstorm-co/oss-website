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
    label: "AI",
    desc: "WebSocket + persistence",
    icon: Bot,
  },
];

export function PresetSelector() {
  const { applyPreset, activePreset } = useWizard();

  return (
    <div className="space-y-2.5">
      <p className="text-text-tertiary text-xs font-medium tracking-wider uppercase">Presets</p>
      <div className="flex flex-col gap-2">
        {PRESETS.map(({ name, label, desc, icon: Icon }) => (
          <button
            key={name}
            onClick={() => applyPreset(name)}
            className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all ${
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
              <div className="text-text text-sm font-medium">{label}</div>
              <div className="text-text-tertiary truncate text-[11px]">{desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
