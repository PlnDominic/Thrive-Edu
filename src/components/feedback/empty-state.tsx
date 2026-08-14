import type { LucideIcon } from "lucide-react";
import { Inbox } from "lucide-react";

import { Button } from "@/components/ui/button";

export interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

function EmptyState({ icon: Icon = Inbox, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border border-dashed border-border bg-subtle-surface/50 px-8 py-16 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-surface text-forest-green-text shadow-elevation-1">
        <Icon className="size-6" />
      </span>
      <div>
        <p className="font-heading text-h5 font-semibold text-text-primary">{title}</p>
        {description && <p className="mt-1.5 max-w-sm text-small text-text-secondary">{description}</p>}
      </div>
      {actionLabel && (
        <Button variant="secondary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export { EmptyState };
