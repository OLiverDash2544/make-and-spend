# Make & Spend Web

This is the Windows and Visual Studio Code friendly version of Make & Spend.

It runs as a simple iPhone-sized web app and stores data locally in the browser. It works offline after the first load if served from a local web server.

The app uses four simple tabs: Home, Month, Reports, and Settings. Canada and Brasil appear as account cards inside Home and Month. Canada records CAD, and Brasil records BRL.

Real account balances carry forward. Monthly income, spending, transfer fees, and investment totals reset for each month, but money left over stays in the account balance. You can set starting balances in Settings.

The **Month** tab lets you move between months. Older months are kept in **Reports**, where Canada and Brasil have separate report sections. Canada reports stay in CAD and Brasil reports stay in BRL, without converting between them.

Month and Reports include a simple colored spending bar. Each color represents a spending category, so you can quickly see what your money went to.

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

It also includes transfers between Canada and Brasil. Transfers move money between accounts without counting as new income or regular expenses. Transfer fees are tracked separately.

Home includes a simple **Add Investment** button. Investments track contributions, current value, and gains or losses without connecting to banks or moving real money.

Settings includes an **Update online rates** button. It uses the public Frankfurter exchange-rate API when internet is available, then saves the latest rates locally. If the internet is unavailable, your saved/manual rates stay in place.

Investments can be assigned to Canada or Brasil. By default, investment money is deducted from that country account in blue, but it is not counted as a red expense. Uncheck **Take this money out of that country tab** when the investment money came from somewhere else.

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
