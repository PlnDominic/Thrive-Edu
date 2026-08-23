"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { TeamActionState } from "@/lib/actions/team";
import type { TeamMemberRow } from "@/lib/data/team";

const textareaClassName =
  "flex w-full rounded-md border border-border bg-surface px-4 py-3 text-body text-text-primary shadow-elevation-1 outline-none transition-colors duration-150 focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25";

interface TeamFormProps {
  action: (state: TeamActionState, formData: FormData) => Promise<TeamActionState>;
  member?: TeamMemberRow;
  submitLabel: string;
}

export function TeamForm({ action, member, submitLabel }: TeamFormProps) {
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="mt-8 flex max-w-2xl flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" defaultValue={member?.name} required />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="role">Role</Label>
          <Input id="role" name="role" defaultValue={member?.role} required />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="image">Photo path</Label>
        <Input id="image" name="image" defaultValue={member?.image ?? ""} placeholder="/images/team-...jpg" />
        <p className="text-caption text-text-secondary">Leave blank to show initials instead.</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="bio">Bio</Label>
        <textarea id="bio" name="bio" rows={3} defaultValue={member?.bio ?? ""} className={textareaClassName} />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="sort_order">Sort order</Label>
        <Input id="sort_order" name="sort_order" type="number" defaultValue={member?.sort_order ?? 0} className="max-w-xs" />
      </div>

      <label className="flex items-center gap-2 text-small text-text-primary">
        <input type="checkbox" name="published" defaultChecked={member?.published ?? true} className="size-4" />
        Published (visible on the about page)
      </label>

      {state.error && (
        <p role="alert" className="text-small font-medium text-error">
          {state.error}
        </p>
      )}

      <Button type="submit" className="w-fit rounded-full" loading={pending} disabled={pending}>
        {submitLabel}
      </Button>
    </form>
  );
}
