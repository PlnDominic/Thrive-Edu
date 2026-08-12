import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Self-hosted (rather than fetched from Google Fonts at build time via
// next/font/google) so production builds never depend on a live fetch to
// fonts.gstatic.com. Both files are variable fonts covering the full
// weight axis, downloaded from Google Fonts' own CDN.
const interTight = localFont({
  src: "./fonts/inter-tight-latin-variable.woff2",
  variable: "--font-heading",
  weight: "600 800",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  variable: "--font-body",
  weight: "400 600",
  display: "swap",
});

// Resolves to the real production domain on Vercel automatically (falls
// back to NEXT_PUBLIC_SITE_URL, then the known production domain). Needed
// so the relative OG/icon paths below become absolute URLs that social
// platforms can actually fetch when a link is shared.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : (process.env.NEXT_PUBLIC_SITE_URL ?? "https://thriveedu.org");

const siteTitle = "THRIVE EDU | Everyone Thrives With Us.";
const siteDescription =
  "THRIVE EDU is an international education NGO rooted in Ghana, reaching for Africa. We partner with schools, parents, NGOs and communities to equip and empower every learner to thrive.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "THRIVE EDU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "THRIVE EDU" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.9,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary font-body">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
