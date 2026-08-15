import type { LucideIcon } from "lucide-react";
import { Construction } from "lucide-react";

import { EmptyState } from "@/components/feedback/empty-state";

export function StubPage({ title, icon = Construction }: { title: string; icon?: LucideIcon }) {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="mb-6 font-heading text-h4 font-bold text-text-primary sm:text-h3">{title}</h1>
      <EmptyState
        icon={icon}
        title="Coming soon"
        description="This section is under construction. Check back shortly."
      />
    </div>
  );
}
