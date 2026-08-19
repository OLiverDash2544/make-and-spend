create table if not exists public.shared_tabs (
  id uuid primary key default gen_random_uuid(),
  invite_code text not null unique,
  name text not null,
  currency text not null,
  created_by uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.shared_tab_members (
  tab_id uuid not null references public.shared_tabs(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  member_email text,
  role text not null default 'member',
  created_at timestamptz not null default now(),
  primary key (tab_id, user_id)
);

create table if not exists public.shared_tab_records (
  id uuid primary key,
  tab_id uuid not null references public.shared_tabs(id) on delete cascade,
  created_by uuid not null references auth.users(id) on delete cascade,
  record jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.shared_tabs enable row level security;
alter table public.shared_tab_members enable row level security;
alter table public.shared_tab_records enable row level security;

drop policy if exists "Shared tab members can read tabs" on public.shared_tabs;
drop policy if exists "Signed in users can create shared tabs" on public.shared_tabs;
drop policy if exists "Shared tab members can update tabs" on public.shared_tabs;
drop policy if exists "Members can read their memberships" on public.shared_tab_members;
drop policy if exists "Creators can add themselves as members" on public.shared_tab_members;
drop policy if exists "Members can read shared records" on public.shared_tab_records;
drop policy if exists "Members can add shared records" on public.shared_tab_records;
drop policy if exists "Members can update shared records" on public.shared_tab_records;
drop policy if exists "Members can delete shared records" on public.shared_tab_records;

create policy "Shared tab members can read tabs"
on public.shared_tabs
for select
to authenticated
using (
  exists (
    select 1 from public.shared_tab_members m
    where m.tab_id = id and m.user_id = (select auth.uid())
  )
);

create policy "Signed in users can create shared tabs"
on public.shared_tabs
for insert
to authenticated
with check (created_by = (select auth.uid()));

create policy "Shared tab members can update tabs"
on public.shared_tabs
for update
to authenticated
using (
  exists (
    select 1 from public.shared_tab_members m
    where m.tab_id = id and m.user_id = (select auth.uid())
  )
)
with check (
  exists (
    select 1 from public.shared_tab_members m
    where m.tab_id = id and m.user_id = (select auth.uid())
  )
);

create policy "Members can read their memberships"
on public.shared_tab_members
for select
to authenticated
using (user_id = (select auth.uid()));

create policy "Creators can add themselves as members"
on public.shared_tab_members
for insert
to authenticated
with check (
  user_id = (select auth.uid())
  and exists (
    select 1 from public.shared_tabs t
    where t.id = tab_id and t.created_by = (select auth.uid())
  )
);

create policy "Members can read shared records"
on public.shared_tab_records
for select
to authenticated
using (
  exists (
    select 1 from public.shared_tab_members m
    where m.tab_id = shared_tab_records.tab_id and m.user_id = (select auth.uid())
  )
);

create policy "Members can add shared records"
on public.shared_tab_records
for insert
to authenticated
with check (
  created_by = (select auth.uid())
  and exists (
    select 1 from public.shared_tab_members m
    where m.tab_id = shared_tab_records.tab_id and m.user_id = (select auth.uid())
  )
);

create policy "Members can update shared records"
on public.shared_tab_records
for update
to authenticated
using (
  exists (
    select 1 from public.shared_tab_members m
    where m.tab_id = shared_tab_records.tab_id and m.user_id = (select auth.uid())
  )
)
with check (
  exists (
    select 1 from public.shared_tab_members m
    where m.tab_id = shared_tab_records.tab_id and m.user_id = (select auth.uid())
  )
);

create policy "Members can delete shared records"
on public.shared_tab_records
for delete
to authenticated
using (
  exists (
    select 1 from public.shared_tab_members m
    where m.tab_id = shared_tab_records.tab_id and m.user_id = (select auth.uid())
  )
);

create or replace function public.my_shared_tabs()
returns table (
  id uuid,
  invite_code text,
  name text,
  currency text,
  created_by uuid,
  created_at timestamptz
)
language sql
security definer
set search_path = public
as $$
  select t.id, t.invite_code, t.name, t.currency, t.created_by, t.created_at
  from public.shared_tabs t
  join public.shared_tab_members m on m.tab_id = t.id
  where m.user_id = auth.uid()
  order by t.created_at desc;
$$;

create or replace function public.join_shared_tab(invite_code_input text)
returns table (
  id uuid,
  invite_code text,
  name text,
  currency text,
  created_by uuid,
  created_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.shared_tab_members (tab_id, user_id, member_email)
  select t.id, auth.uid(), auth.email()
  from public.shared_tabs t
  where upper(t.invite_code) = upper(invite_code_input)
  on conflict (tab_id, user_id) do nothing;

  return query
  select t.id, t.invite_code, t.name, t.currency, t.created_by, t.created_at
  from public.shared_tabs t
  join public.shared_tab_members m on m.tab_id = t.id
  where m.user_id = auth.uid()
    and upper(t.invite_code) = upper(invite_code_input);
end;
$$;

create or replace function public.leave_shared_tab(tab_id_input uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from public.shared_tab_members
  where tab_id = tab_id_input
    and user_id = auth.uid();

  delete from public.shared_tabs t
  where t.id = tab_id_input
    and not exists (
      select 1 from public.shared_tab_members m
      where m.tab_id = t.id
    );
end;
$$;

create or replace function public.delete_shared_tab(tab_id_input uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from public.shared_tabs t
  where t.id = tab_id_input
    and t.created_by = auth.uid();
end;
$$;
