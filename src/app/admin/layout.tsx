import Link from "next/link";
import { ExternalLink, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SidebarNav } from "@/components/admin/sidebar-nav";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/lib/actions/auth";

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

  // No session: this must be /admin/login or /admin/signup (proxy.ts
  // already redirects every other /admin/* route to login when
  // unauthenticated) - render it plain, without the signed-in chrome below.
  if (!user) {
    return children;
  }

  const initials = (user.email ?? "?")
    .split("@")[0]
    .split(/[._-]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");

  return (
    <div className="min-h-screen bg-subtle-surface lg:flex">
      {/* Sidebar (desktop) */}
      <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col lg:bg-ink">
        <div className="flex h-20 items-center px-6">
          <Link href="/" className="font-heading text-body-lg font-bold tracking-tight text-white">
            THRIVE EDU<span className="text-leaf-gold">.</span>
          </Link>
        </div>
        <p className="px-6 pb-5 text-caption font-semibold uppercase tracking-wide text-white/40">Admin</p>

        <SidebarNav variant="sidebar" />

        <div className="mt-auto flex flex-col gap-3 border-t border-white/10 p-4">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 rounded-xl px-3.5 py-2 text-small font-medium text-white/55 transition-colors hover:bg-white/5 hover:text-white"
          >
            <ExternalLink className="size-4" />
            View site
          </Link>

          <div className="flex items-center gap-3 rounded-xl bg-white/5 px-3.5 py-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-leaf-gold text-caption font-bold text-ink">
              {initials || "A"}
            </span>
            <span className="min-w-0 flex-1 truncate text-caption text-white/70">{user.email}</span>
            <form action={signOut}>
              <button
                type="submit"
                aria-label="Sign out"
                className="flex size-7 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              >
                <LogOut className="size-3.5" />
              </button>
            </form>
          </div>
        </div>
      </aside>

      {/* Top bar (mobile) */}
      <header className="border-b border-ink-border bg-ink lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/admin" className="font-heading text-body-lg font-bold tracking-tight text-white">
            THRIVE EDU<span className="text-leaf-gold">.</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-leaf-gold text-caption font-bold text-ink">
              {initials || "A"}
            </span>
            <form action={signOut}>
              <Button type="submit" variant="secondary" size="sm" className="rounded-full">
                <LogOut className="size-3.5" />
              </Button>
            </form>
          </div>
        </div>
        <SidebarNav variant="mobile" />
      </header>

      <main className="min-w-0 flex-1">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10">{children}</div>
      </main>
    </div>
  );
}
