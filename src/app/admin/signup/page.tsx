import Link from "next/link";

import { AdminSignupForm } from "@/components/admin/signup-form";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export default function AdminSignupPage() {
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
      <h1 className="font-heading text-h4 font-bold text-text-primary">Create an admin account</h1>
      <p className="mt-2 text-body text-text-secondary">
        You&apos;ll need the invite code shared by a Thrive EDU admin to sign up.
      </p>
      <AdminSignupForm />
      <p className="mt-6 text-small text-text-secondary">
        Already have an account?{" "}
        <Link href="/admin/login" className="font-semibold text-forest-green-text hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
