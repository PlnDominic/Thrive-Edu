"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { navItemsByRole, type Role } from "./nav-items";

export interface MobileNavProps {
  role: Role;
}

function MobileNav({ role }: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const items = navItemsByRole[role];

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="flex size-11 items-center justify-center rounded-md text-text-primary transition-colors hover:bg-subtle-surface md:hidden"
        >
          <Menu className="size-5" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-text-primary/30 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-50 flex h-full w-72 flex-col bg-surface shadow-elevation-3 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left">
          <div className="flex h-20 items-center justify-between border-b border-border px-6">
            <div className="flex items-center gap-3">
              <Image src="/thrive-edu-logo.png" alt="THRIVE EDU" width={28} height={28} />
              <Dialog.Title className="font-heading text-h5 font-bold text-forest-green-text">
                THRIVE EDU
              </Dialog.Title>
            </div>
            <Dialog.Close asChild>
              <button
                aria-label="Close navigation menu"
                className="flex size-9 items-center justify-center rounded-md text-text-secondary hover:bg-subtle-surface"
              >
                <X className="size-4" />
              </button>
            </Dialog.Close>
          </div>
          <nav className="flex-1 space-y-1 overflow-y-auto p-4" aria-label="Primary">
            {items.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3.5 py-3 text-body font-medium text-text-secondary transition-colors",
                    "hover:bg-subtle-surface hover:text-text-primary",
                    active && "bg-primary/10 text-forest-green-text"
                  )}
                >
                  <Icon className="size-5" aria-hidden />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export interface MobileTabBarProps {
  role: Role;
}

function MobileTabBar({ role }: MobileTabBarProps) {
  const pathname = usePathname();
  const items = navItemsByRole[role].slice(0, 4);

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-30 flex border-t border-border bg-surface/95 backdrop-blur md:hidden"
    >
      {items.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 py-2.5 text-caption font-medium text-text-secondary transition-colors",
              active && "text-forest-green-text"
            )}
          >
            <Icon className="size-5" aria-hidden />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export { MobileNav, MobileTabBar };
