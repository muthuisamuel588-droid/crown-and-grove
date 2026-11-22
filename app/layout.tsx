import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contact } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://crown-and-grove.vercel.app";

export const viewport: Viewport = {
  themeColor: "#f7f4ec",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Crown & Grove",
  alternateName: "Crown and Grove",
  url: siteUrl,
  description:
    "Crown & Grove is a Kenyan creative and technology studio offering branding, design, websites, software, POS systems, social media marketing and IT support.",
  slogan: "Where Strategy Meets Creation",
  email: contact.email,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.location,
    addressCountry: "KE",
  },
  areaServed: { "@type": "Country", name: "Kenya" },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Crown & Grove — Where Strategy Meets Creation",
    template: "%s | Crown & Grove",
  },
  description:
    "Crown & Grove is a Kenyan creative and technology studio. We design brands, build websites and software, and grow businesses through digital marketing. Design. Build. Grow.",
  keywords: [
    "Crown & Grove",
    "Crown and Grove",
    "web design Kenya",
    "software development Kenya",
    "branding Kenya",
    "social media marketing Kenya",
    "POS system Kenya",
    "M-Pesa website Kenya",
  ],
  openGraph: {
    title: "Crown & Grove — Where Strategy Meets Creation",
    description: "Design. Build. Grow. Branding, websites, software and digital marketing from Kenya.",
    url: "/",
    siteName: "Crown & Grove",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/crown-grove-share.png",
        width: 1200,
        height: 630,
        alt: "Crown & Grove — Where Strategy Meets Creation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crown & Grove — Where Strategy Meets Creation",
    description: "Design. Build. Grow. Branding, websites, software and digital marketing from Kenya.",
    images: ["/crown-grove-share.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
        />
        <noscript>
          <style>{`.reveal,.enter{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
