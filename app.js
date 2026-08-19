const knownCurrencies = {
  CAD: { name: "Canadian dollar", symbol: "$" },
  USD: { name: "US dollar", symbol: "$" },
  BRL: { name: "Brazilian real", symbol: "R$" },
  EUR: { name: "Euro", symbol: "€", tabName: "Europe" },
  JPY: { name: "Japanese yen", symbol: "¥", tabName: "Japan" },
  GBP: { name: "British pound", symbol: "£", tabName: "United Kingdom" },
  MXN: { name: "Mexican peso", symbol: "$", tabName: "Mexico" },
  ARS: { name: "Argentine peso", symbol: "$", tabName: "Argentina" },
  CLP: { name: "Chilean peso", symbol: "$", tabName: "Chile" },
  COP: { name: "Colombian peso", symbol: "$", tabName: "Colombia" }
};

const currencyCodeAliases = {
  US: "USD",
  USA: "USD",
  UNITEDSTATES: "USD",
  AMERICA: "USD",
  JP: "JPY",
  JAPAN: "JPY",
  YEN: "JPY",
  UK: "GBP",
  ENGLAND: "GBP",
  POUND: "GBP",
  EURO: "EUR",
  EUROPE: "EUR",
  MEXICO: "MXN",
  MEXICAN: "MXN",
  ARGENTINA: "ARS",
  CHILE: "CLP",
  COLOMBIA: "COP",
  BRAZIL: "BRL",
  BRASIL: "BRL",
  CANADA: "CAD"
};

const currencyPresetCodes = ["USD", "EUR", "JPY", "GBP", "MXN", "ARS", "CLP", "COP"];

const setupCurrencyChoices = {
  CAD: { tabName: "Canada" },
  BRL: { tabName: "Brasil" },
  USD: { tabName: "United States" },
  JPY: { tabName: "Japan" }
};

const defaultCurrencies = {
  CAD: knownCurrencies.CAD,
  BRL: knownCurrencies.BRL
};

const defaultAccounts = [
  { id: "canada", name: "Canada", currency: "CAD", dashboard: "canadaDashboard" },
  { id: "brazil", name: "Brasil", currency: "BRL", dashboard: "brazilDashboard" }
];

const defaultSupabaseUrl = "https://wzsefkygcxvulukzszfw.supabase.co";
const defaultSupabasePublishableKey = "sb_publishable_y8x4Ty0_9mRjrTpEA7cyzA_ULsJZHhI";

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
  language: "en",
  mainCurrency: "CAD",
  ratesToCAD: { CAD: 1, USD: 1.36, BRL: 0.25 },
  ratesUpdatedAt: "",
  ratesSource: "Manual",
  currencySettings: defaultCurrencies,
  accounts: defaultAccounts,
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
  transfers: [],
  recurringBills: [],
  sharedTabs: []
};

const translations = {
  pt: {
    "Home": "Início",
    "Transactions": "Transações",
    "Reports": "Relatórios",
    "Settings": "Configurações",
    "Investments": "Investimentos",
    "Mode": "Modo",
    "Set up your money tabs": "Configure suas abas de dinheiro",
    "Create your account, choose the currencies you use, and turn on sync for your phone and computer.": "Crie sua conta, escolha as moedas que você usa e ative a sincronização no celular e no computador.",
    "Choose your currencies first, add an optional PIN, then create your account to turn on sync.": "Escolha suas moedas primeiro, adicione um PIN opcional e depois crie sua conta para ativar a sincronização.",
    "Create your account": "Crie sua conta",
    "An account is required so your data can sync safely on your phone and computer.": "Uma conta é obrigatória para seus dados sincronizarem com segurança no celular e no computador.",
    "At least 6 characters": "Pelo menos 6 caracteres",
    "Email": "E-mail",
    "Password": "Senha",
    "Create account": "Criar conta",
    "I already have an account": "Já tenho uma conta",
    "Forgot password?": "Esqueceu a senha?",
    "Choose currency tabs": "Escolha as abas de moeda",
    "Canada CAD": "Canadá CAD",
    "Brasil BRL": "Brasil BRL",
    "United States USD": "Estados Unidos USD",
    "Japan JPY": "Japão JPY",
    "Other tab name": "Nome de outra aba",
    "Code, like EUR": "Código, como EUR",
    "Use a PIN on this device": "Usar PIN neste dispositivo",
    "4 to 6 digit PIN": "PIN de 4 a 6 dígitos",
    "Enter your PIN": "Digite seu PIN",
    "PIN": "PIN",
    "Unlock": "Desbloquear",
    "Account": "Conta",
    "Money setup": "Configuração do dinheiro",
    "Lists": "Listas",
    "Recurring bills": "Contas recorrentes",
    "Chart colors": "Cores dos gráficos",
    "Backup": "Backup",
    "Show": "Mostrar",
    "Hide": "Ocultar",
    "Account info": "Informações da conta",
    "Sign in once and the app syncs automatically on your phone and computer.": "Entre uma vez e o app sincroniza automaticamente no celular e no computador.",
    "Sign in": "Entrar",
    "Sign out": "Sair",
    "Cloud sync is not connected yet.": "A sincronização na nuvem ainda não está conectada.",
    "PIN lock": "Bloqueio por PIN",
    "Ask for a PIN when this app opens": "Pedir um PIN quando o app abrir",
    "Save PIN setting": "Salvar configuração do PIN",
    "PIN is optional and only protects this device.": "O PIN é opcional e protege apenas este dispositivo.",
    "Main currency": "Moeda principal",
    "Currency tabs": "Abas de moeda",
    "Conversion rates": "Taxas de conversão",
    "Joint tabs": "Abas conjuntas",
    "Create a shared tab, then send the invite code to the other person.": "Crie uma aba compartilhada e envie o código de convite para a outra pessoa.",
    "Joint Brasil Tanya & Oliver": "Brasil conjunto Tanya e Oliver",
    "Create joint tab": "Criar aba conjunta",
    "Creating...": "Criando...",
    "Paste invite code": "Colar código de convite",
    "Join joint tab": "Entrar na aba conjunta",
    "Joining...": "Entrando...",
    "No joint tabs yet": "Ainda não há abas conjuntas",
    "Invite code": "Código de convite",
    "Copy code": "Copiar código",
    "Leave": "Sair",
    "Delete for everyone": "Excluir para todos",
    "Your invite code": "Seu código de convite",
    "Send this code to the other person.": "Envie este código para a outra pessoa.",
    "This is the currency used for big totals and investment totals.": "Esta é a moeda usada nos totais principais e nos totais de investimento.",
    "Main currency for totals": "Moeda principal dos totais",
    "Pick a currency below, or type your own 3-letter code.": "Escolha uma moeda abaixo ou digite seu próprio código de 3 letras.",
    "US dollar": "Dólar americano",
    "Euro": "Euro",
    "Japan yen": "Iene japonês",
    "British pound": "Libra britânica",
    "Mexico peso": "Peso mexicano",
    "Argentina peso": "Peso argentino",
    "Chile peso": "Peso chileno",
    "Colombia peso": "Peso colombiano",
    "Tab name, like United States": "Nome da aba, como Estados Unidos",
    "Code, like USD or JPY": "Código, como USD ou JPY",
    "Currency name": "Nome da moeda",
    "Symbol, like $": "Símbolo, como $",
    "Exchange rate, optional": "Taxa de câmbio, opcional",
    "Starting balance": "Saldo inicial",
    "Add currency tab": "Adicionar aba de moeda",
    "Exchange rates to CAD": "Taxas de câmbio para CAD",
    "Update online rates": "Atualizar taxas online",
    "Manual rates are being used.": "As taxas manuais estão sendo usadas.",
    "Income sources": "Fontes de renda",
    "New source": "Nova fonte",
    "Expense categories": "Categorias de despesa",
    "New category": "Nova categoria",
    "Payment methods": "Formas de pagamento",
    "New payment method": "Nova forma de pagamento",
    "Add": "Adicionar",
    "Add reminder": "Adicionar lembrete",
    "Bill name": "Nome da conta",
    "Amount": "Valor",
    "Day 1-31": "Dia 1-31",
    "Keep bills here for now. They show on Home under upcoming reminders.": "Deixe as contas aqui por enquanto. Elas aparecem no Início em próximos lembretes.",
    "Change the colors used in your earning and spending bars.": "Altere as cores usadas nas barras de ganhos e gastos.",
    "Export CSV": "Exportar CSV",
    "Export full backup": "Exportar backup completo",
    "Import full backup": "Importar backup completo",
    "A full backup saves transactions, investments, reminders, categories, colors, and settings.": "Um backup completo salva transações, investimentos, lembretes, categorias, cores e configurações.",
    "Language": "Idioma",
    "Choose the language for the app.": "Escolha o idioma do app.",
    "App language": "Idioma do app",
    "English": "Inglês",
    "Portuguese": "Português",
    "+ Add Income": "+ Adicionar renda",
    "- Add Expense": "- Adicionar despesa",
    "+ Add Investment": "+ Adicionar investimento",
    "Transfer Money": "Transferir dinheiro",
    "Quick actions": "Ações rápidas",
    "Investment money": "Dinheiro investido",
    "Upcoming reminders": "Próximos lembretes",
    "Income this month": "Renda deste mês",
    "Expenses this month": "Despesas deste mês",
    "Investments this month": "Investimentos deste mês",
    "Money remaining this month": "Dinheiro restante neste mês",
    "Earnings by source": "Ganhos por fonte",
    "Spending by category": "Gastos por categoria",
    "No earning chart yet": "Ainda não há gráfico de ganhos",
    "No spending chart yet": "Ainda não há gráfico de gastos",
    "No investment money recorded yet": "Nenhum dinheiro de investimento registrado ainda",
    "No recurring reminders yet": "Nenhum lembrete recorrente ainda",
    "Total put in investments": "Total colocado em investimentos",
    "Total gain/loss": "Ganho/perda total",
    "Minimize": "Minimizar",
    "+ Income": "+ Renda",
    "- Expense": "- Despesa",
    "Total investments": "Total de investimentos",
    "Totals by currency": "Totais por moeda",
    "Choose investment tab": "Escolha a aba de investimento",
    "No investments yet": "Nenhum investimento ainda",
    "Add simple investment records here.": "Adicione registros simples de investimento aqui.",
    "Search transactions": "Pesquisar transações",
    "All": "Todos",
    "Income": "Renda",
    "Expense": "Despesa",
    "Invest": "Investir",
    "Transfer": "Transferência",
    "All categories": "Todas as categorias",
    "All currencies": "Todas as moedas",
    "No records found": "Nenhum registro encontrado",
    "Try changing the search or filters.": "Tente mudar a pesquisa ou os filtros.",
    "This month vs last month": "Este mês vs mês passado",
    "Months": "Meses",
    "Years": "Anos",
    "No months yet": "Ainda não há meses",
    "No years yet": "Ainda não há anos",
    "Made": "Ganhos",
    "Spent": "Gastos",
    "Invested": "Investido",
    "Left": "Restante",
    "Transfer in": "Transferência recebida",
    "Transfer out": "Transferência enviada",
    "Fees": "Taxas",
    "No records": "Nenhum registro",
    "Add Income": "Adicionar renda",
    "Add income": "Adicionar renda",
    "Edit Income": "Editar renda",
    "Edit income": "Editar renda",
    "Add Expense": "Adicionar despesa",
    "Add expense": "Adicionar despesa",
    "Edit Expense": "Editar despesa",
    "Edit expense": "Editar despesa",
    "Currency": "Moeda",
    "Currency tab": "Aba de moeda",
    "Date": "Data",
    "Source": "Fonte",
    "Income source": "Fonte de renda",
    "Expense category": "Categoria de despesa",
    "Payment method": "Forma de pagamento",
    "Exchange rate used": "Taxa de câmbio usada",
    "Optional note": "Observação opcional",
    "Save": "Salvar",
    "Save reminder": "Salvar lembrete",
    "From": "De",
    "Amount sent": "Valor enviado",
    "Currency sent": "Moeda enviada",
    "To": "Para",
    "Amount received": "Valor recebido",
    "Currency received": "Moeda recebida",
    "Transfer fee": "Taxa de transferência",
    "Fee currency": "Moeda da taxa",
    "Add Investment": "Adicionar investimento",
    "Edit Investment": "Editar investimento",
    "Name": "Nome",
    "Stock, fund, crypto, savings": "Ação, fundo, cripto, poupança",
    "Current value": "Valor atual",
    "Investment tab": "Aba de investimento",
    "Take this money out of that currency tab": "Tirar esse dinheiro dessa aba de moeda",
    "Edit": "Editar",
    "Delete": "Excluir",
    "Fee": "Taxa",
    "No fee": "Sem taxa",
    "Cash": "Dinheiro",
    "Debit card": "Cartão de débito",
    "Credit card": "Cartão de crédito",
    "Bank transfer": "Transferência bancária",
    "Job": "Trabalho",
    "Side job": "Bico",
    "Gift or present": "Presente",
    "Investment return": "Retorno de investimento",
    "Rent received": "Aluguel recebido",
    "Refund": "Reembolso",
    "Other": "Outro",
    "Rent or housing": "Aluguel ou moradia",
    "Groceries": "Mercado",
    "Restaurants and takeout": "Restaurantes e delivery",
    "Internet": "Internet",
    "Phone": "Telefone",
    "Car": "Carro",
    "Gas": "Gasolina",
    "Transportation": "Transporte",
    "Water": "Água",
    "Electricity": "Eletricidade",
    "Insurance": "Seguro",
    "Health": "Saúde",
    "Entertainment": "Entretenimento",
    "Shopping": "Compras",
    "Subscriptions": "Assinaturas",
    "Education": "Educação",
    "Travel": "Viagem",
    "Gifts": "Presentes",
    "Taxes": "Impostos",
    "Canadian dollar": "Dólar canadense",
    "Brazilian real": "Real brasileiro",
    "Japanese yen": "Iene japonês",
    "British pound": "Libra britânica",
    "Mexican peso": "Peso mexicano",
    "Argentine peso": "Peso argentino",
    "Chilean peso": "Peso chileno",
    "Colombian peso": "Peso colombiano",
    "Canada": "Canadá",
    "Japan": "Japão",
    "United States": "Estados Unidos",
    "United Kingdom": "Reino Unido",
    "Europe": "Europa",
    "Mexico": "México",
    "Argentina": "Argentina",
    "Chile": "Chile",
    "Colombia": "Colômbia",
    "Close": "Fechar",
    "New name": "Novo nome",
    "Delete this transaction?": "Excluir esta transação?",
    "Delete this investment?": "Excluir este investimento?",
    "Delete this transfer?": "Excluir esta transferência?",
    "Delete this recurring reminder?": "Excluir este lembrete recorrente?",
    "Keep at least one currency tab turned on.": "Mantenha pelo menos uma aba de moeda ligada.",
    "This tab has records. Hide it instead so your old data stays safe.": "Esta aba tem registros. Oculte-a para manter seus dados antigos seguros.",
    "Keep at least one currency tab.": "Mantenha pelo menos uma aba de moeda.",
    "Use 4 to 6 numbers for the PIN.": "Use 4 a 6 números para o PIN.",
    "PIN is turned off.": "O PIN está desativado.",
    "PIN is turned on for this device.": "O PIN está ativado neste dispositivo.",
    "Enter your 4 to 6 digit PIN.": "Digite seu PIN de 4 a 6 dígitos.",
    "That PIN is not correct.": "Esse PIN não está correto.",
    "Choose at least one currency tab.": "Escolha pelo menos uma aba de moeda.",
    "Create an account or sign in to finish setup.": "Crie uma conta ou entre para terminar a configuração.",
    "Cloud settings saved. Sign up or log in to sync.": "Configurações da nuvem salvas. Crie uma conta ou entre para sincronizar.",
    "Account created. Auto sync is on.": "Conta criada. A sincronização automática está ativada.",
    "Account created. Check your email, then sign in.": "Conta criada. Verifique seu e-mail e depois entre.",
    "Signed in. Auto sync is on.": "Você entrou. A sincronização automática está ativada.",
    "Password reset email sent. Check your inbox.": "E-mail de redefinição de senha enviado. Verifique sua caixa de entrada.",
    "Logged out. Local data is still saved on this device.": "Você saiu. Os dados locais ainda estão salvos neste dispositivo.",
    "Sign in before creating a joint tab.": "Entre antes de criar uma aba conjunta.",
    "Sign in before joining a joint tab.": "Entre antes de entrar em uma aba conjunta.",
    "Sign in to save to a joint tab.": "Entre para salvar em uma aba conjunta.",
    "Joint tabs are not set up in Supabase yet. Run the Joint tabs SQL from the README, then refresh this app.": "As abas conjuntas ainda não foram configuradas no Supabase. Rode o SQL de abas conjuntas do README e atualize este app.",
    "Add a name for the joint tab.": "Adicione um nome para a aba conjunta.",
    "Creating joint tab...": "Criando aba conjunta...",
    "Joint tab created. Send this invite code:": "Aba conjunta criada. Envie este código de convite:",
    "Joint tab could not be opened after it was created.": "Não foi possível abrir a aba conjunta depois de criada.",
    "Paste the invite code first.": "Cole o código de convite primeiro.",
    "Joining joint tab...": "Entrando na aba conjunta...",
    "Syncing joint tabs...": "Sincronizando abas conjuntas...",
    "Leaving joint tab...": "Saindo da aba conjunta...",
    "Joint tab removed from your account.": "Aba conjunta removida da sua conta.",
    "Deleting joint tab...": "Excluindo aba conjunta...",
    "Joint tab deleted for everyone.": "Aba conjunta excluída para todos.",
    "Leave this joint tab?": "Sair desta aba conjunta?",
    "Delete this joint tab for everyone?": "Excluir esta aba conjunta para todos?",
    "Invite code not found.": "Código de convite não encontrado.",
    "Joint tab joined.": "Você entrou na aba conjunta.",
    "Invite code copied.": "Código de convite copiado.",
    "Added by": "Adicionado por",
    "Shared user": "Usuário compartilhado",
    "Joint tab": "Aba conjunta",
    "Auto-saved to cloud.": "Salvo automaticamente na nuvem.",
    "Auto-loaded cloud data.": "Dados da nuvem carregados automaticamente.",
    "Loaded cloud data onto this device.": "Dados da nuvem carregados neste dispositivo.",
    "Loaded new cloud data from your other device.": "Novos dados da nuvem carregados do outro dispositivo.",
    "Full backup downloaded. Keep that file somewhere safe.": "Backup completo baixado. Guarde esse arquivo em um lugar seguro.",
    "Backup imported on this device.": "Backup importado neste dispositivo.",
    "That backup file could not be opened.": "Não foi possível abrir esse arquivo de backup.",
    "Updating rates from the internet...": "Atualizando taxas pela internet...",
    "CAD is already the base rate.": "CAD já é a taxa base.",
    "Could not update online. Your saved/manual rates are still being used.": "Não foi possível atualizar online. Suas taxas salvas/manuais ainda estão sendo usadas.",
    "For custom currencies, use the real 3-letter code and add the exchange rate if you know it.": "Para moedas personalizadas, use o código real de 3 letras e adicione a taxa de câmbio se souber.",
    "Pick one of the currency buttons, or type a 3-letter code like USD, JPY, EUR, GBP, or CAD.": "Escolha um dos botões de moeda ou digite um código de 3 letras como USD, JPY, EUR, GBP ou CAD.",
    "From somewhere else": "Veio de outro lugar",
    "Blue deduction from tab": "Dedução azul da aba"
  }
};

