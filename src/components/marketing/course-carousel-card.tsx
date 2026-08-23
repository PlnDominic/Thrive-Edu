import { Plus, Star } from "lucide-react";

import { WishlistButton } from "@/components/marketing/wishlist-button";
import { cn } from "@/lib/utils";
import { subjectColors, type Course } from "@/lib/courses-data";
import { buildWhatsAppPurchaseLink } from "@/lib/whatsapp";

export interface CourseCarouselCardProps {
  course: Course;
  badge?: string;
}

function CourseCarouselCard({ course, badge }: CourseCarouselCardProps) {
  const Icon = course.icon;
  const discountPct = course.compareAtPrice
    ? Math.round(((course.compareAtPrice - course.price) / course.compareAtPrice) * 100)
    : undefined;

  return (
    <div className="group w-56 shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-surface shadow-elevation-1 transition-all duration-200 hover:-translate-y-1 hover:shadow-elevation-3">
      <div className={cn("relative flex h-40 items-center justify-center overflow-hidden", subjectColors[course.subject])}>
        {discountPct ? (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-error px-2.5 py-1 text-caption font-bold text-white">
            -{discountPct}%
          </span>
        ) : (
          badge && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-2.5 py-1 text-caption font-bold text-white">
              {badge}
            </span>
          )
        )}
        <WishlistButton label={course.title} />
        <Icon className="size-10 text-white/90 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="p-4">
        <p className="truncate font-heading text-small font-semibold text-text-primary">{course.title}</p>
        <div className="mt-1.5 flex items-center gap-1.5">
          <div className="flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "size-3",
                  i < Math.round(course.rating) ? "fill-leaf-gold text-leaf-gold" : "fill-border text-border"
                )}
              />
            ))}
          </div>
          <span className="text-caption text-text-secondary">({course.studentsEnrolled})</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="font-heading text-body-lg font-bold text-text-primary">₵{course.price}</span>
            {course.compareAtPrice && (
              <span className="text-caption text-text-secondary line-through">₵{course.compareAtPrice}</span>
            )}
          </div>
          <a
            href={buildWhatsAppPurchaseLink(course.title, course.price)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buy ${course.title} on WhatsApp`}
            className="flex size-8 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-forest-green"
          >
            <Plus className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export { CourseCarouselCard };
