import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { bundlePrice, shopProducts } from "@/lib/shop-data";
import { buildWhatsAppBundleLink } from "@/lib/whatsapp";

// The "buy all 6" bundle deal - its only real job, like /shop/[slug], is to
// carry Open Graph tags so the bundle's WhatsApp message renders a picture
// preview instead of just the bare domain name.

const title = "Full Flash Card Set | THRIVE EDU";
const description = `All 6 flash card boxes - Vegetables and Fruits, Parts of the Human Body, Shapes and Colours, Phonics, Numerals, and Memory Verse - for GH₵${bundlePrice}.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: shopProducts[0].ogImage, width: 1200, height: 1200, alt: "THRIVE EDU flash card set" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shopProducts[0].ogImage],
  },
};

export default function ShopBundlePage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/#shop"
          className="inline-flex items-center gap-1.5 text-small font-semibold text-forest-green-text hover:underline"
        >
          <ArrowLeft className="size-4" />
          Back to shop
        </Link>

        <h1 className="mt-8 font-heading text-h4 font-bold text-text-primary sm:text-h3">Full flash card set</h1>
        <p className="mt-3 max-w-2xl text-body text-text-secondary">
          All 6 boxes together for GH₵{bundlePrice.toFixed(2)} - less than buying them one by one.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {shopProducts.map((product) => (
            <div key={product.slug} className="rounded-2xl border border-border bg-surface p-4">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.title} flash cards box`}
                  fill
                  sizes="(min-width: 640px) 200px, 33vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-center text-small text-text-secondary">{product.title}</p>
            </div>
          ))}
        </div>

        <Button size="lg" className="mt-8 rounded-full" asChild>
          <a
            href={buildWhatsAppBundleLink(
              shopProducts.map((p) => p.title),
              bundlePrice,
              "/shop"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy the full set on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
