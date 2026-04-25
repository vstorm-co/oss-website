import { useWizard } from "../WizardProvider";
import { Toggle } from "../FormControls";
import {
  backgroundTaskValues,
  backgroundTaskLabels,
  rateLimitStorageValues,
  rateLimitStorageLabels,
} from "../../../lib/types";
import { shouldShowRateLimitConfig, shouldShowLogfireFeatures } from "../../../lib/validation";

export function InfrastructureStep() {
  const { form } = useWizard();
  const { register, watch } = form;
  const config = watch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-text text-xl font-semibold tracking-tight">Infrastructure</h2>
        <p className="text-text-tertiary mt-1 text-sm">
          Background tasks, caching, and observability
        </p>
      </div>

      <div className="grid gap-4">
        <div>
          <label className="text-text mb-2 block text-sm font-medium">Background Tasks</label>
          <select {...register("background_tasks")} className="input">
            {backgroundTaskValues.map((v) => (
              <option key={v} value={v}>
                {backgroundTaskLabels[v]}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Toggle
            label="Redis"
            desc="In-memory data store"
            checked={config.enable_redis}
            register={register("enable_redis")}
          />
          <Toggle
            label="Caching"
            desc="Response caching (requires Redis)"
            checked={config.enable_caching}
            register={register("enable_caching")}
          />
          <Toggle
            label="Rate Limiting"
            desc="API rate limiting"
            checked={config.enable_rate_limiting}
            register={register("enable_rate_limiting")}
          />
          <Toggle
            label="Pagination"
            desc="API response pagination"
            checked={config.enable_pagination}
            register={register("enable_pagination")}
          />
        </div>

        {shouldShowRateLimitConfig(config) && (
          <div className="border-accent/20 grid grid-cols-3 gap-3 border-l-2 pl-4">
            <div>
              <label className="text-text-tertiary mb-1 block text-[11px]">Requests</label>
              <input
                type="number"
                {...register("rate_limit_requests", { valueAsNumber: true })}
                className="input text-sm"
              />
            </div>
            <div>
              <label className="text-text-tertiary mb-1 block text-[11px]">Period (sec)</label>
              <input
                type="number"
                {...register("rate_limit_period", { valueAsNumber: true })}
                className="input text-sm"
              />
            </div>
            <div>
              <label className="text-text-tertiary mb-1 block text-[11px]">Storage</label>
              <select {...register("rate_limit_storage")} className="input text-sm">
                {rateLimitStorageValues.map((v) => (
                  <option key={v} value={v}>
                    {rateLimitStorageLabels[v]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <hr className="border-border" />
        <p className="text-text-tertiary text-xs font-medium tracking-wider uppercase">
          Observability
        </p>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Toggle
            label="Logfire"
            desc="Pydantic Logfire integration"
            checked={config.enable_logfire}
            register={register("enable_logfire")}
          />
          <Toggle
            label="Sentry"
            desc="Error tracking"
            checked={config.enable_sentry}
            register={register("enable_sentry")}
          />
          <Toggle
            label="Prometheus"
            desc="Metrics endpoint"
            checked={config.enable_prometheus}
            register={register("enable_prometheus")}
          />
        </div>

        {shouldShowLogfireFeatures(config) && (
          <div className="border-accent/20 space-y-2 border-l-2 pl-4">
            <p className="text-text-tertiary text-[11px]">Logfire instrumentations:</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {(["fastapi", "database", "redis", "celery", "httpx"] as const).map((feat) => (
                <label
                  key={feat}
                  className="text-text-secondary flex cursor-pointer items-center gap-2 text-xs"
                >
                  <input
                    type="checkbox"
                    {...register(`logfire_features.${feat}`)}
                    className="border-border bg-surface text-accent focus:ring-accent rounded"
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