const translatedTextNodes = new WeakMap();
let lastLocalizedLanguage = "en";

let state = loadState();
let syncConfig = loadSyncConfig();
let setupComplete = localStorage.getItem("makeSpendSetupComplete") === "true" || hasSavedFinanceData();
let pinState = loadPinState();
let appUnlocked = !pinState.enabled;
let cloudSaveTimer = null;
let cloudState = {
  client: null,
  user: null,
  enabled: localStorage.getItem("makeSpendCloudEnabled") === "true",
  lastUpdatedAt: localStorage.getItem("makeSpendCloudUpdatedAt") || "",
  loading: false,
  saving: false
};
let filters = { kind: "all", category: "all", currency: "all", search: "" };
let openSettingsPanels = new Set(loadOpenSections("makeSpendSettingsOpen", ["account"]));
let openMoneySettingsPanels = new Set(loadOpenSections("makeSpendMoneySettingsOpen", ["main"]));
let selectedMonth = monthKey(today());
let editingRecurringBillId = "";
let jointTabUi = { loading: "", latestInviteCode: "" };

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function currentLanguage() {
  return state?.language === "pt" ? "pt" : "en";
}

function appLocale() {
  return currentLanguage() === "pt" ? "pt-BR" : undefined;
}

function translateText(value, language = currentLanguage()) {
  const text = String(value);
  if (language === "en") return text;
  const dictionary = translations[language] || {};
  const trimmed = text.trim();
  if (!trimmed) return text;
  if (dictionary[trimmed]) return text.replace(trimmed, dictionary[trimmed]);

  let translated = text;
  Object.entries(dictionary)
    .filter(([english]) => english.length > 3)
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([english, translatedPhrase]) => {
      translated = translated.replaceAll(english, translatedPhrase);
    });
  return translated
    .replaceAll("Rate:", "Taxa:")
    .replaceAll("equals CAD", "equivale a CAD")
    .replaceAll("reports", "relatórios")
    .replaceAll("invested", "investido")
    .replaceAll("gain/loss", "ganho/perda")
    .replaceAll("sent", "enviado")
    .replaceAll("received", "recebido")
    .replaceAll("Current value:", "Valor atual:")
    .replaceAll("Gain/loss:", "Ganho/perda:")
    .replaceAll("this month", "este mês")
    .replaceAll("from last month", "desde o mês passado")
    .replaceAll("Last synced", "Última sincronização")
    .replaceAll("Manual rates", "Taxas manuais")
    .replaceAll("Online rates", "Taxas online");
}

function localizeAttribute(element, attribute) {
  const originalAttribute = `data-original-${attribute.replace(/[^a-z0-9]+/gi, "-")}`;
  if (!element.hasAttribute(originalAttribute)) element.setAttribute(originalAttribute, element.getAttribute(attribute) || "");
  element.setAttribute(attribute, translateText(element.getAttribute(originalAttribute) || ""));
}

function localizePage() {
  const language = currentLanguage();
  const languageChanged = language !== lastLocalizedLanguage;
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    let original = translatedTextNodes.get(node);
    if (!original) {
      original = node.nodeValue;
      translatedTextNodes.set(node, original);
    } else if (!languageChanged) {
      const expected = translateText(original, lastLocalizedLanguage);
      if (node.nodeValue !== expected) {
        original = node.nodeValue;
        translatedTextNodes.set(node, original);
      }
    }
    node.nodeValue = translateText(original, language);
  });

  $$("[placeholder]").forEach((element) => localizeAttribute(element, "placeholder"));
  $$("[aria-label]").forEach((element) => localizeAttribute(element, "aria-label"));
  $$("[title]").forEach((element) => localizeAttribute(element, "title"));
  lastLocalizedLanguage = language;
}

const nativeAlert = window.alert.bind(window);
const nativeConfirm = window.confirm.bind(window);
const nativePrompt = window.prompt.bind(window);
window.alert = (message) => nativeAlert(translateText(message));
window.confirm = (message) => nativeConfirm(translateText(message));
window.prompt = (message, fallback = "") => nativePrompt(translateText(message), fallback);

function loadState() {
  try {
    return normalizeState(JSON.parse(localStorage.getItem("makeSpendData") || "{}"));
  } catch {
    return normalizeState({});
  }
}

function loadSyncConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem("makeSpendSyncConfig") || "{}");
    return {
      supabaseUrl: saved.supabaseUrl || defaultSupabaseUrl,
      publishableKey: saved.publishableKey || defaultSupabasePublishableKey
    };
  } catch {
    return { supabaseUrl: defaultSupabaseUrl, publishableKey: defaultSupabasePublishableKey };
  }
}

function saveSyncConfig() {
  localStorage.setItem("makeSpendSyncConfig", JSON.stringify(syncConfig));
}

function loadOpenSections(key, fallback) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(saved) ? saved : fallback;
  } catch {
    return fallback;
  }
}

function saveOpenSections(key, sections) {
  localStorage.setItem(key, JSON.stringify([...sections]));
}

function hasSavedFinanceData() {
  try {
    const saved = JSON.parse(localStorage.getItem("makeSpendData") || "{}");
    return Boolean(
      saved.transactions?.length ||
      saved.investments?.length ||
      saved.transfers?.length ||
      saved.recurringBills?.length
    );
  } catch {
    return false;
  }
}

function loadPinState() {
  try {
    const saved = JSON.parse(localStorage.getItem("makeSpendPin") || "{}");
    return {
      enabled: saved.enabled === true,
      hash: saved.hash || ""
    };
  } catch {
    return { enabled: false, hash: "" };
  }
}

function savePinState() {
  localStorage.setItem("makeSpendPin", JSON.stringify(pinState));
}

function normalizeState(saved) {
  const currencySettings = { ...defaultCurrencies, ...(saved.currencySettings || {}) };
  const accounts = (saved.accounts || defaultAccounts).map((account) => ({ ...account }));
  const accountSettings = {
    ...defaults.accountSettings,
    ...(saved.accountSettings || {})
  };
  accounts.forEach((account) => {
    if (!accountSettings[account.id]) accountSettings[account.id] = { startingBalance: 0 };
    if (typeof accountSettings[account.id].homeCollapsed !== "boolean") accountSettings[account.id].homeCollapsed = false;
    if (typeof accountSettings[account.id].reportsCollapsed !== "boolean") accountSettings[account.id].reportsCollapsed = false;
    if (!currencySettings[account.currency]) currencySettings[account.currency] = { name: account.currency, symbol: `${account.currency} ` };
  });
  const usedCurrencies = new Set([
    ...accounts.map((account) => account.currency),
    ...(saved.transactions || []).map((transaction) => transaction.currency),
    ...(saved.investments || []).map((investment) => investment.currency),
    ...(saved.transfers || []).flatMap((transfer) => [transfer.sentCurrency, transfer.receivedCurrency, transfer.feeCurrency].filter(Boolean)),
    ...(saved.recurringBills || []).map((bill) => bill.currency)
  ]);
  Object.keys(currencySettings).forEach((code) => {
    if (!usedCurrencies.has(code)) delete currencySettings[code];
  });

  return {
    ...defaults,
    ...saved,
    language: saved.language || localStorage.getItem("makeSpendLanguage") || defaults.language,
    currencySettings,
    accounts,
    ratesToCAD: normalizeRates(currencySettings, { ...defaults.ratesToCAD, ...(saved.ratesToCAD || {}) }),
    ratesUpdatedAt: saved.ratesUpdatedAt || defaults.ratesUpdatedAt,
    ratesSource: saved.ratesSource || defaults.ratesSource,
    accountSettings,
    incomeSources: saved.incomeSources || defaults.incomeSources,
    incomeSourceColors: { ...defaults.incomeSourceColors, ...(saved.incomeSourceColors || {}) },
    expenseCategories: saved.expenseCategories || defaults.expenseCategories,
    expenseCategoryColors: { ...defaults.expenseCategoryColors, ...(saved.expenseCategoryColors || {}) },
    paymentMethods: saved.paymentMethods || defaults.paymentMethods,
    transactions: saved.transactions || [],
    investments: saved.investments || [],
    transfers: saved.transfers || [],
    recurringBills: saved.recurringBills || [],
    sharedTabs: saved.sharedTabs || []
  };
}

