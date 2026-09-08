-- Run this once in the Supabase project's SQL editor (Project > SQL Editor > New query)
-- to create the table backing the "Archive of Unfinished Meetings" contribute feature.

create table if not exists public.unfinished_meetings (
  id uuid primary key default gen_random_uuid(),
  text text not null check (char_length(text) between 1 and 220),
  created_at timestamptz not null default now()
);

alter table public.unfinished_meetings enable row level security;

-- Anyone (the anon key used in the browser) may add an entry...
create policy "Anyone can add an entry"
  on public.unfinished_meetings
  for insert
  to anon
  with check (char_length(text) between 1 and 220);

-- ...and read the shared archive...
create policy "Anyone can read entries"
  on public.unfinished_meetings
  for select
  to anon
  using (true);

-- ...but there is intentionally no update/delete policy, so no one
-- (including the site itself) can alter or remove someone else's entry
-- through the public anon key.
