"use client";

import { useState } from "react";
import { contact, emailUrl, services, whatsappUrl } from "@/lib/data";

const budgets = [
  "Under KSh 20,000",
  "KSh 20,000 – 50,000",
  "KSh 50,000 – 150,000",
  "KSh 150,000 – 500,000",
  "Over KSh 500,000",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    consent: false,
  });

  const emailBody = [
    `Name: ${form.name || "Not provided"}`,
    `Email: ${form.email || "Not provided"}`,
    `Phone: ${form.phone || "Not provided"}`,
    `Service: ${form.service || "Not specified"}`,
    `Budget: ${form.budget || "Not provided"}`,
    "",
    form.message || "",
  ].join("\n");
  const emailHref = emailUrl(`Project inquiry: ${form.service || "Crown & Grove"}`, emailBody);
  const whatsappMessage = [
    "Hello Crown & Grove, I would like to ask about a project.",
    form.service ? `Service: ${form.service}` : "",
    form.message ? `\n${form.message}` : "",
  ].filter(Boolean).join("\n");

  function update(field: keyof typeof form, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");
    try {
      // FormSubmit is called from the browser: its free endpoint blocks Vercel's
      // server IPs, and it handles the reply-to address and delivery itself.
      const res = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New inquiry: ${form.service} — ${form.name}`,
          _replyto: form.email,
          _template: "table",
          _captcha: "false",
          email: form.email,
          name: form.name,
          phone: form.phone || "Not provided",
          service: form.service,
          budget: form.budget || "Not provided",
          message: form.message,
          received: new Date().toISOString(),
        }),
      });
      const data = (await res.json()) as { success?: string | boolean; message?: string };
      // The first-ever submission returns success:"false" while the mailbox
      // activation link is being sent. Treat that as accepted.
      const activationPending = /needs activation|activate form/i.test(data.message || "");
      const rejected = data.success === false || data.success === "false";
      if (!res.ok || (rejected && !activationPending)) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setMessage("Thank you — your brief is with us. We will reply within one business day.");
      setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "", consent: false });
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface rounded-2xl p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/15 text-2xl text-accent-400">✓</div>
        <h3 className="mt-5 text-2xl font-bold text-white">Brief received</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{message}</p>
        <p className="mt-4 text-xs text-slate-500">
          Need to reach us sooner? <a className="font-medium text-accent-400 hover:underline" href={whatsappUrl("Hello Crown & Grove, I just sent an inquiry. What happens next?")} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a> or <a className="text-accent-400 hover:underline" href={`mailto:${contact.email}`}>email us</a>.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-outline mt-6 text-sm">
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card-surface space-y-5 rounded-2xl p-6 sm:p-8">
      <div>
        <h2 className="text-2xl font-bold text-white">Tell us about your project</h2>
        <p className="mt-2 text-sm text-slate-400">The more detail you give us, the more accurate our quote.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-slate-300">Full name *</span>
          <input required minLength={2} className="input-field" placeholder="Your name" value={form.name} onChange={(e) => update("name", e.target.value)} />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-slate-300">Email address *</span>
          <input required type="email" className="input-field" placeholder="you@company.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-slate-300">Phone / WhatsApp</span>
          <input type="tel" className="input-field" placeholder="+254 7..." value={form.phone} onChange={(e) => update("phone", e.target.value)} />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-slate-300">Service needed *</span>
          <select required className="input-field" value={form.service} onChange={(e) => update("service", e.target.value)}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-2 block font-medium text-slate-300">Estimated budget</span>
        <select className="input-field" value={form.budget} onChange={(e) => update("budget", e.target.value)}>
          <option value="">Select a range</option>
          {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </label>

      <label className="block text-sm">
        <span className="mb-2 block font-medium text-slate-300">Project brief *</span>
        <textarea
          required
          minLength={10}
          rows={6}
          className="input-field resize-y"
          placeholder="What are you building, who is it for, and what does success look like?"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </label>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-slate-400">
        <input
          required
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand-500"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
        />
        <span>I agree that Crown & Grove may use these details to respond to my inquiry. My information will not be shared with third parties.</span>
      </label>

      {status === "error" && (
        <p role="alert" className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">{message}</p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
        {status === "submitting" ? "Sending your brief..." : "Send inquiry"}
      </button>

      <div className="space-y-2 text-center text-xs text-slate-500">
        <p>
          Prefer email? <a href={emailHref} className="text-accent-400 hover:underline">Open your email app</a> or write to <a href={`mailto:${contact.email}`} className="text-accent-400 hover:underline">{contact.email}</a>.
        </p>
        <p>
          Or <a href={whatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="font-medium text-accent-400 hover:underline">send us a WhatsApp message</a>.
        </p>
      </div>
    </form>
  );
}
