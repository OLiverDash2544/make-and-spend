const currencies = {
  CAD: { name: "Canadian dollar", symbol: "$" },
  USD: { name: "US dollar", symbol: "$" },
  BRL: { name: "Brazilian real", symbol: "R$" }
};

const countries = [
  { id: "canada", name: "Canada", currency: "CAD", dashboard: "canadaDashboard" },
  { id: "brazil", name: "Brasil", currency: "BRL", dashboard: "brazilDashboard" }
];

const categoryColorMap = {
  "Rent or housing": "#6D5DF6",
  "Groceries": "#22A06B",
  "Restaurants and takeout": "#FF7A1A",
  "Internet": "#2F80ED",
  "Phone": "#00A6A6",
  "Car": "#455A64",
  "Gas": "#E6A700",
  "Transportation": "#7B61FF",
  "Water": "#00A3FF",
  "Electricity": "#F2C94C",
  "Insurance": "#8E44AD",
  "Health": "#EB5757",
  "Entertainment": "#BB6BD9",
  "Shopping": "#F2994A",
  "Subscriptions": "#56CCF2",
  "Education": "#2D9CDB",
  "Travel": "#27AE60",
  "Gifts": "#FF5C8A",
  "Taxes": "#8D6E63",
  "Other": "#8E8E93"
};

const fallbackCategoryColors = [
  "#0A84FF",
  "#30D158",
  "#FF9F0A",
  "#BF5AF2",
  "#64D2FF",
  "#FF375F",
  "#AC8E68",
  "#5E5CE6"
];

const incomeSourceColorMap = {
  "Job": "#22A06B",
  "Side job": "#0A84FF",
  "Gift or present": "#FF5C8A",
  "Investment return": "#6D5DF6",
  "Rent received": "#00A6A6",
  "Refund": "#E6A700",
  "Other": "#8E8E93"
};

const fallbackIncomeSourceColors = [
  "#34C759",
  "#007AFF",
  "#AF52DE",
  "#FF9500",
  "#00C7BE",
  "#5856D6",
  "#FF2D55",
  "#A2845E"
];

const defaults = {
  mainCurrency: "CAD",
  ratesToCAD: { CAD: 1, USD: 1.36, BRL: 0.25 },
  ratesUpdatedAt: "",
  ratesSource: "Manual",
  accountSettings: {
    canada: { startingBalance: 0 },
    brazil: { startingBalance: 0 }
  },
  theme: "light",
  incomeSources: ["Job", "Side job", "Gift or present", "Investment return", "Rent received", "Refund", "Other"],
  incomeSourceColors: {},
  expenseCategories: [
    "Rent or housing",
    "Groceries",
    "Restaurants and takeout",
    "Internet",
    "Phone",
    "Car",
    "Gas",
    "Transportation",
    "Water",
    "Electricity",
    "Insurance",
    "Health",
    "Entertainment",
    "Shopping",
    "Subscriptions",
    "Education",
    "Travel",
    "Gifts",
    "Taxes",
    "Other"
  ],
  expenseCategoryColors: {},
  paymentMethods: ["Cash", "Debit card", "Credit card", "Bank transfer", "Other"],
  transactions: [],
  investments: [],
  transfers: []
};

let state = loadState();
let filters = { kind: "all", category: "all", currency: "all", search: "" };
let selectedMonth = monthKey(today());

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function loadState() {
  try {
    return normalizeState(JSON.parse(localStorage.getItem("makeSpendData") || "{}"));
  } catch {
    return normalizeState({});
  }
}

function normalizeState(saved) {
  return {
    ...defaults,
    ...saved,
    ratesToCAD: { ...defaults.ratesToCAD, ...(saved.ratesToCAD || {}) },
    ratesUpdatedAt: saved.ratesUpdatedAt || defaults.ratesUpdatedAt,
    ratesSource: saved.ratesSource || defaults.ratesSource,
    accountSettings: {
      canada: { ...defaults.accountSettings.canada, ...(saved.accountSettings?.canada || {}) },
      brazil: { ...defaults.accountSettings.brazil, ...(saved.accountSettings?.brazil || {}) }
    },
    incomeSources: saved.incomeSources || defaults.incomeSources,
    incomeSourceColors: { ...defaults.incomeSourceColors, ...(saved.incomeSourceColors || {}) },
    expenseCategories: saved.expenseCategories || defaults.expenseCategories,
    expenseCategoryColors: { ...defaults.expenseCategoryColors, ...(saved.expenseCategoryColors || {}) },
    paymentMethods: saved.paymentMethods || defaults.paymentMethods,
    transactions: saved.transactions || [],
    investments: saved.investments || [],
    transfers: saved.transfers || []
  };
}

function saveState() {
  localStorage.setItem("makeSpendData", JSON.stringify(state));
}

