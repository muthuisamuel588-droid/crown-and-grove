export type Service = {
  name: string;
  launch: string;
  standard: string;
  category: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  { name: "Logo design", launch: "KSh 3,500", standard: "KSh 12,000", category: "Design", description: "3 concepts, 2 revision rounds, all file formats. A brand mark built around your business.", icon: "✦" },
  { name: "Business cards", launch: "KSh 1,500", standard: "KSh 2,000", category: "Design", description: "Print-ready design artwork. Printing charged separately unless quoted.", icon: "▤" },
  { name: "Company profile", launch: "KSh 5,000", standard: "KSh 18,000", category: "Design", description: "Up to 12 professionally designed pages that tell your business story.", icon: "▣" },
  { name: "Social media poster", launch: "KSh 500", standard: "KSh 1,000", category: "Design", description: "One static design for social. Rush requests +30%.", icon: "◈" },
  { name: "Video editing", launch: "KSh 2,000", standard: "KSh 3,500", category: "Video", description: "Starting rate per finished minute. Reels, promos and motion graphics.", icon: "▶" },
  { name: "Social media management", launch: "KSh 8,000/mo", standard: "KSh 18,000/mo", category: "Social", description: "Organic only: 12 posts a month, 2 platforms, captions, community replies and reporting.", icon: "◎" },
  { name: "Social media marketing", launch: "KSh 15,000/mo", standard: "KSh 45,000/mo", category: "Social", description: "Paid campaigns: strategy, ad creative, targeting, setup, weekly optimization and reports. Ad spend separate.", icon: "◉" },
  { name: "Social bundle (management + marketing)", launch: "KSh 20,000/mo", standard: "KSh 55,000/mo", category: "Social", description: "Both organic and paid handled by Syntra. Ad spend still billed separately.", icon: "✧" },
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
];

export const categories = ["All", "Design", "Video", "Social", "Web", "Software", "Retainer"];

export type Project = {
  title: string;
  client: string;
  category: string;
  summary: string;
  result: string;
  accent: string;
};

export const projects: Project[] = [
  { title: "Brand identity for a Nairobi café", client: "Confidential client", category: "Branding", summary: "A complete visual identity — logo, palette, typography and menu design — built for a warm, neighbourhood café.", result: "Launched with a consistent look across signage, menus and social.", accent: "from-amber-400 to-orange-500" },
  { title: "E-commerce store with M-Pesa", client: "Retail SME", category: "Web", summary: "A mobile-first online store with product catalogue, M-Pesa STK Push checkout and an admin dashboard.", result: "Enabled online sales with secure, local payments.", accent: "from-sky-500 to-blue-700" },
  { title: "POS system for a retail chain", client: "Multi-branch retailer", category: "Software", summary: "A custom point-of-sale system with stock control, M-Pesa reconciliation and eTIMS-ready receipts.", result: "Simplified checkout and reporting across branches.", accent: "from-emerald-500 to-teal-700" },
  { title: "Social media growth campaign", client: "Service business", category: "Social", summary: "Combined organic content management with targeted paid campaigns across two platforms.", result: "Built a consistent publishing rhythm and measurable engagement.", accent: "from-fuchsia-500 to-purple-700" },
  { title: "Business website for a consultancy", client: "Professional services", category: "Web", summary: "A clean 5-page website with service pages, team profiles and an inquiry form.", result: "A professional digital presence that converts visitors into leads.", accent: "from-cyan-500 to-indigo-700" },
  { title: "Promotional video series", client: "Startup", category: "Video", summary: "A set of short-form promo videos and reels for a product launch.", result: "Delivered a consistent set of assets for social and web.", accent: "from-rose-500 to-red-700" },
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
      "At Syntra, our logo packages include three concepts and two revision rounds, with all final files handed over on payment."
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
      "Safaricom transaction charges are paid directly by the business. Syntra's integration fee covers the build, not the per-transaction costs."
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
  email: "agencysyntra@gmail.com",
  location: "Africa Fuel, Maasai Lodge",
  paybill: "522522",
  account: "1343995795",
  accountHolder: "SAMUEL MUTHUI (for Syntra Agency business)",
  socials: "Syntra Agency on all major social media platforms",
};
