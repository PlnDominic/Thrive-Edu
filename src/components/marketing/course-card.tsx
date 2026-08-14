import { Star, Users } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WishlistButton } from "@/components/marketing/wishlist-button";
import { cn } from "@/lib/utils";
import { subjectColors, type Course } from "@/lib/courses-data";

export interface CourseCardProps {
  course: Course;
  ribbon?: "Bestseller" | "New";
}

function CourseCard({ course, ribbon }: CourseCardProps) {
  const Icon = course.icon;

  return (
    <Card interactive elevation={2} className="group flex flex-col overflow-hidden">
      <div className={cn("relative flex h-32 items-center justify-center overflow-hidden", subjectColors[course.subject])}>
        {ribbon && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-2.5 py-1 text-caption font-bold uppercase tracking-wide text-forest-green-text shadow-elevation-1">
            {ribbon}
          </span>
        )}
        <WishlistButton label={course.title} />
        <Icon className="size-11 text-white transition-transform duration-300 group-hover:scale-110" />
      </div>
      <CardHeader className="pb-2">
        <div className="mb-1 flex items-center gap-2">
          <Badge variant="neutral">{course.subject}</Badge>
          <Badge variant="info">{course.level}</Badge>
        </div>
        <p className="font-heading text-body-lg font-semibold text-text-primary">{course.title}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="mb-4 flex-1 text-small text-text-secondary">{course.description}</p>
        <div className="mb-4 flex items-center justify-between text-small text-text-secondary">
          <span className="flex items-center gap-1">
            <Star className="size-3.5 fill-leaf-gold text-leaf-gold" />
            <span className="font-semibold text-text-primary">{course.rating}</span>
          </span>
          <span className="flex items-center gap-1">
            <Users className="size-3.5" />
            {course.studentsEnrolled.toLocaleString()}
          </span>
          <span>{course.format}</span>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-4">
          <span className="font-heading text-h4 font-bold text-text-primary">₵{course.price}</span>
          <Button size="sm" className="rounded-full">
            Enroll now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export { CourseCard };
