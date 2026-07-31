import { Star, Users } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { subjectColors, type Course } from "@/lib/courses-data";

export interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  const Icon = course.icon;

  return (
    <Card interactive elevation={2} className="flex flex-col overflow-hidden">
      <div className={cn("flex h-32 items-center justify-center", subjectColors[course.subject])}>
        <Icon className="size-11 text-white" />
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
          <span className="font-heading text-h4 font-bold text-text-primary">${course.price}</span>
          <Button size="sm">Enroll now</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export { CourseCard };
