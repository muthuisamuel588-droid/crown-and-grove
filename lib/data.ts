export type Service = {
  name: string;
  launch: string;
  standard: string;
  category: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  { name: "Logo design", launch: "KSh 3,500", standard: "KSh 12,000", category: "Design", description: "3 concepts, 2 revision rounds and all final files. Full scope confirmed in your quote.", icon: "✦" },
  { name: "Business cards", launch: "KSh 1,500", standard: "KSh 2,000", category: "Design", description: "Print-ready design artwork. Printing charged separately unless quoted.", icon: "▤" },
  { name: "Company profile", launch: "KSh 5,000", standard: "KSh 18,000", category: "Design", description: "Up to 12 designed pages. Content is supplied by you and agreed in the brief.", icon: "▣" },
  { name: "Social media poster", launch: "KSh 500", standard: "KSh 1,000", category: "Design", description: "One static design. Rush requests +30%; copywriting may cost extra.", icon: "◈" },
  { name: "Video editing", launch: "KSh 2,000", standard: "KSh 3,500", category: "Video", description: "Starting rate per finished minute. Final fee depends on footage, duration and complexity.", icon: "▶" },
  { name: "Social media management", launch: "KSh 8,000/mo", standard: "KSh 18,000/mo", category: "Social", description: "Organic only: 12 posts a month, 2 platforms, captions, community replies and reporting.", icon: "◎" },
  { name: "Social media marketing", launch: "KSh 15,000/mo", standard: "KSh 45,000/mo", category: "Social", description: "Paid campaigns: strategy, ad creative, targeting, setup, weekly optimization and reports. Ad spend separate.", icon: "◉" },
  { name: "Social bundle (management + marketing)", launch: "KSh 20,000/mo", standard: "KSh 55,000/mo", category: "Social", description: "Both organic and paid handled by Crown & Grove. Ad spend still billed separately.", icon: "✧" },
  { name: "Basic business website", launch: "KSh 15,000", standard: "KSh 45,000", category: "Web", description: "Up to 5 pages, mobile-responsive, basic SEO. Hosting and domain specified in quote.", icon: "▦" },
  { name: "E-commerce website", launch: "KSh 35,000", standard: "KSh 85,000", category: "Web", description: "Catalogue, M-Pesa/card checkout, admin panel. Integrations scoped separately.", icon: "▩" },
  { name: "Custom software development", launch: "KSh 250,000", standard: "KSh 750,000", category: "Software", description: "Starting price. Requirements discovery and written specification required.", icon: "⌘" },
  { name: "Mobile app development", launch: "KSh 200,000", standard: "KSh 600,000", category: "Software", description: "Starting price, single platform (Android-first). Cross-platform quoted separately.", icon: "▯" },
  { name: "POS system development", launch: "KSh 150,000", standard: "KSh 500,000", category: "Software", description: "Single till: checkout, stock, M-Pesa, eTIMS-ready. Multi-branch quoted separately.", icon: "▥" },
  { name: "POS subscription (hosted)", launch: "KSh 3,000/mo", standard: "KSh 8,000/mo", category: "Software", description: "Per till. Includes updates, backups and support. Hardware excluded.", icon: "▧" },
  { name: "Software management & maintenance", launch: "KSh 15,000/mo", standard: "KSh 40,000/mo", category: "Retainer", description: "Security updates, backups, monitoring, bug fixes and agreed hours for small changes.", icon: "⚙" },
  { name: "Website maintenance care plan", launch: "KSh 5,000/mo", standard: "KSh 15,000/mo", category: "Retainer", description: "Updates, backups, uptime monitoring and content edits. E-commerce at upper end.", icon: "♻" },
  { name: "IT support retainer", launch: "KSh 15,000/mo", standard: "KSh 40,000/mo", category: "Retainer", description: "Remote support for agreed device/user count. On-site and 24/7 quoted separately.", icon: "⚡" },
  { name: "Digital marketing", launch: "KSh 5,000/mo", standard: "KSh 20,000/mo", category: "Retainer", description: "Agency fee only. Advertising spend excluded unless stated.", icon: "◊" },
  { name: "Branded merchandise", launch: "Quote on request", standard: "Quote on request", category: "Branding", description: "Caps, T-shirts, hoodies, jerseys, cups and other branded collateral. Quantity, artwork and decoration method quoted per order.", icon: "❖" },
  { name: "Branded caps", launch: "Quote on request", standard: "Quote on request", category: "Branding", description: "Printed or embroidered caps. Sizes, colours, quantity and decoration method quoted per order.", icon: "◫" },
  { name: "Branded T-shirts", launch: "Quote on request", standard: "Quote on request", category: "Branding", description: "Branded T-shirts in your chosen colours and sizes. Printing quantity and method quoted per order.", icon: "◫" },
  { name: "Branded hoodies", launch: "Quote on request", standard: "Quote on request", category: "Branding", description: "Printed or embroidered hoodies. Sizes, colours, quantity and decoration method quoted per order.", icon: "◫" },
  { name: "Branded jerseys", launch: "Quote on request", standard: "Quote on request", category: "Branding", description: "Team or promotional jerseys with names, numbers and logos. Quantities quoted per order.", icon: "◫" },
  { name: "Branded cups", launch: "Quote on request", standard: "Quote on request", category: "Branding", description: "Printed or engraved cups and mugs. Quantity, finish and artwork quoted per order.", icon: "◫" },
];

