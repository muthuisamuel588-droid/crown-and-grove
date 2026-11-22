# Crown & Grove website

Marketing website for Crown & Grove, built with Next.js 16, React 19, Tailwind CSS v4 and TypeScript.

**Live:** https://crown-and-grove.vercel.app  
**Repository:** https://github.com/muthuisamuel588-droid/crown-and-grove

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
| `/services` | All services, including branded merchandise, with Launch, Standard or quote-based rates, filterable |
| `/portfolio` | Case studies, filterable |
| `/blog` | Resources index |
| `/blog/[slug]` | Individual article pages |
| `/contact` | Client inquiry form, contact and payment details |

## Contact and payment details

All services share one contact point:

- Email: `crownandgroveoff@gmail.com`
- Phone / WhatsApp: `+254 729 860 771 / 0712 079 046`
- Location: Africa Fuel, Maasai Lodge
- M-Pesa PayBill: `522522` (KCB), Account: `1343995795`
- Account holder: `SAMUEL MUTHUI (for Crown & Grove business)`

These are centralised in `lib/data.ts`.

## Inquiry form and direct contacts

The contact form submits directly from the visitor's browser to FormSubmit, which delivers inquiries to `crownandgroveoff@gmail.com`. The sender's email is set as the reply-to address, so you can reply directly from your inbox. (FormSubmit's free endpoint blocks Vercel server IPs, so the old `/api/inquiry` relay is not used for delivery.)

**One-time setup:** after the first inquiry is submitted, check `crownandgroveoff@gmail.com` for a confirmation email from FormSubmit and click the confirmation link. Until that is done, FormSubmit holds submissions instead of delivering them. The form will not claim success while activation is pending; it tells the visitor to use the email or WhatsApp fallback instead. No API key or Vercel environment variable is required for email delivery.

The form also offers prefilled `mailto:` links, and the contact page, CTA band and footer include a WhatsApp click-to-chat link. The WhatsApp number and URL helper live in `lib/data.ts` (`contact.whatsapp` and `whatsappUrl()`).

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import the repository in Vercel — framework auto-detection will pick Next.js.
3. Add the environment variables above if email delivery is required.
4. Set `NEXT_PUBLIC_SITE_URL` to your final Vercel URL (for example `https://crown-and-grove.vercel.app`) so SEO metadata, the sitemap and robots.txt use the correct domain.
5. Deploy. Vercel auto-detects Next.js — no build configuration needed.

For manual prebuilt production deploys on Windows:

```powershell
vercel build --prod
powershell -File scripts\dereference-vercel-functions.ps1
vercel deploy --prebuilt --prod --yes
```

The dereference step is required because Windows symlinks in `.vercel/output/functions` otherwise fail during upload.

## Google indexing

The site publishes `/sitemap.xml`, `/robots.txt`, canonical URLs and Organization/LocalBusiness structured data. After deployment:

1. Verify `https://crown-and-grove.vercel.app` in Google Search Console.
2. Submit `https://crown-and-grove.vercel.app/sitemap.xml`.
3. Request indexing for the homepage, services, about and contact pages.
4. Create or claim a Google Business Profile so local “Crown & Grove” searches can show a map listing.

## Design & motion

- Logos and icons come from the official Crown & Grove brand kit (selected Concept 04). The current cream-theme palette is cream `#F7F4EC`, deep green `#1B4D3E`, gold `#C8A951` and copper `#B87333`, defined in `app/globals.css`.
- Motion: staggered hero entrance, scroll-triggered reveals, count-up stats, drifting hero artwork, animated gradient headlines, button light sweep, and an infinite service ticker.
- All motion respects `prefers-reduced-motion`, and a `<noscript>` fallback keeps content visible without JavaScript.

## Customisation

- Colours and reusable styles: `app/globals.css`
- Services, projects, articles, contact details and pricing rules: `lib/data.ts`
- Header/footer: `components/Header.tsx`, `components/Footer.tsx`
- Logos: `public/crown-grove-logo.png` (flat, header/footer on cream) and `public/crown-grove-mark.png` (hero/background); favicons are `app/icon.png` and `app/apple-icon.png`; link previews use `public/crown-grove-share.png`

Business rules (launch rate limit, quote validity, deposit split) are kept in sync with the separate Crown & Grove business documentation pack.
