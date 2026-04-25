import type { UseFormRegisterReturn } from "react-hook-form";

export function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-text mb-1.5 block text-sm font-medium">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export function RadioGroup({
  options,
  value,
  register,
  columns = 2,
}: {
  options: { value: string; label: string; desc?: string }[];
  value: string;
  register: UseFormRegisterReturn;
  columns?: number;
}) {
  const colClass = columns === 3 ? "grid-cols-3" : columns === 2 ? "grid-cols-2" : "grid-cols-1";
  return (
    <div className={`grid ${colClass} gap-2`}>
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex cursor-pointer flex-col rounded-xl border p-3 transition-all ${
            value === opt.value
              ? "border-accent/50 bg-accent/10"
              : "border-border bg-surface hover:border-border-hover"
          }`}
        >
          <input type="radio" {...register} value={opt.value} className="sr-only" />
          <span className="text-text text-sm font-medium">{opt.label}</span>
          {opt.desc && <span className="text-text-tertiary mt-0.5 text-[11px]">{opt.desc}</span>}
        </label>
      ))}
    </div>
  );
}

export function Toggle({
  label,
  desc,
  checked,
  register,
}: {
  label: string;
  desc: string;
  checked: boolean;
  register: UseFormRegisterReturn;
}) {
  return (
    <label className="border-border bg-surface hover:border-border-hover flex cursor-pointer items-center justify-between rounded-xl border p-3 transition-all">
      <div className="min-w-0 pr-3">
        <div className="text-text text-sm font-medium">{label}</div>
        <div className="text-text-tertiary text-[11px]">{desc}</div>
      </div>
      <div className="relative shrink-0">
        <input type="checkbox" {...register} className="peer sr-only" />
        <div className="bg-border peer-checked:bg-accent h-[22px] w-10 rounded-full transition-colors" />
        <div
          className={`absolute top-[3px] left-[3px] h-4 w-4 rounded-full bg-white transition-transform ${checked ? "translate-x-[18px]" : ""}`}
        />
      </div>
    </label>
  );
}
