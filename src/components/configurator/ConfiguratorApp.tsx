import { Component, type ErrorInfo, type ReactNode } from "react";
import { WizardProvider, useWizard } from "./WizardProvider";
import { WizardShell } from "./WizardShell";
import { PresetSelector } from "./PresetSelector";
import { LivePreview } from "./LivePreview";
import { ProjectInfoStep } from "./steps/ProjectInfoStep";
import { DatabaseStep } from "./steps/DatabaseStep";
import { AuthStep } from "./steps/AuthStep";
import { AIAgentStep } from "./steps/AIAgentStep";
import { InfrastructureStep } from "./steps/InfrastructureStep";
import { IntegrationsStep } from "./steps/IntegrationsStep";
import { DevToolsStep } from "./steps/DevToolsStep";
import { FrontendStep } from "./steps/FrontendStep";
import { ReviewStep } from "./steps/ReviewStep";
import type { PresetName } from "../../lib/presets";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state: { error: Error | null } = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error("Configurator error:", error, info); }
  render() {
    if (this.state.error) {
      return (
        <div className="p-8 rounded-xl border border-red-500/30 bg-red-500/5">
          <h2 className="text-lg font-semibold text-red-400 mb-2">Something went wrong</h2>
          <pre className="text-sm text-red-300/80 whitespace-pre-wrap">{this.state.error.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function WizardContent() {
  const { step } = useWizard();

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main content — takes available space */}
      <div className="flex-1 min-w-0">
        <WizardShell>
          {step === 1 && <ProjectInfoStep />}
          {step === 2 && <DatabaseStep />}
          {step === 3 && <AuthStep />}
          {step === 4 && <AIAgentStep />}
          {step === 5 && <InfrastructureStep />}
          {step === 6 && <IntegrationsStep />}
          {step === 7 && <DevToolsStep />}
          {step === 8 && <FrontendStep />}
          {step === 9 && <ReviewStep />}
        </WizardShell>
      </div>

      {/* Sidebar — fixed width, doesn't shrink below it */}
      <aside className="w-full lg:w-64 shrink-0 space-y-5 lg:sticky lg:top-8 lg:self-start">
        <PresetSelector />
        <LivePreview />
      </aside>
    </div>
  );
}

interface ConfiguratorAppProps {
  initialPreset?: string;
}

export default function ConfiguratorApp({ initialPreset }: ConfiguratorAppProps) {
  const validPresets = ["minimal", "production", "ai-agent"];
  const preset = initialPreset && validPresets.includes(initialPreset)
    ? (initialPreset as PresetName)
    : undefined;

  return (
    <ErrorBoundary>
      <WizardProvider initialPreset={preset}>
        <WizardContent />
      </WizardProvider>
    </ErrorBoundary>
  );
}
