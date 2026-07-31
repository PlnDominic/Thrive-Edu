import type { LucideIcon } from "lucide-react";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  description?: string;
  timestamp: string;
  icon?: LucideIcon;
  status?: "complete" | "current" | "upcoming";
}

export interface TimelineProps {
  entries: TimelineEntry[];
  className?: string;
}

function Timeline({ entries, className }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-8 border-l border-border pl-6", className)}>
      {entries.map((entry) => {
        const Icon = entry.icon ?? Circle;
        const status = entry.status ?? "complete";
        return (
          <li key={entry.title} className="relative">
            <span
              className={cn(
                "absolute -left-[31px] flex size-6 items-center justify-center rounded-full ring-4 ring-background",
                status === "complete" && "bg-growth-green text-white",
                status === "current" && "bg-leaf-gold text-white",
                status === "upcoming" && "border border-border bg-subtle-surface text-text-secondary"
              )}
            >
              <Icon className="size-3.5" />
            </span>
            <p className="text-caption font-medium uppercase tracking-wide text-text-secondary">{entry.timestamp}</p>
            <p className="font-heading text-body-lg font-semibold text-text-primary">{entry.title}</p>
            {entry.description && <p className="mt-0.5 text-small text-text-secondary">{entry.description}</p>}
          </li>
        );
      })}
    </ol>
  );
}

export { Timeline };
