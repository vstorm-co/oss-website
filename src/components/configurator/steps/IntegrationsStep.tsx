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
        <h2 className="text-xl font-semibold text-text tracking-tight">Integrations</h2>
        <p className="text-sm text-text-tertiary mt-1">Optional features and integrations</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Toggle label="WebSockets" desc="Real-time communication" checked={config.enable_websockets} register={register("enable_websockets")} />
        <Toggle label="File Storage" desc="S3/MinIO file uploads" checked={config.enable_file_storage} register={register("enable_file_storage")} />
        <Toggle label="Webhooks" desc="Event-driven webhook system" checked={config.enable_webhooks} register={register("enable_webhooks")} />
        <Toggle label="CORS" desc="Cross-origin resource sharing" checked={config.enable_cors} register={register("enable_cors")} />
        <Toggle label="orjson" desc="Fast JSON serialization" checked={config.enable_orjson} register={register("enable_orjson")} />
        <Toggle label="Example CRUD" desc="Sample CRUD endpoints" checked={config.include_example_crud} register={register("include_example_crud")} />
      </div>

      {shouldShowAdminPanel(config) && (
        <>
          <hr className="border-border" />
          <Toggle label="Admin Panel" desc="SQLAdmin dashboard" checked={config.enable_admin_panel} register={register("enable_admin_panel")} />

          {shouldShowAdminOptions(config) && (
            <div className="pl-4 border-l-2 border-accent/20 space-y-3">
              <div>
                <label className="block text-[11px] text-text-tertiary mb-1">Admin Environment</label>
                <select {...register("admin_environments")} className="input text-sm">
                  {adminEnvironmentValues.map((v) => (
                    <option key={v} value={v}>{adminEnvironmentLabels[v]}</option>
                  ))}
                </select>
              </div>
              <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
                <input type="checkbox" {...register("admin_require_auth")} className="rounded border-border bg-surface text-accent" />
                Require authentication
              </label>
            </div>
          )}
        </>
      )}
    </div>
  );
}
