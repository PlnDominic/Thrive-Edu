import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Building2,
  ChevronsRight,
  GraduationCap,
  HeartHandshake,
  LayoutDashboard,
  Leaf,
  LineChart,
  Play,
  Sparkles,
  Star,
  User,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CourseCard } from "@/components/marketing/course-card";
import { HeroVisual } from "@/components/marketing/hero-visual";
import { EmptyState } from "@/components/feedback/empty-state";
import { courses } from "@/lib/courses-data";

const audiences = [
  {
    title: "Students",
    description: "Personalized learning paths, progress tracking, and smart recommendations.",
    icon: GraduationCap,
    href: "/dashboard/student",
  },
  {
    title: "Parents",
    description: "Real-time updates, insights, and tools to support your child's growth.",
    icon: Users,
    href: "/about",
  },
  {
    title: "Teachers",
    description: "Plan lessons, manage classrooms, assess performance, and inspire learners.",
    icon: BookOpen,
    href: "/contact",
  },
  {
    title: "School owners",
    description: "Powerful analytics, administration, and decision-making, all in one place.",
    icon: Building2,
    href: "/contact",
  },
];

const highlights = [
  { label: "Personalized Learning", icon: User },
  { label: "Smart Insights", icon: BarChart3 },
  { label: "Unified Experience", icon: LayoutDashboard },
  { label: "Better Outcomes", icon: Star },
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
      <section className="px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-surface shadow-elevation-2 sm:rounded-[2.25rem]">
          <div className="relative grid gap-10 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-16 lg:py-20">
            <div>
              <Badge variant="primary" className="mb-6">
                <span className="size-1.5 rounded-full bg-forest-green" />
                Personalized education, reimagined
              </Badge>
              <h1 className="font-heading text-h2 font-bold leading-[1.05] tracking-tight text-text-primary sm:text-h1 lg:text-display">
                Every learner
                <br />
                has a path to
                <br />
                <span className="text-growth-green">thrive.</span>
              </h1>
              <p className="mt-6 max-w-lg text-body-lg text-text-secondary">
                THRIVE EDU is an education technology organization building personalized learning journeys for
                students, parents, teachers, and school owners, grounded in growth, guidance, and trust.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/courses">
                    Start learning
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
                <Link href="#how-it-works" className="group flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-full bg-leaf-gold text-white transition-transform duration-200 group-hover:scale-105">
                    <Play className="size-4 fill-white" />
                  </span>
                  <span className="text-small font-semibold text-text-primary">How it works</span>
                </Link>
              </div>
            </div>

            <HeroVisual />
          </div>
        </div>

        {/* Stats band, overlapping the hero card */}
        <div className="relative z-10 mx-auto -mt-6 max-w-5xl px-2 sm:-mt-8">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-border shadow-elevation-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink px-4 py-6 text-center sm:px-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-h4 font-bold text-white sm:text-h3">{s.value}</dd>
                <p className="mt-1 text-caption text-white/60">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Built for every role */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Photo blob */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
              <div
                className="absolute -right-4 -top-4 h-2/3 w-2/3 bg-background"
                style={{ borderRadius: "40% 60% 65% 35% / 45% 40% 60% 55%" }}
                aria-hidden
              />
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 bg-leaf-gold"
                style={{ borderRadius: "68% 32% 27% 73% / 45% 62% 38% 55%" }}
                aria-hidden
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ borderRadius: "68% 32% 27% 73% / 45% 62% 38% 55%" }}
              >
                <Image
                  src="/images/every-learner.jpg"
                  alt="A THRIVE EDU learner celebrating, holding up a phone showing the platform"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute left-8 top-10 grid grid-cols-4 gap-2 opacity-40" aria-hidden>
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} className="size-1 rounded-full bg-white" />
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-subtle-surface px-4 py-2 text-caption font-bold uppercase tracking-wide text-forest-green">
                  Built for every role
                </span>
                <Leaf className="size-5 text-leaf-gold" aria-hidden />
              </div>
              <h2 className="font-heading text-h2 font-bold leading-[1.05] text-text-primary sm:text-h1">
                One Platform.
                <br />
                <span className="text-leaf-gold">Every</span> Learner.
              </h2>
              <p className="mt-6 max-w-lg text-body-lg text-text-secondary">
                THRIVE EDU adapts to the needs of every user: empowering students, supporting families,
                enabling teachers, and driving schools forward.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {audiences.map((a, i) => (
                  <div key={a.title} className="rounded-2xl border border-border bg-surface p-5">
                    <span
                      className={cn(
                        "flex size-11 items-center justify-center rounded-full",
                        i % 2 === 0 ? "bg-leaf-gold/15 text-leaf-gold" : "bg-warm-amber/20 text-warm-amber"
                      )}
                    >
                      <a.icon className="size-5" />
                    </span>
                    <p className="mt-4 font-heading text-body-lg font-bold text-text-primary">{a.title}</p>
                    <p className="mt-1.5 text-small text-text-secondary">{a.description}</p>
                    <Link
                      href={a.href}
                      aria-label={`Learn more about ${a.title}`}
                      className={cn(
                        "mt-3 inline-flex",
                        i % 2 === 0 ? "text-leaf-gold" : "text-warm-amber"
                      )}
                    >
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4 rounded-3xl border border-border bg-surface px-6 py-4 sm:rounded-full">
                {highlights.map((h, i) => (
                  <div key={h.label} className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex size-8 items-center justify-center rounded-full",
                        i % 2 === 0 ? "bg-leaf-gold/15 text-leaf-gold" : "bg-warm-amber/20 text-warm-amber"
                      )}
                    >
                      <h.icon className="size-4" />
                    </span>
                    <span className="text-small font-semibold text-text-primary">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why THRIVE EDU */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div
          className="absolute inset-x-0 top-0 h-3"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--color-growth-green) 0 10px, transparent 10px 20px)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-3"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--color-growth-green) 0 10px, transparent 10px 20px)",
          }}
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-leaf-gold">
                  <ChevronsRight className="size-3.5 text-ink" />
                </span>
                <span className="text-caption font-semibold uppercase tracking-wide text-white/70">
                  Why THRIVE EDU
                </span>
              </div>
              <h2 className="font-heading text-h2 font-bold leading-[1.1] text-white sm:text-h1">
                Calm, Intelligent Tools
                <br />
                for Real Growth
              </h2>
            </div>
            <Button className="rounded-full bg-white text-ink hover:bg-white/90" asChild>
              <Link href="/about">
                View all benefits
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-2xl">
              <div className="flex h-56 items-center justify-center bg-ink-surface transition-colors duration-200 group-hover:bg-ink-border">
                <Sparkles className="size-12 text-white/20" />
              </div>
              <div className="bg-ink-surface p-6">
                <p className="font-heading text-h5 font-semibold text-white">{valueProps[0].title}</p>
                <p className="mt-2 text-small text-white/60">{valueProps[0].description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-small font-semibold text-leaf-gold">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </div>
            </div>

            <div className="lg:mt-10">
              <div className="rounded-2xl bg-leaf-gold p-6">
                <p className="font-heading text-h5 font-semibold text-ink">{valueProps[1].title}</p>
                <p className="mt-2 text-small text-ink/70">{valueProps[1].description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-small font-semibold text-ink">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </div>
              <div className="mt-4 flex h-56 items-center justify-center rounded-2xl bg-ink-surface">
                <LineChart className="size-12 text-white/20" />
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl">
              <div className="flex h-56 items-center justify-center bg-ink-surface transition-colors duration-200 group-hover:bg-ink-border">
                <BookOpen className="size-12 text-white/20" />
              </div>
              <div className="bg-ink-surface p-6">
                <p className="font-heading text-h5 font-semibold text-white">{valueProps[2].title}</p>
                <p className="mt-2 text-small text-white/60">{valueProps[2].description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-small font-semibold text-leaf-gold">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement band */}
      <div className="border-y-2 border-text-primary bg-background py-12 sm:py-16">
        <p className="flex flex-wrap items-center justify-center gap-3 px-6 text-center font-heading text-h3 font-bold uppercase tracking-tight text-text-primary sm:gap-4 sm:text-h2 lg:text-h1">
          <span>Grow</span>
          <Sparkles className="size-5 shrink-0 text-leaf-gold sm:size-7" aria-hidden />
          <span>Guide</span>
          <Sparkles className="size-5 shrink-0 text-leaf-gold sm:size-7" aria-hidden />
          <span className="text-growth-green">Thrive</span>
        </p>
      </div>

      {/* Featured courses */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Storefront"
              title="Featured courses"
              description="A sample of the live and self-paced courses available across every subject."
            />
            <Button variant="secondary" className="rounded-full" asChild>
              <Link href="/courses">
                View all courses
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          {courses.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.slice(0, 3).map((course, i) => (
                <CourseCard key={course.id} course={course} ribbon={i === 0 ? "Bestseller" : undefined} />
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <EmptyState
                icon={GraduationCap}
                title="Courses coming soon"
                description="Our course catalog is being finalized. Check back shortly to browse live cohorts and self-paced tracks."
              />
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-subtle-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="From our community" title="Trusted by families, teachers, and schools" align="center" className="mx-auto" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-elevation-1">
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
            <Button size="lg" variant="accent" className="rounded-full" asChild>
              <Link href="/courses">Browse courses</Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20"
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
