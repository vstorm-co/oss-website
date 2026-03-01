import { useWizard } from "../WizardProvider";
import { Toggle, RadioGroup } from "../FormControls";
import { ciValues, ciLabels, reverseProxyValues, reverseProxyLabels } from "../../../lib/types";
import { shouldShowReverseProxy } from "../../../lib/validation";

export function DevToolsStep() {
  const { form } = useWizard();
  const { register, watch } = form;
  const config = watch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-text tracking-tight">DevOps & Tooling</h2>
        <p className="text-sm text-text-tertiary mt-1">Docker, CI/CD, and development tools</p>
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Toggle label="Docker" desc="Dockerfile and docker-compose" checked={config.enable_docker} register={register("enable_docker")} />
          <Toggle label="Kubernetes" desc="K8s deployment manifests" checked={config.enable_kubernetes} register={register("enable_kubernetes")} />
          <Toggle label="Pytest" desc="Test framework setup" checked={config.enable_pytest} register={register("enable_pytest")} />
          <Toggle label="Pre-commit" desc="Git hooks for linting" checked={config.enable_precommit} register={register("enable_precommit")} />
          <Toggle label="Makefile" desc="Common command shortcuts" checked={config.enable_makefile} register={register("enable_makefile")} />
          <Toggle label="Generate .env" desc="Environment variables file" checked={config.generate_env} register={register("generate_env")} />
        </div>

        {shouldShowReverseProxy(config) && (
          <div>
            <label className="block text-sm font-medium text-text mb-2">Reverse Proxy</label>
            <select {...register("reverse_proxy")} className="input">
              {reverseProxyValues.map((v) => (
                <option key={v} value={v}>{reverseProxyLabels[v]}</option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-text mb-2">CI/CD</label>
          <RadioGroup
            options={ciValues.map((v) => ({ value: v, label: ciLabels[v] }))}
            value={config.ci_type}
            register={register("ci_type")}
            columns={3}
          />
        </div>

        <div className={`grid ${config.frontend !== "none" ? "grid-cols-2" : "grid-cols-1"} gap-3`}>
          <div>
            <label className="block text-[11px] text-text-tertiary mb-1">Backend Port</label>
            <input type="number" min={1024} max={65535} {...register("backend_port", { valueAsNumber: true })} className="input text-sm" />
          </div>
          {config.frontend !== "none" && (
            <div>
              <label className="block text-[11px] text-text-tertiary mb-1">Frontend Port</label>
              <input type="number" min={1024} max={65535} {...register("frontend_port", { valueAsNumber: true })} className="input text-sm" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
