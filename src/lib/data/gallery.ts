import { createClient } from "@/lib/supabase/server";

export interface GalleryItemRow {
  id: string;
  title: string;
  category: string;
  photo: string | null;
  icon: string;
  color: string;
  height: string;
  published: boolean;
  sort_order: number;
}

export async function getPublishedGalleryItems(): Promise<GalleryItemRow[]> {
  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("gallery_items")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getPublishedGalleryItems:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getAllGalleryItems(): Promise<GalleryItemRow[]> {
  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("gallery_items")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getAllGalleryItems:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getGalleryItem(id: string): Promise<GalleryItemRow | null> {
  const supabase = await createClient();
  if (!supabase) return null;

  const { data, error } = await supabase.from("gallery_items").select("*").eq("id", id).maybeSingle();
  if (error) {
    console.error("getGalleryItem:", error.message);
    return null;
  }
  return data;
}
