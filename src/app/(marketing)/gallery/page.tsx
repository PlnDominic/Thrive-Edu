import Image from "next/image";
import {
  Award,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Music,
  Palette,
  PartyPopper,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/marketing/section-heading";
import { cn } from "@/lib/utils";

interface GalleryItem {
  title: string;
  category: string;
  icon: LucideIcon;
  color: string;
  height: string;
  photo?: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Science fair finals",
    category: "STEM",
    icon: FlaskConical,
    color: "bg-forest-green",
    height: "h-80",
    photo: "/images/gallery-science-fair.jpg",
  },
  { title: "Graduation day", category: "Milestones", icon: GraduationCap, color: "bg-deep-green", height: "h-56" },
  { title: "Reading circle", category: "Language Arts", icon: BookOpen, color: "bg-growth-green", height: "h-64" },
  {
    title: "Studio arts showcase",
    category: "Arts & Music",
    icon: Palette,
    color: "bg-leaf-gold",
    height: "h-72",
    photo: "/images/gallery-studio-arts.jpg",
  },
  { title: "Small-group tutoring", category: "Classroom", icon: Users, color: "bg-leaf-green", height: "h-56" },
  { title: "Spring recital", category: "Arts & Music", icon: Music, color: "bg-warm-amber", height: "h-64" },
  { title: "Achievement day", category: "Milestones", icon: Award, color: "bg-deep-green", height: "h-72" },
  { title: "Community open house", category: "Community", icon: PartyPopper, color: "bg-forest-green", height: "h-56" },
  { title: "Peer mentoring", category: "Classroom", icon: Users, color: "bg-growth-green", height: "h-80" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-border bg-subtle-surface py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-caption font-semibold uppercase tracking-wide text-forest-green">Gallery</p>
          <h1 className="font-heading text-h3 font-bold text-text-primary sm:text-h1">See THRIVE EDU in action</h1>
          <p className="mt-4 text-body-lg text-text-secondary">
            Moments from our classrooms, showcases, and community, where growth and achievement come to
            life.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Moments" title="Life at THRIVE EDU" />
          <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className={cn(
                  "group relative mb-6 flex break-inside-avoid items-end overflow-hidden rounded-lg shadow-elevation-1",
                  item.height,
                  item.color
                )}
              >
                {item.photo ? (
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <item.icon
                    className="absolute right-4 top-4 size-8 text-white/25 transition-transform duration-200 group-hover:scale-110"
                    aria-hidden
                  />
                )}
                <div className="relative w-full bg-gradient-to-t from-black/70 to-transparent p-5">
                  <p className="text-caption font-semibold uppercase tracking-wide text-white/70">{item.category}</p>
                  <p className="mt-1 font-heading text-body-lg font-semibold text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