function normalizeRates(currencySettings, rates) {
  const normalized = { ...rates, CAD: 1 };
  Object.keys(currencySettings).forEach((code) => {
    if (!Number(normalized[code])) normalized[code] = code === "CAD" ? 1 : 1;
  });
  return normalized;
}

function saveState() {
  localStorage.setItem("makeSpendData", JSON.stringify(state));
  queueCloudSave();
}

let lockedScrollY = 0;

function lockPageBehindDialog() {
  if (document.body.classList.contains("dialog-open")) return;
  lockedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.classList.add("dialog-open");
}

function unlockPageBehindDialog() {
  if ([...document.querySelectorAll("dialog")].some((dialog) => dialog.open)) return;
  document.body.classList.remove("dialog-open");
  document.body.style.top = "";
  window.scrollTo(0, lockedScrollY);
}

function openDialog(dialog) {
  lockPageBehindDialog();
  dialog.showModal();
}

function closeDialog(dialog) {
  dialog.close();
  unlockPageBehindDialog();
}

function allAccounts() {
  return (state.accounts?.length ? state.accounts : defaultAccounts).map((account) => ({
    ...account,
    active: account.active !== false
  }));
}

function activeAccounts() {
  const active = allAccounts().filter((account) => account.active !== false);
  return active.length ? active : allAccounts().slice(0, 1);
}

function currencyInfo(currency) {
  return state.currencySettings?.[currency] || knownCurrencies[currency] || { name: currency, symbol: `${currency} ` };
}

function allCurrencyCodes() {
  return [...new Set([
    ...Object.keys(state.currencySettings || {}),
    ...allAccounts().map((account) => account.currency),
    ...state.transactions.map((transaction) => transaction.currency),
    ...state.investments.map((investment) => investment.currency),
    ...state.transfers.flatMap((transfer) => [transfer.sentCurrency, transfer.receivedCurrency, transfer.feeCurrency].filter(Boolean))
  ])].sort();
}

function activeCurrencyCodes(extraCurrency = "") {
  return [...new Set([
    ...activeAccounts().map((account) => account.currency),
    extraCurrency
  ].filter(Boolean))].sort();
}

function currencyOptionsTemplate(selectedCurrency = state.mainCurrency, includeAll = false) {
  const codes = includeAll ? allCurrencyCodes() : activeCurrencyCodes(selectedCurrency);
  return codes.map((code) => {
    const info = currencyInfo(code);
    return `<option value="${escapeAttr(code)}"${code === selectedCurrency ? " selected" : ""}>${escapeHtml(info.name)} - ${escapeHtml(code)}</option>`;
  }).join("");
}

function accountOptionsTemplate(selectedAccountId = "", includeInactive = false) {
  const accounts = includeInactive ? allAccounts() : activeAccounts();
  const selectedAccount = allAccounts().find((account) => account.id === selectedAccountId);
  const options = selectedAccount && !accounts.some((account) => account.id === selectedAccount.id)
    ? [...accounts, selectedAccount]
    : accounts;
  return options.map((account) => `
    <option value="${escapeAttr(account.id)}"${account.id === selectedAccountId ? " selected" : ""}>
      ${escapeHtml(account.name)} - ${escapeHtml(account.currency)}
    </option>
  `).join("");
}

