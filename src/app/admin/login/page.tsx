import Link from "next/link";

import { AdminAuthShell } from "@/components/admin/auth-shell";
import { AdminLoginForm } from "@/components/admin/login-form";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  if (!isSupabaseConfigured()) {
    return (
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
        <h1 className="font-heading text-h4 font-bold text-text-primary">Admin CMS not configured</h1>
        <p className="mt-3 text-body text-text-secondary">
          Set <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> (see{" "}
          <code>.env.example</code>) and run the migration in <code>supabase/migrations</code>, then reload
          this page.
        </p>
      </div>
    );
  }

  return (
    <AdminAuthShell
      image="/images/hero-painting-group.jpg"
      imageAlt="Thrive EDU students at an outdoor painting workshop"
      eyebrow="Admin"
      tagline="Everything you publish here shows up across the site in seconds."
      title="Welcome back"
      description="Sign in to manage courses, ventures, gallery and team."
      footer={
        <>
          Need an account?{" "}
          <Link href="/admin/signup" className="font-semibold text-forest-green-text hover:underline">
            Create one
          </Link>
        </>
      }
    >
      <AdminLoginForm next={next ?? "/admin"} />
    </AdminAuthShell>
  );
}
