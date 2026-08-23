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
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <h1 className="font-heading text-h4 font-bold text-text-primary">Thrive EDU admin</h1>
      <p className="mt-2 text-body text-text-secondary">Sign in to manage courses, ventures, gallery and team.</p>
      <AdminLoginForm next={next ?? "/admin"} />
    </div>
  );
}
