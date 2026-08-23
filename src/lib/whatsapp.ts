import { getSiteUrl } from "@/lib/site-url";

/**
 * WhatsApp purchase redirect helper.
 *
 * Thrive EDU doesn't run an online checkout — a "buy" action instead opens a
 * WhatsApp chat with the business number, pre-filled with a message about
 * the product the customer wants, so the sale can be completed there.
 */

// Business WhatsApp number: 024 280 6144 (Ghana), in international format.
const WHATSAPP_BUSINESS_NUMBER = "233242806144";

export function buildWhatsAppPurchaseLink(
  productName: string,
  price?: number,
  imagePath?: string | null
): string {
  const priceText = typeof price === "number" ? ` (₵${price})` : "";
  // Appending the product photo's absolute URL as its own line makes
  // WhatsApp render a link preview with the picture above the message once
  // it's sent, so the buyer sees what they're asking about.
  const imageText = imagePath ? `\n${new URL(imagePath, getSiteUrl()).toString()}` : "";
  const message = `Hi Thrive EDU! I'd like to buy: ${productName}${priceText}. Is it available?${imageText}`;

  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?${params.toString()}`;
}
