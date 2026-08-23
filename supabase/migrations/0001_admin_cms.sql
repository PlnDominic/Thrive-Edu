-- Admin CMS schema: courses (storefront products), ventures, gallery items, and team members.
-- Public (anon) role can read published/all rows; only authenticated users (the admin team) can write.
-- Run this once against your Supabase project (SQL editor, or `supabase db push`).

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- courses (storefront products shown on /courses)
-- ---------------------------------------------------------------------------
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subject text not null check (
    subject in ('Mathematics', 'Science', 'Language Arts', 'Arts & Music', 'Test Prep', 'Life Skills')
  ),
  level text not null check (level in ('Beginner', 'Intermediate', 'Advanced')),
  format text not null check (format in ('Live cohort', 'Self-paced')),
  description text not null default '',
  price numeric(10, 2) not null default 0,
  compare_at_price numeric(10, 2),
  rating numeric(2, 1) not null default 5.0,
  students_enrolled integer not null default 0,
  icon text not null default 'BookOpen',
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- ventures (Ecosystem page cards)
-- ---------------------------------------------------------------------------
create table if not exists public.ventures (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null default '',
  href text not null default '/contact',
  link_label text not null default 'Learn more',
  image text,
  highlights text[] not null default '{}',
  icon text not null default 'BookOpen',
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- gallery_items (Gallery page)
-- ---------------------------------------------------------------------------
create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default '',
  photo text,
  icon text not null default 'Users',
  color text not null default 'bg-forest-green',
  height text not null default 'h-64',
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- team_members (About page)
-- ---------------------------------------------------------------------------
create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  image text,
  bio text,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- updated_at trigger
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_updated_at on public.courses;
create trigger set_updated_at before update on public.courses
  for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at on public.ventures;
create trigger set_updated_at before update on public.ventures
  for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at on public.gallery_items;
create trigger set_updated_at before update on public.gallery_items
  for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at on public.team_members;
create trigger set_updated_at before update on public.team_members
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Row Level Security: anyone can read published rows, only signed-in
-- admin users (rows in auth.users, added manually in the Supabase dashboard)
-- can create/update/delete or see unpublished drafts.
-- ---------------------------------------------------------------------------
alter table public.courses enable row level security;
alter table public.ventures enable row level security;
alter table public.gallery_items enable row level security;
alter table public.team_members enable row level security;

create policy "Public can read published courses" on public.courses
  for select using (published = true or auth.role() = 'authenticated');
create policy "Admins can manage courses" on public.courses
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Public can read published ventures" on public.ventures
  for select using (published = true or auth.role() = 'authenticated');
create policy "Admins can manage ventures" on public.ventures
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Public can read published gallery items" on public.gallery_items
  for select using (published = true or auth.role() = 'authenticated');
create policy "Admins can manage gallery items" on public.gallery_items
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Public can read published team members" on public.team_members
  for select using (published = true or auth.role() = 'authenticated');
create policy "Admins can manage team members" on public.team_members
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