function money(amount, currency = state.mainCurrency) {
  const numericAmount = Number(amount) || 0;
  const value = Math.abs(numericAmount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${numericAmount < 0 ? "-" : ""}${currencies[currency].symbol}${value} ${currency}`;
}

function amountInCurrency(transaction, targetCurrency) {
  const sign = transaction.kind === "income" ? 1 : -1;
  if (transaction.currency === targetCurrency) return Number(transaction.amount) * sign;
  const cad = Number(transaction.amount) * Number(transaction.exchangeRateToCAD) * sign;
  return cad / Number(state.ratesToCAD[targetCurrency]);
}

function recordCountry(record) {
  if (record.country) return record.country;
  return countryIdForCurrency(record.currency);
}

function investmentInCurrency(investment, targetCurrency) {
  if (investment.currency === targetCurrency) return Number(investment.amount);
  const cad = Number(investment.amount) * Number(state.ratesToCAD[investment.currency]);
  return cad / Number(state.ratesToCAD[targetCurrency]);
}

function investmentValueInCurrency(investment, targetCurrency) {
  const value = Number(investment.currentValue || investment.amount);
  return convertedAmount(value, investment.currency, targetCurrency);
}

function investmentCountry(investment) {
  if (investment.country) return investment.country;
  const match = countries.find((country) => country.currency === investment.currency);
  return match?.id || "canada";
}

function convertedAmount(amount, fromCurrency, targetCurrency) {
  if (fromCurrency === targetCurrency) return Number(amount);
  const cad = Number(amount) * Number(state.ratesToCAD[fromCurrency]);
  return cad / Number(state.ratesToCAD[targetCurrency]);
}

function countryCurrency(countryId) {
  return countries.find((country) => country.id === countryId)?.currency || "CAD";
}

function colorForCategory(category) {
  if (state.expenseCategoryColors?.[category]) return state.expenseCategoryColors[category];
  if (categoryColorMap[category]) return categoryColorMap[category];
  let total = 0;
  for (const character of category) total += character.charCodeAt(0);
  return fallbackCategoryColors[total % fallbackCategoryColors.length];
}

function colorForIncomeSource(source) {
  if (state.incomeSourceColors?.[source]) return state.incomeSourceColors[source];
  if (incomeSourceColorMap[source]) return incomeSourceColorMap[source];
  let total = 0;
  for (const character of source) total += character.charCodeAt(0);
  return fallbackIncomeSourceColors[total % fallbackIncomeSourceColors.length];
}

function incomeBySource(transactions, currency) {
  const totals = {};
  transactions
    .filter((transaction) => transaction.kind === "income")
    .forEach((transaction) => {
      totals[transaction.category] = (totals[transaction.category] || 0) + Math.abs(amountInCurrency(transaction, currency));
    });
  return Object.entries(totals)
    .map(([name, amount]) => ({ name, amount }))
    .sort((a, b) => b.amount - a.amount);
}

function spendingByCategory(transactions, currency) {
  const totals = {};
  transactions
    .filter((transaction) => transaction.kind === "expense")
    .forEach((transaction) => {
      totals[transaction.category] = (totals[transaction.category] || 0) + Math.abs(amountInCurrency(transaction, currency));
    });
  return Object.entries(totals)
    .map(([name, amount]) => ({ name, amount }))
    .sort((a, b) => b.amount - a.amount);
}

function stackTemplate(items, currency, options) {
  const total = items.reduce((sum, item) => sum + item.amount, 0);
  if (!total) return `<p class="eyebrow">${options.emptyText}</p>`;

  return `
    <div class="stacked-bar" aria-label="${escapeAttr(options.label)}">
      ${items.map((item) => `
        <span
          style="width:${Math.max(3, (item.amount / total) * 100)}%; background:${options.colorForItem(item.name)}"
          title="${escapeAttr(item.name)}"
        ></span>
      `).join("")}
    </div>
    <div class="category-legend">
      ${items.map((item) => `
        <div>
          <i style="background:${options.colorForItem(item.name)}"></i>
          <span>${escapeHtml(item.name)}</span>
          <strong>${money(item.amount, currency)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function spendingStackTemplate(items, currency) {
  return stackTemplate(items, currency, {
    label: "Spending by category",
    emptyText: "No spending chart yet",
    colorForItem: colorForCategory
  });
}

function earningStackTemplate(items, currency) {
  return stackTemplate(items, currency, {
    label: "Earnings by source",
    emptyText: "No earning chart yet",
    colorForItem: colorForIncomeSource
  });
}

function rateToMain(currency) {
  return Number(state.ratesToCAD[currency]) / Number(state.ratesToCAD[state.mainCurrency]);
}

function rateToCurrency(fromCurrency, toCurrency) {
  return Number(state.ratesToCAD[fromCurrency]) / Number(state.ratesToCAD[toCurrency]);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function isCurrentMonth(value) {
  const now = new Date();
  const date = new Date(value + "T00:00:00");
  return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
}

function currentMonthTitle() {
  return new Date().toLocaleDateString(undefined, { month: "long", year: "numeric" });
}

function monthKey(value) {
  return value.slice(0, 7);
}

function yearKey(value) {
  return value.slice(0, 4);
}

function monthLabel(key) {
  return new Date(`${key}-01T00:00:00`).toLocaleDateString(undefined, { month: "long", year: "numeric" });
}

function shiftMonth(key, amount) {
  const date = new Date(`${key}-01T00:00:00`);
  date.setMonth(date.getMonth() + amount);
  return date.toISOString().slice(0, 7);
}

function render() {
  document.body.classList.toggle("dark", state.theme === "dark");
  renderHome();
  renderInvestments();
  renderTransactions();
  renderReports();
  renderSettings();
  saveState();
}

function renderHome() {
  $("#homeDashboard").innerHTML = `
    <section class="home-grid">
      ${countries.map((country) => accountCardTemplate(country, monthKey(today()))).join("")}
    </section>
    <section class="panel">
      <h2>Quick actions</h2>
      <div class="actions action-grid">
        <button class="primary income" data-open-form="income">+ Add Income</button>
        <button class="primary expense" data-open-form="expense">- Add Expense</button>
        <button class="primary invest" id="openInvestment">+ Add Investment</button>
        <button class="primary transfer" id="openTransfer">Transfer Money</button>
      </div>
    </section>
    <section class="panel">
      <h2>Investment money</h2>
      ${homeInvestmentSummary()}
    </section>
  `;
}

function homeInvestmentSummary() {
  const total = state.investments.reduce((sum, investment) => sum + investmentInCurrency(investment, state.mainCurrency), 0);
  if (!state.investments.length) {
    return `<p class="eyebrow">No investment money recorded yet</p>`;
  }
  return `
    <div class="metric">
      <span>Total put in investments</span>
      <strong class="blue">${money(total, state.mainCurrency)}</strong>
    </div>
    <div class="mini-list">
      ${state.investments.slice(0, 3).map(investmentTemplate).join("")}
    </div>
  `;
}

function accountCardTemplate(country, selectedMonthKey) {
  const currency = country.currency;
  const summary = accountSummary(country.id, selectedMonthKey);
  return `
    <section class="panel account-card">
      <div class="row">
        <h2>${country.name}</h2>
        <strong>${currency}</strong>
      </div>
      <div class="balance small-balance">${money(summary.available, currency)}</div>
      <div class="metric">
        <span>Income this month</span>
        <strong class="green">${money(summary.income, currency)}</strong>
      </div>
      <div class="spending-stack-wrap earning-stack-wrap">
        <span class="eyebrow">Earnings by source</span>
        ${earningStackTemplate(summary.earningSources, currency)}
      </div>
      <div class="metric">
        <span>Expenses this month</span>
        <strong class="red">${money(summary.expenses, currency)}</strong>
      </div>
      <div class="metric">
        <span>Investments this month</span>
        <strong class="blue">${money(summary.investments, currency)}</strong>
      </div>
      <div class="metric">
        <span>Money remaining this month</span>
        <strong>${money(summary.monthRemaining, currency)}</strong>
      </div>
      <div class="spending-stack-wrap">
        ${spendingStackTemplate(summary.spendingCategories, currency)}
      </div>
      <div class="actions">
        <button class="primary income" data-open-form="income" data-country="${country.id}" data-currency="${currency}">+ Income</button>
        <button class="primary expense" data-open-form="expense" data-country="${country.id}" data-currency="${currency}">- Expense</button>
      </div>
    </section>
  `;
}

function accountSummary(countryId, selectedMonthKey) {
  const currency = countryCurrency(countryId);
  const allTransactions = state.transactions.filter((transaction) => recordCountry(transaction) === countryId);
  const monthTransactions = allTransactions.filter((transaction) => monthKey(transaction.date) === selectedMonthKey);
  const countryInvestments = state.investments.filter((investment) => (
    investmentCountry(investment) === countryId && investment.deductFromCountry !== false
  ));
  const monthInvestments = countryInvestments.filter((investment) => monthKey(investment.date) === selectedMonthKey);
  const sentTransfers = state.transfers.filter((transfer) => transfer.fromAccount === countryId);
  const receivedTransfers = state.transfers.filter((transfer) => transfer.toAccount === countryId);
  const monthSentTransfers = sentTransfers.filter((transfer) => monthKey(transfer.date) === selectedMonthKey);
  const monthReceivedTransfers = receivedTransfers.filter((transfer) => monthKey(transfer.date) === selectedMonthKey);

  const startingBalance = Number(state.accountSettings[countryId]?.startingBalance || 0);
  const transactionBalance = allTransactions.reduce((sum, transaction) => sum + amountInCurrency(transaction, currency), 0);
  const investedAll = countryInvestments.reduce((sum, investment) => sum + investmentInCurrency(investment, currency), 0);
  const transferOut = sentTransfers.reduce((sum, transfer) => sum + convertedAmount(transfer.sentAmount, transfer.sentCurrency, currency) + convertedAmount(transfer.fee || 0, transfer.feeCurrency || transfer.sentCurrency, currency), 0);
  const transferIn = receivedTransfers.reduce((sum, transfer) => sum + convertedAmount(transfer.receivedAmount, transfer.receivedCurrency, currency), 0);
  const available = startingBalance + transactionBalance - investedAll - transferOut + transferIn;

  const income = monthTransactions
    .filter((transaction) => transaction.kind === "income")
    .reduce((sum, transaction) => sum + Math.abs(amountInCurrency(transaction, currency)), 0);
  const expenses = monthTransactions
    .filter((transaction) => transaction.kind === "expense")
    .reduce((sum, transaction) => sum + Math.abs(amountInCurrency(transaction, currency)), 0);
  const investments = monthInvestments.reduce((sum, investment) => sum + investmentInCurrency(investment, currency), 0);
  const earningSources = incomeBySource(monthTransactions, currency);
  const spendingCategories = spendingByCategory(monthTransactions, currency);
  const transferFees = monthSentTransfers.reduce((sum, transfer) => sum + convertedAmount(transfer.fee || 0, transfer.feeCurrency || transfer.sentCurrency, currency), 0);
  const transferInMonth = monthReceivedTransfers.reduce((sum, transfer) => sum + convertedAmount(transfer.receivedAmount, transfer.receivedCurrency, currency), 0);
  const transferOutMonth = monthSentTransfers.reduce((sum, transfer) => sum + convertedAmount(transfer.sentAmount, transfer.sentCurrency, currency), 0);

  return {
    available,
    income,
    expenses,
    investments,
    transferFees,
    transfersNet: transferInMonth - transferOutMonth - transferFees,
    monthRemaining: income - expenses - investments - transferFees,
    earningSources,
    spendingCategories,
    monthTransactions,
    monthInvestments
  };
}

function renderInvestments() {
  const total = state.investments.reduce((sum, investment) => sum + investmentInCurrency(investment, state.mainCurrency), 0);
  const currentValueTotal = state.investments.reduce((sum, investment) => sum + investmentValueInCurrency(investment, state.mainCurrency), 0);
  const totalsByCurrency = Object.keys(currencies).reduce((totals, currency) => {
    totals[currency] = state.investments
      .filter((investment) => investment.currency === currency)
      .reduce((sum, investment) => sum + Number(investment.amount), 0);
    return totals;
  }, {});

  $("#investmentCurrency").textContent = state.mainCurrency;
  $("#investmentTotal").textContent = money(total, state.mainCurrency);
  $("#investmentCurrencyTotals").innerHTML = Object.keys(currencies).map((currency) => `
    <div class="currency-total">
      <span>${currency}</span>
      <strong>${money(totalsByCurrency[currency], currency)}</strong>
    </div>
  `).join("") + `
    <div class="currency-total">
      <span>Current value</span>
      <strong>${money(currentValueTotal, state.mainCurrency)}</strong>
    </div>
    <div class="currency-total">
      <span>Gain / loss</span>
      <strong class="${currentValueTotal - total >= 0 ? "green" : "red"}">${money(currentValueTotal - total, state.mainCurrency)}</strong>
    </div>
  `;
  $("#investmentList").innerHTML = state.investments.length
    ? state.investments
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(investmentTemplate)
      .join("")
    : `<section class="panel"><strong>No investments yet</strong><p class="eyebrow">Add simple investment records here.</p></section>`;
}

function investmentTemplate(investment) {
  const gainLoss = investmentValueInCurrency(investment, investment.currency) - Number(investment.amount);
  return `
    <article class="transaction">
      <div>
        <strong>${escapeHtml(investment.name)}</strong>
        <p>${formatDate(investment.date)} - ${countryName(investmentCountry(investment))} - ${escapeHtml(investment.currency)}</p>
        <p>${investment.deductFromCountry === false ? "From somewhere else" : "Blue deduction from tab"}</p>
        <p>Current value: ${money(investment.currentValue || investment.amount, investment.currency)} · Gain/loss: ${money(gainLoss, investment.currency)}</p>
        ${investment.note ? `<p>${escapeHtml(investment.note)}</p>` : ""}
      </div>
      <div class="amount blue">
        ${money(investment.amount, investment.currency)}
        <p>${money(investmentInCurrency(investment, state.mainCurrency), state.mainCurrency)}</p>
      </div>
      <div class="transaction-actions">
        <button data-edit-investment="${investment.id}">Edit</button>
        <button data-delete-investment="${investment.id}">Delete</button>
      </div>
    </article>
  `;
}

function renderTransactions() {
  $("#selectedMonthLabel").textContent = monthLabel(selectedMonth);
  const categories = [...new Set([
    ...state.incomeSources,
    ...state.expenseCategories,
    ...state.transactions.map((transaction) => transaction.category)
  ])].sort();

  $("#categoryFilter").innerHTML = `<option value="all">All categories</option>` +
    categories.map((category) => `<option value="${escapeAttr(category)}">${escapeHtml(category)}</option>`).join("");
  $("#categoryFilter").value = filters.category;

  const visible = state.transactions
    .filter((transaction) => monthKey(transaction.date) === selectedMonth)
    .filter((transaction) => filters.kind === "all" || transaction.kind === filters.kind)
    .filter((transaction) => filters.currency === "all" || transaction.currency === filters.currency)
    .filter((transaction) => filters.category === "all" || transaction.category === filters.category)
    .filter((transaction) => {
      const text = `${transaction.kind} ${transaction.category} ${transaction.currency} ${transaction.note}`.toLowerCase();
      return text.includes(filters.search.toLowerCase());
    })
    .sort((a, b) => b.date.localeCompare(a.date));
  const visibleTransfers = state.transfers
    .filter((transfer) => monthKey(transfer.date) === selectedMonth)
    .sort((a, b) => b.date.localeCompare(a.date));

  const accountSummaries = countries.map((country) => accountCardTemplate(country, selectedMonth)).join("");
  $("#transactionList").innerHTML = `
    <section class="home-grid">${accountSummaries}</section>
    ${visible.length
    ? visible.map(transactionTemplate).join("")
    : `<section class="panel"><strong>No transactions for this month</strong><p class="eyebrow">Use Prev or Next to move between months.</p></section>`}
    ${visibleTransfers.map(transferTemplate).join("")}
  `;
}

function renderReports() {
  countries.forEach((country) => {
    const months = buildPeriodReports("month", country.id);
    const years = buildPeriodReports("year", country.id);
    const target = country.id === "canada" ? $("#canadaReportList") : $("#brazilReportList");
    target.innerHTML = `
      <h3>Months</h3>
      ${months.length ? months.map(monthReportTemplate).join("") : `<p class="eyebrow">No months yet</p>`}
      <h3>Years</h3>
      ${years.length ? years.map(yearReportTemplate).join("") : `<p class="eyebrow">No years yet</p>`}
    `;
  });
}

function buildPeriodReports(type, countryId) {
  const reports = new Map();
  const currency = countryCurrency(countryId);

  state.transactions.filter((transaction) => recordCountry(transaction) === countryId).forEach((transaction) => {
    const key = type === "month" ? monthKey(transaction.date) : yearKey(transaction.date);
    if (!reports.has(key)) reports.set(key, emptyReport(key, type, currency));
    const report = reports.get(key);
    const amount = Math.abs(amountInCurrency(transaction, currency));
    if (transaction.kind === "income") {
      report.income += amount;
      report.earningSources[transaction.category] = (report.earningSources[transaction.category] || 0) + amount;
    }
    if (transaction.kind === "expense") {
      report.expenses += amount;
      report.spendingCategories[transaction.category] = (report.spendingCategories[transaction.category] || 0) + amount;
    }
    report.transactions.push(transaction);
  });

  state.investments.filter((investment) => investmentCountry(investment) === countryId).forEach((investment) => {
    const key = type === "month" ? monthKey(investment.date) : yearKey(investment.date);
    if (!reports.has(key)) reports.set(key, emptyReport(key, type, currency));
    const report = reports.get(key);
    report.investments += investmentInCurrency(investment, currency);
    report.investmentItems.push(investment);
  });

  state.transfers.filter((transfer) => transfer.fromAccount === countryId || transfer.toAccount === countryId).forEach((transfer) => {
    const key = type === "month" ? monthKey(transfer.date) : yearKey(transfer.date);
    if (!reports.has(key)) reports.set(key, emptyReport(key, type, currency));
    const report = reports.get(key);
    if (transfer.fromAccount === countryId) {
      report.transferFees += convertedAmount(transfer.fee || 0, transfer.feeCurrency || transfer.sentCurrency, currency);
      report.transferOut += convertedAmount(transfer.sentAmount, transfer.sentCurrency, currency);
    }
    if (transfer.toAccount === countryId) {
      report.transferIn += convertedAmount(transfer.receivedAmount, transfer.receivedCurrency, currency);
    }
    report.transfers.push(transfer);
  });

  return [...reports.values()]
    .map((report) => ({
      ...report,
      remaining: report.income - report.expenses - report.investments - report.transferFees + report.transferIn - report.transferOut
    }))
    .sort((a, b) => b.key.localeCompare(a.key));
}

function emptyReport(key, type, currency) {
  return {
    key,
    label: type === "month" ? monthLabel(key) : key,
    currency,
    income: 0,
    expenses: 0,
    investments: 0,
    transferIn: 0,
    transferOut: 0,
    remaining: 0,
    transactions: [],
    investmentItems: [],
    transferFees: 0,
    transfers: [],
    earningSources: {},
    spendingCategories: {}
  };
}

function monthReportTemplate(report) {
  const records = [
    ...report.transactions.map(transactionTemplate),
    ...report.investmentItems.map(investmentTemplate),
    ...report.transfers.map(transferTemplate)
  ].join("");

  return `
    <details class="report-card">
      <summary>
        <span>${escapeHtml(report.label)}</span>
        <strong>${money(report.remaining, report.currency)}</strong>
      </summary>
      ${reportMetricsTemplate(report)}
      ${reportEarningTemplate(report)}
      ${reportSpendingTemplate(report)}
      <div class="report-records">
        ${records || `<p class="eyebrow">No records</p>`}
      </div>
    </details>
  `;
}

function yearReportTemplate(report) {
  return `
    <article class="report-card year-card">
      <div class="report-year-head">
        <span>${escapeHtml(report.label)}</span>
        <strong>${money(report.remaining, report.currency)}</strong>
      </div>
      ${reportMetricsTemplate(report)}
      ${reportEarningTemplate(report)}
      ${reportSpendingTemplate(report)}
    </article>
  `;
}

function reportMetricsTemplate(report) {
  return `
    <div class="report-metrics">
      <div><span>Made</span><strong class="green">${money(report.income, report.currency)}</strong></div>
      <div><span>Spent</span><strong class="red">${money(report.expenses, report.currency)}</strong></div>
      <div><span>Invested</span><strong class="blue">${money(report.investments, report.currency)}</strong></div>
      <div><span>Transfer in</span><strong>${money(report.transferIn, report.currency)}</strong></div>
      <div><span>Transfer out</span><strong>${money(report.transferOut, report.currency)}</strong></div>
      <div><span>Fees</span><strong>${money(report.transferFees, report.currency)}</strong></div>
      <div><span>Left</span><strong>${money(report.remaining, report.currency)}</strong></div>
    </div>
  `;
}

function reportEarningTemplate(report) {
  const items = Object.entries(report.earningSources)
    .map(([name, amount]) => ({ name, amount }))
    .sort((a, b) => b.amount - a.amount);
  return `
    <div class="report-spending report-earning">
      <span class="eyebrow">Earnings by source</span>
      ${earningStackTemplate(items, report.currency)}
    </div>
  `;
}

function reportSpendingTemplate(report) {
  const items = Object.entries(report.spendingCategories)
    .map(([name, amount]) => ({ name, amount }))
    .sort((a, b) => b.amount - a.amount);
  return `
    <div class="report-spending">
      <span class="eyebrow">Spending by category</span>
      ${spendingStackTemplate(items, report.currency)}
    </div>
  `;
}

function transactionTemplate(transaction) {
  const sign = transaction.kind === "income" ? "+" : "-";
  const colorClass = transaction.kind === "income" ? "green" : "red";
  return `
    <article class="transaction">
      <div>
        <strong>${escapeHtml(transaction.category)}</strong>
        <p>${formatDate(transaction.date)} - ${countryName(recordCountry(transaction))} - ${escapeHtml(transaction.currency)}</p>
        ${transaction.paymentMethod ? `<p>${escapeHtml(transaction.paymentMethod)}</p>` : ""}
        <p>Rate: 1 ${transaction.currency} = ${rateForTransaction(transaction).toFixed(4)} ${state.mainCurrency}</p>
      </div>
      <div class="amount ${colorClass}">
        ${sign}${money(transaction.amount, transaction.currency)}
        <p>${money(Math.abs(amountInCurrency(transaction, state.mainCurrency)), state.mainCurrency)}</p>
      </div>
      <div class="transaction-actions">
        <button data-edit="${transaction.id}">Edit</button>
        <button data-delete="${transaction.id}">Delete</button>
      </div>
    </article>
  `;
}

function transferTemplate(transfer) {
  return `
    <article class="transaction transfer-row">
      <div>
        <strong>Transfer</strong>
        <p>${formatDate(transfer.date)} - ${countryName(transfer.fromAccount)} to ${countryName(transfer.toAccount)}</p>
        <p>${money(transfer.sentAmount, transfer.sentCurrency)} sent - ${money(transfer.receivedAmount, transfer.receivedCurrency)} received</p>
        ${transfer.note ? `<p>${escapeHtml(transfer.note)}</p>` : ""}
      </div>
      <div class="amount">
        ${transfer.fee ? `<span>Fee ${money(transfer.fee, transfer.feeCurrency)}</span>` : `<span>No fee</span>`}
      </div>
      <div class="transaction-actions">
        <button data-edit-transfer="${transfer.id}">Edit</button>
        <button data-delete-transfer="${transfer.id}">Delete</button>
      </div>
    </article>
  `;
}

function renderSettings() {
  $("#mainCurrency").value = state.mainCurrency;
  $("#canadaStartingBalance").value = state.accountSettings.canada.startingBalance;
  $("#brazilStartingBalance").value = state.accountSettings.brazil.startingBalance;
  $("#usdRate").value = state.ratesToCAD.USD;
  $("#brlRate").value = state.ratesToCAD.BRL;
  $("#rateStatus").textContent = state.ratesUpdatedAt
    ? `${state.ratesSource} rates updated ${new Date(state.ratesUpdatedAt).toLocaleString()}.`
    : "Manual rates are being used.";
  renderEditableList("incomeSourceList", state.incomeSources, "income");
  renderEditableList("expenseCategoryList", state.expenseCategories, "expense");
  renderCategoryColorList();
  renderEditableList("paymentMethodList", state.paymentMethods, "payment");
}

function renderCategoryColorList() {
  const incomeColors = state.incomeSources.map((source) => `
    <div class="color-row">
      <i style="background:${colorForIncomeSource(source)}"></i>
      <span>${escapeHtml(source)}</span>
      <input
        aria-label="Color for ${escapeAttr(source)}"
        data-color-type="income"
        data-color-name="${escapeAttr(source)}"
        type="color"
        value="${colorForIncomeSource(source)}"
      >
      <strong>${colorForIncomeSource(source)}</strong>
      <button data-reset-color="income" data-color-name="${escapeAttr(source)}">Reset</button>
    </div>
  `).join("");
  const expenseColors = state.expenseCategories.map((category) => `
    <div class="color-row">
      <i style="background:${colorForCategory(category)}"></i>
      <span>${escapeHtml(category)}</span>
      <input
        aria-label="Color for ${escapeAttr(category)}"
        data-color-type="expense"
        data-color-name="${escapeAttr(category)}"
        type="color"
        value="${colorForCategory(category)}"
      >
      <strong>${colorForCategory(category)}</strong>
      <button data-reset-color="expense" data-color-name="${escapeAttr(category)}">Reset</button>
    </div>
  `).join("");

  $("#categoryColorList").innerHTML = `
    <h3>Earning source colors</h3>
    ${incomeColors}
    <h3>Spending category colors</h3>
    ${expenseColors}
  `;
}

function renderEditableList(id, items, type) {
  $(`#${id}`).innerHTML = items.map((item) => `
    <div class="editable-item">
      <span>${escapeHtml(item)}</span>
      <button data-rename-list="${type}" data-name="${escapeAttr(item)}">Rename</button>
      <button data-delete-list="${type}" data-name="${escapeAttr(item)}">Delete</button>
    </div>
  `).join("");
}

function openForm(kind, transaction = null, currencyOverride = null, countryOverride = null) {
  const categories = kind === "income" ? state.incomeSources : state.expenseCategories;
  $("#formTitle").textContent = transaction ? `Edit ${kind}` : `Add ${kind}`;
  $("#editingId").value = transaction?.id || "";
  $("#transactionKind").value = kind;
  $("#amountInput").value = transaction?.amount || "";
  $("#currencyInput").value = transaction?.currency || currencyOverride || state.mainCurrency;
  $("#transactionCountryInput").value = transaction ? recordCountry(transaction) : countryOverride || countryIdForCurrency(currencyOverride || state.mainCurrency);
  $("#dateInput").value = transaction?.date || today();
  $("#categoryLabel").textContent = kind === "income" ? "Income source" : "Expense category";
  $("#categoryInput").innerHTML = categories.map((category) => `<option>${escapeHtml(category)}</option>`).join("");
  $("#categoryInput").value = transaction?.category || categories[0];
  $("#paymentMethodLabel").style.display = kind === "expense" ? "" : "none";
  $("#paymentMethodInput").style.display = kind === "expense" ? "" : "none";
  $("#paymentMethodInput").innerHTML = state.paymentMethods.map((method) => `<option>${escapeHtml(method)}</option>`).join("");
  $("#paymentMethodInput").value = transaction?.paymentMethod || state.paymentMethods[0];
  $("#noteInput").value = transaction?.note || "";
  updateRateInput(transaction);
  $("#transactionDialog").showModal();
}

function updateRateInput(transaction = null) {
  const currency = $("#currencyInput").value;
  $("#rateFrom").textContent = `1 ${currency} =`;
  $("#rateTo").textContent = state.mainCurrency;
  $("#rateInput").value = transaction
    ? rateForTransaction(transaction).toFixed(4)
    : rateToMain(currency).toFixed(4);
}

function rateForTransaction(transaction) {
  return Number(transaction.exchangeRateToCAD) / Number(state.ratesToCAD[state.mainCurrency]);
}

function saveTransaction(event) {
  event.preventDefault();
  const id = $("#editingId").value || crypto.randomUUID();
  const kind = $("#transactionKind").value;
  const currency = $("#currencyInput").value;
  const rateToSelectedMain = Number($("#rateInput").value);
  const exchangeRateToCAD = rateToSelectedMain * Number(state.ratesToCAD[state.mainCurrency]);
  const transaction = {
    id,
    kind,
    amount: Number($("#amountInput").value),
    currency,
    country: $("#transactionCountryInput").value,
    date: $("#dateInput").value,
    category: $("#categoryInput").value,
    paymentMethod: kind === "expense" ? $("#paymentMethodInput").value : "",
    note: $("#noteInput").value.trim(),
    exchangeRateToCAD
  };

  if (!transaction.amount || transaction.amount <= 0) return;

  const index = state.transactions.findIndex((item) => item.id === id);
  if (index >= 0) state.transactions[index] = transaction;
  else state.transactions.unshift(transaction);

  $("#transactionDialog").close();
  render();
}

function openInvestmentForm(investment = null, countryOverride = null) {
  const selectedCountry = countryOverride ? countries.find((country) => country.id === countryOverride) : null;
  $("#investmentFormTitle").textContent = investment ? "Edit Investment" : "Add Investment";
  $("#investmentEditingId").value = investment?.id || "";
  $("#investmentName").value = investment?.name || "";
  $("#investmentAmount").value = investment?.amount || "";
  $("#investmentCurrentValue").value = investment?.currentValue || investment?.amount || "";
  $("#investmentCurrencyInput").value = investment?.currency || selectedCountry?.currency || state.mainCurrency;
  $("#investmentCountryInput").value = investment ? investmentCountry(investment) : selectedCountry?.id || countryIdForCurrency(state.mainCurrency);
  $("#investmentDeductInput").checked = investment?.deductFromCountry !== false;
  $("#investmentDate").value = investment?.date || today();
  $("#investmentNote").value = investment?.note || "";
  $("#investmentDialog").showModal();
}

function saveInvestment(event) {
  event.preventDefault();
  const id = $("#investmentEditingId").value || crypto.randomUUID();
  const investment = {
    id,
    name: $("#investmentName").value.trim(),
    amount: Number($("#investmentAmount").value),
    currentValue: Number($("#investmentCurrentValue").value) || Number($("#investmentAmount").value),
    currency: $("#investmentCurrencyInput").value,
    country: $("#investmentCountryInput").value,
    deductFromCountry: $("#investmentDeductInput").checked,
    date: $("#investmentDate").value,
    note: $("#investmentNote").value.trim()
  };

  if (!investment.name || !investment.amount || investment.amount <= 0) return;

  const index = state.investments.findIndex((item) => item.id === id);
  if (index >= 0) state.investments[index] = investment;
  else state.investments.unshift(investment);

  $("#investmentDialog").close();
  render();
}

function openTransferForm(transfer = null) {
  $("#transferFormTitle").textContent = transfer ? "Edit Transfer" : "Transfer Money";
  $("#transferEditingId").value = transfer?.id || "";
  $("#transferFromAccount").value = transfer?.fromAccount || "canada";
  $("#transferToAccount").value = transfer?.toAccount || "brazil";
  $("#transferSentAmount").value = transfer?.sentAmount || "";
  $("#transferSentCurrency").value = transfer?.sentCurrency || countryCurrency($("#transferFromAccount").value);
  $("#transferReceivedAmount").value = transfer?.receivedAmount || "";
  $("#transferReceivedCurrency").value = transfer?.receivedCurrency || countryCurrency($("#transferToAccount").value);
  $("#transferFee").value = transfer?.fee || 0;
  $("#transferFeeCurrency").value = transfer?.feeCurrency || $("#transferSentCurrency").value;
  $("#transferDate").value = transfer?.date || today();
  $("#transferNote").value = transfer?.note || "";
  $("#transferDialog").showModal();
}

function saveTransfer(event) {
  event.preventDefault();
  const id = $("#transferEditingId").value || crypto.randomUUID();
  const transfer = {
    id,
    fromAccount: $("#transferFromAccount").value,
    toAccount: $("#transferToAccount").value,
    sentAmount: Number($("#transferSentAmount").value),
    sentCurrency: $("#transferSentCurrency").value,
    receivedAmount: Number($("#transferReceivedAmount").value),
    receivedCurrency: $("#transferReceivedCurrency").value,
    fee: Number($("#transferFee").value) || 0,
    feeCurrency: $("#transferFeeCurrency").value,
    date: $("#transferDate").value,
    note: $("#transferNote").value.trim()
  };

  if (!transfer.sentAmount || !transfer.receivedAmount || transfer.fromAccount === transfer.toAccount) return;

  const index = state.transfers.findIndex((item) => item.id === id);
  if (index >= 0) state.transfers[index] = transfer;
  else state.transfers.unshift(transfer);

  $("#transferDialog").close();
  render();
}

function addListItem(type) {
  const input = type === "income" ? $("#newIncomeSource") : type === "expense" ? $("#newExpenseCategory") : $("#newPaymentMethod");
  const list = type === "income" ? state.incomeSources : type === "expense" ? state.expenseCategories : state.paymentMethods;
  const name = input.value.trim();
  if (name && !list.includes(name)) list.push(name);
  input.value = "";
  render();
}

function renameListItem(type, oldName) {
  const list = type === "income" ? state.incomeSources : type === "expense" ? state.expenseCategories : state.paymentMethods;
  const name = prompt("New name", oldName)?.trim();
  if (!name) return;
  const index = list.indexOf(oldName);
  if (index >= 0) list[index] = name;
  moveCustomColor(type, oldName, name);
  const kind = type === "income" ? "income" : type === "expense" ? "expense" : "";
  state.transactions.forEach((transaction) => {
    if (transaction.kind === kind && transaction.category === oldName) transaction.category = name;
    if (type === "payment" && transaction.paymentMethod === oldName) transaction.paymentMethod = name;
  });
  render();
}

function deleteListItem(type, name) {
  if (!confirm(`Delete "${name}"?`)) return;
  const list = type === "income" ? state.incomeSources : type === "expense" ? state.expenseCategories : state.paymentMethods;
  const index = list.indexOf(name);
  if (index >= 0) list.splice(index, 1);
  removeCustomColor(type, name);
  render();
}

function colorStoreForType(type) {
  if (type === "income") return state.incomeSourceColors;
  if (type === "expense") return state.expenseCategoryColors;
  return null;
}

function moveCustomColor(type, oldName, newName) {
  const store = colorStoreForType(type);
  if (!store || !store[oldName]) return;
  store[newName] = store[oldName];
  delete store[oldName];
}

function removeCustomColor(type, name) {
  const store = colorStoreForType(type);
  if (store) delete store[name];
}

function setChartColor(type, name, color) {
  const store = colorStoreForType(type);
  if (!store || !/^#[0-9a-f]{6}$/i.test(color)) return;
  store[name] = color.toUpperCase();
  render();
}

function resetChartColor(type, name) {
  removeCustomColor(type, name);
  render();
}

function exportFile(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

function csvExport() {
  const rows = [["Type", "Amount", "Currency", "Date", "Account", "Category or Source", "Payment Method", "Note", "Exchange Rate To CAD"]];
  state.transactions.forEach((transaction) => {
    rows.push([
      transaction.kind,
      transaction.amount,
      transaction.currency,
      transaction.date,
      countryName(recordCountry(transaction)),
      transaction.category,
      transaction.paymentMethod || "",
      transaction.note,
      transaction.exchangeRateToCAD
    ]);
  });
  state.investments.forEach((investment) => {
    rows.push([
      "investment",
      investment.amount,
      investment.currency,
      investment.date,
      countryName(investmentCountry(investment)),
      `${countryName(investmentCountry(investment))}: ${investment.name}`,
      "",
      investment.note,
      state.ratesToCAD[investment.currency]
    ]);
  });
  state.transfers.forEach((transfer) => {
    rows.push([
      "transfer",
      transfer.sentAmount,
      transfer.sentCurrency,
      transfer.date,
      `${countryName(transfer.fromAccount)} to ${countryName(transfer.toAccount)}`,
      `${money(transfer.receivedAmount, transfer.receivedCurrency)} received`,
      "",
      transfer.note,
      rateToCurrency(transfer.sentCurrency, transfer.receivedCurrency)
    ]);
  });
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  exportFile("make-and-spend.csv", csv, "text/csv");
}

async function refreshRates() {
  const button = $("#refreshRates");
  const status = $("#rateStatus");
  button.disabled = true;
  status.textContent = "Updating rates from the internet...";

  try {
    const response = await fetch("https://api.frankfurter.dev/v2/rates?base=CAD&quotes=USD,BRL", {
      cache: "no-store"
    });
    if (!response.ok) throw new Error("Rate service unavailable");

    const data = await response.json();
    const usdPerCad = Number(data.rates?.USD);
    const brlPerCad = Number(data.rates?.BRL);
    if (!usdPerCad || !brlPerCad) throw new Error("Rates missing");

    state.ratesToCAD.USD = 1 / usdPerCad;
    state.ratesToCAD.BRL = 1 / brlPerCad;
    state.ratesToCAD.CAD = 1;
    state.ratesUpdatedAt = new Date().toISOString();
    state.ratesSource = "Online";
    render();
  } catch (error) {
    status.textContent = "Could not update online. Your saved/manual rates are still being used.";
  } finally {
    button.disabled = false;
  }
}

function countryName(id) {
  return countries.find((country) => country.id === id)?.name || "Canada";
}

function countryIdForCurrency(currency) {
  return countries.find((country) => country.currency === currency)?.id || "canada";
}

function backupExport() {
  exportFile("make-and-spend-backup.json", JSON.stringify(state, null, 2), "application/json");
}

function backupImport(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = normalizeState(JSON.parse(reader.result));
      render();
    } catch {
      alert("That backup file could not be opened.");
    }
  };
  reader.readAsText(file);
}

function formatDate(value) {
  return new Date(value + "T00:00:00").toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, [data-open-form]");
  if (!target) return;

  if (target.dataset.tab) {
    $$(".screen").forEach((screen) => screen.classList.toggle("active", screen.id === target.dataset.tab));
    $$(".tabs button").forEach((button) => button.classList.toggle("active", button === target));
  }

  if (target.dataset.openForm) openForm(target.dataset.openForm, null, target.dataset.currency || null, target.dataset.country || null);
  if (target.dataset.kindFilter) {
    filters.kind = target.dataset.kindFilter;
    $$("[data-kind-filter]").forEach((button) => button.classList.toggle("selected", button === target));
    renderTransactions();
  }
  if (target.dataset.edit) {
    const transaction = state.transactions.find((item) => item.id === target.dataset.edit);
    if (transaction) openForm(transaction.kind, transaction);
  }
  if (target.dataset.delete) {
    if (!confirm("Delete this transaction?")) return;
    state.transactions = state.transactions.filter((item) => item.id !== target.dataset.delete);
    render();
  }
  if (target.id === "openInvestment") openInvestmentForm();
  if (target.dataset.addInvestmentCountry) openInvestmentForm(null, target.dataset.addInvestmentCountry);
  if (target.dataset.editInvestment) {
    const investment = state.investments.find((item) => item.id === target.dataset.editInvestment);
    if (investment) openInvestmentForm(investment);
  }
  if (target.dataset.deleteInvestment) {
    if (!confirm("Delete this investment?")) return;
    state.investments = state.investments.filter((item) => item.id !== target.dataset.deleteInvestment);
    render();
  }
  if (target.id === "openTransfer") openTransferForm();
  if (target.dataset.editTransfer) {
    const transfer = state.transfers.find((item) => item.id === target.dataset.editTransfer);
    if (transfer) openTransferForm(transfer);
  }
  if (target.dataset.deleteTransfer) {
    if (!confirm("Delete this transfer?")) return;
    state.transfers = state.transfers.filter((item) => item.id !== target.dataset.deleteTransfer);
    render();
  }
  if (target.dataset.addList) addListItem(target.dataset.addList);
  if (target.dataset.renameList) renameListItem(target.dataset.renameList, target.dataset.name);
  if (target.dataset.deleteList) deleteListItem(target.dataset.deleteList, target.dataset.name);
  if (target.dataset.resetColor) resetChartColor(target.dataset.resetColor, target.dataset.colorName);
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("[data-color-type]")) {
    setChartColor(target.dataset.colorType, target.dataset.colorName, target.value);
  }
});

$("#transactionForm").addEventListener("submit", saveTransaction);
$("#investmentForm").addEventListener("submit", saveInvestment);
$("#transferForm").addEventListener("submit", saveTransfer);
$("#closeDialog").addEventListener("click", () => {
  $("#transactionDialog").close();
});
$("#closeInvestmentDialog").addEventListener("click", () => {
  $("#investmentDialog").close();
});
$("#closeTransferDialog").addEventListener("click", () => {
  $("#transferDialog").close();
});
$("#currencyInput").addEventListener("change", () => updateRateInput());
$("#transactionCountryInput").addEventListener("change", (event) => {
  $("#currencyInput").value = countryCurrency(event.target.value);
  updateRateInput();
});
$("#investmentCurrencyInput").addEventListener("change", (event) => {
  $("#investmentCountryInput").value = countryIdForCurrency(event.target.value);
});
$("#transferFromAccount").addEventListener("change", (event) => {
  $("#transferSentCurrency").value = countryCurrency(event.target.value);
  $("#transferFeeCurrency").value = $("#transferSentCurrency").value;
  if ($("#transferToAccount").value === event.target.value) {
    $("#transferToAccount").value = event.target.value === "canada" ? "brazil" : "canada";
    $("#transferReceivedCurrency").value = countryCurrency($("#transferToAccount").value);
  }
});
$("#transferToAccount").addEventListener("change", (event) => {
  $("#transferReceivedCurrency").value = countryCurrency(event.target.value);
  if ($("#transferFromAccount").value === event.target.value) {
    $("#transferFromAccount").value = event.target.value === "canada" ? "brazil" : "canada";
    $("#transferSentCurrency").value = countryCurrency($("#transferFromAccount").value);
  }
});
$("#previousMonth").addEventListener("click", () => {
  selectedMonth = shiftMonth(selectedMonth, -1);
  render();
});
$("#nextMonth").addEventListener("click", () => {
  selectedMonth = shiftMonth(selectedMonth, 1);
  render();
});
$("#searchInput").addEventListener("input", (event) => {
  filters.search = event.target.value;
  renderTransactions();
});
$("#categoryFilter").addEventListener("change", (event) => {
  filters.category = event.target.value;
  renderTransactions();
});
$("#currencyFilter").addEventListener("change", (event) => {
  filters.currency = event.target.value;
  renderTransactions();
});
$("#mainCurrency").addEventListener("change", (event) => {
  state.mainCurrency = event.target.value;
  render();
});
$("#canadaStartingBalance").addEventListener("change", (event) => {
  state.accountSettings.canada.startingBalance = Number(event.target.value) || 0;
  render();
});
$("#brazilStartingBalance").addEventListener("change", (event) => {
  state.accountSettings.brazil.startingBalance = Number(event.target.value) || 0;
  render();
});
$("#usdRate").addEventListener("change", (event) => {
  state.ratesToCAD.USD = Number(event.target.value) || state.ratesToCAD.USD;
  state.ratesSource = "Manual";
  state.ratesUpdatedAt = "";
  render();
});
$("#brlRate").addEventListener("change", (event) => {
  state.ratesToCAD.BRL = Number(event.target.value) || state.ratesToCAD.BRL;
  state.ratesSource = "Manual";
  state.ratesUpdatedAt = "";
  render();
});
$("#themeButton").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  render();
});
$("#exportCsv").addEventListener("click", csvExport);
$("#exportBackup").addEventListener("click", backupExport);
$("#refreshRates").addEventListener("click", refreshRates);
$("#importBackup").addEventListener("change", (event) => {
  if (event.target.files[0]) backupImport(event.target.files[0]);
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

render();
