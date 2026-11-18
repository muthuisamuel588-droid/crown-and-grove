import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://syntra-agency.vercel.app"),
  title: {
    default: "Syntra Agency — Where Strategy Meets Creation",
    template: "%s | Syntra Agency",
  },
  description:
    "Syntra Agency is a Kenyan creative and technology studio. We design brands, build websites and software, and grow businesses through digital marketing. Design. Build. Grow.",
  keywords: [
    "Syntra Agency",
    "web design Kenya",
    "software development Kenya",
    "branding Kenya",
    "social media marketing Kenya",
    "POS system Kenya",
    "M-Pesa website Kenya",
  ],
  openGraph: {
    title: "Syntra Agency — Where Strategy Meets Creation",
    description: "Design. Build. Grow. Branding, websites, software and digital marketing from Kenya.",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntra Agency — Where Strategy Meets Creation",
    description: "Design. Build. Grow. Branding, websites, software and digital marketing from Kenya.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
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
