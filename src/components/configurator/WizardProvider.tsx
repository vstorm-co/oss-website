import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ProjectConfig } from "../../lib/types";
import { defaultConfig } from "../../lib/defaults";
import { projectConfigSchema } from "../../lib/schema";
import { presets, type PresetName } from "../../lib/presets";

const TOTAL_STEPS = 10;

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

    // Auto-disable LangSmith when framework doesn't support it
    const langsmithFrameworks = ["langchain", "langgraph", "deepagents"];
    if (cur.enable_langsmith && !langsmithFrameworks.includes(cur.ai_framework)) {
      form.setValue("enable_langsmith", false);
    }
    if (cur.enable_langsmith && !cur.enable_ai_agent) {
      form.setValue("enable_langsmith", false);
    }

    // Auto-reset sandbox to "state" when switching to a non-sandbox framework
    const sandboxFrameworks = ["deepagents", "pydantic_deep"];
    if (!sandboxFrameworks.includes(cur.ai_framework) && cur.sandbox_backend !== "state") {
      form.setValue("sandbox_backend", "state");
    }
    // Daytona is only available for pydantic_deep
    if (cur.ai_framework !== "pydantic_deep" && cur.sandbox_backend === "daytona") {
      form.setValue("sandbox_backend", "state");
    }

    // Auto-reset OpenRouter when switching to a framework that doesn't support it
    const openrouterFrameworks = ["pydantic_ai", "pydantic_deep"];
    if (cur.llm_provider === "openrouter" && !openrouterFrameworks.includes(cur.ai_framework)) {
      form.setValue("llm_provider", "openai");
    }

    // pgvector requires PostgreSQL — reset vector store if database changes
    if (cur.enable_rag && cur.vector_store === "pgvector" && cur.database !== "postgresql") {
      form.setValue("vector_store", "milvus");
    }

    // Auto-disable logfire sub-features when their dependency is gone
    if (cur.enable_logfire) {
      if (cur.database === "none" && cur.logfire_features.database) {
        form.setValue("logfire_features.database", false);
      }
      if (cur.background_tasks !== "celery" && cur.logfire_features.celery) {
        form.setValue("logfire_features.celery", false);
      }
    }

    void prev;
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
