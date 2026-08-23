import { createClient } from "@/lib/supabase/server";

export interface VentureRow {
  id: string;
  slug: string;
  name: string;
  description: string;
  href: string;
  link_label: string;
  image: string | null;
  highlights: string[];
  icon: string;
  published: boolean;
  sort_order: number;
}

export async function getPublishedVentures(): Promise<VentureRow[]> {
  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("ventures")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getPublishedVentures:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getAllVentures(): Promise<VentureRow[]> {
  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase.from("ventures").select("*").order("sort_order", { ascending: true });
  if (error) {
    console.error("getAllVentures:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getVenture(id: string): Promise<VentureRow | null> {
  const supabase = await createClient();
  if (!supabase) return null;

  const { data, error } = await supabase.from("ventures").select("*").eq("id", id).maybeSingle();
  if (error) {
    console.error("getVenture:", error.message);
    return null;
  }
  return data;
}
