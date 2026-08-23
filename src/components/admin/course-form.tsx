"use client";

import { useActionState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AdminFormActions, AdminFormCard, AdminFormSection } from "@/components/admin/form-shell";
import { ICON_NAMES } from "@/lib/icon-registry";
import type { CourseActionState } from "@/lib/actions/courses";
import type { CourseRow } from "@/lib/data/courses";

const SUBJECTS = ["Mathematics", "Science", "Language Arts", "Arts & Music", "Test Prep", "Life Skills"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const FORMATS = ["Live cohort", "Self-paced"];

const selectClassName =
  "flex h-11 w-full rounded-md border border-border bg-surface px-4 text-body text-text-primary shadow-elevation-1 outline-none transition-colors duration-150 focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25";

const textareaClassName =
  "flex w-full rounded-md border border-border bg-surface px-4 py-3 text-body text-text-primary shadow-elevation-1 outline-none transition-colors duration-150 focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25";

interface CourseFormProps {
  action: (state: CourseActionState, formData: FormData) => Promise<CourseActionState>;
  course?: CourseRow;
  submitLabel: string;
}

export function CourseForm({ action, course, submitLabel }: CourseFormProps) {
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction}>
      <AdminFormCard>
        <AdminFormSection title="Details">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" defaultValue={course?.title} required />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              rows={3}
              defaultValue={course?.description}
              className={textareaClassName}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <select id="subject" name="subject" defaultValue={course?.subject ?? SUBJECTS[0]} className={selectClassName}>
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="level">Level</Label>
              <select id="level" name="level" defaultValue={course?.level ?? LEVELS[0]} className={selectClassName}>
                {LEVELS.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="format">Format</Label>
              <select id="format" name="format" defaultValue={course?.format ?? FORMATS[1]} className={selectClassName}>
                {FORMATS.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </AdminFormSection>

        <AdminFormSection title="Pricing & display">
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="price">Price (₵)</Label>
              <Input id="price" name="price" type="number" step="0.01" min="0" defaultValue={course?.price ?? 0} required />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="compare_at_price">Compare-at price (₵)</Label>
              <Input
                id="compare_at_price"
                name="compare_at_price"
                type="number"
                step="0.01"
                min="0"
                defaultValue={course?.compare_at_price ?? ""}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="icon">Icon</Label>
              <select id="icon" name="icon" defaultValue={course?.icon ?? "BookOpen"} className={selectClassName}>
                {ICON_NAMES.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="rating">Rating (0-5)</Label>
              <Input id="rating" name="rating" type="number" step="0.1" min="0" max="5" defaultValue={course?.rating ?? 5} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="students_enrolled">Students enrolled</Label>
              <Input
                id="students_enrolled"
                name="students_enrolled"
                type="number"
                min="0"
                defaultValue={course?.students_enrolled ?? 0}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sort_order">Sort order</Label>
              <Input id="sort_order" name="sort_order" type="number" defaultValue={course?.sort_order ?? 0} />
            </div>
          </div>
        </AdminFormSection>

        <AdminFormSection title="Visibility">
          <label className="flex items-center gap-2 text-small text-text-primary">
            <input type="checkbox" name="published" defaultChecked={course?.published ?? true} className="size-4" />
            Published (visible on the storefront)
          </label>
        </AdminFormSection>

        <AdminFormActions pending={pending} submitLabel={submitLabel} cancelHref="/admin/courses" error={state.error} />
      </AdminFormCard>
    </form>
  );
}