function money(amount, currency = state.mainCurrency) {
  const numericAmount = Number(amount) || 0;
  const value = Math.abs(numericAmount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${numericAmount < 0 ? "-" : ""}${currencyInfo(currency).symbol}${value} ${currency}`;
}

function decimalValue(value) {
  const text = String(value ?? "").trim().replace(/\s/g, "");
  if (!text) return 0;
  const lastComma = text.lastIndexOf(",");
  const lastDot = text.lastIndexOf(".");
  let normalized = text;

  if (lastComma >= 0 && lastDot >= 0) {
    const decimalSeparator = lastComma > lastDot ? "," : ".";
    const thousandsSeparator = decimalSeparator === "," ? "." : ",";
    normalized = text.replaceAll(thousandsSeparator, "").replace(decimalSeparator, ".");
  } else {
    normalized = text.replace(",", ".");
  }

  return Number(normalized.replace(/[^0-9.-]/g, "")) || 0;
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
  const match = activeAccounts().find((country) => country.currency === investment.currency) || allAccounts().find((country) => country.currency === investment.currency);
  return match?.id || "canada";
}

function convertedAmount(amount, fromCurrency, targetCurrency) {
  if (fromCurrency === targetCurrency) return Number(amount);
  const cad = Number(amount) * Number(state.ratesToCAD[fromCurrency]);
  return cad / Number(state.ratesToCAD[targetCurrency]);
}

function countryCurrency(countryId) {
  return allAccounts().find((country) => country.id === countryId)?.currency || activeAccounts()[0]?.currency || "CAD";
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

function colorForRecord(record) {
  if (record.kind === "income") return colorForIncomeSource(record.category);
  if (record.kind === "expense") return colorForCategory(record.category);
  return "var(--blue)";
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
  return new Date().toLocaleDateString(appLocale(), { month: "long", year: "numeric" });
}

function monthKey(value) {
  return value.slice(0, 7);
}

function yearKey(value) {
  return value.slice(0, 4);
}

function monthLabel(key) {
  return new Date(`${key}-01T00:00:00`).toLocaleDateString(appLocale(), { month: "long", year: "numeric" });
}

function shiftMonth(key, amount) {
  const date = new Date(`${key}-01T00:00:00`);
  date.setMonth(date.getMonth() + amount);
  return date.toISOString().slice(0, 7);
}

function render() {
  document.body.classList.toggle("dark", state.theme === "dark");
  document.body.classList.toggle("app-locked", !appUnlocked);
  renderHome();
  renderInvestments();
  renderTransactions();
  renderReports();
  renderSettings();
  renderSetupGate();
  renderPinLock();
  localizePage();
  saveState();
}

function renderHome() {
  $("#homeDashboard").innerHTML = `
    <section class="home-grid">
      ${activeAccounts().map((country) => accountCardTemplate(country, monthKey(today()))).join("")}
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
    <section class="panel">
      <h2>Upcoming reminders</h2>
      ${homeRecurringSummary()}
    </section>
  `;
}

function homeInvestmentSummary() {
  const total = state.investments.reduce((sum, investment) => sum + investmentInCurrency(investment, state.mainCurrency), 0);
  const currentValueTotal = state.investments.reduce((sum, investment) => sum + investmentValueInCurrency(investment, state.mainCurrency), 0);
  const gainLoss = currentValueTotal - total;
  if (!state.investments.length) {
    return `<p class="eyebrow">No investment money recorded yet</p>`;
  }
  const countryTotals = activeAccounts().map((country) => {
    const countryTotal = state.investments
      .filter((investment) => investmentCountry(investment) === country.id)
      .reduce((sum, investment) => sum + investmentInCurrency(investment, country.currency), 0);
    const countryCurrent = state.investments
      .filter((investment) => investmentCountry(investment) === country.id)
      .reduce((sum, investment) => sum + investmentValueInCurrency(investment, country.currency), 0);
    return `
      <div class="metric">
        <span>${country.name} invested</span>
        <strong class="blue">${money(countryTotal, country.currency)}</strong>
      </div>
      <div class="metric">
        <span>${country.name} gain/loss</span>
        <strong class="${countryCurrent - countryTotal >= 0 ? "green" : "red"}">${money(countryCurrent - countryTotal, country.currency)}</strong>
      </div>
    `;
  }).join("");
  return `
    <div class="metric">
      <span>Total put in investments</span>
      <strong class="blue">${money(total, state.mainCurrency)}</strong>
    </div>
    <div class="metric">
      <span>Current value</span>
      <strong class="blue">${money(currentValueTotal, state.mainCurrency)}</strong>
    </div>
    <div class="metric">
      <span>Total gain/loss</span>
      <strong class="${gainLoss >= 0 ? "green" : "red"}">${money(gainLoss, state.mainCurrency)}</strong>
    </div>
    ${countryTotals}
    <div class="mini-list">
      ${state.investments.slice(0, 3).map(investmentTemplate).join("")}
    </div>
  `;
}

function homeRecurringSummary() {
  if (!state.recurringBills.length) return `<p class="eyebrow">No recurring reminders yet</p>`;
  return `
    <div class="mini-list">
      ${state.recurringBills
    .slice()
    .sort((a, b) => Number(a.day) - Number(b.day))
    .slice(0, 4)
    .map(recurringBillTemplate)
    .join("")}
    </div>
  `;
}

function accountCardTemplate(country, selectedMonthKey) {
  const currency = country.currency;
  const summary = accountSummary(country.id, selectedMonthKey);
  const isCollapsed = state.accountSettings[country.id]?.homeCollapsed === true;
  if (isCollapsed) {
    return `
      <section class="panel account-card account-card-collapsed">
        <div class="account-card-head">
          <div>
            <h2>${escapeHtml(country.name)}</h2>
            <p>${escapeHtml(currency)}</p>
          </div>
          <button class="mini-toggle" type="button" data-toggle-home-account="${escapeAttr(country.id)}">Show</button>
        </div>
        <div class="balance small-balance">${money(summary.available, currency)}</div>
      </section>
    `;
  }
  return `
    <section class="panel account-card">
      <div class="account-card-head">
        <div>
          <h2>${escapeHtml(country.name)}</h2>
          <p>${escapeHtml(currency)}</p>
        </div>
        <button class="mini-toggle" type="button" data-toggle-home-account="${escapeAttr(country.id)}">Minimize</button>
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
  const totalsByCurrency = allCurrencyCodes().reduce((totals, currency) => {
    totals[currency] = state.investments
      .filter((investment) => investment.currency === currency)
      .reduce((sum, investment) => sum + Number(investment.amount), 0);
    return totals;
  }, {});

  $("#investmentCurrency").textContent = state.mainCurrency;
  $("#investmentTotal").textContent = money(total, state.mainCurrency);
  const investmentChoices = document.querySelector(".investment-choices");
  if (investmentChoices) {
    investmentChoices.innerHTML = activeAccounts().map((account) => `
      <button class="investment-choice" data-add-investment-country="${escapeAttr(account.id)}">
        <strong>${escapeHtml(account.currency.slice(0, 2))}</strong>
        <span>${escapeHtml(account.name)} investment</span>
        <small>${escapeHtml(account.currency)}</small>
      </button>
    `).join("");
  }
  $("#investmentCurrencyTotals").innerHTML = allCurrencyCodes().map((currency) => `
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
    <article class="transaction" style="--transaction-color: var(--blue)">
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
  const categories = [...new Set([
    ...state.incomeSources,
    ...state.expenseCategories,
    ...state.transactions.map((transaction) => transaction.category),
    "Investment",
    "Transfer"
  ])].sort();

  $("#categoryFilter").innerHTML = `<option value="all">All categories</option>` +
    categories.map((category) => `<option value="${escapeAttr(category)}">${escapeHtml(category)}</option>`).join("");
  $("#categoryFilter").value = filters.category;
  if (filters.currency !== "all" && !allCurrencyCodes().includes(filters.currency)) filters.currency = "all";
  $("#currencyFilter").innerHTML = `<option value="all">All currencies</option>` +
    allCurrencyCodes().map((code) => `<option value="${escapeAttr(code)}">${escapeHtml(code)}</option>`).join("");
  $("#currencyFilter").value = allCurrencyCodes().includes(filters.currency) ? filters.currency : "all";

  const records = [
    ...state.transactions.map((record) => ({
      type: record.kind,
      date: record.date,
      category: record.category,
      currencies: [record.currency],
      html: transactionTemplate(record),
      text: `${record.kind} ${record.category} ${record.currency} ${record.note || ""}`
    })),
    ...state.investments.map((record) => ({
      type: "investment",
      date: record.date,
      category: "Investment",
      currencies: [record.currency],
      html: investmentTemplate(record),
      text: `investment ${record.name} ${record.currency} ${countryName(investmentCountry(record))} ${record.note || ""}`
    })),
    ...state.transfers.map((record) => ({
      type: "transfer",
      date: record.date,
      category: "Transfer",
      currencies: [record.sentCurrency, record.receivedCurrency, record.feeCurrency],
      html: transferTemplate(record),
      text: `transfer ${countryName(record.fromAccount)} ${countryName(record.toAccount)} ${record.sentCurrency} ${record.receivedCurrency} ${record.note || ""}`
    }))
  ];

  const visible = records
    .filter((record) => filters.kind === "all" || record.type === filters.kind)
    .filter((record) => filters.currency === "all" || record.currencies.includes(filters.currency))
    .filter((record) => filters.category === "all" || record.category === filters.category)
    .filter((transaction) => {
      return transaction.text.toLowerCase().includes(filters.search.toLowerCase());
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  $("#transactionList").innerHTML = `
    ${visible.length
    ? visible.map((record) => record.html).join("")
    : `<section class="panel"><strong>No records found</strong><p class="eyebrow">Try changing the search or filters.</p></section>`}
  `;
}

function renderReports() {
  $("#reportsRoot").innerHTML = activeAccounts().map((country) => {
    const months = buildPeriodReports("month", country.id);
    const years = buildPeriodReports("year", country.id);
    const isCollapsed = state.accountSettings[country.id]?.reportsCollapsed === true;
    const thisMonth = months.find((report) => report.key === monthKey(today())) || emptyReport(monthKey(today()), "month", country.currency);
    if (isCollapsed) {
      return `
        <section class="panel report-section report-section-collapsed">
          <div class="account-card-head">
            <div>
              <h2>${escapeHtml(country.name)} reports</h2>
              <p>${escapeHtml(country.currency)}</p>
            </div>
            <button class="mini-toggle" type="button" data-toggle-report-account="${escapeAttr(country.id)}">Show</button>
          </div>
          <div class="metric">
            <span>This month left</span>
            <strong>${money(thisMonth.remaining, country.currency)}</strong>
          </div>
        </section>
      `;
    }
    return `
      <section class="panel report-section">
        <div class="account-card-head">
          <div>
            <h2>${escapeHtml(country.name)} reports</h2>
            <p>${escapeHtml(country.currency)}</p>
          </div>
          <button class="mini-toggle" type="button" data-toggle-report-account="${escapeAttr(country.id)}">Minimize</button>
        </div>
        <div class="report-list">
      ${reportComparisonTemplate(months, country.currency)}
      <h3>Months</h3>
      ${months.length ? months.map(monthReportTemplate).join("") : `<p class="eyebrow">No months yet</p>`}
      <h3>Years</h3>
      ${years.length ? years.map(yearReportTemplate).join("") : `<p class="eyebrow">No years yet</p>`}
        </div>
      </section>
    `;
  }).join("");
}

function reportComparisonTemplate(months, currency) {
  const thisKey = monthKey(today());
  const lastKey = shiftMonth(thisKey, -1);
  const blankThisMonth = emptyReport(thisKey, "month", currency);
  const blankLastMonth = emptyReport(lastKey, "month", currency);
  const thisMonth = months.find((report) => report.key === thisKey) || blankThisMonth;
  const lastMonth = months.find((report) => report.key === lastKey) || blankLastMonth;

  return `
    <article class="report-card comparison-card">
      <div class="report-year-head">
        <span>This month vs last month</span>
        <strong>${money(thisMonth.remaining - lastMonth.remaining, currency)}</strong>
      </div>
      <div class="report-metrics">
        ${comparisonMetricTemplate("Made", thisMonth.income, lastMonth.income, currency, "green")}
        ${comparisonMetricTemplate("Spent", thisMonth.expenses, lastMonth.expenses, currency, "red")}
        ${comparisonMetricTemplate("Invested", thisMonth.investments, lastMonth.investments, currency, "blue")}
        ${comparisonMetricTemplate("Left", thisMonth.remaining, lastMonth.remaining, currency, "")}
      </div>
    </article>
  `;
}

function comparisonMetricTemplate(label, current, previous, currency, colorClass) {
  const change = current - previous;
  return `
    <div>
      <span>${label}</span>
      <strong class="${colorClass}">${money(current, currency)}</strong>
      <small class="${change >= 0 ? "green" : "red"}">${change >= 0 ? "+" : ""}${money(change, currency)} from last month</small>
    </div>
  `;
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
  const tipColor = colorForRecord(transaction);
  return `
    <article class="transaction" style="--transaction-color: ${escapeAttr(tipColor)}">
      <div>
        <strong>${escapeHtml(transaction.category)}</strong>
        <p>${formatDate(transaction.date)} - ${countryName(recordCountry(transaction))} - ${escapeHtml(transaction.currency)}</p>
        ${transaction.sharedBy ? `<p>Added by ${escapeHtml(transaction.sharedBy)}</p>` : ""}
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
    <article class="transaction transfer-row" style="--transaction-color: var(--gray-action)">
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
  if (!activeCurrencyCodes().includes(state.mainCurrency)) state.mainCurrency = activeAccounts()[0]?.currency || "CAD";
  $("#mainCurrency").innerHTML = currencyOptionsTemplate(state.mainCurrency);
  if ($("#supabaseUrl")) $("#supabaseUrl").value = syncConfig.supabaseUrl;
  if ($("#supabaseKey")) $("#supabaseKey").value = syncConfig.publishableKey;
  if ($("#pinEnabled")) $("#pinEnabled").checked = pinState.enabled;
  if ($("#languageSelect")) $("#languageSelect").value = currentLanguage();
  $("#rateStatus").textContent = state.ratesUpdatedAt
    ? `${state.ratesSource} rates updated ${new Date(state.ratesUpdatedAt).toLocaleString()}.`
    : "Manual rates are being used.";
  renderAccountList();
  renderExchangeRateList();
  renderJointTabs();
  renderEditableList("incomeSourceList", state.incomeSources, "income");
  renderEditableList("expenseCategoryList", state.expenseCategories, "expense");
  renderRecurringBills();
  renderCategoryColorList();
  renderEditableList("paymentMethodList", state.paymentMethods, "payment");
  renderCloudStatus();
  renderSettingsTabs();
}

function renderSettingsTabs() {
  $$("[data-settings-panel]").forEach((panel) => {
    const isOpen = openSettingsPanels.has(panel.dataset.settingsPanel);
    panel.classList.toggle("open", isOpen);
    const button = panel.querySelector("[data-settings-tab]");
    if (button) {
      button.classList.toggle("active", isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
      const label = button.querySelector("strong");
      if (label) label.textContent = isOpen ? "Hide" : "Show";
    }
  });

  $$("[data-money-settings-panel]").forEach((panel) => {
    const isOpen = openMoneySettingsPanels.has(panel.dataset.moneySettingsPanel);
    panel.classList.toggle("open", isOpen);
    const button = panel.querySelector("[data-money-settings-tab]");
    if (button) {
      button.classList.toggle("active", isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
      const label = button.querySelector("strong");
      if (label) label.textContent = isOpen ? "Hide" : "Show";
    }
  });
}

function renderAccountList() {
  $("#accountList").innerHTML = allAccounts().map((account) => {
    const hasRecords = accountHasRecords(account.id);
    const isLastActive = activeAccounts().length <= 1 && account.active !== false;
    return `
      <div class="account-setting-row">
        <div>
          <strong>${escapeHtml(account.name)}</strong>
          <p>${escapeHtml(currencyInfo(account.currency).name)} - ${escapeHtml(account.currency)} ${account.active === false ? "(hidden)" : ""}</p>
        </div>
        <label>
          Starting balance
          <input data-starting-balance-account="${escapeAttr(account.id)}" inputmode="decimal" type="text" autocomplete="off" value="${escapeAttr(state.accountSettings[account.id]?.startingBalance || 0)}">
        </label>
        <button data-toggle-account="${escapeAttr(account.id)}"${isLastActive ? " disabled" : ""}>${account.active === false ? "Show" : "Hide"}</button>
        <button data-delete-account="${escapeAttr(account.id)}"${hasRecords ? " disabled" : ""}>Delete</button>
      </div>
    `;
  }).join("");
}

function renderExchangeRateList() {
  $("#exchangeRateList").innerHTML = allCurrencyCodes().map((code) => `
    <div class="exchange-rate-row">
      <label>1 ${escapeHtml(code)} equals CAD</label>
      <input data-rate-currency="${escapeAttr(code)}" inputmode="decimal" type="text" autocomplete="off" value="${escapeAttr(state.ratesToCAD[code] || 1)}"${code === "CAD" ? " disabled" : ""}>
    </div>
  `).join("");
}

function renderJointTabs() {
  if ($("#jointTabCurrency")) $("#jointTabCurrency").innerHTML = currencyOptionsTemplate(state.mainCurrency, true);
  const sharedAccounts = allAccounts().filter((account) => account.sharedTabId);
  const list = $("#jointTabList");
  if (!list) return;
  const inviteBox = jointTabUi.latestInviteCode ? `
    <div class="invite-code-box">
      <span>Your invite code</span>
      <strong>${escapeHtml(jointTabUi.latestInviteCode)}</strong>
      <p>Send this code to the other person.</p>
      <button data-copy-invite="${escapeAttr(jointTabUi.latestInviteCode)}">Copy code</button>
    </div>
  ` : "";
  list.innerHTML = `${inviteBox}${sharedAccounts.length ? sharedAccounts.map((account) => `
    <div class="account-setting-row joint-row">
      <div>
        <strong>${escapeHtml(account.name)}</strong>
        <p>${escapeHtml(account.currency)} · Invite code ${escapeHtml(account.inviteCode || "")}</p>
      </div>
      <div class="joint-row-actions">
        <button data-copy-invite="${escapeAttr(account.inviteCode || "")}">Copy code</button>
        <button class="soft-danger" data-leave-joint-tab="${escapeAttr(account.id)}">Leave</button>
        ${account.createdBy && cloudState.user?.id === account.createdBy ? `<button class="danger" data-delete-joint-tab="${escapeAttr(account.id)}">Delete for everyone</button>` : ""}
      </div>
    </div>
  `).join("") : `<p class="eyebrow">No joint tabs yet</p>`}`;
  updateJointTabControls();
}

function setJointTabStatus(message) {
  const status = $("#jointTabStatus");
  if (status) status.textContent = translateText(message);
}

function updateJointTabControls() {
  const createButton = $("#createJointTab");
  const joinButton = $("#joinJointTab");
  const createLoading = jointTabUi.loading === "create";
  const joinLoading = jointTabUi.loading === "join";
  if (createButton) {
    createButton.disabled = Boolean(jointTabUi.loading);
    createButton.textContent = translateText(createLoading ? "Creating..." : "Create joint tab");
    createButton.classList.toggle("loading", createLoading);
  }
  if (joinButton) {
    joinButton.disabled = Boolean(jointTabUi.loading);
    joinButton.textContent = translateText(joinLoading ? "Joining..." : "Join joint tab");
    joinButton.classList.toggle("loading", joinLoading);
  }
  ["#jointTabName", "#jointTabCurrency", "#jointInviteCode"].forEach((selector) => {
    const field = $(selector);
    if (field) field.disabled = Boolean(jointTabUi.loading);
  });
  $$("[data-copy-invite], [data-leave-joint-tab], [data-delete-joint-tab]").forEach((button) => {
    button.disabled = Boolean(jointTabUi.loading);
  });
}

function setJointTabLoading(action, message = "") {
  jointTabUi.loading = action;
  updateJointTabControls();
  if (message) setJointTabStatus(message);
}

function jointTabErrorMessage(error) {
  const message = String(error?.message || error || "");
  if (
    message.includes("shared_tabs") ||
    message.includes("shared_tab_members") ||
    message.includes("shared_tab_records") ||
    message.includes("my_shared_tabs") ||
    message.includes("join_shared_tab") ||
    message.includes("leave_shared_tab") ||
    message.includes("delete_shared_tab") ||
    message.includes("schema cache")
  ) {
    return "Joint tabs are not set up in Supabase yet. Run the Joint tabs SQL from the README, then refresh this app.";
  }
  return message;
}

function accountHasRecords(accountId) {
  return state.transactions.some((transaction) => recordCountry(transaction) === accountId) ||
    state.investments.some((investment) => investmentCountry(investment) === accountId) ||
    state.transfers.some((transfer) => transfer.fromAccount === accountId || transfer.toAccount === accountId) ||
    state.recurringBills.some((bill) => bill.country === accountId);
}

function currencyHasRecords(currency) {
  return state.transactions.some((transaction) => transaction.currency === currency) ||
    state.investments.some((investment) => investment.currency === currency) ||
    state.transfers.some((transfer) => transfer.sentCurrency === currency || transfer.receivedCurrency === currency || transfer.feeCurrency === currency) ||
    state.recurringBills.some((bill) => bill.currency === currency);
}

function accountIdFromNameAndCode(name, code) {
  return `${name || code}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `account-${Date.now()}`;
}

function sharedAccountId(tabId) {
  return `shared-${tabId}`;
}

function isSharedAccount(accountId) {
  return Boolean(allAccounts().find((account) => account.id === accountId)?.sharedTabId);
}

function sharedTabForAccount(accountId) {
  return allAccounts().find((account) => account.id === accountId);
}

function generateInviteCode() {
  return crypto.randomUUID().replaceAll("-", "").slice(0, 12).toUpperCase();
}

function compactCurrencyText(value) {
  return String(value || "").toUpperCase().replace(/[^A-Z]/g, "");
}

function normalizeCurrencyCode(value) {
  const compact = compactCurrencyText(value);
  return currencyCodeAliases[compact] || compact;
}

function guessCurrencyCode() {
  const typedCode = normalizeCurrencyCode($("#newCurrencyCode").value);
  if (typedCode) return typedCode;

  const words = [
    $("#newAccountName").value,
    $("#newCurrencyName").value
  ].map(compactCurrencyText);
  const aliasMatch = words.map((word) => currencyCodeAliases[word]).find(Boolean);
  if (aliasMatch) return aliasMatch;

  const knownMatch = Object.entries(knownCurrencies).find(([code, info]) => {
    const name = compactCurrencyText(info.name);
    const tabName = compactCurrencyText(info.tabName);
    return words.some((word) => word === code || word === name || word === tabName || name.includes(word) || tabName.includes(word));
  });
  return knownMatch?.[0] || "";
}

function fillCurrencyFields(code, overwrite = false) {
  const normalizedCode = normalizeCurrencyCode(code);
  const info = knownCurrencies[normalizedCode];
  if (!normalizedCode || !info) return;

  if (overwrite || !$("#newCurrencyCode").value.trim()) $("#newCurrencyCode").value = normalizedCode;
  if (overwrite || !$("#newAccountName").value.trim()) $("#newAccountName").value = info.tabName || normalizedCode;
  if (overwrite || !$("#newCurrencyName").value.trim()) $("#newCurrencyName").value = info.name;
  if (overwrite || !$("#newCurrencySymbol").value.trim()) $("#newCurrencySymbol").value = info.symbol;
  if ((overwrite || !$("#newCurrencyRate").value.trim()) && state.ratesToCAD[normalizedCode] && normalizedCode !== "CAD") {
    $("#newCurrencyRate").value = state.ratesToCAD[normalizedCode];
  }
  showCurrencyFormMessage(`${info.name} is ready. Add a starting balance if you want, then tap Add currency tab.`, "ok");
}

function upsertCurrencyAccount(code, tabName = "") {
  const normalizedCode = normalizeCurrencyCode(code);
  if (!/^[A-Z]{3}$/.test(normalizedCode)) return false;
  const info = knownCurrencies[normalizedCode] || { name: normalizedCode, symbol: `${normalizedCode} ` };
  const name = tabName.trim() || info.tabName || setupCurrencyChoices[normalizedCode]?.tabName || normalizedCode;
  state.currencySettings[normalizedCode] = { name: info.name, symbol: info.symbol };
  if (!Number(state.ratesToCAD[normalizedCode])) state.ratesToCAD[normalizedCode] = normalizedCode === "CAD" ? 1 : 1;

  const accounts = allAccounts();
  const existing = accounts.find((account) => account.currency === normalizedCode);
  if (existing) {
    existing.name = name;
    existing.active = true;
    state.accounts = accounts;
    if (!state.accountSettings[existing.id]) state.accountSettings[existing.id] = { startingBalance: 0 };
    return true;
  }

  let id = accountIdFromNameAndCode(name, normalizedCode);
  while (allAccounts().some((account) => account.id === id)) id = `${id}-${Date.now()}`;
  state.accounts.push({ id, name, currency: normalizedCode, active: true });
  state.accountSettings[id] = { startingBalance: 0, homeCollapsed: false, reportsCollapsed: false };
  return true;
}

function showCurrencyFormMessage(message, tone = "") {
  const status = $("#currencyAddStatus");
  if (!status) return;
  status.textContent = translateText(message);
  status.className = `status-text currency-add-status ${tone}`.trim();
}

function addCurrencyAccount() {
  const code = guessCurrencyCode();
  if (knownCurrencies[code]) fillCurrencyFields(code);
  const name = $("#newAccountName").value.trim() || knownCurrencies[code]?.tabName || code;
  const currencyName = $("#newCurrencyName").value.trim() || knownCurrencies[code]?.name || code;
  const symbol = $("#newCurrencySymbol").value.trim() || knownCurrencies[code]?.symbol || `${code} `;
  const rateText = $("#newCurrencyRate").value.trim();
  const rate = decimalValue(rateText) || state.ratesToCAD[code] || 1;
  const startingBalanceText = $("#newAccountStartingBalance").value.trim();
  const startingBalance = decimalValue(startingBalanceText);

  if (!/^[A-Z]{3}$/.test(code)) {
    showCurrencyFormMessage("Pick one of the currency buttons, or type a 3-letter code like USD, JPY, EUR, GBP, or CAD.", "error");
    return;
  }

  state.currencySettings[code] = { name: currencyName, symbol };
  state.ratesToCAD[code] = code === "CAD" ? 1 : rate;

  const existingAccount = allAccounts().find((account) => account.currency === code || account.name.toLowerCase() === name.toLowerCase());
  if (existingAccount) {
    existingAccount.name = name;
    existingAccount.active = true;
    state.accounts = allAccounts().map((account) => account.id === existingAccount.id ? existingAccount : account);
    if (!state.accountSettings[existingAccount.id]) state.accountSettings[existingAccount.id] = { startingBalance: 0 };
    if (startingBalanceText) state.accountSettings[existingAccount.id].startingBalance = startingBalance;
  } else {
    let id = accountIdFromNameAndCode(name, code);
    while (allAccounts().some((account) => account.id === id)) id = `${id}-${Date.now()}`;
    state.accounts.push({ id, name, currency: code, active: true });
    state.accountSettings[id] = { startingBalance };
  }

  $("#newAccountName").value = "";
  $("#newCurrencyCode").value = "";
  $("#newCurrencyName").value = "";
  $("#newCurrencySymbol").value = "";
  $("#newCurrencyRate").value = "";
  $("#newAccountStartingBalance").value = "";
  render();
  showCurrencyFormMessage(rateText || code === "CAD"
    ? `${name} was added.`
    : `${name} was added. Tap Update online rates to get the current conversion.`, "ok");
}

function toggleAccount(accountId) {
  const accounts = allAccounts();
  const account = accounts.find((item) => item.id === accountId);
  if (!account) return;
  if (account.active !== false && activeAccounts().length <= 1) {
    alert("Keep at least one currency tab turned on.");
    return;
  }
  account.active = account.active === false;
  state.accounts = accounts;
  if (!activeCurrencyCodes().includes(state.mainCurrency)) state.mainCurrency = activeAccounts()[0]?.currency || "CAD";
  render();
}

function deleteAccount(accountId) {
  const account = allAccounts().find((item) => item.id === accountId);
  if (!account) return;
  if (accountHasRecords(accountId)) {
    alert("This tab has records. Hide it instead so your old data stays safe.");
    return;
  }
  if (activeAccounts().length <= 1 && account.active !== false) {
    alert("Keep at least one currency tab.");
    return;
  }
  state.accounts = allAccounts().filter((item) => item.id !== accountId);
  delete state.accountSettings[accountId];
  if (!state.accounts.some((item) => item.currency === account.currency) && !currencyHasRecords(account.currency)) {
    delete state.currencySettings[account.currency];
    delete state.ratesToCAD[account.currency];
  }
  if (!activeCurrencyCodes().includes(state.mainCurrency)) state.mainCurrency = activeAccounts()[0]?.currency || "CAD";
  render();
}

function toggleHomeAccount(accountId) {
  if (!state.accountSettings[accountId]) state.accountSettings[accountId] = { startingBalance: 0 };
  state.accountSettings[accountId].homeCollapsed = !state.accountSettings[accountId].homeCollapsed;
  render();
}

function toggleReportAccount(accountId) {
  if (!state.accountSettings[accountId]) state.accountSettings[accountId] = { startingBalance: 0 };
  state.accountSettings[accountId].reportsCollapsed = !state.accountSettings[accountId].reportsCollapsed;
  render();
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

function renderRecurringBills() {
  const currentCategory = $("#recurringCategory").value;
  const currentCurrency = $("#recurringCurrency").value || activeAccounts()[0]?.currency || "CAD";
  const currentAccount = $("#recurringCountry").value || countryIdForCurrency(currentCurrency);
  $("#recurringCurrency").innerHTML = currencyOptionsTemplate(currentCurrency);
  $("#recurringCountry").innerHTML = accountOptionsTemplate(currentAccount);
  $("#recurringCategory").innerHTML = state.expenseCategories
    .map((category) => `<option value="${escapeAttr(category)}">${escapeHtml(category)}</option>`)
    .join("");
  if (state.expenseCategories.includes(currentCategory)) $("#recurringCategory").value = currentCategory;
  if (activeCurrencyCodes(currentCurrency).includes(currentCurrency)) $("#recurringCurrency").value = currentCurrency;
  if (activeAccounts().some((account) => account.id === currentAccount)) $("#recurringCountry").value = currentAccount;
  $("#recurringBillList").innerHTML = state.recurringBills.length
    ? state.recurringBills
      .slice()
      .sort((a, b) => Number(a.day) - Number(b.day))
      .map(recurringBillTemplate)
      .join("")
    : `<p class="eyebrow">No recurring reminders yet</p>`;
  $("#addRecurringBill").textContent = editingRecurringBillId ? "Save reminder" : "Add reminder";
}

function recurringBillTemplate(bill) {
  return `
    <article class="transaction recurring-row">
      <div>
        <strong>${escapeHtml(bill.name)}</strong>
        <p>Due every month on day ${bill.day} - ${countryName(bill.country)} - ${escapeHtml(bill.category)}</p>
        <p>${money(bill.amount, bill.currency)}</p>
      </div>
      <div class="transaction-actions">
        <button data-pay-recurring="${bill.id}">Add expense</button>
        <button data-edit-recurring="${bill.id}">Edit</button>
        <button data-delete-recurring="${bill.id}">Delete</button>
      </div>
    </article>
  `;
}

function saveRecurringBill() {
  const name = $("#recurringName").value.trim();
  const amount = decimalValue($("#recurringAmount").value);
  const day = Math.min(31, Math.max(1, Math.round(decimalValue($("#recurringDay").value))));
  if (!name || !amount) return;
  const bill = {
    id: editingRecurringBillId || crypto.randomUUID(),
    name,
    amount,
    currency: $("#recurringCurrency").value,
    country: $("#recurringCountry").value,
    category: $("#recurringCategory").value,
    day
  };
  const index = state.recurringBills.findIndex((item) => item.id === bill.id);
  if (index >= 0) state.recurringBills[index] = bill;
  else state.recurringBills.push(bill);
  resetRecurringForm();
  render();
}

function editRecurringBill(id) {
  const bill = state.recurringBills.find((item) => item.id === id);
  if (!bill) return;
  editingRecurringBillId = id;
  $("#recurringName").value = bill.name;
  $("#recurringAmount").value = bill.amount;
  $("#recurringCurrency").value = bill.currency;
  $("#recurringCountry").value = bill.country;
  $("#recurringCategory").value = bill.category;
  $("#recurringDay").value = bill.day;
  renderRecurringBills();
}

function deleteRecurringBill(id) {
  if (!confirm("Delete this recurring reminder?")) return;
  state.recurringBills = state.recurringBills.filter((bill) => bill.id !== id);
  if (editingRecurringBillId === id) resetRecurringForm();
  render();
}

function addRecurringExpense(id) {
  const bill = state.recurringBills.find((item) => item.id === id);
  if (!bill) return;
  state.transactions.unshift({
    id: crypto.randomUUID(),
    kind: "expense",
    amount: Number(bill.amount),
    currency: bill.currency,
    country: bill.country,
    date: today(),
    category: bill.category,
    paymentMethod: state.paymentMethods[0] || "",
    note: `Recurring: ${bill.name}`,
    exchangeRateToCAD: Number(state.ratesToCAD[bill.currency])
  });
  render();
}

function resetRecurringForm() {
  editingRecurringBillId = "";
  $("#recurringName").value = "";
  $("#recurringAmount").value = "";
  $("#recurringDay").value = "";
}

function openForm(kind, transaction = null, currencyOverride = null, countryOverride = null) {
  const categories = kind === "income" ? state.incomeSources : state.expenseCategories;
  $("#formTitle").textContent = transaction ? `Edit ${kind}` : `Add ${kind}`;
  $("#editingId").value = transaction?.id || "";
  $("#transactionKind").value = kind;
  $("#amountInput").value = transaction?.amount || "";
  const defaultCurrency = activeCurrencyCodes().includes(state.mainCurrency) ? state.mainCurrency : activeAccounts()[0]?.currency || state.mainCurrency;
  const selectedCurrency = transaction?.currency || currencyOverride || defaultCurrency;
  const selectedAccount = transaction ? recordCountry(transaction) : countryOverride || countryIdForCurrency(selectedCurrency);
  $("#currencyInput").innerHTML = currencyOptionsTemplate(selectedCurrency);
  $("#currencyInput").value = selectedCurrency;
  $("#transactionCountryInput").innerHTML = accountOptionsTemplate(selectedAccount, Boolean(transaction));
  $("#transactionCountryInput").value = selectedAccount;
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
  openDialog($("#transactionDialog"));
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

async function saveTransaction(event) {
  event.preventDefault();
  const id = $("#editingId").value || crypto.randomUUID();
  const kind = $("#transactionKind").value;
  const currency = $("#currencyInput").value;
  const rateToSelectedMain = decimalValue($("#rateInput").value);
  const exchangeRateToCAD = rateToSelectedMain * Number(state.ratesToCAD[state.mainCurrency]);
  const transaction = {
    id,
    kind,
    amount: decimalValue($("#amountInput").value),
    currency,
    country: $("#transactionCountryInput").value,
    date: $("#dateInput").value,
    category: $("#categoryInput").value,
    paymentMethod: kind === "expense" ? $("#paymentMethodInput").value : "",
    note: $("#noteInput").value.trim(),
    exchangeRateToCAD
  };
  const oldTransaction = state.transactions.find((item) => item.id === id);
  if (isSharedAccount(transaction.country)) {
    const user = cloudState.user || await refreshCloudSession();
    transaction.sharedBy = user?.email || "Shared user";
  }

  if (!transaction.amount || transaction.amount <= 0) return;

  if (oldTransaction && recordCountry(oldTransaction) !== recordCountry(transaction)) {
    try {
      await deleteSharedTransaction(oldTransaction);
    } catch (error) {
      setJointTabStatus(jointTabErrorMessage(error));
    }
  }

  const index = state.transactions.findIndex((item) => item.id === id);
  if (index >= 0) state.transactions[index] = transaction;
  else state.transactions.unshift(transaction);

  try {
    await saveSharedTransaction(transaction);
  } catch (error) {
    setJointTabStatus(jointTabErrorMessage(error));
  }

  closeDialog($("#transactionDialog"));
  render();
}

function openInvestmentForm(investment = null, countryOverride = null) {
  const selectedCountry = countryOverride ? allAccounts().find((country) => country.id === countryOverride) : null;
  $("#investmentFormTitle").textContent = investment ? "Edit Investment" : "Add Investment";
  $("#investmentEditingId").value = investment?.id || "";
  $("#investmentName").value = investment?.name || "";
  $("#investmentAmount").value = investment?.amount || "";
  $("#investmentCurrentValue").value = investment?.currentValue || investment?.amount || "";
  const defaultCurrency = activeCurrencyCodes().includes(state.mainCurrency) ? state.mainCurrency : activeAccounts()[0]?.currency || state.mainCurrency;
  const selectedCurrency = investment?.currency || selectedCountry?.currency || defaultCurrency;
  const selectedAccount = investment ? investmentCountry(investment) : selectedCountry?.id || countryIdForCurrency(selectedCurrency);
  $("#investmentCurrencyInput").innerHTML = currencyOptionsTemplate(selectedCurrency);
  $("#investmentCurrencyInput").value = selectedCurrency;
  $("#investmentCountryInput").innerHTML = accountOptionsTemplate(selectedAccount, Boolean(investment));
  $("#investmentCountryInput").value = selectedAccount;
  $("#investmentDeductInput").checked = investment?.deductFromCountry !== false;
  $("#investmentDate").value = investment?.date || today();
  $("#investmentNote").value = investment?.note || "";
  openDialog($("#investmentDialog"));
}

function saveInvestment(event) {
  event.preventDefault();
  const id = $("#investmentEditingId").value || crypto.randomUUID();
  const amount = decimalValue($("#investmentAmount").value);
  const currentValue = decimalValue($("#investmentCurrentValue").value) || amount;
  const investment = {
    id,
    name: $("#investmentName").value.trim(),
    amount,
    currentValue,
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

  closeDialog($("#investmentDialog"));
  render();
}

function openTransferForm(transfer = null) {
  const accounts = activeAccounts();
  const fromAccount = transfer?.fromAccount || accounts[0]?.id || "canada";
  const toAccount = transfer?.toAccount || accounts.find((account) => account.id !== fromAccount)?.id || fromAccount;
  const sentCurrency = transfer?.sentCurrency || countryCurrency(fromAccount);
  const receivedCurrency = transfer?.receivedCurrency || countryCurrency(toAccount);
  $("#transferFormTitle").textContent = transfer ? "Edit Transfer" : "Transfer Money";
  $("#transferEditingId").value = transfer?.id || "";
  $("#transferFromAccount").innerHTML = accountOptionsTemplate(fromAccount, Boolean(transfer));
  $("#transferFromAccount").value = fromAccount;
  $("#transferToAccount").innerHTML = accountOptionsTemplate(toAccount, Boolean(transfer));
  $("#transferToAccount").value = toAccount;
  $("#transferSentAmount").value = transfer?.sentAmount || "";
  $("#transferSentCurrency").innerHTML = currencyOptionsTemplate(sentCurrency);
  $("#transferSentCurrency").value = sentCurrency;
  $("#transferReceivedAmount").value = transfer?.receivedAmount || "";
  $("#transferReceivedCurrency").innerHTML = currencyOptionsTemplate(receivedCurrency);
  $("#transferReceivedCurrency").value = receivedCurrency;
  $("#transferFee").value = transfer?.fee || 0;
  $("#transferFeeCurrency").innerHTML = currencyOptionsTemplate(transfer?.feeCurrency || sentCurrency);
  $("#transferFeeCurrency").value = transfer?.feeCurrency || sentCurrency;
  $("#transferDate").value = transfer?.date || today();
  $("#transferNote").value = transfer?.note || "";
  openDialog($("#transferDialog"));
}

function saveTransfer(event) {
  event.preventDefault();
  const id = $("#transferEditingId").value || crypto.randomUUID();
  const transfer = {
    id,
    fromAccount: $("#transferFromAccount").value,
    toAccount: $("#transferToAccount").value,
    sentAmount: decimalValue($("#transferSentAmount").value),
    sentCurrency: $("#transferSentCurrency").value,
    receivedAmount: decimalValue($("#transferReceivedAmount").value),
    receivedCurrency: $("#transferReceivedCurrency").value,
    fee: decimalValue($("#transferFee").value),
    feeCurrency: $("#transferFeeCurrency").value,
    date: $("#transferDate").value,
    note: $("#transferNote").value.trim()
  };

  if (!transfer.sentAmount || !transfer.receivedAmount || transfer.fromAccount === transfer.toAccount) return;

  const index = state.transfers.findIndex((item) => item.id === id);
  if (index >= 0) state.transfers[index] = transfer;
  else state.transfers.unshift(transfer);

  closeDialog($("#transferDialog"));
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
  if (type === "expense") {
    state.recurringBills.forEach((bill) => {
      if (bill.category === oldName) bill.category = name;
    });
  }
  render();
}

function deleteListItem(type, name) {
  if (!confirm(`Delete "${name}"?`)) return;
  const list = type === "income" ? state.incomeSources : type === "expense" ? state.expenseCategories : state.paymentMethods;
  const index = list.indexOf(name);
  if (index >= 0) list.splice(index, 1);
  if (type === "expense") {
    state.recurringBills.forEach((bill) => {
      if (bill.category === name) bill.category = state.expenseCategories.includes("Other") ? "Other" : state.expenseCategories[0] || "";
    });
  }
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
  status.textContent = translateText("Updating rates from the internet...");

  try {
    const quoteCodes = allCurrencyCodes().filter((code) => code !== "CAD");
    if (!quoteCodes.length) {
      status.textContent = translateText("CAD is already the base rate.");
      return;
    }
    const results = await Promise.allSettled(quoteCodes.map(async (code) => {
      const response = await fetch(`https://api.frankfurter.dev/v2/rates?base=CAD&quotes=${encodeURIComponent(code)}`, {
        cache: "no-store"
      });
      if (!response.ok) return false;
      const data = await response.json();
      const amountPerCad = Number(data.rates?.[code]);
      if (!amountPerCad) return false;
      state.ratesToCAD[code] = 1 / amountPerCad;
      return true;
    }));
    const updatedCount = results.filter((result) => result.status === "fulfilled" && result.value).length;
    if (!updatedCount) throw new Error("Rate service unavailable");
    state.ratesToCAD.CAD = 1;
    state.ratesUpdatedAt = new Date().toISOString();
    state.ratesSource = "Online";
    render();
  } catch (error) {
    status.textContent = translateText("Could not update online. Your saved/manual rates are still being used.");
  } finally {
    button.disabled = false;
  }
}

