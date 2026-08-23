"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export interface GalleryActionState {
  error?: string;
}

function galleryItemFromForm(formData: FormData) {
  return {
    title: String(formData.get("title") ?? "").trim(),
    category: String(formData.get("category") ?? "").trim(),
    photo: String(formData.get("photo") ?? "").trim() || null,
    icon: String(formData.get("icon") ?? "Users"),
    color: String(formData.get("color") ?? "bg-forest-green"),
    height: String(formData.get("height") ?? "h-64"),
    published: formData.get("published") === "on",
    sort_order: Number(formData.get("sort_order") ?? 0),
  };
}

export async function createGalleryItem(
  _prevState: GalleryActionState,
  formData: FormData
): Promise<GalleryActionState> {
  const supabase = await createClient();
  if (!supabase) return { error: "Supabase is not configured." };

  const values = galleryItemFromForm(formData);
  if (!values.title) return { error: "Title is required." };

  const { error } = await supabase.from("gallery_items").insert(values);
  if (error) return { error: error.message };

  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
  redirect("/admin/gallery");
}

export async function updateGalleryItem(
  id: string,
  _prevState: GalleryActionState,
  formData: FormData
): Promise<GalleryActionState> {
  const supabase = await createClient();
  if (!supabase) return { error: "Supabase is not configured." };

  const values = galleryItemFromForm(formData);
  if (!values.title) return { error: "Title is required." };

  const { error } = await supabase.from("gallery_items").update(values).eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
  redirect("/admin/gallery");
}

export async function deleteGalleryItem(id: string) {
  const supabase = await createClient();
  if (!supabase) return;

  await supabase.from("gallery_items").delete().eq("id", id);
  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
}
