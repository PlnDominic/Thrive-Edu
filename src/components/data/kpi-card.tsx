import type { LucideIcon } from "lucide-react";
import { TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

export interface KPICardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  changePercent?: number;
  className?: string;
}

function KPICard({ label, value, icon: Icon, changePercent, className }: KPICardProps) {
  const positive = (changePercent ?? 0) >= 0;

  return (
    <div className={cn("rounded-lg border border-border bg-surface p-6 shadow-elevation-1", className)}>
      <div className="mb-4 flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-forest-green">
          <Icon className="size-5" />
        </span>
        {changePercent !== undefined && (
          <span
            className={cn(
              "flex items-center gap-1 text-caption font-semibold",
              positive ? "text-success" : "text-error"
            )}
          >
            {positive ? <TrendingUp className="size-3.5" /> : <TrendingDown className="size-3.5" />}
            {Math.abs(changePercent)}%
          </span>
        )}
      </div>
      <p className="font-heading text-h4 font-bold text-text-primary sm:text-h3">{value}</p>
      <p className="mt-1 text-small text-text-secondary">{label}</p>
    </div>
  );
}

export { KPICard };
