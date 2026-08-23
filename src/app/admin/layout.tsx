import Link from "next/link";
import { BookOpen, Building2, Image as ImageIcon, LogOut, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/lib/actions/auth";

const navItems = [
  { href: "/admin/courses", label: "Courses", icon: BookOpen },
  { href: "/admin/ventures", label: "Ventures", icon: Building2 },
  { href: "/admin/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/admin/team", label: "Team", icon: Users },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();

  // The login page has no session yet, and renders its own "not configured"
  // notice when Supabase isn't set up - don't wrap it in the admin chrome.
  if (!supabase) {
    return children;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // No session: this must be /admin/login (proxy.ts already redirects every
  // other /admin/* route to it when unauthenticated) - render it plain,
  // without the signed-in chrome below.
  if (!user) {
    return children;
  }

  return (
    <div className="min-h-screen bg-subtle-surface">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/admin" className="font-heading text-body-lg font-bold text-text-primary">
            Thrive EDU admin
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden text-small text-text-secondary sm:inline">{user.email}</span>
            <form action={signOut}>
              <Button type="submit" variant="secondary" size="sm" className="rounded-full">
                <LogOut className="size-3.5" />
                Sign out
              </Button>
            </form>
          </div>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 pb-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-small font-medium text-text-secondary transition-colors hover:bg-subtle-surface hover:text-text-primary"
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
