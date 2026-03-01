import { useWizard } from "../WizardProvider";
import { Toggle } from "../FormControls";
import {
  backgroundTaskValues, backgroundTaskLabels,
  rateLimitStorageValues, rateLimitStorageLabels,
} from "../../../lib/types";
import { shouldShowRateLimitConfig, shouldShowLogfireFeatures } from "../../../lib/validation";

export function InfrastructureStep() {
  const { form } = useWizard();
  const { register, watch } = form;
  const config = watch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-text tracking-tight">Infrastructure</h2>
        <p className="text-sm text-text-tertiary mt-1">Background tasks, caching, and observability</p>
      </div>

      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-text mb-2">Background Tasks</label>
          <select {...register("background_tasks")} className="input">
            {backgroundTaskValues.map((v) => (
              <option key={v} value={v}>{backgroundTaskLabels[v]}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Toggle label="Redis" desc="In-memory data store" checked={config.enable_redis} register={register("enable_redis")} />
          <Toggle label="Caching" desc="Response caching (requires Redis)" checked={config.enable_caching} register={register("enable_caching")} />
          <Toggle label="Rate Limiting" desc="API rate limiting" checked={config.enable_rate_limiting} register={register("enable_rate_limiting")} />
          <Toggle label="Pagination" desc="API response pagination" checked={config.enable_pagination} register={register("enable_pagination")} />
        </div>

        {shouldShowRateLimitConfig(config) && (
          <div className="grid grid-cols-3 gap-3 pl-4 border-l-2 border-accent/20">
            <div>
              <label className="block text-[11px] text-text-tertiary mb-1">Requests</label>
              <input type="number" {...register("rate_limit_requests", { valueAsNumber: true })} className="input text-sm" />
            </div>
            <div>
              <label className="block text-[11px] text-text-tertiary mb-1">Period (sec)</label>
              <input type="number" {...register("rate_limit_period", { valueAsNumber: true })} className="input text-sm" />
            </div>
            <div>
              <label className="block text-[11px] text-text-tertiary mb-1">Storage</label>
              <select {...register("rate_limit_storage")} className="input text-sm">
                {rateLimitStorageValues.map((v) => (
                  <option key={v} value={v}>{rateLimitStorageLabels[v]}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        <hr className="border-border" />
        <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider">Observability</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Toggle label="Logfire" desc="Pydantic Logfire integration" checked={config.enable_logfire} register={register("enable_logfire")} />
          <Toggle label="Sentry" desc="Error tracking" checked={config.enable_sentry} register={register("enable_sentry")} />
          <Toggle label="Prometheus" desc="Metrics endpoint" checked={config.enable_prometheus} register={register("enable_prometheus")} />
        </div>

        {shouldShowLogfireFeatures(config) && (
          <div className="pl-4 border-l-2 border-accent/20 space-y-2">
            <p className="text-[11px] text-text-tertiary">Logfire instrumentations:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(["fastapi", "database", "redis", "celery", "httpx"] as const).map((feat) => (
                <label key={feat} className="flex items-center gap-2 text-xs text-text-secondary cursor-pointer">
                  <input
                    type="checkbox"
                    {...register(`logfire_features.${feat}`)}
                    className="rounded border-border bg-surface text-accent focus:ring-accent"
                  />
                  {feat.charAt(0).toUpperCase() + feat.slice(1)}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
