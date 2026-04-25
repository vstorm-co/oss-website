import { useWizard } from "../WizardProvider";
import { RadioGroup } from "../FormControls";
import { databaseValues, databaseLabels, ormValues, ormLabels } from "../../../lib/types";
import { shouldShowOrmType } from "../../../lib/validation";

export function DatabaseStep() {
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
        <h2 className="text-text text-xl font-semibold tracking-tight">Database</h2>
        <p className="text-text-tertiary mt-1 text-sm">Choose your database and ORM</p>
      </div>

      <div className="grid gap-5">
        <div>
          <label className="text-text mb-2 block text-sm font-medium">Database Type</label>
          <RadioGroup
            options={databaseValues.map((v) => ({ value: v, label: databaseLabels[v] }))}
            value={config.database}
            register={register("database")}
          />
          {errors.database && (
            <p className="mt-1 text-xs text-red-400">{errors.database.message}</p>
          )}
        </div>

        {shouldShowOrmType(config) && (
          <div>
            <label className="text-text mb-2 block text-sm font-medium">ORM Library</label>
            <RadioGroup
              options={ormValues.map((v) => ({
                value: v,
                label: ormLabels[v],
                desc: v === "sqlalchemy" ? "Full-featured ORM" : "Pydantic-native models",
              }))}
              value={config.orm_type}
              register={register("orm_type")}
            />
            {errors.orm_type && (
              <p className="mt-1 text-xs text-red-400">{errors.orm_type.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
