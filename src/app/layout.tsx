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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thriveedu.org";
const socialLogo = "/thrive-edu-logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "THRIVE EDU",
  description:
    "An international education NGO rooted in Ghana, creating personalized learning journeys for students, parents, teachers, and school owners.",
  openGraph: {
    title: "THRIVE EDU",
    description:
      "An international education NGO rooted in Ghana, creating personalized learning journeys for students, parents, teachers, and school owners.",
    url: "/",
    siteName: "THRIVE EDU",
    images: [
      {
        url: socialLogo,
        alt: "THRIVE EDU official logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THRIVE EDU",
    description:
      "An international education NGO rooted in Ghana, creating personalized learning journeys for students, parents, teachers, and school owners.",
    images: [socialLogo],
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
