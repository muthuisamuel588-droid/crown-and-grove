import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import ServicesExplorer from "@/components/ServicesExplorer";
import { brandingPriceTables, contact, pricing } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Explore Crown & Grove services — branded merchandise, design, websites, software, POS, social media and support retainers — with Launch, Standard or quote-based rates.",
  alternates: { canonical: "/services" },
};

const plans = [
  {
    name: "Launch rate",
    badge: "First 10 clients",
    text: `Our introductory rate for the first ${pricing.launchClientLimit} clients, or until the date stated on your quotation — whichever comes first.`,
    highlight: false,
  },
  {
    name: "Standard rate",
    badge: "After launch offer",
    text: "Our standard rate once the introductory offer ends. Your written quotation always confirms the rate, scope and deliverables for your project.",
    highlight: true,
  },
];

function formatRate(value: string) {
  return /^\d[\d,]*$/.test(value) ? `KSh ${value}` : value;
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-label">Services & rates</p>
          <h1 className="enter mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl" style={{ animationDelay: "120ms" }}>
            Clear work. <span className="text-gradient-animated">Clear prices.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Every service is offered at two rates so you can choose the level that fits your stage. Final scope, deliverables and timelines are always confirmed in a written quote before we start.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-6 ${plan.highlight ? "border border-accent-500/40 bg-accent-500/[0.07]" : "card-surface"}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300">{plan.badge}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{plan.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-relaxed text-slate-400">
          <p className="font-semibold text-white">Pricing notes</p>
          <ul className="mt-3 space-y-2">
            <li>All prices are in Kenya Shillings (KSh). We will confirm whether any applicable taxes are included or additional on your final quotation.</li>
            <li>A starting price is not a promise that every project can be completed at that price. Complexity, volume, deadlines, licensing, travel and third-party costs can change the fee.</li>
            <li>Quotes are valid for {pricing.quoteValidityDays} calendar days by default. We will get your written approval before any scope change or additional charge.</li>
          </ul>
        </div>

        <div className="mt-14">
          <ServicesExplorer />
        </div>

        <div className="mt-16 rounded-2xl border border-brand-500/30 bg-white/[0.03] p-6 sm:p-8">
          <p className="section-label">Branding &amp; print</p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">DTF &amp; no-cut rates</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
            Fixed rates for a standard chest or A4 logo. No minimum order, fast turnaround and design support available. All prices are in Kenya Shillings (KSh) and valid during 2026, subject to change — your written quote confirms the final price.
          </p>

          <div className="mt-8 space-y-10">
            {brandingPriceTables.map((table) => (
              <div key={table.title}>
                <h3 className="text-lg font-bold text-white">{table.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{table.subtitle}</p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                    <thead>
                      <tr>
                        {table.headers.map((header) => (
                          <th key={header} scope="col" className="border-b border-brand-500/30 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-brand-500">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row) => (
                        <tr key={row.label} className="border-b border-white/10 last:border-0">
                          <th scope="row" className="px-3 py-2 font-medium text-white">{row.label}</th>
                          {row.values.map((value, index) => (
                            <td key={`${row.label}-${index}`} className="px-3 py-2 text-slate-300">{formatRate(value)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-2 text-sm leading-relaxed text-slate-400">
            <li>– Larger, multi-placement, multi-colour and complex designs are quoted separately.</li>
            <li>– Jerseys and bespoke merchandise remain quote-based per order; the fixed rates above cover standard DTF/no-cut print work.</li>
            <li>– Printing of items you supply is charged at the branding-only rates; full-package prices include a blank item and printing.</li>
            <li>– High-resolution PNG or PDF artwork is preferred.</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-900/60 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="section-label">Payment details</p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Simple, local payment</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              All services use the same payment channels. Confirm the account details with Crown & Grove before sending money.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Unless your quotation states milestones, payment is {pricing.depositPercent}% before work begins and {pricing.balancePercent}% before final handover. Monthly retainers are payable in advance.
            </p>
            <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-300">
              <p className="flex justify-between gap-4"><span className="text-slate-500">M-Pesa PayBill</span><span className="font-semibold text-white">{contact.paybill} (KCB)</span></p>
              <p className="flex justify-between gap-4"><span className="text-slate-500">Account number</span><span className="font-semibold text-white">{contact.account}</span></p>
              <p className="border-t border-white/10 pt-3 text-xs leading-relaxed text-slate-400">
                Account holder: {contact.accountHolder}.
              </p>
            </div>
          </div>
          <div>
            <p className="section-label">Good to know</p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">What is not included</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-400">
              {[
                "Advertising spend, printing, stock assets, fonts, music licences and other third-party costs.",
                "Domain names, hosting, paid plugins, SMS charges, app-store fees and platform charges (including M-Pesa and KRA eTIMS).",
                "POS hardware, network/data costs, licences and new features outside an agreed scope.",
                "Original copywriting, major redesigns and work requested after sign-off.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent-400">–</span>{item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-500">
              Overdue invoices accrue interest at {pricing.latePaymentInterest}. Full terms are set out in the General Client Service Agreement and the relevant service agreement.
            </p>
          </div>
        </div>
      </section>

      <CTABand title="Not sure which service you need?" description="Send us your goal and we will recommend the right combination — or tell you honestly if you do not need us yet." />
    </>
  );
}
