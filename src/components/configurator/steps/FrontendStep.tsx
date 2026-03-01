import { useWizard } from "../WizardProvider";
import { RadioGroup, Toggle } from "../FormControls";
import { frontendValues, frontendLabels } from "../../../lib/types";
import { shouldShowFrontendFeatures } from "../../../lib/validation";

export function FrontendStep() {
  const { form } = useWizard();
  const { register, watch } = form;
  const config = watch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-text tracking-tight">Frontend</h2>
        <p className="text-sm text-text-tertiary mt-1">Choose your frontend framework</p>
      </div>

      <div className="grid gap-5">
        <div>
          <label className="block text-sm font-medium text-text mb-2">Frontend Framework</label>
          <RadioGroup
            options={frontendValues.map((v) => ({
              value: v,
              label: frontendLabels[v],
              desc: v === "nextjs"
                ? "App Router, TypeScript, Bun, Tailwind CSS"
                : "API-only backend, no frontend scaffolding",
            }))}
            value={config.frontend}
            register={register("frontend")}
          />
        </div>

        {shouldShowFrontendFeatures(config) && (
          <Toggle
            label="Internationalization (i18n)"
            desc="Multi-language support with next-intl"
            checked={config.enable_i18n}
            register={register("enable_i18n")}
          />
        )}
      </div>
    </div>
  );
}
