"use server";

import { createClient } from "@/lib/supabase/server";

const MAX_BYTES = 5 * 1024 * 1024; // 5MB

export interface UploadResult {
  url?: string;
  error?: string;
}

// Uploads a photo to the "media" Storage bucket and returns its public URL,
// for admin forms (course/venture/gallery/team photo fields). Invoked
// directly from a client component - not bound to useActionState, since it
// doesn't drive a <form> submission itself.
export async function uploadImage(formData: FormData): Promise<UploadResult> {
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "Choose an image to upload." };
  }
  if (!file.type.startsWith("image/")) {
    return { error: "Please choose an image file." };
  }
  if (file.size > MAX_BYTES) {
    return { error: "Image must be smaller than 5MB." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { error: "Supabase is not configured." };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: "You must be signed in to upload." };
  }

  const ext = file.name.includes(".") ? file.name.split(".").pop() : "jpg";
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from("media").upload(path, file, {
    contentType: file.type,
    upsert: false,
  });
  if (error) {
    return { error: error.message };
  }

  const { data } = supabase.storage.from("media").getPublicUrl(path);
  return { url: data.publicUrl };
}
