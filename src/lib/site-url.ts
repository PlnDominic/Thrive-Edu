// Resolves to the real production domain on Vercel automatically (falls
// back to NEXT_PUBLIC_SITE_URL, then the known production domain). Needed so
// relative paths (OG images, icons, product photos) can be turned into
// absolute URLs that external services (social platforms, WhatsApp link
// previews) can actually fetch.
export function getSiteUrl(): string {
  return process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : (process.env.NEXT_PUBLIC_SITE_URL ?? "https://thriveedu.org");
}
