import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Crown & Grove collects, uses and protects your information, and your rights under the Kenya Data Protection Act, 2019.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-label">Legal</p>
          <h1 className="enter mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl" style={{ animationDelay: "120ms" }}>
            Privacy <span className="text-gradient-animated">policy.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            We collect only what we need to answer you and deliver the work you ask for. This page explains what that means in practice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <div className="card-surface space-y-10 rounded-2xl p-7 sm:p-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Information we collect</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              When you use our contact form we collect your name, email address, phone number if provided, the service you are interested in, your budget range and your project brief. When you become a client we also collect the information needed to perform the agreed work, which may include business details, account access you give us, and personal data contained in the systems we build or maintain.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">How we use it</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-400">
              <li>– To respond to your inquiry, prepare a quotation and agree scope.</li>
              <li>– To deliver, support and maintain the services you have purchased.</li>
              <li>– To meet legal, tax and contractual obligations.</li>
              <li>– To keep records of inquiries and decisions so we can serve you consistently.</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              We do not sell your information. We do not use inquiry details for unrelated marketing without your consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Who handles it</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Inquiry form submissions are delivered to our business email through a third-party email delivery service. This site is hosted on Vercel. We may use other service providers to deliver a project where this is stated in your agreement. Those providers may only use your information to perform their role.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Analytics</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              We use Vercel Analytics to understand which pages lead to inquiries so we can improve the site. It records page views, including a thank-you page shown after your brief is successfully delivered. Where our hosting plan supports custom events, it may also record interactions such as clicking a quote link or submitting the form. We do not use it to collect the contents of your message, and we do not use it for advertising or sell analytics data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Retention and security</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              We keep inquiry and client records for as long as needed for the engagement and for any period required by law. Access is limited to people who need the information for the work. No online service can be guaranteed completely secure, so please do not send passwords, licence keys or other secrets through the contact form.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Your rights</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Under the Kenya Data Protection Act, 2019 you may ask to access, correct or delete personal information we hold about you, or object to its processing. Where we process personal data on a client&apos;s behalf, the Data Processing &amp; Security Schedule in our business pack sets out the parties&apos; responsibilities. To make a request, write to {contact.email}.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Crown &amp; Grove, Africa Fuel, Maasai Lodge. Email {contact.email} or call/WhatsApp {contact.whatsapp}.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              This policy is a plain-language summary. It does not replace any signed agreement or data-processing schedule between you and Crown &amp; Grove.
            </p>
          </div>
        </div>
      </section>

      <CTABand title="Questions about your data?" description="Write to us and we will explain exactly what we hold and why." />
    </>
  );
}
