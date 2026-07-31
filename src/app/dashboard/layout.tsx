import { Sidebar } from "@/components/nav/sidebar";
import { Topbar } from "@/components/nav/topbar";
import { MobileTabBar } from "@/components/nav/mobile-nav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="student" />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          role="student"
          breadcrumbs={[{ label: "Dashboard", href: "/dashboard/student" }]}
          notificationCount={3}
        />
        <main className="flex-1 px-4 pb-24 pt-6 md:px-8 md:pb-8">{children}</main>
      </div>
      <MobileTabBar role="student" />
    </div>
  );
}
