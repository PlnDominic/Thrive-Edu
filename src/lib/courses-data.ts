import type { LucideIcon } from "lucide-react";

export type CourseSubject =
  | "Mathematics"
  | "Science"
  | "Language Arts"
  | "Arts & Music"
  | "Test Prep"
  | "Life Skills";

export interface Course {
  id: string;
  title: string;
  subject: CourseSubject;
  level: "Beginner" | "Intermediate" | "Advanced";
  format: "Live cohort" | "Self-paced";
  description: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  studentsEnrolled: number;
  icon: LucideIcon;
}

export const subjectColors: Record<CourseSubject, string> = {
  Mathematics: "bg-forest-green",
  Science: "bg-growth-green",
  "Language Arts": "bg-deep-green",
  "Arts & Music": "bg-leaf-gold",
  "Test Prep": "bg-leaf-green",
  "Life Skills": "bg-warm-amber",
};

// Populated by the admin CMS once course management ships. Empty until then.
export const courses: Course[] = [];

export const subjects: CourseSubject[] = [
  "Mathematics",
  "Science",
  "Language Arts",
  "Arts & Music",
  "Test Prep",
  "Life Skills",
];
