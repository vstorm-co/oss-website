import { useWizard } from "../WizardProvider";
import { RadioGroup, Toggle } from "../FormControls";
import {
  aiFrameworkValues, aiFrameworkLabels,
  llmProviderValues, llmProviderLabels,
  websocketAuthValues, websocketAuthLabels,
} from "../../../lib/types";
import {
  shouldShowAIOptions, shouldShowOpenRouter,
  shouldShowWebSocketAuth, shouldShowConversationPersistence,
} from "../../../lib/validation";

export function AIAgentStep() {
  const { form } = useWizard();
  const { register, watch, formState: { errors } } = form;
  const config = watch();

  const availableProviders = llmProviderValues.filter(
    (p) => p !== "openrouter" || shouldShowOpenRouter(config)
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-text tracking-tight">AI Agent</h2>
        <p className="text-sm text-text-tertiary mt-1">Configure AI framework and LLM provider</p>
      </div>

      <div className="grid gap-5">
        <Toggle
          label="Enable AI Agent"
          desc="Add AI agent with WebSocket streaming and tool integration"
          checked={config.enable_ai_agent}
          register={register("enable_ai_agent")}
        />

        {shouldShowAIOptions(config) && (
          <>
            <div>
              <label className="block text-sm font-medium text-text mb-2">AI Framework</label>
              <RadioGroup
                options={aiFrameworkValues.map((v) => ({ value: v, label: aiFrameworkLabels[v] }))}
                value={config.ai_framework}
                register={register("ai_framework")}
                columns={2}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">LLM Provider</label>
              <RadioGroup
                options={availableProviders.map((v) => ({ value: v, label: llmProviderLabels[v] }))}
                value={config.llm_provider}
                register={register("llm_provider")}
                columns={3}
              />
            </div>

            {shouldShowWebSocketAuth(config) && (
              <div>
                <label className="block text-sm font-medium text-text mb-2">WebSocket Auth</label>
                <select {...register("websocket_auth")} className="input">
                  {websocketAuthValues.map((v) => (
                    <option key={v} value={v}>{websocketAuthLabels[v]}</option>
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
