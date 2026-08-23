"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export interface TeamActionState {
  error?: string;
}

function teamMemberFromForm(formData: FormData) {
  return {
    name: String(formData.get("name") ?? "").trim(),
    role: String(formData.get("role") ?? "").trim(),
    image: String(formData.get("image") ?? "").trim() || null,
    bio: String(formData.get("bio") ?? "").trim() || null,
    published: formData.get("published") === "on",
    sort_order: Number(formData.get("sort_order") ?? 0),
  };
}

export async function createTeamMember(
  _prevState: TeamActionState,
  formData: FormData
): Promise<TeamActionState> {
  const supabase = await createClient();
  if (!supabase) return { error: "Supabase is not configured." };

  const values = teamMemberFromForm(formData);
  if (!values.name) return { error: "Name is required." };
  if (!values.role) return { error: "Role is required." };

  const { error } = await supabase.from("team_members").insert(values);
  if (error) return { error: error.message };

  revalidatePath("/admin/team");
  revalidatePath("/about");
  redirect("/admin/team");
}

export async function updateTeamMember(
  id: string,
  _prevState: TeamActionState,
  formData: FormData
): Promise<TeamActionState> {
  const supabase = await createClient();
  if (!supabase) return { error: "Supabase is not configured." };

  const values = teamMemberFromForm(formData);
  if (!values.name) return { error: "Name is required." };
  if (!values.role) return { error: "Role is required." };

  const { error } = await supabase.from("team_members").update(values).eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/admin/team");
  revalidatePath("/about");
  redirect("/admin/team");
}

export async function deleteTeamMember(id: string) {
  const supabase = await createClient();
  if (!supabase) return;

  await supabase.from("team_members").delete().eq("id", id);
  revalidatePath("/admin/team");
  revalidatePath("/about");
}
