import { useWizard } from "../WizardProvider";
import { Toggle } from "../FormControls";
import { shouldShowAdminPanel, shouldShowAdminOptions } from "../../../lib/validation";
import { adminEnvironmentValues, adminEnvironmentLabels } from "../../../lib/types";

export function IntegrationsStep() {
  const { form } = useWizard();
  const { register, watch } = form;
  const config = watch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-text text-xl font-semibold tracking-tight">Integrations</h2>
        <p className="text-text-tertiary mt-1 text-sm">Optional features and integrations</p>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Toggle
          label="WebSockets"
          desc="Real-time communication"
          checked={config.enable_websockets}
          register={register("enable_websockets")}
        />
        <Toggle
          label="File Storage"
          desc="S3/MinIO file uploads"
          checked={config.enable_file_storage}
          register={register("enable_file_storage")}
        />
        <Toggle
          label="Webhooks"
          desc="Event-driven webhook system"
          checked={config.enable_webhooks}
          register={register("enable_webhooks")}
        />
        <Toggle
          label="CORS"
          desc="Cross-origin resource sharing"
          checked={config.enable_cors}
          register={register("enable_cors")}
        />
        <Toggle
          label="orjson"
          desc="Fast JSON serialization"
          checked={config.enable_orjson}
          register={register("enable_orjson")}
        />
        <Toggle
          label="Example CRUD"
          desc="Sample CRUD endpoints"
          checked={config.include_example_crud}
          register={register("include_example_crud")}
        />
      </div>

      <hr className="border-border" />

      <div>
        <label className="text-text mb-2 block text-sm font-medium">Messaging Channels</label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Toggle
            label="Telegram"
            desc="Multi-bot, polling + webhook, role-based access"
            checked={config.use_telegram}
            register={register("use_telegram")}
          />
          <Toggle
            label="Slack"
            desc="Events API, threads, @mention support"
            checked={config.use_slack}
            register={register("use_slack")}
          />
        </div>
      </div>

      {shouldShowAdminPanel(config) && (
        <>
          <hr className="border-border" />
          <Toggle
            label="Admin Panel"
            desc="SQLAdmin dashboard"
            checked={config.enable_admin_panel}
            register={register("enable_admin_panel")}
          />

          {shouldShowAdminOptions(config) && (
            <div className="border-accent/20 space-y-3 border-l-2 pl-4">
              <div>
                <label className="text-text-tertiary mb-1 block text-[11px]">
                  Admin Environment
                </label>
                <select {...register("admin_environments")} className="input text-sm">
                  {adminEnvironmentValues.map((v) => (
                    <option key={v} value={v}>
                      {adminEnvironmentLabels[v]}
                    </option>
                  ))}
                </select>
              </div>
              <label className="text-text-secondary flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  {...register("admin_require_auth")}
                  className="border-border bg-surface text-accent rounded"
                />
                Require authentication
              </label>
            </div>
          )}
        </>
      )}
    </div>
  );
}
