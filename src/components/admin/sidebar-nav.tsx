"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Building2, Image as ImageIcon, Users, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const navItems: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/admin/courses", label: "Courses", icon: BookOpen },
  { href: "/admin/ventures", label: "Ventures", icon: Building2 },
  { href: "/admin/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/admin/team", label: "Team", icon: Users },
];

interface SidebarNavProps {
  variant: "sidebar" | "mobile";
}

export function SidebarNav({ variant }: SidebarNavProps) {
  const pathname = usePathname();

  if (variant === "mobile") {
    return (
      <nav className="flex gap-1 overflow-x-auto px-4 pb-3">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-small font-medium transition-colors",
                active
                  ? "bg-forest-green-text/10 text-forest-green-text"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="flex flex-1 flex-col gap-1 px-4">
      {navItems.map((item) => {
        const active = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group relative flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-small font-medium transition-colors",
              active ? "bg-white/10 text-white" : "text-white/55 hover:bg-white/5 hover:text-white"
            )}
          >
            {active && (
              <span className="absolute inset-y-1.5 left-0 w-[3px] rounded-full bg-leaf-gold" aria-hidden />
            )}
            <item.icon className={cn("size-4 shrink-0", active && "text-leaf-gold")} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
