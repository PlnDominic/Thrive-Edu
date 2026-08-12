import type { LucideIcon } from "lucide-react";
import { Activity } from "lucide-react";

export interface ActivityItem {
  id: string;
  icon?: LucideIcon;
  description: string;
  timestamp: string;
}

export interface ActivityFeedProps {
  items: ActivityItem[];
}

function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => {
        const Icon = item.icon ?? Activity;
        return (
          <li key={item.id} className="flex items-start gap-3">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-subtle-surface text-forest-green-text">
              <Icon className="size-4" />
            </span>
            <div>
              <p className="text-small text-text-primary">{item.description}</p>
              <p className="text-caption text-text-secondary">{item.timestamp}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export { ActivityFeed };
