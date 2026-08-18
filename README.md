# Make & Spend Web

This is the Windows and Visual Studio Code friendly version of Make & Spend.

It runs as a simple iPhone-sized web app and stores data locally in the browser. It works offline after the first load if served from a local web server.

The app uses four simple tabs: Home, Transactions, Reports, and Settings. Currency tabs appear as account cards inside Home. The app starts with Canada/CAD and Brasil/BRL, and you can add USD or another currency in Settings.

Real account balances carry forward. Monthly income, spending, transfer fees, and investment totals reset for each month, but money left over stays in the account balance. You can set starting balances for each currency tab in Settings.

The **Reports** tab keeps month and year records, with separate report sections for each active currency tab. Each report stays in that tab's currency without converting the report section into another currency.

Settings includes **Currency tabs**. You can add a currency tab, choose its code/name/symbol, set its CAD exchange rate, show or hide tabs, and delete empty tabs. Tabs with old records can be hidden instead of deleted so the old data stays safe.

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

## Cloud Sync

Settings includes **Cloud sync** for using the same data on phone and computer with Supabase.

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
