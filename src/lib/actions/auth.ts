"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export interface AuthActionState {
  error?: string;
  message?: string;
}

export async function signIn(_prevState: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");

  if (!email || !password) {
    return { error: "Enter your email and password." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { error: "Supabase is not configured yet. Set the NEXT_PUBLIC_SUPABASE_* env vars." };
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return { error: error.message };
  }

  redirect(next.startsWith("/admin") ? next : "/admin");
}

export async function signUp(_prevState: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");
  const inviteCode = String(formData.get("inviteCode") ?? "").trim();

  if (!email || !password) {
    return { error: "Enter your email and password." };
  }
  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }
  if (password !== confirmPassword) {
    return { error: "Passwords don't match." };
  }

  // Anyone who could sign up gets a working /admin login, and RLS grants
  // every signed-in user full read/write on all CMS content - so signup
  // must not be open to the public. Gate it behind a shared invite code
  // only Thrive EDU staff have (set as ADMIN_INVITE_CODE).
  const requiredCode = process.env.ADMIN_INVITE_CODE;
  if (!requiredCode) {
    return { error: "Admin signup isn't configured yet. Set ADMIN_INVITE_CODE to enable it." };
  }
  if (inviteCode !== requiredCode) {
    return { error: "That invite code isn't valid." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { error: "Supabase is not configured yet. Set the NEXT_PUBLIC_SUPABASE_* env vars." };
  }

  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    return { error: error.message };
  }

  // With email confirmation enabled (Supabase's default), signUp succeeds
  // but returns no session until the user clicks the confirmation link.
  if (!data.session) {
    return { message: "Account created. Check your email to confirm it, then sign in." };
  }

  redirect("/admin");
}

export async function signOut() {
  const supabase = await createClient();
  if (supabase) {
    await supabase.auth.signOut();
  }
  redirect("/admin/login");
}
