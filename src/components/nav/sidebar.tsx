"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { cn } from "@/lib/utils";
import { navItemsByRole, type Role } from "./nav-items";

export interface SidebarProps {
  role: Role;
  userName?: string;
  userRole?: string;
  className?: string;
}

function Sidebar({ role, userName = "Amara Boateng", userRole = "Student", className }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);
  const items = navItemsByRole[role];

  return (
    <aside
      className={cn(
        "sticky top-0 hidden h-screen shrink-0 flex-col border-r border-border bg-surface transition-[width] duration-200 ease-out md:flex",
        collapsed ? "w-20" : "w-72",
        className
      )}
    >
      <div className="flex h-20 items-center gap-3 border-b border-border px-6">
        <Image src="/thrive-edu-logo.png" alt="THRIVE EDU" width={32} height={32} className="shrink-0" />
        {!collapsed && (
          <span className="font-heading text-h5 font-bold tracking-tight text-forest-green-text">
            THRIVE EDU
          </span>
        )}
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4" aria-label="Primary">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              title={collapsed ? item.label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-md px-3.5 py-2.5 text-small font-medium text-text-secondary transition-colors duration-150",
                "hover:bg-subtle-surface hover:text-text-primary",
                active && "bg-growth-green/10 text-forest-green-text"
              )}
            >
              <Icon className="size-[18px] shrink-0" aria-hidden />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-4">
        <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-growth-green text-caption font-bold text-white"
            aria-hidden
          >
            {userName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-small font-semibold text-text-primary">{userName}</p>
              <p className="truncate text-caption text-text-secondary">{userRole}</p>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-md py-2 text-caption text-text-secondary transition-colors hover:bg-subtle-surface hover:text-text-primary"
        >
          {collapsed ? <PanelLeftOpen className="size-4" /> : <PanelLeftClose className="size-4" />}
          {!collapsed && "Collapse"}
        </button>
      </div>
    </aside>
  );
}

export { Sidebar };
