"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { GraduationCap } from "lucide-react";

import { CourseCard } from "@/components/marketing/course-card";
import { EmptyState } from "@/components/feedback/empty-state";
import { cn } from "@/lib/utils";
import { subjects } from "@/lib/courses-data";
import type { CourseRow } from "@/lib/data/courses";

export function CoursesCatalog({ courses }: { courses: CourseRow[] }) {
  const [subject, setSubject] = React.useState<string>("All");

  const filtered = subject === "All" ? courses : courses.filter((c) => c.subject === subject);

  return (
    <TabsPrimitive.Root value={subject} onValueChange={setSubject}>
      <TabsPrimitive.List
        aria-label="Filter courses by subject"
        className="flex flex-wrap gap-2 border-b border-border pb-4"
      >
        {["All", ...subjects].map((s) => (
          <TabsPrimitive.Trigger
            key={s}
            value={s}
            className={cn(
              "rounded-full border border-border px-4 py-2 text-small font-medium text-text-secondary transition-colors",
              "hover:bg-subtle-surface hover:text-text-primary",
              "data-[state=active]:border-forest-green data-[state=active]:bg-primary/10 data-[state=active]:font-semibold data-[state=active]:text-forest-green-text"
            )}
          >
            {s}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      <TabsPrimitive.Content value={subject} className="mt-10">
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={GraduationCap}
            title="No courses here yet"
            description="Our team is building out the course catalog. New live cohorts and self-paced tracks will appear here soon."
          />
        )}
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
}
