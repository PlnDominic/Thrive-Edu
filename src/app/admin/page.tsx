import Link from "next/link";
import { ArrowUpRight, BookOpen, Building2, Image as ImageIcon, Users } from "lucide-react";

import { AdminPageHeader } from "@/components/admin/page-header";
import { getAllCourses } from "@/lib/data/courses";
import { getAllVentures } from "@/lib/data/ventures";
import { getAllGalleryItems } from "@/lib/data/gallery";
import { getAllTeamMembers } from "@/lib/data/team";

export default async function AdminHomePage() {
  const [courses, ventures, gallery, team] = await Promise.all([
    getAllCourses(),
    getAllVentures(),
    getAllGalleryItems(),
    getAllTeamMembers(),
  ]);

  const cards = [
    {
      href: "/admin/courses",
      label: "Courses",
      icon: BookOpen,
      count: courses.length,
      published: courses.filter((c) => c.published).length,
      accent: "bg-forest-green",
    },
    {
      href: "/admin/ventures",
      label: "Ventures",
      icon: Building2,
      count: ventures.length,
      published: ventures.filter((v) => v.published).length,
      accent: "bg-deep-green",
    },
    {
      href: "/admin/gallery",
      label: "Gallery items",
      icon: ImageIcon,
      count: gallery.length,
      published: gallery.filter((g) => g.published).length,
      accent: "bg-leaf-gold",
    },
    {
      href: "/admin/team",
      label: "Team members",
      icon: Users,
      count: team.length,
      published: team.filter((t) => t.published).length,
      accent: "bg-warm-amber",
    },
  ];

  return (
    <div>
      <AdminPageHeader
        eyebrow="Dashboard"
        title="Welcome back"
        description="Manage what shows up on the public site - every change goes live as soon as you save it."
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-elevation-1 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevation-3"
          >
            <div className="flex items-start justify-between">
              <span
                className={`flex size-11 items-center justify-center rounded-xl ${card.accent} text-white shadow-sm`}
              >
                <card.icon className="size-5" />
              </span>
              <ArrowUpRight className="size-4 text-text-secondary/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forest-green-text" />
            </div>
            <p className="mt-5 font-heading text-h2 font-bold tabular-nums text-text-primary">{card.count}</p>
            <p className="mt-1 text-small font-medium text-text-secondary">{card.label}</p>
            <p className="mt-3 text-caption text-text-secondary/70">
              {card.published} published{card.count !== card.published ? ` · ${card.count - card.published} draft` : ""}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