function countryName(id) {
  return allAccounts().find((country) => country.id === id)?.name || activeAccounts()[0]?.name || "Account";
}

function countryIdForCurrency(currency) {
  return activeAccounts().find((country) => country.currency === currency)?.id ||
    allAccounts().find((country) => country.currency === currency)?.id ||
    activeAccounts()[0]?.id ||
    "canada";
}

function backupExport() {
  const stamp = new Date().toISOString().slice(0, 10);
  exportFile(`make-and-spend-backup-${stamp}.json`, JSON.stringify(state, null, 2), "application/json");
  const status = $("#backupStatus");
  if (status) status.textContent = translateText("Full backup downloaded. Keep that file somewhere safe.");
}

function backupImport(file) {
  if (!confirm("Importing a backup will replace the data on this device. Continue?")) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = normalizeState(JSON.parse(reader.result));
      render();
      const status = $("#backupStatus");
      if (status) status.textContent = translateText("Backup imported on this device.");
    } catch {
      alert("That backup file could not be opened.");
    }
  };
  reader.readAsText(file);
}

function renderSetupGate() {
  const gate = $("#setupGate");
  if (!gate) return;
  gate.hidden = setupComplete;
  document.body.classList.toggle("setup-open", !setupComplete);
  if (!setupComplete) {
    $("#setupEmail").value = $("#setupEmail").value || $("#syncEmail")?.value || "";
    $("#setupPassword").value = $("#setupPassword").value || $("#syncPassword")?.value || "";
  }
}

