import { Bell } from "lucide-react";

import { SearchInput } from "@/components/ui/search-input";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/breadcrumbs";
import type { Role } from "./nav-items";
import { MobileNav } from "./mobile-nav";

export interface TopbarProps {
  breadcrumbs: BreadcrumbItem[];
  role: Role;
  notificationCount?: number;
}

function Topbar({ breadcrumbs, role, notificationCount = 0 }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center gap-4 border-b border-border bg-background/90 px-4 backdrop-blur md:px-8">
      <MobileNav role={role} />
      <Breadcrumbs items={breadcrumbs} className="hidden sm:flex" />
      <div className="ml-auto flex items-center gap-3">
        <SearchInput className="hidden w-64 lg:flex" />
        <button
          type="button"
          aria-label={`Notifications${notificationCount ? `, ${notificationCount} unread` : ""}`}
          className="relative flex size-11 shrink-0 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-subtle-surface"
        >
          <Bell className="size-5" />
          {notificationCount > 0 && (
            <span className="absolute right-2 top-2 flex size-2 rounded-full bg-error" />
          )}
        </button>
      </div>
    </header>
  );
}

export { Topbar };
