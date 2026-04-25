import { useWizard } from "../WizardProvider";
import { RadioGroup, Toggle } from "../FormControls";
import {
  aiFrameworkValues,
  aiFrameworkLabels,
  llmProviderValues,
  llmProviderLabels,
  websocketAuthValues,
  websocketAuthLabels,
  sandboxBackendValues,
  sandboxBackendLabels,
} from "../../../lib/types";
import {
  shouldShowAIOptions,
  shouldShowOpenRouter,
  shouldShowWebSocketAuth,
  shouldShowConversationPersistence,
  shouldShowLangsmith,
  shouldShowSandboxBackend,
  shouldShowDaytona,
} from "../../../lib/validation";

export function AIAgentStep() {
  const { form } = useWizard();
  const {
    register,
    watch,
    formState: { errors },
  } = form;
  const config = watch();

  const availableProviders = llmProviderValues.filter((p) => {
    if (p === "openrouter") return shouldShowOpenRouter(config);
    return true;
  });

  const availableSandboxBackends = sandboxBackendValues.filter((s) => {
    if (s === "daytona") return shouldShowDaytona(config);
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-text text-xl font-semibold tracking-tight">AI</h2>
        <p className="text-text-tertiary mt-1 text-sm">Configure AI framework and LLM provider</p>
      </div>

      <div className="grid gap-5">
        <Toggle
          label="Enable AI"
          desc="Add AI agent with WebSocket streaming and tool integration"
          checked={config.enable_ai_agent}
          register={register("enable_ai_agent")}
        />

        {shouldShowAIOptions(config) && (
          <>
            <div>
              <label className="text-text mb-2 block text-sm font-medium">AI Framework</label>
              <RadioGroup
                options={aiFrameworkValues.map((v) => ({ value: v, label: aiFrameworkLabels[v] }))}
                value={config.ai_framework}
                register={register("ai_framework")}
                columns={2}
              />
            </div>

            <div>
              <label className="text-text mb-2 block text-sm font-medium">LLM Provider</label>
              <RadioGroup
                options={availableProviders.map((v) => ({ value: v, label: llmProviderLabels[v] }))}
                value={config.llm_provider}
                register={register("llm_provider")}
                columns={2}
              />
            </div>

            {shouldShowSandboxBackend(config) && (
              <div>
                <label className="text-text mb-2 block text-sm font-medium">Sandbox Backend</label>
                <RadioGroup
                  options={availableSandboxBackends.map((v) => ({
                    value: v,
                    label: sandboxBackendLabels[v],
                  }))}
                  value={config.sandbox_backend}
                  register={register("sandbox_backend")}
                  columns={2}
                />
              </div>
            )}

            {shouldShowLangsmith(config) && (
              <Toggle
                label="LangSmith Observability"
                desc="Enable LangSmith tracing for LangChain, LangGraph, or DeepAgents"
                checked={config.enable_langsmith}
                register={register("enable_langsmith")}
              />
            )}

            {shouldShowWebSocketAuth(config) && (
              <div>
                <label className="text-text mb-2 block text-sm font-medium">WebSocket Auth</label>
                <select {...register("websocket_auth")} className="input">
                  {websocketAuthValues.map((v) => (
                    <option key={v} value={v}>
                      {websocketAuthLabels[v]}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {shouldShowConversationPersistence(config) && (
              <Toggle
                label="Conversation Persistence"
                desc="Save conversation history to database"
                checked={config.enable_conversation_persistence}
                register={register("enable_conversation_persistence")}
              />
            )}
          </>
        )}
      </div>

      {errors.ai_framework && <p className="text-xs text-red-400">{errors.ai_framework.message}</p>}
    </div>
  );
}
