"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { label: "About", href: "/about" },
  { label: "The Ecosystem", href: "/ecosystem" },
];

const serveGroups = [
  {
    heading: "Institutions",
    links: [
      { label: "For Schools and Organisations", href: "/schools" },
      { label: "Books and Curricula", href: "/books" },
    ],
  },
  {
    heading: "Individuals",
    links: [
      { label: "For Families and Readers", href: "/families" },
      { label: "For Young Adults", href: "/young-adults" },
      { label: "Courses", href: "/courses" },
      { label: "Student portal", href: "/dashboard/student" },
    ],
  },
];

const trailingLinks = [
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
];

const serveHrefs = serveGroups.flatMap((g) => g.links.map((l) => l.href));

function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const serveActive = serveHrefs.some((href) => pathname === href || pathname.startsWith("/dashboard"));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/thrive-edu-logo.png" alt="THRIVE EDU" width={32} height={32} />
          <span className="font-heading text-h5 font-bold tracking-tight text-forest-green">
            THRIVE EDU<span className="text-leaf-gold">.</span>
          </span>
        </Link>

        <NavigationMenuPrimitive.Root
          aria-label="Primary"
          delayDuration={100}
          className="relative hidden lg:block"
        >
          <NavigationMenuPrimitive.List className="flex items-center gap-7">
            <NavItem href="/" label="Home" active={pathname === "/"} />
            {primaryLinks.map((link) => (
              <NavItem key={link.href} href={link.href} label={link.label} active={pathname === link.href} />
            ))}

            <NavigationMenuPrimitive.Item>
              <NavigationMenuPrimitive.Trigger
                className={cn(
                  "group flex items-center gap-1.5 text-small font-medium text-text-secondary outline-none transition-colors hover:text-text-primary",
                  serveActive && "font-semibold text-forest-green"
                )}
              >
                {serveActive && <span className="size-1.5 rounded-full bg-forest-green" aria-hidden />}
                Who We Serve
                <ChevronDown className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden />
              </NavigationMenuPrimitive.Trigger>
              <NavigationMenuPrimitive.Content className="absolute left-0 top-full pt-3 data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in-0 data-[motion=from-start]:slide-in-from-top-1">
                <div className="grid w-[30rem] grid-cols-2 gap-6 rounded-2xl border border-border bg-surface p-6 shadow-elevation-3">
                  {serveGroups.map((group) => (
                    <div key={group.heading}>
                      <p className="text-caption font-semibold uppercase tracking-wide text-text-secondary">
                        {group.heading}
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href={link.href}
                                className="text-small font-medium text-text-primary transition-colors hover:text-forest-green"
                              >
                                {link.label}
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuPrimitive.Content>
            </NavigationMenuPrimitive.Item>

            {trailingLinks.map((link) => (
              <NavItem key={link.href} href={link.href} label={link.label} active={pathname === link.href} />
            ))}
          </NavigationMenuPrimitive.List>
        </NavigationMenuPrimitive.Root>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/support-our-work">Support our work</Link>
          </Button>
          <Button size="sm" className="rounded-full text-white" asChild>
            <Link href="/contact">Submit an enquiry</Link>
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
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-surface px-6 py-4 lg:hidden">
          <nav aria-label="Primary" className="flex flex-col gap-1">
            <MobileLink href="/" label="Home" active={pathname === "/"} onClick={() => setOpen(false)} />
            {primaryLinks.map((link) => (
              <MobileLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={pathname === link.href}
                onClick={() => setOpen(false)}
              />
            ))}

            <div className="mt-2 border-t border-border pt-2">
              {serveGroups.map((group) => (
                <div key={group.heading} className="mb-3 flex flex-col gap-1">
                  <p className="px-3 pb-1 text-caption font-semibold uppercase tracking-wide text-text-secondary">
                    {group.heading}
                  </p>
                  {group.links.map((link) => (
                    <MobileLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      active={pathname === link.href}
                      onClick={() => setOpen(false)}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1 border-t border-border pt-2">
              {trailingLinks.map((link) => (
                <MobileLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={pathname === link.href}
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
            <Button variant="secondary" className="rounded-full" onClick={() => setOpen(false)} asChild>
              <Link href="/support-our-work">Support our work</Link>
            </Button>
            <Button className="rounded-full text-white" onClick={() => setOpen(false)} asChild>
              <Link href="/contact">Submit an enquiry</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <NavigationMenuPrimitive.Item>
      <NavigationMenuPrimitive.Link asChild active={active}>
        <Link
          href={href}
          aria-current={active ? "page" : undefined}
          className={cn(
            "flex items-center gap-1.5 text-small font-medium text-text-secondary transition-colors hover:text-text-primary",
            active && "font-semibold text-forest-green"
          )}
        >
          {active && <span className="size-1.5 rounded-full bg-forest-green" aria-hidden />}
          {label}
        </Link>
      </NavigationMenuPrimitive.Link>
    </NavigationMenuPrimitive.Item>
  );
}

function MobileLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "block rounded-md px-3 py-3 text-body font-medium text-text-secondary transition-colors hover:bg-subtle-surface hover:text-text-primary",
        active && "bg-primary/10 font-semibold text-forest-green"
      )}
    >
      {label}
    </Link>
  );
}

export { SiteHeader };
