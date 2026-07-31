"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { CourseCarouselCard } from "@/components/marketing/course-carousel-card";
import type { Course } from "@/lib/courses-data";

export interface CourseCarouselProps {
  eyebrow?: string;
  title: string;
  viewAllHref: string;
  courses: Course[];
  badge?: string;
}

function CourseCarousel({ eyebrow, title, viewAllHref, courses, badge }: CourseCarouselProps) {
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 240, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          {eyebrow && (
            <p className="mb-2 text-caption font-semibold uppercase tracking-wide text-forest-green">{eyebrow}</p>
          )}
          <h2 className="font-heading text-h3 font-bold text-text-primary">{title}</h2>
        </div>
        <div className="flex items-center gap-3">
          <Link href={viewAllHref} className="text-small font-semibold text-forest-green hover:underline">
            View all
          </Link>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Scroll left"
              className="flex size-9 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-colors hover:border-growth-green/50 hover:text-forest-green"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Scroll right"
              className="flex size-9 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-colors hover:border-growth-green/50 hover:text-forest-green"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-8 flex gap-5 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {courses.map((course) => (
          <CourseCarouselCard key={course.id} course={course} badge={badge} />
        ))}
      </div>
    </div>
  );
}

export { CourseCarousel };
