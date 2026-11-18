# Syntra Agency website

Marketing website for Syntra Agency, built with Next.js 16, React 19, Tailwind CSS v4 and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | What it covers |
|---|---|
| `/` | Hero, services preview, process, selected work, resources, CTA |
| `/about` | Studio story and values |
| `/services` | All 18 services with Launch and Standard rates, filterable |
| `/portfolio` | Case studies, filterable |
| `/blog` | Resources index |
| `/blog/[slug]` | Individual article pages |
| `/contact` | Client inquiry form, contact and payment details |

## Contact and payment details

All services share one contact point:

- Email: `agencysyntra@gmail.com`
- Phone / WhatsApp: `+254 729 860 771 / 0712 079 046`
- Location: Africa Fuel, Maasai Lodge
- M-Pesa PayBill: `522522` (KCB), Account: `1343995795`
- Account holder: `SAMUEL MUTHUI (for Syntra Agency business)`

These are centralised in `lib/data.ts`.

## Inquiry form

The form posts to `/api/inquiry`. By default it validates the submission and writes it to the server logs (visible in the Vercel function logs). To deliver submissions by email, add these environment variables:

```bash
RESEND_API_KEY=re_...
INQUIRY_FROM_EMAIL="Syntra Agency <your-verified-domain>"
```

Emails are delivered to `agencysyntra@gmail.com` with the sender's email set as the reply-to address.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import the repository in Vercel — framework auto-detection will pick Next.js.
3. Add the environment variables above if email delivery is required.
4. Set `NEXT_PUBLIC_SITE_URL` to your final Vercel URL (for example `https://syntra-website.vercel.app`) so SEO metadata, the sitemap and robots.txt use the correct domain.
5. Deploy. Vercel auto-detects Next.js — no build configuration needed.

## Design & motion

- Flat logo (`public/syntra-logo.png`) has its near-black background converted to true alpha transparency by `scripts/make-transparent.py`. The glow logo is used for hero/background treatments.
- Motion: staggered hero entrance, scroll-triggered reveals, count-up stats, drifting hero artwork, animated gradient headlines, button light sweep, and an infinite service ticker.
- All motion respects `prefers-reduced-motion`, and a `<noscript>` fallback keeps content visible without JavaScript.

## Customisation

- Colours and reusable styles: `app/globals.css`
- Services, projects, articles and contact details: `lib/data.ts`
- Header/footer: `components/Header.tsx`, `components/Footer.tsx`
- Logos: `public/syntra-logo.png` (flat, header) and `public/syntra-glow.png` (hero/background)
