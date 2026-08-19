# Make & Spend Web

This is the Windows and Visual Studio Code friendly version of Make & Spend.

It runs as a simple iPhone-sized web app and stores data locally in the browser. It works offline after the first load if served from a local web server.

The app uses four simple tabs: Home, Transactions, Reports, and Settings. Currency tabs appear as account cards inside Home. The app starts with Canada/CAD and Brasil/BRL, and you can add USD or another currency in Settings.

On a new device, the first screen is a simple setup screen. It asks the user to choose Canada, Brasil, United States, Japan, or another currency tab, optionally set a 4 to 6 digit PIN for that device, and then create an account or sign in at the end. Setup cannot be finished without creating an account or signing in.

Real account balances carry forward. Monthly income, spending, transfer fees, and investment totals reset for each month, but money left over stays in the account balance. You can set starting balances for each currency tab in Settings.

The **Reports** tab keeps month and year records, with separate report sections for each active currency tab. Each report stays in that tab's currency without converting the report section into another currency.

Settings is split into simple open/close categories: Account, Language, Money, Lists, Reminders, Colors, and Backup. The Money category has smaller open/close sections for Main currency, Currency tabs, and Conversion rates. You can add a currency tab, choose its code/name/symbol, set its CAD exchange rate, show or hide tabs, and delete empty tabs. Tabs with old records can be hidden instead of deleted so the old data stays safe.

The **Language** category lets the user switch the app between English and Portuguese. The selected language is saved and reused after refresh.

The **Transactions** tab shows all money records in one searchable list, including income, expenses, investments, and transfers. You can filter by record type, category/source, and currency.

Reports also show a simple **this month vs last month** comparison for money made, money spent, investments, and money left.

Amount and rate fields accept either a dot or comma for cents, so `12.50` and `12,50` both save as twelve dollars and fifty cents.

Home and Reports include simple colored bars for earnings and spending. Earning colors show where money came from, and spending colors show what money went to.

Settings includes editable chart colors. You can change the color for each earning source and each spending category, reset a color back to the default, and keep those choices in your local data and backup file.

Default earning source colors:

- Job: `#22A06B`
- Side job: `#0A84FF`
- Gift or present: `#FF5C8A`
- Investment return: `#6D5DF6`
- Rent received: `#00A6A6`
- Refund: `#E6A700`
- Other: `#8E8E93`

Default category colors:

- Rent or housing: `#6D5DF6`
- Groceries: `#22A06B`
- Restaurants and takeout: `#FF7A1A`
- Internet: `#2F80ED`
- Phone: `#00A6A6`
- Car: `#455A64`
- Gas: `#E6A700`
- Transportation: `#7B61FF`
- Water: `#00A3FF`
- Electricity: `#F2C94C`
- Insurance: `#8E44AD`
- Health: `#EB5757`
- Entertainment: `#BB6BD9`
- Shopping: `#F2994A`
- Subscriptions: `#56CCF2`
- Education: `#2D9CDB`
- Travel: `#27AE60`
- Gifts: `#FF5C8A`
- Taxes: `#8D6E63`
- Other: `#8E8E93`

It also includes transfers between currency tabs. Transfers move money between accounts without counting as new income or regular expenses. Transfer fees are tracked separately.

Home includes a simple **Add Investment** button. Investments track contributions, current value, country totals, and gains or losses without connecting to banks or moving real money.

Settings includes **Recurring reminders** for bills that happen every month. Reminders do not automatically spend money. When you pay one, tap **Add expense** to record it.

Settings includes an **Update online rates** button. It uses the public Frankfurter exchange-rate API when internet is available, then saves the latest rates locally. If the internet is unavailable, your saved/manual rates stay in place.

Investments can be assigned to a currency tab. By default, investment money is deducted from that tab in blue, but it is not counted as a red expense. Uncheck **Take this money out of that currency tab** when the investment money came from somewhere else.

Settings also includes **Joint tabs**. A signed-in user can create a shared currency tab, copy the invite code, and send that code to another signed-in user. The other user pastes the invite code to join. Records added to a joint tab are saved separately from private transactions, and each joint transaction shows who added it. A member can leave a joint tab, and the creator can delete the joint tab for everyone.

## Cloud Sync

Settings includes an **Account** section for using the same data on phone and computer with Supabase. After sign up or sign in, cloud sync runs automatically. Password reset emails can be requested from the setup screen or Settings.

In Supabase, create this table in the SQL Editor:

```sql
create table public.user_app_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_app_data enable row level security;

create policy "Users can read their own data"
on public.user_app_data
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert their own data"
on public.user_app_data
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own data"
on public.user_app_data
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);
```

For joint tabs, also run this SQL once in the Supabase SQL Editor:

```sql
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
```

The app is configured with this Supabase Project URL:

```text
https://wzsefkygcxvulukzszfw.supabase.co
```

Log in in Settings, then use **Save this device to cloud** or **Load cloud data**. After cloud sync is started, the app checks for newer cloud data about every 30 seconds and shows when it last synced.

Settings also includes **Export full backup** and **Import full backup**. A full backup includes transactions, investments, recurring reminders, categories, colors, exchange rates, and settings.

## Run in VS Code on Windows

1. Open this folder in VS Code:
   `C:\Users\Admin\Documents\Playground\MakeAndSpendWeb`
2. Install the VS Code extension **Live Server**.
3. Right-click `index.html`.
4. Choose **Open with Live Server**.

## Use on iPhone

For quick testing, your iPhone and Windows computer must be on the same Wi-Fi network.

1. Start Live Server in VS Code.
2. Find your Windows local IP address.
3. On iPhone Safari, open the Live Server address using that IP.
4. Tap Share, then **Add to Home Screen**.

This is not a native SwiftUI app, but it is the most practical iPhone-friendly version to build and test from Windows.
