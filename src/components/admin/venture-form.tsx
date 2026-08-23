"use client";

import { useActionState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AdminFormActions, AdminFormCard, AdminFormSection } from "@/components/admin/form-shell";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import { ICON_NAMES } from "@/lib/icon-registry";
import type { VentureActionState } from "@/lib/actions/ventures";
import type { VentureRow } from "@/lib/data/ventures";

const selectClassName =
  "flex h-11 w-full rounded-md border border-border bg-surface px-4 text-body text-text-primary shadow-elevation-1 outline-none transition-colors duration-150 focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25";

const textareaClassName =
  "flex w-full rounded-md border border-border bg-surface px-4 py-3 text-body text-text-primary shadow-elevation-1 outline-none transition-colors duration-150 focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25";

interface VentureFormProps {
  action: (state: VentureActionState, formData: FormData) => Promise<VentureActionState>;
  venture?: VentureRow;
  submitLabel: string;
}

export function VentureForm({ action, venture, submitLabel }: VentureFormProps) {
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction}>
      <AdminFormCard>
        <AdminFormSection title="Details">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue={venture?.name} required />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" name="slug" defaultValue={venture?.slug} placeholder="stem-programme-and-products" required />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              rows={3}
              defaultValue={venture?.description}
              className={textareaClassName}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="href">Link (href)</Label>
              <Input id="href" name="href" defaultValue={venture?.href ?? "/contact"} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="link_label">Link label</Label>
              <Input id="link_label" name="link_label" defaultValue={venture?.link_label ?? "Learn more"} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="highlights">Highlights (comma separated)</Label>
            <Input id="highlights" name="highlights" defaultValue={venture?.highlights?.join(", ") ?? ""} />
          </div>
        </AdminFormSection>

        <AdminFormSection title="Media">
          <ImageUploadField name="image" label="Photo" defaultValue={venture?.image} aspect="video" />
        </AdminFormSection>

        <AdminFormSection title="Display">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="icon">Icon</Label>
              <select id="icon" name="icon" defaultValue={venture?.icon ?? "BookOpen"} className={selectClassName}>
                {ICON_NAMES.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sort_order">Sort order</Label>
              <Input id="sort_order" name="sort_order" type="number" defaultValue={venture?.sort_order ?? 0} />
            </div>
          </div>
        </AdminFormSection>

        <AdminFormSection title="Visibility">
          <label className="flex items-center gap-2 text-small text-text-primary">
            <input type="checkbox" name="published" defaultChecked={venture?.published ?? true} className="size-4" />
            Published (visible on the ecosystem page)
          </label>
        </AdminFormSection>

        <AdminFormActions pending={pending} submitLabel={submitLabel} cancelHref="/admin/ventures" error={state.error} />
      </AdminFormCard>
    </form>
  );
}
