import type { LucideIcon } from "lucide-react";
import { Bell } from "lucide-react";

import { cn } from "@/lib/utils";

export interface NotificationItem {
  id: string;
  icon?: LucideIcon;
  title: string;
  timestamp: string;
  read?: boolean;
}

export interface NotificationListProps {
  items: NotificationItem[];
}

function NotificationList({ items }: NotificationListProps) {
  return (
    <ul className="divide-y divide-border rounded-lg border border-border bg-surface">
      {items.map((n) => {
        const Icon = n.icon ?? Bell;
        return (
          <li
            key={n.id}
            className={cn(
              "flex items-start gap-3 px-4 py-3.5 transition-colors hover:bg-subtle-surface/60",
              !n.read && "bg-primary/5"
            )}
          >
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-subtle-surface text-forest-green-text">
              <Icon className="size-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className={cn("text-small", n.read ? "text-text-primary" : "font-semibold text-text-primary")}>
                {n.title}
              </p>
              <p className="text-caption text-text-secondary">{n.timestamp}</p>
            </div>
            {!n.read && <span className="mt-1.5 size-2 shrink-0 rounded-full bg-info" aria-label="Unread" />}
          </li>
        );
      })}
    </ul>
  );
}

export { NotificationList };
