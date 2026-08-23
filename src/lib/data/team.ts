import { createClient } from "@/lib/supabase/server";

export interface TeamMemberRow {
  id: string;
  name: string;
  role: string;
  image: string | null;
  bio: string | null;
  published: boolean;
  sort_order: number;
}

export async function getPublishedTeamMembers(): Promise<TeamMemberRow[]> {
  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getPublishedTeamMembers:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getAllTeamMembers(): Promise<TeamMemberRow[]> {
  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase.from("team_members").select("*").order("sort_order", { ascending: true });
  if (error) {
    console.error("getAllTeamMembers:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getTeamMember(id: string): Promise<TeamMemberRow | null> {
  const supabase = await createClient();
  if (!supabase) return null;

  const { data, error } = await supabase.from("team_members").select("*").eq("id", id).maybeSingle();
  if (error) {
    console.error("getTeamMember:", error.message);
    return null;
  }
  return data;
}
