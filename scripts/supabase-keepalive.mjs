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
// Uses a plain REST `fetch` against PostgREST rather than
// `@supabase/supabase-js` - the JS client also spins up a realtime/websocket
// client on construction, which needs Node 22+ (or a polyfill) and pulls in
// a dependency for no benefit here. This only needs anon-key, read-only
// access - a couple of public tables (already readable by anyone per the
// RLS policies in supabase/migrations/0001_admin_cms.sql), so no
// service-role key or write access is required.

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

let ok = false;

for (const table of TABLES) {
  const endpoint = `${url.replace(/\/$/, "")}/rest/v1/${table}?select=id&limit=1`;

  let response;
  try {
    response = await fetch(endpoint, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
    });
  } catch (err) {
    console.warn(`supabase-keepalive: ${table} request failed: ${err.message}`);
    continue;
  }

  if (!response.ok) {
    console.warn(
      `supabase-keepalive: ${table} query failed: ${response.status} ${response.statusText}`
    );
    continue;
  }

  const rows = await response.json();
  console.log(
    `supabase-keepalive: ${new Date().toISOString()} - queried "${table}" (${rows.length} row(s)) OK`
  );
  ok = true;
  break;
}

if (!ok) {
  console.error("supabase-keepalive: all table queries failed");
  process.exit(1);
}
