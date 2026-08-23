import { createClient } from "@/lib/supabase/server";
import type { CourseSubject } from "@/lib/courses-data";

export interface CourseRow {
  id: string;
  title: string;
  subject: CourseSubject;
  level: "Beginner" | "Intermediate" | "Advanced";
  format: "Live cohort" | "Self-paced";
  description: string;
  price: number;
  compare_at_price: number | null;
  rating: number;
  students_enrolled: number;
  icon: string;
  published: boolean;
  sort_order: number;
}

// Public storefront: published courses only, sorted for display.
export async function getPublishedCourses(): Promise<CourseRow[]> {
  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getPublishedCourses:", error.message);
    return [];
  }
  return data ?? [];
}

// Admin: every course, published or not.
export async function getAllCourses(): Promise<CourseRow[]> {
  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getAllCourses:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getCourse(id: string): Promise<CourseRow | null> {
  const supabase = await createClient();
  if (!supabase) return null;

  const { data, error } = await supabase.from("courses").select("*").eq("id", id).maybeSingle();
  if (error) {
    console.error("getCourse:", error.message);
    return null;
  }
  return data;
}
