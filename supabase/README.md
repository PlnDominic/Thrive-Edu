# Admin CMS setup (Supabase)

The `/admin` CMS manages courses, ventures, gallery items and team members
shown on the public site. It's backed by Supabase (Postgres + Auth).

## 1. Create a Supabase project

Create a project at [supabase.com](https://supabase.com) (the free tier is
enough to start).

## 2. Run the migrations

In the Supabase dashboard, open **SQL Editor** and run, in order:

1. `supabase/migrations/0001_admin_cms.sql` - creates the `courses`,
   `ventures`, `gallery_items` and `team_members` tables with row-level
   security (anyone can read published rows, only signed-in users can write).
2. `supabase/migrations/0002_seed_content.sql` - seeds the ventures, gallery
   and team content that used to be hardcoded, so the site isn't empty.

(If you use the Supabase CLI instead, `supabase db push` from the repo root
applies both in order.)

## 3. Set environment variables

In the Supabase dashboard under **Project Settings → API**, copy the
**Project URL** and **anon public** key into your `.env.local` (see
`.env.example`):

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

Set the same two variables in your hosting provider (e.g. Vercel → Project
Settings → Environment Variables) for production.

## 4. Create your first admin user

Either:

- **Dashboard**: Authentication → Users → Add user. Enter the admin's email
  and a password (or send a magic invite).
- **Self-service signup** (`/admin/signup`): set `ADMIN_INVITE_CODE` (see
  `.env.example`) to a secret only your team knows, and share it with
  whoever should have admin access. They sign up themselves with that code.
  Leave it unset to disable signup entirely - the page shows an error and
  the dashboard is the only way in.

Either way, that's it - they can now sign in at `/admin/login`. Every row in
`auth.users` can sign in and manage **all** CMS content; there's no separate
roles table in this first version, so the invite code is the only thing
standing between a stranger and full write access - keep it private.

By default Supabase requires email confirmation before a new signup can log
in (a confirmation link is emailed to them). You can turn that off under
Authentication → Providers → Email → "Confirm email" if you'd rather new
admins get in immediately.

## What's managed where

| Content | Public page | Admin route |
| --- | --- | --- |
| Courses / products (storefront) | `/courses`, homepage | `/admin/courses` |
| Ventures | `/ecosystem` | `/admin/ventures` |
| Gallery items | `/gallery` | `/admin/gallery` |
| Team members | `/about` | `/admin/team` |

Each item has a `published` toggle - unpublished items only show up in the
admin list, not on the public site.
