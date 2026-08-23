import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getShopProduct, shopProducts } from "@/lib/shop-data";
import { buildWhatsAppPurchaseLink } from "@/lib/whatsapp";

// A per-product landing page whose only real job is to carry Open Graph
// tags (og:title/description/image) so sharing its URL - e.g. in a WhatsApp
// purchase message - renders a proper link preview with the product photo.
// WhatsApp's crawler reads OG tags off an HTML page like this one; it
// doesn't reliably preview a bare image file URL.

export function generateStaticParams() {
  return shopProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getShopProduct(slug);
  if (!product) return {};

  const title = `${product.title} | THRIVE EDU`;
  const description = `${product.description} GH₵${product.price}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: product.ogImage, width: 1200, height: 1200, alt: product.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.ogImage],
    },
  };
}

export default async function ShopProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getShopProduct(slug);
  if (!product) notFound();

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

        <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:items-center">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src={product.image}
              alt={`${product.title} flash cards box`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-contain p-6"
              priority
            />
          </div>

          <div>
            <Badge variant="neutral">{product.category}</Badge>
            <h1 className="mt-3 font-heading text-h4 font-bold text-text-primary sm:text-h3">{product.title}</h1>
            <p className="mt-3 text-body text-text-secondary">{product.description}</p>
            <p className="mt-2 text-small text-text-secondary">{product.cardCount}</p>

            <p className="mt-5 font-heading text-h4 font-bold text-text-primary">GH₵{product.price.toFixed(2)}</p>

            <Button size="lg" className="mt-6 rounded-full" asChild>
              <a
                href={buildWhatsAppPurchaseLink(product.title, product.price, `/shop/${product.slug}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
