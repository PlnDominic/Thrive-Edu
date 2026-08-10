import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Self-hosted (latin subset) instead of next/font/google: the build
// environment can't reliably reach fonts.gstatic.com, and Google
// periodically rotates font file hashes, which breaks next/font/google's
// build-time fetch with "Module not found" / 404 errors.
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

export const metadata: Metadata = {
  title: "THRIVE EDU | Design System",
  description:
    "A spatial, premium design system for THRIVE EDU: personalized learning journeys for students, parents, teachers, and school owners.",
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
