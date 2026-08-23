import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CourseCarousel } from "@/components/marketing/course-carousel";
import { CoursesCatalog } from "@/components/marketing/courses-catalog";
import { getPublishedCourses } from "@/lib/data/courses";

export default async function CoursesPage() {
  const courses = await getPublishedCourses();

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

      {/* Hero */}
      <section className="relative min-h-[380px] overflow-hidden sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/images/gallery-science-fair.jpg"
          alt="Explore THRIVE EDU courses and practical learning tracks"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
          <Badge variant="primary" className="mb-6 bg-surface">
            Storefront & Programmes
          </Badge>
          <h1 className="font-heading text-h3 font-bold leading-[1.05] tracking-tight text-white sm:text-h2 lg:text-h1">
            Explore our <span className="text-growth-green">courses & learning tracks.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-body text-white/80 sm:text-body-lg">
            Live cohorts and self-paced tracks across Mathematics, Science, Language Arts, Arts & Music, Test Prep, and Life Skills, led by certified educators.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Talk to admissions</Link>
            </Button>
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
          <CoursesCatalog courses={courses} />
        </div>
      </section>
    </>
  );
}
