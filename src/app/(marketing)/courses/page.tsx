"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Clock, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/marketing/section-heading";
import { CourseCard } from "@/components/marketing/course-card";
import { CourseCarousel } from "@/components/marketing/course-carousel";
import { EmptyState } from "@/components/feedback/empty-state";
import { cn } from "@/lib/utils";
import { courses, subjects } from "@/lib/courses-data";

export default function CoursesPage() {
  const [subject, setSubject] = React.useState<string>("All");

  const filtered = subject === "All" ? courses : courses.filter((c) => c.subject === subject);

  return (
    <>
      <div className="bg-leaf-gold">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-6 py-3 text-center text-small font-semibold text-white">
          <Clock className="size-4 shrink-0" />
          <span>Fall cohort enrollment closes in 5 days. Save your seat today.</span>
          <Link href="/contact" className="underline underline-offset-2 hover:no-underline">
            Talk to admissions
          </Link>
        </div>
      </div>

      <section className="border-b border-border bg-subtle-surface py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Storefront"
              title="Explore our courses"
              description="Live cohorts and self-paced tracks across Mathematics, Science, Language Arts, Arts & Music, Test Prep, and Life Skills, led by certified educators."
            />
            <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <span className="absolute -right-6 -top-6 -z-10 size-40 rounded-full bg-leaf-gold/15" aria-hidden />
              <Image
                src="/images/courses-hero.jpg"
                alt="A THRIVE EDU learner celebrating while studying on her laptop"
                width={900}
                height={1200}
                priority
                className="h-auto w-full drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {courses.length > 0 && (
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-6">
            <CourseCarousel
              eyebrow="Just added"
              title="New this month"
              viewAllHref="#all-courses"
              courses={courses.slice(0, 6)}
              badge="New"
            />
          </div>
        </section>
      )}

      <section id="all-courses" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
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
                    "data-[state=active]:border-forest-green data-[state=active]:bg-primary/10 data-[state=active]:font-semibold data-[state=active]:text-forest-green"
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
        </div>
      </section>
    </>
  );
}
