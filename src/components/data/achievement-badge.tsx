import type { LucideIcon } from "lucide-react";
import { Award } from "lucide-react";

import { cn } from "@/lib/utils";

export interface AchievementBadgeProps {
  label: string;
  icon?: LucideIcon;
  earned?: boolean;
  className?: string;
}

function AchievementBadge({ label, icon: Icon = Award, earned = true, className }: AchievementBadgeProps) {
  return (
    <div className={cn("flex w-24 flex-col items-center gap-2 text-center", className)}>
      <div
        className={cn(
          "flex size-16 items-center justify-center rounded-full transition-transform duration-200",
          earned
            ? "bg-gradient-brand text-white shadow-elevation-2 hover:scale-105"
            : "border border-dashed border-border bg-subtle-surface text-text-secondary/50"
        )}
      >
        <Icon className="size-7" />
      </div>
      <span className={cn("text-caption font-medium leading-tight", earned ? "text-text-primary" : "text-text-secondary/60")}>
        {label}
      </span>
    </div>
  );
}

export { AchievementBadge };