function renderPinLock() {
  const lock = $("#pinLock");
  if (!lock) return;
  const shouldLock = setupComplete && pinState.enabled && !appUnlocked;
  lock.hidden = !shouldLock;
  document.body.classList.toggle("app-locked", shouldLock);
}

function setupSelectedAccounts() {
  const selected = $$("[data-setup-currency]:checked").map((input) => input.dataset.setupCurrency);
  const customCode = normalizeCurrencyCode($("#setupCustomCode")?.value || "");
  const customName = $("#setupCustomName")?.value.trim() || "";
  const choices = [...new Set([...selected, customCode].filter(Boolean))];
  if (!choices.length) throw new Error("Choose at least one currency tab.");

  state.accounts = [];
  state.accountSettings = {};
  state.currencySettings = {};
  choices.forEach((code) => {
    const tabName = code === customCode ? customName : setupCurrencyChoices[code]?.tabName || knownCurrencies[code]?.tabName || code;
    if (!upsertCurrencyAccount(code, tabName)) throw new Error(`Use a real 3-letter currency code for ${code || "the custom tab"}.`);
  });
  state.mainCurrency = activeAccounts()[0]?.currency || "CAD";
}

async function hashPin(pin) {
  const bytes = new TextEncoder().encode(`make-spend-pin:${pin}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function cleanPin(value) {
  return String(value || "").replace(/\D/g, "").slice(0, 6);
}

async function updatePinSetting(enabled, pin, statusSelector = "#pinSettingsStatus") {
  const status = $(statusSelector);
  if (!enabled) {
    pinState = { enabled: false, hash: "" };
    savePinState();
    appUnlocked = true;
    if (status) status.textContent = translateText("PIN is turned off.");
    render();
    return true;
  }

  const cleaned = cleanPin(pin);
  if (!/^\d{4,6}$/.test(cleaned)) {
    if (status) status.textContent = translateText("Use 4 to 6 numbers for the PIN.");
    return false;
  }
  pinState = { enabled: true, hash: await hashPin(cleaned) };
  savePinState();
  appUnlocked = true;
  if (status) status.textContent = translateText("PIN is turned on for this device.");
  render();
  return true;
}

async function unlockWithPin() {
  const pin = cleanPin($("#unlockPin").value);
  const status = $("#pinStatus");
  if (!/^\d{4,6}$/.test(pin)) {
    status.textContent = translateText("Enter your 4 to 6 digit PIN.");
    return;
  }
  if (await hashPin(pin) !== pinState.hash) {
    status.textContent = translateText("That PIN is not correct.");
    return;
  }
  appUnlocked = true;
  $("#unlockPin").value = "";
  status.textContent = "";
  render();
}

function setSetupStatus(message) {
  const status = $("#setupStatus");
  if (status) status.textContent = translateText(message);
}

async function finishFirstSetup(mode) {
  try {
    if (mode !== "signup" && mode !== "login") {
      throw new Error("Create an account or sign in to finish setup.");
    }
    setupSelectedAccounts();
    const wantsPin = $("#setupPinEnabled").checked;
    const pinSaved = await updatePinSetting(wantsPin, $("#setupPin").value, "#setupStatus");
    if (wantsPin && !pinSaved) return;

    $("#syncEmail").value = $("#setupEmail").value.trim();
    $("#syncPassword").value = $("#setupPassword").value;

    if (mode === "signup") {
      await signUpCloud(true);
    } else if (mode === "login") {
      await loginCloud(true);
    }
  } catch (error) {
    setSetupStatus(error.message);
  }
}

function renderCloudStatus(message = "") {
  const status = $("#cloudStatus");
  if (!status) return;
  const lastSync = cloudState.lastUpdatedAt ? ` Last synced ${new Date(cloudState.lastUpdatedAt).toLocaleString()}.` : "";
  if (message) {
    status.textContent = `${message}${lastSync}`;
    return;
  }
  if (!syncConfig.supabaseUrl) {
    status.textContent = "Paste your Supabase Project URL, then save cloud settings.";
    return;
  }
  if (cloudState.user) {
    status.textContent = cloudState.enabled
      ? `Cloud sync connected as ${cloudState.user.email || "your account"}.${lastSync}`
      : `Logged in as ${cloudState.user.email || "your account"}. Auto sync will start after the first save.${lastSync}`;
    return;
  }
  status.textContent = "Cloud settings saved. Sign up or log in to sync.";
}

function setCloudStatus(message) {
  renderCloudStatus(message);
  localizePage();
}

function saveCloudSettingsFromInputs() {
  if ($("#supabaseUrl")) syncConfig.supabaseUrl = $("#supabaseUrl").value.trim().replace(/\/$/, "");
  if ($("#supabaseKey")) syncConfig.publishableKey = $("#supabaseKey").value.trim();
  cloudState.client = null;
  saveSyncConfig();
  setCloudStatus("Cloud settings saved. Now sign up or log in.");
}

function getSupabaseClient() {
  if (!syncConfig.supabaseUrl || !syncConfig.publishableKey) {
    throw new Error("Add your Supabase Project URL and publishable key first.");
  }
  if (!window.supabase?.createClient) {
    throw new Error("Supabase could not load. Check your internet connection.");
  }
  if (
    !cloudState.client ||
    cloudState.clientUrl !== syncConfig.supabaseUrl ||
    cloudState.clientKey !== syncConfig.publishableKey
  ) {
    cloudState.client = window.supabase.createClient(syncConfig.supabaseUrl, syncConfig.publishableKey);
    cloudState.clientUrl = syncConfig.supabaseUrl;
    cloudState.clientKey = syncConfig.publishableKey;
  }
  return cloudState.client;
}

async function refreshCloudSession() {
  const client = getSupabaseClient();
  const { data, error } = await client.auth.getSession();
  if (error) throw error;
  cloudState.user = data.session?.user || null;
  return cloudState.user;
}

async function finishCloudLogin(successMessage = "Signed in. Auto sync is on.") {
  cloudState.enabled = true;
  localStorage.setItem("makeSpendCloudEnabled", "true");
  startCloudPolling();
  const loaded = await loadCloudData(true);
  if (!loaded) await saveCloudData(true);
  await syncSharedTabs(false);
  setCloudStatus(successMessage);
}

async function signUpCloud(fromSetup = false) {
  try {
    saveCloudSettingsFromInputs();
    const email = $("#syncEmail").value.trim();
    const password = $("#syncPassword").value;
    if (!email || !password) throw new Error("Enter your email and password first.");
    const client = getSupabaseClient();
    const { data, error } = await client.auth.signUp({ email, password });
    if (error) throw error;
    cloudState.user = data.user || data.session?.user || null;
    setupComplete = true;
    localStorage.setItem("makeSpendSetupComplete", "true");
    appUnlocked = true;
    if (data.session) {
      await finishCloudLogin("Account created. Auto sync is on.");
    } else {
      setCloudStatus("Account created. Check your email, then sign in.");
      if (fromSetup) setSetupStatus("Account created. Check your email, then sign in.");
    }
    render();
    return true;
  } catch (error) {
    setCloudStatus(error.message);
    if (fromSetup) setSetupStatus(error.message);
    return false;
  }
}

async function loginCloud(fromSetup = false) {
  try {
    saveCloudSettingsFromInputs();
    const email = $("#syncEmail").value.trim();
    const password = $("#syncPassword").value;
    if (!email || !password) throw new Error("Enter your email and password first.");
    const client = getSupabaseClient();
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    cloudState.user = data.user;
    setupComplete = true;
    localStorage.setItem("makeSpendSetupComplete", "true");
    appUnlocked = true;
    await finishCloudLogin("Signed in. Auto sync is on.");
    render();
    return true;
  } catch (error) {
    setCloudStatus(error.message);
    if (fromSetup) setSetupStatus(error.message);
    return false;
  }
}

async function resetPasswordCloud(fromSetup = false) {
  try {
    saveCloudSettingsFromInputs();
    const email = (fromSetup ? $("#setupEmail") : $("#syncEmail")).value.trim();
    if (!email) throw new Error("Enter your email first.");
    const client = getSupabaseClient();
    const { error } = await client.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.href.split("#")[0]
    });
    if (error) throw error;
    const message = "Password reset email sent. Check your inbox.";
    setCloudStatus(message);
    if (fromSetup) setSetupStatus(message);
  } catch (error) {
    setCloudStatus(error.message);
    if (fromSetup) setSetupStatus(error.message);
  }
}

async function logoutCloud() {
  try {
    const client = getSupabaseClient();
    await client.auth.signOut();
  } catch {
    // Local logout still matters if the browser token is already gone.
  }
  cloudState.user = null;
  cloudState.enabled = false;
  localStorage.setItem("makeSpendCloudEnabled", "false");
  setCloudStatus("Logged out. Local data is still saved on this device.");
}

function ensureSharedAccount(tab) {
  const id = sharedAccountId(tab.id);
  const currency = tab.currency || "BRL";
  if (!state.currencySettings[currency]) state.currencySettings[currency] = knownCurrencies[currency] || { name: currency, symbol: `${currency} ` };
  if (!Number(state.ratesToCAD[currency])) state.ratesToCAD[currency] = currency === "CAD" ? 1 : 1;
  const accounts = allAccounts();
  const accountData = {
    id,
    name: tab.name || "Joint tab",
    currency,
    active: true,
    sharedTabId: tab.id,
    inviteCode: tab.invite_code || tab.inviteCode || "",
    createdBy: tab.created_by || tab.createdBy || ""
  };
  const existing = accounts.find((account) => account.id === id);
  state.accounts = existing
    ? accounts.map((account) => account.id === id ? { ...account, ...accountData } : account)
    : [...accounts, accountData];
  if (!state.accountSettings[id]) state.accountSettings[id] = { startingBalance: 0, homeCollapsed: false, reportsCollapsed: false };
  return accountData;
}

function privateStateForCloud() {
  const sharedAccountIds = new Set(allAccounts().filter((account) => account.sharedTabId).map((account) => account.id));
  const accountSettings = { ...state.accountSettings };
  sharedAccountIds.forEach((id) => delete accountSettings[id]);
  return {
    ...state,
    accounts: state.accounts.filter((account) => !account.sharedTabId),
    accountSettings,
    transactions: state.transactions.filter((transaction) => !sharedAccountIds.has(recordCountry(transaction))),
    sharedTabs: []
  };
}

async function createJointTab() {
  if (jointTabUi.loading) return;
  try {
    setJointTabLoading("create", "Creating joint tab...");
    const user = cloudState.user || await refreshCloudSession();
    if (!user) throw new Error("Sign in before creating a joint tab.");
    const name = $("#jointTabName").value.trim();
    const currency = $("#jointTabCurrency").value || state.mainCurrency;
    if (!name) throw new Error("Add a name for the joint tab.");
    const client = getSupabaseClient();
    const inviteCode = generateInviteCode();
    const { error } = await client
      .from("shared_tabs")
      .insert({ name, currency, invite_code: inviteCode, created_by: user.id });
    if (error) throw error;
    const { data: joinedTabs, error: memberError } = await client.rpc("join_shared_tab", { invite_code_input: inviteCode });
    if (memberError) throw memberError;
    const joinedTab = Array.isArray(joinedTabs) ? joinedTabs[0] : joinedTabs;
    if (!joinedTab) throw new Error("Joint tab could not be opened after it was created.");
    ensureSharedAccount(joinedTab);
    $("#jointTabName").value = "";
    jointTabUi.latestInviteCode = inviteCode;
    setJointTabLoading("");
    setJointTabStatus(`Joint tab created. Send this invite code: ${inviteCode}`);
    render();
  } catch (error) {
    setJointTabLoading("");
    setJointTabStatus(jointTabErrorMessage(error));
  }
}

async function joinJointTab() {
  if (jointTabUi.loading) return;
  try {
    setJointTabLoading("join", "Joining joint tab...");
    const user = cloudState.user || await refreshCloudSession();
    if (!user) throw new Error("Sign in before joining a joint tab.");
    const code = $("#jointInviteCode").value.trim().toUpperCase().replace(/\s/g, "");
    if (!code) throw new Error("Paste the invite code first.");
    const client = getSupabaseClient();
    const { data, error } = await client.rpc("join_shared_tab", { invite_code_input: code });
    if (error) throw error;
    const tab = Array.isArray(data) ? data[0] : data;
    if (!tab) throw new Error("Invite code not found.");
    ensureSharedAccount(tab);
    $("#jointInviteCode").value = "";
    setJointTabStatus("Syncing joint tabs...");
    await syncSharedTabs(false);
    setJointTabLoading("");
    setJointTabStatus("Joint tab joined.");
    render();
  } catch (error) {
    setJointTabLoading("");
    setJointTabStatus(jointTabErrorMessage(error));
  }
}

function removeSharedAccountFromLocal(accountId) {
  const account = allAccounts().find((item) => item.id === accountId);
  if (!account?.sharedTabId) return;
  state.accounts = allAccounts().filter((item) => item.id !== accountId);
  state.transactions = state.transactions.filter((transaction) => recordCountry(transaction) !== accountId);
  delete state.accountSettings[accountId];
  state.sharedTabs = (state.sharedTabs || []).filter((tab) => tab.id !== account.sharedTabId);
  if (jointTabUi.latestInviteCode && jointTabUi.latestInviteCode === account.inviteCode) jointTabUi.latestInviteCode = "";
}

async function leaveJointTab(accountId) {
  if (jointTabUi.loading) return;
  const account = allAccounts().find((item) => item.id === accountId);
  if (!account?.sharedTabId) return;
  if (!confirm(translateText("Leave this joint tab?"))) return;
  try {
    setJointTabLoading("leave", "Leaving joint tab...");
    const user = cloudState.user || await refreshCloudSession();
    if (!user) throw new Error("Sign in before joining a joint tab.");
    const client = getSupabaseClient();
    const { error } = await client.rpc("leave_shared_tab", { tab_id_input: account.sharedTabId });
    if (error) throw error;
    removeSharedAccountFromLocal(accountId);
    setJointTabLoading("");
    setJointTabStatus("Joint tab removed from your account.");
    render();
  } catch (error) {
    setJointTabLoading("");
    setJointTabStatus(jointTabErrorMessage(error));
  }
}

async function deleteJointTab(accountId) {
  if (jointTabUi.loading) return;
  const account = allAccounts().find((item) => item.id === accountId);
  if (!account?.sharedTabId) return;
  if (!confirm(translateText("Delete this joint tab for everyone?"))) return;
  try {
    setJointTabLoading("delete", "Deleting joint tab...");
    const user = cloudState.user || await refreshCloudSession();
    if (!user) throw new Error("Sign in before joining a joint tab.");
    const client = getSupabaseClient();
    const { error } = await client.rpc("delete_shared_tab", { tab_id_input: account.sharedTabId });
    if (error) throw error;
    removeSharedAccountFromLocal(accountId);
    setJointTabLoading("");
    setJointTabStatus("Joint tab deleted for everyone.");
    render();
  } catch (error) {
    setJointTabLoading("");
    setJointTabStatus(jointTabErrorMessage(error));
  }
}

async function syncSharedTabs(shouldRender = true) {
  if (!cloudState.user) return false;
  try {
    const client = getSupabaseClient();
    const { data: tabs, error } = await client.rpc("my_shared_tabs");
    if (error) throw error;
    const sharedTabs = tabs || [];
    state.sharedTabs = sharedTabs;
    const sharedAccountIds = new Set(sharedTabs.map((tab) => sharedAccountId(tab.id)));
    const oldSharedAccountIds = new Set(allAccounts().filter((account) => account.sharedTabId).map((account) => account.id));
    state.accounts = allAccounts().filter((account) => !account.sharedTabId || sharedAccountIds.has(account.id));
    oldSharedAccountIds.forEach((id) => {
      if (!sharedAccountIds.has(id)) delete state.accountSettings[id];
    });
    sharedTabs.forEach(ensureSharedAccount);
    state.transactions = state.transactions.filter((transaction) => !oldSharedAccountIds.has(recordCountry(transaction)));
    if (sharedTabs.length) {
      const { data: rows, error: recordError } = await client
        .from("shared_tab_records")
        .select("id, tab_id, record, updated_at")
        .in("tab_id", sharedTabs.map((tab) => tab.id));
      if (recordError) throw recordError;
      (rows || []).forEach((row) => {
        state.transactions.push({
          ...row.record,
          id: row.id,
          country: sharedAccountId(row.tab_id),
          sharedTabId: row.tab_id
        });
      });
    }
    if (shouldRender) render();
    return true;
  } catch (error) {
    setJointTabStatus(jointTabErrorMessage(error));
    return false;
  }
}

async function saveSharedTransaction(transaction) {
  const account = sharedTabForAccount(recordCountry(transaction));
  if (!account?.sharedTabId) return;
  const user = cloudState.user || await refreshCloudSession();
  if (!user) throw new Error("Sign in to save to a joint tab.");
  const client = getSupabaseClient();
  const { error } = await client
    .from("shared_tab_records")
    .upsert({
      id: transaction.id,
      tab_id: account.sharedTabId,
      created_by: user.id,
      record: { ...transaction, sharedTabId: account.sharedTabId },
      updated_at: new Date().toISOString()
    }, { onConflict: "id" });
  if (error) throw error;
}

async function deleteSharedTransaction(transaction) {
  const account = sharedTabForAccount(recordCountry(transaction));
  if (!account?.sharedTabId) return;
  const user = cloudState.user || await refreshCloudSession();
  if (!user) throw new Error("Sign in to save to a joint tab.");
  const client = getSupabaseClient();
  const { error } = await client.from("shared_tab_records").delete().eq("id", transaction.id);
  if (error) throw error;
}

function queueCloudSave() {
  if (!cloudState.enabled || cloudState.loading || cloudState.saving || !cloudState.user || !cloudState.client) return;
  clearTimeout(cloudSaveTimer);
  cloudSaveTimer = setTimeout(() => {
    saveCloudData(true);
  }, 1200);
}

async function saveCloudData(silent = false) {
  try {
    const user = cloudState.user || await refreshCloudSession();
    if (!user) throw new Error("Log in before saving to cloud.");
    const client = getSupabaseClient();
    cloudState.saving = true;
    const updatedAt = new Date().toISOString();
    const { error } = await client
      .from("user_app_data")
      .upsert({ user_id: user.id, data: privateStateForCloud(), updated_at: updatedAt }, { onConflict: "user_id" });
    if (error) throw error;
    cloudState.enabled = true;
    cloudState.lastUpdatedAt = updatedAt;
    localStorage.setItem("makeSpendCloudEnabled", "true");
    localStorage.setItem("makeSpendCloudUpdatedAt", updatedAt);
    setCloudStatus(silent ? "Auto-saved to cloud." : "Saved this device data to cloud.");
    startCloudPolling();
    return true;
  } catch (error) {
    if (!silent) setCloudStatus(error.message);
    return false;
  } finally {
    cloudState.saving = false;
  }
}

async function loadCloudData(silent = false) {
  try {
    const user = cloudState.user || await refreshCloudSession();
    if (!user) throw new Error("Log in before loading cloud data.");
    const client = getSupabaseClient();
    const { data, error } = await client
      .from("user_app_data")
      .select("data, updated_at")
      .eq("user_id", user.id)
      .maybeSingle();
    if (error) throw error;
    if (!data?.data) {
      if (!silent) setCloudStatus("No cloud data yet. Tap Save this device to cloud first.");
      return false;
    }
    cloudState.loading = true;
    state = normalizeState(data.data);
    cloudState.enabled = true;
    cloudState.lastUpdatedAt = data.updated_at || new Date().toISOString();
    localStorage.setItem("makeSpendCloudEnabled", "true");
    localStorage.setItem("makeSpendCloudUpdatedAt", cloudState.lastUpdatedAt);
    await syncSharedTabs(false);
    render();
    setCloudStatus(silent ? "Auto-loaded cloud data." : "Loaded cloud data onto this device.");
    startCloudPolling();
    return true;
  } catch (error) {
    if (!silent) setCloudStatus(error.message);
    return false;
  } finally {
    cloudState.loading = false;
  }
}

async function pullLatestCloudData() {
  if (!cloudState.enabled || cloudState.saving || cloudState.loading) return;
  try {
    const user = cloudState.user || await refreshCloudSession();
    if (!user) return;
    const client = getSupabaseClient();
    const { data, error } = await client
      .from("user_app_data")
      .select("data, updated_at")
      .eq("user_id", user.id)
      .maybeSingle();
    if (error || !data?.data || !data.updated_at) {
      cloudState.loading = true;
      await syncSharedTabs(true);
      return;
    }
    if (!cloudState.lastUpdatedAt || new Date(data.updated_at) > new Date(cloudState.lastUpdatedAt)) {
      cloudState.loading = true;
      state = normalizeState(data.data);
      cloudState.lastUpdatedAt = data.updated_at;
      localStorage.setItem("makeSpendCloudUpdatedAt", data.updated_at);
      await syncSharedTabs(false);
      render();
      setCloudStatus("Loaded new cloud data from your other device.");
      return;
    }
    cloudState.loading = true;
    await syncSharedTabs(true);
  } finally {
    cloudState.loading = false;
  }
}

function startCloudPolling() {
  if (cloudState.pollTimer) return;
  cloudState.pollTimer = setInterval(pullLatestCloudData, 30000);
}

async function initCloud() {
  try {
    if (!syncConfig.supabaseUrl) {
      renderCloudStatus();
      return;
    }
    await refreshCloudSession();
    if (cloudState.user) {
      startCloudPolling();
      await syncSharedTabs(false);
      if (cloudState.enabled) pullLatestCloudData();
    }
    renderCloudStatus();
  } catch (error) {
    setCloudStatus(error.message);
  }
}

function formatDate(value) {
  return new Date(value + "T00:00:00").toLocaleDateString(appLocale(), { month: "short", day: "numeric", year: "numeric" });
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

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button, [data-open-form]");
  if (!target) return;

  if (target.dataset.tab) {
    $$(".screen").forEach((screen) => screen.classList.toggle("active", screen.id === target.dataset.tab));
    $$(".tabs button").forEach((button) => button.classList.toggle("active", button === target));
  }

  if (target.dataset.settingsTab) {
    if (openSettingsPanels.has(target.dataset.settingsTab)) {
      openSettingsPanels.delete(target.dataset.settingsTab);
    } else {
      openSettingsPanels.add(target.dataset.settingsTab);
    }
    saveOpenSections("makeSpendSettingsOpen", openSettingsPanels);
    renderSettingsTabs();
  }

  if (target.dataset.moneySettingsTab) {
    if (openMoneySettingsPanels.has(target.dataset.moneySettingsTab)) {
      openMoneySettingsPanels.delete(target.dataset.moneySettingsTab);
    } else {
      openMoneySettingsPanels.add(target.dataset.moneySettingsTab);
    }
    saveOpenSections("makeSpendMoneySettingsOpen", openMoneySettingsPanels);
    renderSettingsTabs();
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
    const transaction = state.transactions.find((item) => item.id === target.dataset.delete);
    if (transaction) {
      try {
        await deleteSharedTransaction(transaction);
      } catch (error) {
        setJointTabStatus(jointTabErrorMessage(error));
      }
    }
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
  if (target.dataset.payRecurring) addRecurringExpense(target.dataset.payRecurring);
  if (target.dataset.editRecurring) editRecurringBill(target.dataset.editRecurring);
  if (target.dataset.deleteRecurring) deleteRecurringBill(target.dataset.deleteRecurring);
  if (target.id === "addCurrencyAccount") addCurrencyAccount();
  if (target.dataset.toggleAccount) toggleAccount(target.dataset.toggleAccount);
  if (target.dataset.deleteAccount) deleteAccount(target.dataset.deleteAccount);
  if (target.dataset.toggleHomeAccount) toggleHomeAccount(target.dataset.toggleHomeAccount);
  if (target.dataset.toggleReportAccount) toggleReportAccount(target.dataset.toggleReportAccount);
  if (target.dataset.currencyPreset) fillCurrencyFields(target.dataset.currencyPreset, true);
  if (target.id === "createJointTab") createJointTab();
  if (target.id === "joinJointTab") joinJointTab();
  if (target.dataset.leaveJointTab) leaveJointTab(target.dataset.leaveJointTab);
  if (target.dataset.deleteJointTab) deleteJointTab(target.dataset.deleteJointTab);
  if (target.dataset.copyInvite) {
    await navigator.clipboard?.writeText(target.dataset.copyInvite);
    setJointTabStatus("Invite code copied.");
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("[data-color-type]")) {
    setChartColor(target.dataset.colorType, target.dataset.colorName, target.value);
  }
  if (target.matches("[data-starting-balance-account]")) {
    const accountId = target.dataset.startingBalanceAccount;
    if (!state.accountSettings[accountId]) state.accountSettings[accountId] = { startingBalance: 0 };
    state.accountSettings[accountId].startingBalance = decimalValue(target.value);
    render();
  }
  if (target.matches("[data-rate-currency]")) {
    const code = target.dataset.rateCurrency;
    state.ratesToCAD[code] = code === "CAD" ? 1 : decimalValue(target.value) || state.ratesToCAD[code] || 1;
    state.ratesSource = "Manual";
    state.ratesUpdatedAt = "";
    render();
  }
});

$("#transactionForm").addEventListener("submit", saveTransaction);
$("#investmentForm").addEventListener("submit", saveInvestment);
$("#transferForm").addEventListener("submit", saveTransfer);
$("#closeDialog").addEventListener("click", () => {
  closeDialog($("#transactionDialog"));
});
$("#closeInvestmentDialog").addEventListener("click", () => {
  closeDialog($("#investmentDialog"));
});
$("#closeTransferDialog").addEventListener("click", () => {
  closeDialog($("#transferDialog"));
});
$$("dialog").forEach((dialog) => {
  dialog.addEventListener("close", unlockPageBehindDialog);
});
$("#currencyInput").addEventListener("change", (event) => {
  $("#transactionCountryInput").value = countryIdForCurrency(event.target.value);
  updateRateInput();
});
$("#newCurrencyCode").addEventListener("input", (event) => {
  event.target.value = event.target.value.toUpperCase();
});
$("#newCurrencyCode").addEventListener("blur", () => {
  const code = normalizeCurrencyCode($("#newCurrencyCode").value);
  if (knownCurrencies[code]) {
    fillCurrencyFields(code);
  } else if (code) {
    $("#newCurrencyCode").value = code.slice(0, 3);
    showCurrencyFormMessage("For custom currencies, use the real 3-letter code and add the exchange rate if you know it.", "");
  }
});
$("#newAccountName").addEventListener("blur", () => {
  const code = guessCurrencyCode();
  if (knownCurrencies[code]) fillCurrencyFields(code);
});
$("#newCurrencyName").addEventListener("blur", () => {
  const code = guessCurrencyCode();
  if (knownCurrencies[code]) fillCurrencyFields(code);
});
$("#transactionCountryInput").addEventListener("change", (event) => {
  $("#currencyInput").value = countryCurrency(event.target.value);
  updateRateInput();
});
$("#investmentCurrencyInput").addEventListener("change", (event) => {
  $("#investmentCountryInput").value = countryIdForCurrency(event.target.value);
});
$("#recurringCountry").addEventListener("change", (event) => {
  $("#recurringCurrency").value = countryCurrency(event.target.value);
});
$("#recurringCurrency").addEventListener("change", (event) => {
  $("#recurringCountry").value = countryIdForCurrency(event.target.value);
});
$("#transferFromAccount").addEventListener("change", (event) => {
  $("#transferSentCurrency").value = countryCurrency(event.target.value);
  $("#transferFeeCurrency").value = $("#transferSentCurrency").value;
  if ($("#transferToAccount").value === event.target.value) {
    $("#transferToAccount").value = activeAccounts().find((account) => account.id !== event.target.value)?.id || event.target.value;
    $("#transferReceivedCurrency").value = countryCurrency($("#transferToAccount").value);
  }
});
$("#transferToAccount").addEventListener("change", (event) => {
  $("#transferReceivedCurrency").value = countryCurrency(event.target.value);
  if ($("#transferFromAccount").value === event.target.value) {
    $("#transferFromAccount").value = activeAccounts().find((account) => account.id !== event.target.value)?.id || event.target.value;
    $("#transferSentCurrency").value = countryCurrency($("#transferFromAccount").value);
  }
});
$("#previousMonth")?.addEventListener("click", () => {
  selectedMonth = shiftMonth(selectedMonth, -1);
  render();
});
$("#nextMonth")?.addEventListener("click", () => {
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
$("#languageSelect").addEventListener("change", (event) => {
  state.language = event.target.value;
  localStorage.setItem("makeSpendLanguage", state.language);
  render();
});
$("#themeButton").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  render();
});
$("#exportCsv").addEventListener("click", csvExport);
$("#exportBackup").addEventListener("click", backupExport);
$("#refreshRates").addEventListener("click", refreshRates);
$("#addRecurringBill").addEventListener("click", saveRecurringBill);
$("#saveCloudSettings")?.addEventListener("click", saveCloudSettingsFromInputs);
$("#signUpCloud").addEventListener("click", () => signUpCloud(false));
$("#loginCloud").addEventListener("click", () => loginCloud(false));
$("#logoutCloud").addEventListener("click", logoutCloud);
$("#resetPasswordCloud").addEventListener("click", () => resetPasswordCloud(false));
$("#saveCloudData")?.addEventListener("click", () => saveCloudData(false));
$("#loadCloudData")?.addEventListener("click", () => loadCloudData(false));
$("#setupSignUp").addEventListener("click", () => finishFirstSetup("signup"));
$("#setupSignIn").addEventListener("click", () => finishFirstSetup("login"));
$("#setupPasswordReset").addEventListener("click", () => resetPasswordCloud(true));
$("#setupCustomCode").addEventListener("input", (event) => {
  event.target.value = event.target.value.toUpperCase();
});
$("#setupPin").addEventListener("input", (event) => {
  event.target.value = cleanPin(event.target.value);
});
$("#pinInput").addEventListener("input", (event) => {
  event.target.value = cleanPin(event.target.value);
});
$("#unlockPin").addEventListener("input", (event) => {
  event.target.value = cleanPin(event.target.value);
});
$("#savePinSettings").addEventListener("click", () => updatePinSetting($("#pinEnabled").checked, $("#pinInput").value));
$("#unlockPinButton").addEventListener("click", unlockWithPin);
$("#unlockPin").addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlockWithPin();
});
$("#importBackup").addEventListener("change", (event) => {
  if (event.target.files[0]) backupImport(event.target.files[0]);
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

render();
initCloud();
