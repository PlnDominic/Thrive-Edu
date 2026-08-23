// Course/product data now lives in Supabase (see src/lib/data/courses.ts) and
// is managed from /admin. This file keeps the shared constants used by both
// the storefront pages and the admin CMS forms.

export type CourseSubject =
  | "Mathematics"
  | "Science"
  | "Language Arts"
  | "Arts & Music"
  | "Test Prep"
  | "Life Skills";

export const subjectColors: Record<CourseSubject, string> = {
  Mathematics: "bg-forest-green",
  Science: "bg-growth-green",
  "Language Arts": "bg-deep-green",
  "Arts & Music": "bg-leaf-gold",
  "Test Prep": "bg-leaf-green",
  "Life Skills": "bg-warm-amber",
};

export const subjects: CourseSubject[] = [
  "Mathematics",
  "Science",
  "Language Arts",
  "Arts & Music",
  "Test Prep",
  "Life Skills",
];
