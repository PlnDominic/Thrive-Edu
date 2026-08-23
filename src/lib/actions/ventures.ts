"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export interface VentureActionState {
  error?: string;
}

function ventureFromForm(formData: FormData) {
  const highlightsRaw = String(formData.get("highlights") ?? "");
  return {
    slug: String(formData.get("slug") ?? "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    name: String(formData.get("name") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
    href: String(formData.get("href") ?? "/contact").trim() || "/contact",
    link_label: String(formData.get("link_label") ?? "Learn more").trim() || "Learn more",
    image: String(formData.get("image") ?? "").trim() || null,
    highlights: highlightsRaw
      .split(",")
      .map((h) => h.trim())
      .filter(Boolean),
    icon: String(formData.get("icon") ?? "BookOpen"),
    published: formData.get("published") === "on",
    sort_order: Number(formData.get("sort_order") ?? 0),
  };
}

export async function createVenture(
  _prevState: VentureActionState,
  formData: FormData
): Promise<VentureActionState> {
  const supabase = await createClient();
  if (!supabase) return { error: "Supabase is not configured." };

  const values = ventureFromForm(formData);
  if (!values.name) return { error: "Name is required." };
  if (!values.slug) return { error: "Slug is required." };

  const { error } = await supabase.from("ventures").insert(values);
  if (error) return { error: error.message };

  revalidatePath("/admin/ventures");
  revalidatePath("/ecosystem");
  redirect("/admin/ventures");
}

export async function updateVenture(
  id: string,
  _prevState: VentureActionState,
  formData: FormData
): Promise<VentureActionState> {
  const supabase = await createClient();
  if (!supabase) return { error: "Supabase is not configured." };

  const values = ventureFromForm(formData);
  if (!values.name) return { error: "Name is required." };
  if (!values.slug) return { error: "Slug is required." };

  const { error } = await supabase.from("ventures").update(values).eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/admin/ventures");
  revalidatePath("/ecosystem");
  redirect("/admin/ventures");
}

export async function deleteVenture(id: string) {
  const supabase = await createClient();
  if (!supabase) return;

  await supabase.from("ventures").delete().eq("id", id);
  revalidatePath("/admin/ventures");
  revalidatePath("/ecosystem");
}
