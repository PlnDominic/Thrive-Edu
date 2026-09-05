#!/usr/bin/env node
// Pings Supabase with a lightweight read so the project registers activity
// and the free-tier "paused after 7 days of inactivity" timer never fires.
//
// Run manually with `npm run supabase:keepalive`, or on a schedule via the
// `.github/workflows/supabase-keepalive.yml` GitHub Action (every Monday).
//
// Requires the same env vars the app already uses:
//   NEXT_PUBLIC_SUPABASE_URL
//   NEXT_PUBLIC_SUPABASE_ANON_KEY
//
// Only needs anon-key, read-only access - it selects a single row from a
// couple of public tables (already readable by anyone per the RLS policies
// in supabase/migrations/0001_admin_cms.sql), so no service-role key or
// write access is required.

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.error(
    "supabase-keepalive: missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY"
  );
  process.exit(1);
}

// Tables to touch, in order - first one that succeeds is enough, but we try
// a couple in case one is empty or its RLS policy ever changes.
const TABLES = ["courses", "ventures", "gallery_items", "team_members"];

const supabase = createClient(url, anonKey);

let ok = false;

for (const table of TABLES) {
  const { error, count } = await supabase
    .from(table)
    .select("id", { count: "exact", head: true })
    .limit(1);

  if (error) {
    console.warn(`supabase-keepalive: ${table} query failed: ${error.message}`);
    continue;
  }

  console.log(
    `supabase-keepalive: ${new Date().toISOString()} - queried "${table}" (${count ?? 0} rows) OK`
  );
  ok = true;
  break;
}

if (!ok) {
  console.error("supabase-keepalive: all table queries failed");
  process.exit(1);
}
