import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { HomepagePreviewGuard } from "@/components/marketing/homepage-preview-guard";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <HomepagePreviewGuard>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </HomepagePreviewGuard>
  );
}
