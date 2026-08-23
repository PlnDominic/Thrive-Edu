-- Storage bucket for admin-uploaded photos (courses, ventures, gallery,
-- team). Public read (so the site can display them), only signed-in users
-- can upload/replace/delete - same trust model as the CMS tables.

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

create policy "Public can read media" on storage.objects
  for select using (bucket_id = 'media');

create policy "Admins can upload media" on storage.objects
  for insert with check (bucket_id = 'media' and auth.role() = 'authenticated');

create policy "Admins can update media" on storage.objects
  for update using (bucket_id = 'media' and auth.role() = 'authenticated');

create policy "Admins can delete media" on storage.objects
  for delete using (bucket_id = 'media' and auth.role() = 'authenticated');
