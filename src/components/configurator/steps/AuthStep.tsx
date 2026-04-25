import { useWizard } from "../WizardProvider";
import { RadioGroup, Toggle } from "../FormControls";
import { authValues, authLabels } from "../../../lib/types";
import { shouldShowOAuth, shouldShowSessionManagement } from "../../../lib/validation";

export function AuthStep() {
  const { form } = useWizard();
  const {
    register,
    watch,
    formState: { errors },
  } = form;
  const config = watch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-text text-xl font-semibold tracking-tight">Authentication</h2>
        <p className="text-text-tertiary mt-1 text-sm">
          Configure authentication and authorization
        </p>
      </div>

      <div className="grid gap-5">
        <div>
          <label className="text-text mb-2 block text-sm font-medium">Auth Method</label>
          <RadioGroup
            options={authValues.map((v) => ({ value: v, label: authLabels[v] }))}
            value={config.auth}
            register={register("auth")}
          />
        </div>

        {shouldShowOAuth(config) && (
          <div>
            <label className="text-text mb-2 block text-sm font-medium">OAuth Provider</label>
            <RadioGroup
              options={[
                { value: "none", label: "None" },
                { value: "google", label: "Google OAuth" },
              ]}
              value={config.oauth_provider}
              register={register("oauth_provider")}
            />
          </div>
        )}

        {shouldShowSessionManagement(config) && (
          <Toggle
            label="Session Management"
            desc="Enable user session tracking and management"
            checked={config.enable_session_management}
            register={register("enable_session_management")}
          />
        )}
      </div>

      {errors.root && <p className="text-xs text-red-400">{errors.root.message}</p>}
    </div>
  );
}