export const categories = ["All", "Design", "Branding", "Video", "Social", "Web", "Software", "Retainer"];

// Mirrors the pricing rules in the Crown & Grove business documentation pack.
export const pricing = {
  launchClientLimit: 10,
  quoteValidityDays: 14,
  depositPercent: 60,
  balancePercent: 40,
  latePaymentInterest: "2% per month",
};

export type Project = {
  title: string;
  client: string;
  category: string;
  summary: string;
  result: string;
  accent: string;
};

export const projects: Project[] = [
  { title: "Crown & Grove rebrand and name system", client: "Crown & Grove (own brand)", category: "Branding", summary: "A full identity refresh built around the Crown & Grove name — ten logo directions explored, Concept 04 selected, then a complete kit of lockups, wordmarks, favicon, mono mark, brand board, posters, ads and wallpapers.", result: "One consistent identity across web, social and print, anchored by ink, gold and cream and the taglines 'Where Strategy Meets Creation' and 'Design. Build. Grow.'.", accent: "from-brand-500 to-ink-900" },
  { title: "Custom POS & retail management suite", client: "Retail clients (names withheld)", category: "Software", summary: "Point-of-sale systems for retail operations — product catalogues, cashier permission levels, stock tracking, delivery dates, activation and trial controls, and payment reconciliation.", result: "Built, analysed and repaired multiple POS implementations, including installer fixes and a 5-day trial setup.", accent: "from-brand-600 to-ink-900" },
  { title: "Private booking & live-streaming platform", client: "Private entertainment startup", category: "Software", summary: "Foundation for a booked, one-to-one live entertainment platform: accounts, performer vetting workflow, an upfront-payment ledger and self-hosted live video rooms.", result: "Delivered the hard-to-change core — typed database schema, state machine, payment abstraction and a local-first development setup.", accent: "from-brand-700 to-ink-900" },
  { title: "Trend Trader — automated trading system", client: "Own product", category: "Automation", summary: "Trend-following trading bot with a strategy engine, ATR-based risk controls, backtester, paper broker and a FastAPI control API, plus an Android control-panel scaffold.", result: "Strategy, risk manager and backtester working on synthetic and crypto market data; live trading kept opt-in.", accent: "from-brand-500 to-brand-800" },
  { title: "MyVpn — Android WireGuard client", client: "Own product", category: "Mobile", summary: "A minimal Android VPN client built on the official WireGuard tunnel library: import a provider config or enter your own server, then connect without root.", result: "Installable APK for Android 8+ with private keys protected by the Android Keystore.", accent: "from-brand-600 to-brand-900" },
  { title: "AI department advisor system", client: "Internal R&D", category: "AI", summary: "Designed an AI 'company' structure with department-level advisors and shared context so each assistant stays within its remit.", result: "Produced the advisor architecture and role definitions for further development.", accent: "from-brand-700 to-brand-900" },
  { title: "Unified social app concept", client: "Internal R&D", category: "Mobile", summary: "Explored a single Android app bringing messaging and short-form social feeds from multiple networks into one place.", result: "Concept and technical direction documented; not a published app.", accent: "from-brand-500 to-ink-900" },
  { title: "Building security OS concept", client: "Internal R&D", category: "Software", summary: "Explored a security-first operating layer for a building — access control, monitoring and alerting brought into one dashboard.", result: "Requirements and system direction documented for a future build.", accent: "from-brand-600 to-ink-800" },
  { title: "Project network graph", client: "Internal tool", category: "Data", summary: "An interactive network graph that maps how projects, files and work sessions connect, making a large project archive easier to review and share.", result: "Shareable graph view built and reviewed.", accent: "from-brand-700 to-ink-950" },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "logo-design-what-to-expect",
    title: "What to expect from a professional logo design",
    date: "2026-10-12",
    category: "Branding",
    excerpt: "A logo is more than a pretty mark. Here is what a proper logo project actually delivers — and what the cheap options leave out.",
    body: [
      "A professional logo project starts with a brief: your business name, audience, values and where the mark will be used. Without that, design is guesswork.",
      "You should expect multiple original concepts, a defined number of revision rounds, and a full file package — vector formats, colour and black-and-white versions, and clear usage guidance.",
      "At the very low end, you are usually getting a template-based mark with limited files and no real differentiation. That can work as a placeholder, but it rarely builds long-term brand equity.",
      "At Crown & Grove, our logo packages include three concepts and two revision rounds, with all final files handed over on payment."
    ]
  },
  {
    slug: "why-maintenance-matters",
    title: "Why your website needs maintenance after launch",
    date: "2026-10-05",
    category: "Web",
    excerpt: "Launch day is the beginning, not the end. Here is what goes wrong when a website is left unattended — and how to prevent it.",
    body: [
      "Websites are software. Core files, plugins and dependencies need regular updates; without them, security holes open and performance degrades.",
      "Backups are only useful if they are tested. A verified restore is the difference between a five-minute fix and a full rebuild.",
      "Monitoring catches downtime before your customers do. A broken contact form or checkout can cost you leads silently for weeks.",
      "A modest monthly care plan costs far less than a single emergency recovery. Our website care plans start at KSh 5,000 per month."
    ]
  },
  {
    slug: "mpesa-integration-guide",
    title: "A plain-English guide to M-Pesa payments on your site",
    date: "2026-09-28",
    category: "Software",
    excerpt: "STK Push, PayBill, callbacks and reconciliation — demystified for business owners who just want to sell online.",
    body: [
      "M-Pesa integration usually means one of two things: a PayBill or Till number that customers pay into, or STK Push where a prompt appears on the customer's phone.",
      "For most online stores, STK Push gives the smoothest checkout. It requires Daraja API access, a registered business account and careful callback handling.",
      "The hidden work is reconciliation: matching payments to orders, handling failures and handling refunds. That is where experienced local developers earn their fee.",
      "Safaricom transaction charges are paid directly by the business. Crown & Grove's integration fee covers the build, not the per-transaction costs."
    ]
  },
  {
    slug: "social-organic-vs-paid",
    title: "Organic social vs paid social — which do you actually need?",
    date: "2026-09-18",
    category: "Social",
    excerpt: "They do different jobs. Here is how to decide where to put your budget — and why doing both often makes sense.",
    body: [
      "Organic social builds trust and a body of work. It is slow, compounding and essential for a brand that wants to look established.",
      "Paid social buys reach and speed. It is useful for launches, promotions and reaching audiences who do not follow you yet — but it stops the moment you stop paying.",
      "The strongest approach for most small businesses is a steady organic base plus focused paid campaigns around moments that matter.",
      "That is why we offer a combined social bundle: management plus marketing, with ad spend billed directly by the client to the platform."
    ]
  }
];

export const contact = {
  phone: "+254 729 860 771 / 0712 079 046",
  whatsapp: "+254 729 860 771",
  email: "crownandgroveoff@gmail.com",
  location: "Africa Fuel, Maasai Lodge",
  paybill: "522522",
  account: "1343995795",
  accountHolder: "SAMUEL MUTHUI (for Crown & Grove business)",
  socials: "Crown & Grove on all major social media platforms",
};

export function whatsappUrl(message?: string) {
  const number = contact.whatsapp.replace(/\D/g, "");
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${query}`;
}

export function emailUrl(subject: string, body: string) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
