import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Get a Quote",
  description: "Tell Syntra Agency about your project. One team for branding, websites, software, POS and marketing. Email agencysyntra@gmail.com.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 py-16 sm:py-20">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-label">Contact</p>
          <h1 className="enter mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl" style={{ animationDelay: "120ms" }}>
            Let's talk about <span className="text-gradient-animated">your project.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Fill in the brief and we will get back to you within one business day with a clear next step. No obligation, no pushy follow-ups.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal><InquiryForm /></Reveal>

          <Reveal delay={120}>
          <aside className="space-y-6">
            <div className="card-surface rounded-2xl p-7">
              <h2 className="text-xl font-bold text-white">Reach us directly</h2>
              <div className="mt-5 space-y-5 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">Email</p>
                  <a href={`mailto:${contact.email}`} className="mt-1 block break-all font-medium text-accent-400 hover:underline">{contact.email}</a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">Phone / WhatsApp</p>
                  <p className="mt-1 font-medium text-white">{contact.phone}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">Location</p>
                  <p className="mt-1 font-medium text-white">{contact.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">Social</p>
                  <p className="mt-1 font-medium text-white">{contact.socials}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-accent-500/25 bg-accent-500/[0.06] p-7">
              <h2 className="text-xl font-bold text-white">Payment details</h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">Used for all Syntra Agency services.</p>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">M-Pesa PayBill (KCB)</p>
                  <p className="mt-1 text-lg font-bold text-white">{contact.paybill}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">Account number</p>
                  <p className="mt-1 text-lg font-bold text-white">{contact.account}</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">Account holder</p>
                  <p className="mt-1 font-semibold text-white">{contact.accountHolder}</p>
                </div>
              </div>
              <p className="mt-5 rounded-lg bg-ink-950/50 p-3 text-xs leading-relaxed text-slate-400">
                Please confirm these details with Syntra Agency before sending any money.
              </p>
            </div>

            <div className="card-surface rounded-2xl p-7">
              <h2 className="text-lg font-bold text-white">What happens next?</h2>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate-400">
                <li><span className="font-semibold text-accent-400">1.</span> We read your brief and may ask a couple of questions.</li>
                <li><span className="font-semibold text-accent-400">2.</span> You get a written quote with scope, timeline and rate.</li>
                <li><span className="font-semibold text-accent-400">3.</span> On approval and deposit, work begins.</li>
              </ol>
            </div>
          </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
