import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import ServicesExplorer from "@/components/ServicesExplorer";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "All 18 Syntra Agency services with transparent Launch and Standard rates — branding, websites, software, POS, social media and support retainers.",
};

const plans = [
  {
    name: "Launch rate",
    badge: "Starting out",
    text: "Introductory pricing for new clients, smaller scopes and businesses testing an idea. Fewer deliverables, faster turnaround.",
    highlight: false,
  },
  {
    name: "Standard rate",
    badge: "Full scope",
    text: "Our full professional rate for established businesses, complex requirements and work that needs deeper strategy and support.",
    highlight: true,
  },
];

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

        <div className="mt-14">
          <ServicesExplorer />
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-900/60 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="section-label">Payment details</p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Simple, local payment</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              All services use the same payment channels. Confirm the account details with Syntra Agency before sending money.
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
                "Advertising spend, printing, hosting fees and third-party software licences.",
                "M-Pesa, payment gateway and KRA eTIMS transaction or platform charges.",
                "POS hardware, network/data costs and new features outside an agreed scope.",
                "Original copywriting, major redesigns and work requested after sign-off.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent-400">–</span>{item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-500">
              Overdue invoices accrue interest at 2% per month. Full terms are set out in the General Client Service Agreement and the relevant service agreement.
            </p>
          </div>
        </div>
      </section>

      <CTABand title="Not sure which service you need?" description="Send us your goal and we will recommend the right combination — or tell you honestly if you do not need us yet." />
    </>
  );
}
