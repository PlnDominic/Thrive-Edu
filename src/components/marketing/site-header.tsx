"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/thrive-edu-logo.png" alt="THRIVE EDU" width={32} height={32} />
          <span className="font-heading text-h5 font-bold tracking-tight text-forest-green">
            THRIVE EDU<span className="text-leaf-gold">.</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-1.5 text-small font-medium text-text-secondary transition-colors hover:text-text-primary",
                  active && "font-semibold text-forest-green"
                )}
              >
                {active && <span className="size-1.5 rounded-full bg-forest-green" aria-hidden />}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/student">Student portal</Link>
          </Button>
          <Button size="sm" className="rounded-full text-white" asChild>
            <Link href="/courses">Enroll now</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex size-11 items-center justify-center rounded-md text-text-primary transition-colors hover:bg-subtle-surface lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface px-6 py-4 lg:hidden">
          <nav aria-label="Primary" className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-3 text-body font-medium text-text-secondary transition-colors hover:bg-subtle-surface hover:text-text-primary",
                    active && "bg-primary/10 font-semibold text-forest-green"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
            <Button variant="secondary" className="rounded-full" onClick={() => setOpen(false)} asChild>
              <Link href="/dashboard/student">Student portal</Link>
            </Button>
            <Button className="rounded-full text-white" onClick={() => setOpen(false)} asChild>
              <Link href="/courses">Enroll now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export { SiteHeader };
