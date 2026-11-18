import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/data";

const explore = [
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services & pricing" },
  { href: "/portfolio", label: "Our work" },
  { href: "/blog", label: "Resources" },
  { href: "/contact", label: "Get a quote" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-600/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/syntra-logo.png" alt="Syntra Agency" width={170} height={56} className="h-12 w-auto object-contain" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              A Kenyan creative and technology studio turning ambitious ideas into brands, websites, software and growth.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">Design. Build. Grow.</p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 transition-colors hover:text-accent-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get in touch</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <span className="block text-xs uppercase tracking-wide text-slate-500">Email</span>
                <a href={`mailto:${contact.email}`} className="break-all hover:text-accent-400">{contact.email}</a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-slate-500">Phone / WhatsApp</span>
                {contact.phone}
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-slate-500">Location</span>
                {contact.location}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Payment details</h3>
            <div className="mt-5 space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
              <p><span className="text-slate-500">M-Pesa PayBill</span><br />{contact.paybill} (KCB)</p>
              <p><span className="text-slate-500">Account number</span><br />{contact.account}</p>
              <p className="border-t border-white/10 pt-2 text-xs leading-relaxed text-slate-400">
                Account holder: {contact.accountHolder}. Please confirm details with Syntra Agency before making payment.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Syntra Agency. All rights reserved.</p>
          <p>Hosted on Vercel · Design. Build. Grow.</p>
        </div>
      </div>
    </footer>
  );
}
