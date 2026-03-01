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
      <label className="block text-sm font-medium text-text mb-1.5">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-400 mt-1.5">{error}</p>}
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
          className={`flex flex-col p-3 rounded-xl border cursor-pointer transition-all ${
            value === opt.value
              ? "border-accent/50 bg-accent/10"
              : "border-border bg-surface hover:border-border-hover"
          }`}
        >
          <input type="radio" {...register} value={opt.value} className="sr-only" />
          <span className="text-sm font-medium text-text">{opt.label}</span>
          {opt.desc && <span className="text-[11px] text-text-tertiary mt-0.5">{opt.desc}</span>}
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
    <label className="flex items-center justify-between p-3 rounded-xl border border-border bg-surface cursor-pointer hover:border-border-hover transition-all">
      <div className="min-w-0 pr-3">
        <div className="text-sm font-medium text-text">{label}</div>
        <div className="text-[11px] text-text-tertiary">{desc}</div>
      </div>
      <div className="relative shrink-0">
        <input type="checkbox" {...register} className="sr-only peer" />
        <div className="w-10 h-[22px] rounded-full bg-border peer-checked:bg-accent transition-colors" />
        <div className={`absolute top-[3px] left-[3px] w-4 h-4 rounded-full bg-white transition-transform ${checked ? "translate-x-[18px]" : ""}`} />
      </div>
    </label>
  );
}
