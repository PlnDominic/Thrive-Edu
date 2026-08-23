"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { signIn, type AuthActionState } from "@/lib/actions/auth";

const initialState: AuthActionState = {};

export function AdminLoginForm({ next }: { next: string }) {
  const [state, formAction, pending] = useActionState(signIn, initialState);

  return (
    <form action={formAction} className="mt-8 flex flex-col gap-4">
      <input type="hidden" name="next" value={next} />

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password">Password</Label>
        <PasswordInput id="password" name="password" autoComplete="current-password" required />
      </div>

      {state.error && (
        <p role="alert" className="text-small font-medium text-error">
          {state.error}
        </p>
      )}

      <Button type="submit" className="mt-2 rounded-full" loading={pending} disabled={pending}>
        Sign in
      </Button>
    </form>
  );
}
