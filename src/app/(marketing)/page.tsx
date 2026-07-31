import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  LineChart,
  Sparkles,
  UserCog,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CourseCard } from "@/components/marketing/course-card";
import { StudentCard } from "@/components/cards/student-card";
import { AnalyticsCard } from "@/components/cards/analytics-card";
import { courses } from "@/lib/courses-data";

const audiences = [
  {
    title: "Students",
    description: "A personalized learning path that adapts to how you learn best, with visible progress every step.",
    icon: GraduationCap,
    href: "/dashboard/student",
  },
  {
    title: "Parents",
    description: "Clear insight into your child's growth, attendance, and achievements, without the guesswork.",
    icon: HeartHandshake,
    href: "/about",
  },
  {
    title: "Teachers",
    description: "Classroom analytics and recommendations that help you spend more time teaching, less time guessing.",
    icon: Users,
    href: "/contact",
  },
  {
    title: "School owners",
    description: "Institution-wide reporting on enrollment, performance, and outcomes in one calm dashboard.",
    icon: UserCog,
    href: "/contact",
  },
];

const valueProps = [
  {
    title: "Personalized learning paths",
    description: "Every learner gets a path shaped by their pace, strengths, and goals, not a fixed curriculum.",
    icon: Sparkles,
  },
  {
    title: "Real-time insights",
    description: "Progress, attendance, and skill growth are always visible to the people who need to see them.",
    icon: LineChart,
  },
  {
    title: "Certified educators",
    description: "Every course is led by vetted, trained teachers who care about long-term growth, not just grades.",
    icon: BookOpen,
  },
  {
    title: "Human-centered support",
    description: "Behind every dashboard is a real support team ready to help students and families thrive.",
    icon: HeartHandshake,
  },
];

const testimonials = [
  {
    quote: "My daughter finally has a learning plan that fits her, not the other way around. The progress reports keep us all on the same page.",
    name: "Efua Mensah",
    role: "Parent",
  },
  {
    quote: "The classroom analytics tell me exactly which students need a nudge this week. I've never had this much clarity before.",
    name: "Kwame Asante",
    role: "Mathematics Teacher",
  },
  {
    quote: "THRIVE EDU gave our school a single, calm view of enrollment and outcomes across every grade level.",
    name: "Dr. Abena Owusu",
    role: "School Director",
  },
];

const stats = [
  { label: "Active learners", value: "12,400+" },
  { label: "Certified educators", value: "320+" },
  { label: "Partner schools", value: "48" },
  { label: "Average satisfaction", value: "4.8/5" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-growth-green/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-40 size-80 rounded-full bg-leaf-gold/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <Badge variant="primary" className="mb-6">
              Personalized education, reimagined
            </Badge>
            <h1 className="font-heading text-h2 font-bold tracking-tight text-text-primary sm:text-h1 lg:text-display">
              Every learner has a unique path to thrive.
            </h1>
            <p className="mt-6 max-w-lg text-body-lg text-text-secondary">
              THRIVE EDU is an education technology organization building personalized learning journeys for
              students, parents, teachers, and school owners, grounded in growth, guidance, and trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link href="/courses">
                  Browse courses
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Talk to our team</Link>
              </Button>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-heading text-h4 font-bold text-text-primary sm:text-h3">{s.value}</dd>
                  <p className="mt-1 text-caption text-text-secondary">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -left-6 top-10 w-64 rotate-[-6deg] opacity-90">
              <AnalyticsCard title="Weekly engagement" value="86%" changePercent={4.2} data={[62, 68, 64, 74, 78, 82, 86]} />
            </div>
            <div className="relative ml-20 w-80 rotate-[3deg]">
              <StudentCard
                name="Amara Boateng"
                grade="Grade 9 · Section A"
                progress={72}
                attendance={96}
                averageScore={88}
                status="excelling"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="border-t border-border bg-subtle-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Built for every role"
            title="One platform, four points of view"
            description="THRIVE EDU gives every part of the learning ecosystem the view they need, all grounded in the same data."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 shadow-elevation-1 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevation-2"
              >
                <span className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-forest-green">
                  <a.icon className="size-5" />
                </span>
                <div>
                  <p className="font-heading text-h5 font-semibold text-text-primary">{a.title}</p>
                  <p className="mt-1.5 text-small text-text-secondary">{a.description}</p>
                </div>
                <span className="mt-auto flex items-center gap-1 text-small font-semibold text-forest-green opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why THRIVE EDU */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Why THRIVE EDU"
            title="Calm, intelligent tools for real growth"
            description="No dense dashboards or gamified noise. Just clear signals that help people make good decisions."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {valueProps.map((v) => (
              <div key={v.title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-forest-green">
                  <v.icon className="size-5" />
                </span>
                <div>
                  <p className="font-heading text-h5 font-semibold text-text-primary">{v.title}</p>
                  <p className="mt-1.5 text-small text-text-secondary">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured courses */}
      <section className="border-t border-border bg-subtle-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Storefront"
              title="Featured courses"
              description="A sample of the live and self-paced courses available across every subject."
            />
            <Button variant="secondary" asChild>
              <Link href="/courses">
                View all courses
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="From our community" title="Trusted by families, teachers, and schools" align="center" className="mx-auto" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 shadow-elevation-1">
                <blockquote className="flex-1 text-small text-text-primary">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <p className="text-small font-semibold text-text-primary">{t.name}</p>
                  <p className="text-caption text-text-secondary">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-forest-green py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center text-white">
          <BarChart3 className="size-10 text-leaf-gold" />
          <h2 className="font-heading text-h3 font-bold sm:text-h2">Ready to help your learner thrive?</h2>
          <p className="max-w-xl text-body-lg text-white/85">
            Join thousands of students, parents, and educators building personalized paths to growth and
            achievement with THRIVE EDU.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" variant="accent" asChild>
              <Link href="/courses">Browse courses</Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/contact">Talk to our team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
