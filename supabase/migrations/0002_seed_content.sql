-- Seeds the ventures, gallery and team content that used to be hardcoded in
-- the app, so the site isn't empty the moment the CMS goes live. Safe to run
-- once after 0001_admin_cms.sql; re-running is idempotent (upsert on the
-- natural unique key for each table).

insert into public.ventures (slug, name, description, href, link_label, image, highlights, icon, sort_order)
values
  (
    'mobile-library-and-books-hub',
    'Thrive Mobile Library and Books Hub',
    'Getting books into hands. A mobile and outreach library, alongside a hub for browsing and buying our titles.',
    '/families',
    'For families and readers',
    '/images/gallery-outdoor-lesson.jpg',
    array['Mobile Book Drives', 'Community Reading Hubs', 'Family Book Access'],
    'Library',
    0
  ),
  (
    'stem-programme-and-products',
    'Thrive STEM (Programme and Products)',
    'Hands-on science, technology, engineering, and mathematics education equipped with interactive learning kits and practical experiment guides.',
    '/courses',
    'Explore STEM products & programmes',
    '/images/gallery-science-fair.jpg',
    array['Science Kits', 'Practical Experiments', 'Interactive Flashcards'],
    'FlaskConical',
    1
  ),
  (
    'talents-creative-hub',
    'Thrive Talents Creative Hub',
    'Unlocking artistic potential through painting, visual arts, music, and creative expression for children and youth.',
    '/gallery',
    'Explore creative hub & gallery',
    '/images/gallery-painting-focus.jpg',
    array['Studio Arts', 'Young Painters', 'Creative Exhibitions'],
    'Palette',
    2
  )
on conflict (slug) do nothing;

insert into public.gallery_items (title, category, photo, icon, color, height, sort_order)
select * from (
  values
    ('Science fair finals', 'STEM', '/images/gallery-science-fair.jpg', 'FlaskConical', 'bg-forest-green', 'h-80', 0),
    ('Outdoor art workshop', 'Arts & Music', '/images/hero-painting-outdoors.jpg', 'Palette', 'bg-deep-green', 'h-80', 1),
    ('Reading circle', 'Language Arts', null, 'BookOpen', 'bg-growth-green', 'h-64', 2),
    ('Studio arts showcase', 'Arts & Music', '/images/gallery-studio-arts.jpg', 'Palette', 'bg-leaf-gold', 'h-72', 3),
    ('Outdoor lesson', 'Classroom', '/images/gallery-outdoor-lesson.jpg', 'Users', 'bg-leaf-green', 'h-64', 4),
    ('Young artists at work', 'Arts & Music', '/images/gallery-painting-group-seated.jpg', 'Music', 'bg-warm-amber', 'h-72', 5),
    ('Community art day', 'Community', '/images/hero-painting-group.jpg', 'Award', 'bg-deep-green', 'h-64', 6),
    ('Focused brushwork', 'Arts & Music', '/images/gallery-painting-focus.jpg', 'PartyPopper', 'bg-forest-green', 'h-80', 7),
    ('Peer mentoring', 'Classroom', null, 'Users', 'bg-growth-green', 'h-80', 8)
) as seed(title, category, photo, icon, color, height, sort_order)
where not exists (select 1 from public.gallery_items existing where existing.title = seed.title);

insert into public.team_members (name, role, image, bio, sort_order)
select * from (
  values
    (
      'Salomey Owusu Barnes',
      'Chief Executive Officer',
      '/images/team-salomey-owusu-barnes.jpg',
      'Leads THRIVE EDU''s mission to equip and empower schools and organisations across Ghana.',
      0
    ),
    ('Kwabena Mensah', 'Head of Curriculum', null, null, 1),
    ('Naomi Adjei', 'Director of Teaching', null, null, 2),
    ('Samuel Tetteh', 'Head of Product', null, null, 3),
    ('Efua Danso', 'Family Success Lead', null, null, 4),
    ('Yaw Boateng', 'Data & Insights Lead', null, null, 5)
) as seed(name, role, image, bio, sort_order)
where not exists (select 1 from public.team_members existing where existing.name = seed.name);
