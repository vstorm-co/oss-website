import { useWizard } from "../WizardProvider";
import { RadioGroup } from "../FormControls";
import { databaseValues, databaseLabels, ormValues, ormLabels } from "../../../lib/types";
import { shouldShowOrmType } from "../../../lib/validation";

export function DatabaseStep() {
  const { form } = useWizard();
  const { register, watch, formState: { errors } } = form;
  const config = watch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-text tracking-tight">Database</h2>
        <p className="text-sm text-text-tertiary mt-1">Choose your database and ORM</p>
      </div>

      <div className="grid gap-5">
        <div>
          <label className="block text-sm font-medium text-text mb-2">Database Type</label>
          <RadioGroup
            options={databaseValues.map((v) => ({ value: v, label: databaseLabels[v] }))}
            value={config.database}
            register={register("database")}
          />
          {errors.database && <p className="text-xs text-red-400 mt-1">{errors.database.message}</p>}
        </div>

        {shouldShowOrmType(config) && (
          <div>
            <label className="block text-sm font-medium text-text mb-2">ORM Library</label>
            <RadioGroup
              options={ormValues.map((v) => ({
                value: v,
                label: ormLabels[v],
                desc: v === "sqlalchemy" ? "Full-featured ORM" : "Pydantic-native models",
              }))}
              value={config.orm_type}
              register={register("orm_type")}
            />
            {errors.orm_type && <p className="text-xs text-red-400 mt-1">{errors.orm_type.message}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
