"use client";

import { useActionState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AdminFormActions, AdminFormCard, AdminFormSection } from "@/components/admin/form-shell";
import { ImageUploadField } from "@/components/admin/image-upload-field";
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
    <form action={formAction}>
      <AdminFormCard>
        <AdminFormSection title="Details">
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
            <Label htmlFor="bio">Bio</Label>
            <textarea id="bio" name="bio" rows={3} defaultValue={member?.bio ?? ""} className={textareaClassName} />
          </div>
        </AdminFormSection>

        <AdminFormSection title="Media">
          <ImageUploadField
            name="image"
            label="Photo"
            defaultValue={member?.image}
            helpText="Leave blank to show initials instead."
          />
        </AdminFormSection>

        <AdminFormSection title="Display">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="sort_order">Sort order</Label>
            <Input id="sort_order" name="sort_order" type="number" defaultValue={member?.sort_order ?? 0} className="max-w-xs" />
          </div>
        </AdminFormSection>

        <AdminFormSection title="Visibility">
          <label className="flex items-center gap-2 text-small text-text-primary">
            <input type="checkbox" name="published" defaultChecked={member?.published ?? true} className="size-4" />
            Published (visible on the about page)
          </label>
        </AdminFormSection>

        <AdminFormActions pending={pending} submitLabel={submitLabel} cancelHref="/admin/team" error={state.error} />
      </AdminFormCard>
    </form>
  );
}
