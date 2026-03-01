import { useWizard } from "./WizardProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STEP_LABELS = [
  "Project",
  "Database",
  "Auth",
  "AI Agent",
  "Infra",
  "Integrations",
  "DevOps",
  "Frontend",
  "Review",
];

export function WizardShell({ children }: { children: React.ReactNode }) {
  const { step, totalSteps, goToStep, nextStep, prevStep } = useWizard();

  return (
    <div className="flex flex-col gap-8">
      {/* Progress steps */}
      <div className="flex items-center gap-1">
        {STEP_LABELS.map((label, i) => {
          const stepNum = i + 1;
          const isActive = stepNum === step;
          const isCompleted = stepNum < step;
          return (
            <button
              key={label}
              onClick={() => goToStep(stepNum)}
              className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer"
            >
              <div
                className={`h-1 w-full rounded-full transition-colors ${
                  isActive
                    ? "bg-accent"
                    : isCompleted
                      ? "bg-accent/40"
                      : "bg-border"
                }`}
              />
              <span
                className={`text-[11px] transition-colors ${
                  isActive
                    ? "text-accent font-medium"
                    : isCompleted
                      ? "text-text-secondary"
                      : "text-text-tertiary group-hover:text-text-secondary"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Step content */}
      <div className="min-h-[420px]">{children}</div>

      {/* Navigation */}
      <div className="flex justify-between pt-6 border-t border-border">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-secondary hover:text-text disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={16} />
          Previous
        </button>
        {step < totalSteps ? (
          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-6 py-2.5 text-sm bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-colors"
          >
            Next
            <ChevronRight size={16} />
          </button>
        ) : null}
      </div>
    </div>
  );
}
