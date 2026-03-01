import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ProjectConfig } from "../../lib/types";
import { defaultConfig } from "../../lib/defaults";
import { projectConfigSchema } from "../../lib/schema";
import { presets, type PresetName } from "../../lib/presets";

const TOTAL_STEPS = 9;

interface WizardContextValue {
  form: UseFormReturn<ProjectConfig>;
  step: number;
  totalSteps: number;
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  applyPreset: (name: PresetName) => void;
  activePreset: PresetName | null;
}

const WizardContext = createContext<WizardContextValue | null>(null);

export function useWizard() {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error("useWizard must be used within WizardProvider");
  return ctx;
}

interface WizardProviderProps {
  children: ReactNode;
  initialPreset?: PresetName;
}

export function WizardProvider({ children, initialPreset }: WizardProviderProps) {
  const initialValues = initialPreset
    ? { ...defaultConfig, ...presets[initialPreset].overrides }
    : defaultConfig;

  const form = useForm<ProjectConfig>({
    resolver: zodResolver(projectConfigSchema),
    defaultValues: initialValues,
    mode: "onChange",
  });

  const [step, setStep] = useState(initialPreset ? TOTAL_STEPS : 1);
  const [activePreset, setActivePreset] = useState<PresetName | null>(
    initialPreset ?? null
  );

  const goToStep = useCallback((s: number) => {
    setStep(Math.max(1, Math.min(TOTAL_STEPS, s)));
  }, []);

  const nextStep = useCallback(() => {
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }, []);

  const prevStep = useCallback(() => {
    setStep((s) => Math.max(1, s - 1));
  }, []);

  // --- Auto-fix dependencies (mirrors CLI behavior) ---
  const config = form.watch();
  const prevRef = useRef(config);

  useEffect(() => {
    const prev = prevRef.current;
    const cur = config;
    prevRef.current = cur;

    // Auto-enable Redis when caching, rate limiting (redis), or background tasks need it
    const needsRedis =
      cur.enable_caching ||
      (cur.enable_rate_limiting && cur.rate_limit_storage === "redis") ||
      (cur.background_tasks !== "none") ||
      (cur.enable_logfire && cur.logfire_features.redis);

    if (needsRedis && !cur.enable_redis) {
      form.setValue("enable_redis", true);
    }

    // Auto-disable logfire sub-features when their dependency is gone
    if (!cur.enable_logfire && prev.enable_logfire) {
      // Logfire turned off — no action needed, features hidden
    }
    if (cur.enable_logfire) {
      if (cur.database === "none" && cur.logfire_features.database) {
        form.setValue("logfire_features.database", false);
      }
      if (cur.background_tasks !== "celery" && cur.logfire_features.celery) {
        form.setValue("logfire_features.celery", false);
      }
    }
  }, [config, form]);

  const applyPreset = useCallback(
    (name: PresetName) => {
      form.reset({ ...defaultConfig, ...presets[name].overrides });
      setActivePreset(name);
      setStep(TOTAL_STEPS);
    },
    [form]
  );

  return (
    <WizardContext.Provider
      value={{
        form,
        step,
        totalSteps: TOTAL_STEPS,
        goToStep,
        nextStep,
        prevStep,
        applyPreset,
        activePreset,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}
