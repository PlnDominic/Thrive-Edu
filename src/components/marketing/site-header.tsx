"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const whatWeDoLinks = [
  { label: "For Schools and Organisations", href: "/schools" },
  { label: "Books and Curricula", href: "/books" },
  { label: "For Families and Readers", href: "/families" },
  { label: "For Young Adults", href: "/young-adults" },
];

const whatWeDoHrefs = whatWeDoLinks.map((l) => l.href);

function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = React.useState(false);

  const whatWeDoActive = whatWeDoHrefs.some((href) => pathname === href);

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
            <NavItem href="/about" label="About" active={pathname === "/about"} />

            <NavigationMenuPrimitive.Item>
              <NavigationMenuPrimitive.Trigger
                className={cn(
                  "group flex items-center gap-1.5 text-small font-medium text-text-secondary outline-none transition-colors hover:text-text-primary",
                  whatWeDoActive && "font-semibold text-forest-green"
                )}
              >
                {whatWeDoActive && <span className="size-1.5 rounded-full bg-forest-green" aria-hidden />}
                What We Do
                <ChevronDown className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden />
              </NavigationMenuPrimitive.Trigger>
              <NavigationMenuPrimitive.Content className="absolute left-0 top-full pt-3 data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in-0 data-[motion=from-start]:slide-in-from-top-1">
                <div className="w-64 rounded-2xl border border-border bg-surface p-3 shadow-elevation-3">
                  <ul className="space-y-1">
                    {whatWeDoLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuPrimitive.Link asChild>
                          <Link
                            href={link.href}
                            className="block rounded-lg px-3 py-2.5 text-small font-medium text-text-primary transition-colors hover:bg-subtle-surface hover:text-forest-green"
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuPrimitive.Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuPrimitive.Content>
            </NavigationMenuPrimitive.Item>

            <NavItem href="/impact" label="Our Impact" active={pathname === "/impact"} />
            <NavItem href="/support-our-work" label="Get Involved" active={pathname === "/support-our-work"} />
            <NavItem href="/contact" label="Contact" active={pathname === "/contact"} />
          </NavigationMenuPrimitive.List>
        </NavigationMenuPrimitive.Root>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/support-our-work">Donate</Link>
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
            <MobileLink href="/about" label="About" active={pathname === "/about"} onClick={() => setOpen(false)} />

            <div className="border-t border-border pt-1">
              <button
                type="button"
                onClick={() => setWhatWeDoOpen((o) => !o)}
                aria-expanded={whatWeDoOpen}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-3 py-3 text-body font-medium text-text-secondary transition-colors hover:bg-subtle-surface hover:text-text-primary",
                  whatWeDoActive && "font-semibold text-forest-green"
                )}
              >
                <span className="flex items-center gap-2">
                  {whatWeDoActive && <span className="size-1.5 rounded-full bg-forest-green" aria-hidden />}
                  What We Do
                </span>
                <ChevronDown
                  className={cn("size-4 transition-transform duration-200", whatWeDoOpen && "rotate-180")}
                  aria-hidden
                />
              </button>
              {whatWeDoOpen && (
                <div className="flex flex-col gap-1 pb-1 pl-3">
                  {whatWeDoLinks.map((link) => (
                    <MobileLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      active={pathname === link.href}
                      onClick={() => setOpen(false)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1 border-t border-border pt-1">
              <MobileLink href="/impact" label="Our Impact" active={pathname === "/impact"} onClick={() => setOpen(false)} />
              <MobileLink
                href="/support-our-work"
                label="Get Involved"
                active={pathname === "/support-our-work"}
                onClick={() => setOpen(false)}
              />
              <MobileLink href="/contact" label="Contact" active={pathname === "/contact"} onClick={() => setOpen(false)} />
            </div>
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
            <Button variant="secondary" className="rounded-full" onClick={() => setOpen(false)} asChild>
              <Link href="/support-our-work">Donate</Link>
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
