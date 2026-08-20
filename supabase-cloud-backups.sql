create table if not exists public.user_app_backups (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  reason text not null default 'Automatic backup before save',
  created_at timestamptz not null default now()
);

create index if not exists user_app_backups_user_created_idx
on public.user_app_backups (user_id, created_at desc);

alter table public.user_app_backups enable row level security;

drop policy if exists "Users can read their own backups" on public.user_app_backups;
drop policy if exists "Users can create their own backups" on public.user_app_backups;
drop policy if exists "Users can delete their own backups" on public.user_app_backups;

create policy "Users can read their own backups"
on public.user_app_backups
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create their own backups"
on public.user_app_backups
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can delete their own backups"
on public.user_app_backups
for delete
to authenticated
using ((select auth.uid()) = user_id);
