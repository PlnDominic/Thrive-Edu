import Link from "next/link";
import { BookOpen, Building2, Image as ImageIcon, Users } from "lucide-react";

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
    { href: "/admin/courses", label: "Courses", icon: BookOpen, count: courses.length },
    { href: "/admin/ventures", label: "Ventures", icon: Building2, count: ventures.length },
    { href: "/admin/gallery", label: "Gallery items", icon: ImageIcon, count: gallery.length },
    { href: "/admin/team", label: "Team members", icon: Users, count: team.length },
  ];

  return (
    <div>
      <h1 className="font-heading text-h4 font-bold text-text-primary">Dashboard</h1>
      <p className="mt-1 text-body text-text-secondary">Manage what shows up on the public site.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-1 transition-shadow hover:shadow-elevation-2"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-forest-green-text">
              <card.icon className="size-5" />
            </span>
            <p className="mt-4 font-heading text-h3 font-bold text-text-primary">{card.count}</p>
            <p className="text-small text-text-secondary">{card.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
