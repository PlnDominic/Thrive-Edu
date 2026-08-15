import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export interface ProgressStep {
  label: string;
  status: "complete" | "current" | "upcoming";
}

export interface ProgressTrackerProps {
  steps: ProgressStep[];
  className?: string;
}

function ProgressTracker({ steps, className }: ProgressTrackerProps) {
  return (
    <ol className={cn("flex w-full items-center", className)}>
      {steps.map((step, i) => (
        <li key={step.label} className="flex flex-1 items-center last:flex-none">
          <div className="flex flex-col items-center gap-2">
            <span
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-full border-2 text-small font-bold transition-colors",
                step.status === "complete" && "border-growth-green bg-growth-green text-white",
                step.status === "current" && "border-growth-green bg-surface text-forest-green-text shadow-elevation-1",
                step.status === "upcoming" && "border-border bg-subtle-surface text-text-secondary"
              )}
            >
              {step.status === "complete" ? <Check className="size-4" /> : i + 1}
            </span>
            <span
              className={cn(
                "max-w-24 text-center text-caption font-medium",
                step.status === "upcoming" ? "text-text-secondary" : "text-text-primary"
              )}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={cn(
                "mx-2 mb-6 h-0.5 flex-1 rounded-full",
                step.status === "complete" ? "bg-growth-green" : "bg-border"
              )}
            />
          )}
        </li>
      ))}
    </ol>
  );
}

export { ProgressTracker };
