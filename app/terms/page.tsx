import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import Link from "next/link";
import { contact, pricing } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "A plain-language summary of Crown & Grove's standard trading terms for design, web, software, social and support work.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-label">Legal</p>
          <h1 className="enter mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl" style={{ animationDelay: "120ms" }}>
            Terms of <span className="text-gradient-animated">service.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            The essentials of how we quote, charge, deliver and hand over work. Your signed agreement and approved quotation always control.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <div className="card-surface space-y-10 rounded-2xl p-7 sm:p-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Quotes and prices</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-400">
              <li>– Prices are in Kenya Shillings. Tax treatment is confirmed on the quotation or invoice.</li>
              <li>– Quotes are valid for {pricing.quoteValidityDays} calendar days by default.</li>
              <li>– Starting rates are not a promise that every project can be done at that price. Scope, complexity, deadlines and third-party costs affect the fee.</li>
              <li>– Only the deliverables listed in the approved quote are included. New requests need written approval before work continues.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Payment</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Unless the quote says otherwise, payment is {pricing.depositPercent}% before work begins and {pricing.balancePercent}% before final handover. Monthly services are payable in advance. Overdue invoices accrue interest at {pricing.latePaymentInterest}. If a payment is more than 14 days late we may suspend work or access until it is settled, and will allow a further 14 days after written notice to cure the default before termination.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Delivery, review and acceptance</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Timelines begin after the deposit, brief and required materials are received. On delivery you have a trial and review period of 5 business days (or longer if stated in the quote) to give one consolidated list of genuine defects or deviations from the agreed scope. We correct verified in-scope issues at no extra charge. If no issues are raised in that period, the work is deemed accepted and the final installment becomes due.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Ownership and third-party materials</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              On full payment, ownership of the final approved bespoke deliverables is assigned to you for your stated business use. Working files, unused concepts, templates, tools and pre-existing materials remain with their respective owners. Third-party assets, fonts, stock, plugins and licences remain subject to their own terms. Until payment is complete, no licence to use the deliverables is granted.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Liability and cancellation</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              To the maximum extent permitted by law, Crown &amp; Grove&apos;s total liability under an agreement is limited to the total fees paid under it, and neither party is liable for indirect or consequential loss. Either party may end a project on 14 days&apos; written notice, with payment for work already performed; recurring monthly services require 30 days&apos; notice. These terms are governed by the laws of the Republic of Kenya.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Privacy</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              How we handle your information is set out in our <Link href="/privacy" className="font-medium text-accent-400 hover:underline">Privacy Policy</Link>. Where we process personal data on your behalf, we will sign the Data Processing &amp; Security Schedule before work begins.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Questions? Email {contact.email}. This page is a summary, not legal advice; the signed agreement controls if there is a conflict.
            </p>
          </div>
        </div>
      </section>

      <CTABand title="Ready to agree scope?" description="Send your brief and we will return a written quote with deliverables, timeline and rate." />
    </>
  );
}
