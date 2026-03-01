import { useWizard } from "../WizardProvider";
import { Field } from "../FormControls";
import { pythonVersionValues } from "../../../lib/types";

export function ProjectInfoStep() {
  const { form } = useWizard();
  const { register, watch, formState: { errors } } = form;
  const rawName = watch("project_name");
  const normalized = rawName ? rawName.toLowerCase().replace(/[\s-]+/g, "_").replace(/[^a-z0-9_]/g, "") : "";
  const showNormalized = rawName && normalized !== rawName && normalized.length > 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-text tracking-tight">Project Info</h2>
        <p className="text-sm text-text-tertiary mt-1">Basic project details</p>
      </div>

      <div className="grid gap-5">
        <Field label="Project Name" error={errors.project_name?.message} required>
          <input {...register("project_name")} placeholder="my_project" className="input" />
          {showNormalized ? (
            <p className="text-[11px] text-amber-400/80 mt-1">Will be saved as: <code className="font-mono text-amber-300">{normalized}</code></p>
          ) : (
            <p className="text-[11px] text-text-tertiary mt-1">Lowercase letters, numbers, and underscores only</p>
          )}
        </Field>

        <Field label="Description" error={errors.project_description?.message}>
          <input {...register("project_description")} placeholder="A FastAPI project" className="input" />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Author Name" error={errors.author_name?.message}>
            <input {...register("author_name")} placeholder="Your Name" className="input" />
          </Field>
          <Field label="Author Email" error={errors.author_email?.message}>
            <input {...register("author_email")} type="email" placeholder="your@email.com" className="input" />
          </Field>
        </div>

        <Field label="Python Version">
          <select {...register("python_version")} className="input">
            {pythonVersionValues.map((v) => (
              <option key={v} value={v}>Python {v}</option>
            ))}
          </select>
        </Field>
      </div>
    </div>
  );
}
