"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export interface CourseActionState {
  error?: string;
}

function courseFromForm(formData: FormData) {
  return {
    title: String(formData.get("title") ?? "").trim(),
    subject: String(formData.get("subject") ?? "Mathematics"),
    level: String(formData.get("level") ?? "Beginner"),
    format: String(formData.get("format") ?? "Self-paced"),
    description: String(formData.get("description") ?? "").trim(),
    price: Number(formData.get("price") ?? 0),
    compare_at_price: formData.get("compare_at_price")
      ? Number(formData.get("compare_at_price"))
      : null,
    rating: Number(formData.get("rating") ?? 5),
    students_enrolled: Number(formData.get("students_enrolled") ?? 0),
    icon: String(formData.get("icon") ?? "BookOpen"),
    published: formData.get("published") === "on",
    sort_order: Number(formData.get("sort_order") ?? 0),
  };
}

export async function createCourse(_prevState: CourseActionState, formData: FormData): Promise<CourseActionState> {
  const supabase = await createClient();
  if (!supabase) return { error: "Supabase is not configured." };

  const values = courseFromForm(formData);
  if (!values.title) return { error: "Title is required." };

  const { error } = await supabase.from("courses").insert(values);
  if (error) return { error: error.message };

  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  redirect("/admin/courses");
}

export async function updateCourse(
  id: string,
  _prevState: CourseActionState,
  formData: FormData
): Promise<CourseActionState> {
  const supabase = await createClient();
  if (!supabase) return { error: "Supabase is not configured." };

  const values = courseFromForm(formData);
  if (!values.title) return { error: "Title is required." };

  const { error } = await supabase.from("courses").update(values).eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  redirect("/admin/courses");
}

export async function deleteCourse(id: string) {
  const supabase = await createClient();
  if (!supabase) return;

  await supabase.from("courses").delete().eq("id", id);
  revalidatePath("/admin/courses");
  revalidatePath("/courses");
}
