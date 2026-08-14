import type { LucideIcon } from "lucide-react";
import { Construction } from "lucide-react";

import { EmptyState } from "@/components/feedback/empty-state";

export function StubPage({ title, icon = Construction }: { title: string; icon?: LucideIcon }) {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="mb-6 font-heading text-h3 font-bold text-text-primary sm:text-h2">{title}</h1>
      <EmptyState
        icon={icon}
        title="This section is being built"
        description="This part of the THRIVE EDU design system is coming soon. Check back shortly."
      />
    </div>
  );
}
