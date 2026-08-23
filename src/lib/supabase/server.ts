import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

import { getSupabaseEnv } from "@/lib/supabase/env";

// Server-side Supabase client (Server Components, Route Handlers, Server
// Actions) that reads/writes the auth session via cookies. Returns null when
// Supabase env vars aren't configured yet, so pages can fall back gracefully
// instead of crashing the build.
export async function createClient() {
  const env = getSupabaseEnv();
  if (!env) return null;

  const cookieStore = await cookies();

  return createServerClient(env.url, env.anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Called from a Server Component render (no response to write
          // cookies to) - the middleware refreshes the session instead.
        }
      },
    },
  });
}
