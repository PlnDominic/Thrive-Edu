"use client";

import { useActionState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AdminFormActions, AdminFormCard, AdminFormSection } from "@/components/admin/form-shell";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import { ICON_NAMES } from "@/lib/icon-registry";
import type { GalleryActionState } from "@/lib/actions/gallery";
import type { GalleryItemRow } from "@/lib/data/gallery";

const COLORS = [
  "bg-forest-green",
  "bg-growth-green",
  "bg-deep-green",
  "bg-leaf-gold",
  "bg-leaf-green",
  "bg-warm-amber",
];
const HEIGHTS = ["h-64", "h-72", "h-80"];

const selectClassName =
  "flex h-11 w-full rounded-md border border-border bg-surface px-4 text-body text-text-primary shadow-elevation-1 outline-none transition-colors duration-150 focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25";

interface GalleryFormProps {
  action: (state: GalleryActionState, formData: FormData) => Promise<GalleryActionState>;
  item?: GalleryItemRow;
  submitLabel: string;
}

export function GalleryForm({ action, item, submitLabel }: GalleryFormProps) {
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction}>
      <AdminFormCard>
        <AdminFormSection title="Details">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" defaultValue={item?.title} required />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="category">Category</Label>
              <Input id="category" name="category" defaultValue={item?.category} placeholder="STEM" />
            </div>
          </div>
        </AdminFormSection>

        <AdminFormSection title="Media">
          <ImageUploadField
            name="photo"
            label="Photo"
            defaultValue={item?.photo}
            helpText="Leave blank to show a colored tile with an icon instead."
          />

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="icon">Icon (used when no photo)</Label>
              <select id="icon" name="icon" defaultValue={item?.icon ?? "Users"} className={selectClassName}>
                {ICON_NAMES.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="color">Tile color</Label>
              <select id="color" name="color" defaultValue={item?.color ?? COLORS[0]} className={selectClassName}>
                {COLORS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="height">Tile height</Label>
              <select id="height" name="height" defaultValue={item?.height ?? HEIGHTS[0]} className={selectClassName}>
                {HEIGHTS.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </AdminFormSection>

        <AdminFormSection title="Display">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="sort_order">Sort order</Label>
            <Input id="sort_order" name="sort_order" type="number" defaultValue={item?.sort_order ?? 0} className="max-w-xs" />
          </div>
        </AdminFormSection>

        <AdminFormSection title="Visibility">
          <label className="flex items-center gap-2 text-small text-text-primary">
            <input type="checkbox" name="published" defaultChecked={item?.published ?? true} className="size-4" />
            Published (visible on the gallery page)
          </label>
        </AdminFormSection>

        <AdminFormActions pending={pending} submitLabel={submitLabel} cancelHref="/admin/gallery" error={state.error} />
      </AdminFormCard>
    </form>
  );
}
