import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Compass,
  FlaskConical,
  GraduationCap,
  HardHat,
  Library,
  Palette,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ventures } from "@/lib/ventures-data";

const ventureIcons: Record<string, LucideIcon> = {
  "literacy-and-publications": BookOpen,
  "mobile-library-and-books-hub": Library,
  "stem-programme-and-products": FlaskConical,
  "talents-creative-hub": Palette,
  "professional-development-institute": GraduationCap,
  "schools-improvement-services": Building2,
  tvet: HardHat,
  "360-leadership-and-coaching": Compass,
};

export default function EcosystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[380px] overflow-hidden sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/images/gallery-outdoor-lesson.jpg"
          alt="Thrive EDU learning ecosystem in action"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
          <Badge variant="primary" className="mb-6 bg-surface rounded-none">
            The Ecosystem
          </Badge>
          <h1 className="font-heading text-h3 font-bold leading-[1.05] tracking-tight text-white sm:text-h2 lg:text-h1">
            One brand. <span className="text-growth-green">Eight connected ventures.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-body text-white/80 sm:text-body-lg">
            Each venture needs its own space, so we give it one, shown simply. Together they equip
            learners, teachers, schools and communities to thrive.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-none" asChild>
              <Link href="/contact">Partner with us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ventures Grid / List */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="How we deliver"
            title="Eight ventures, one mission"
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 space-y-12">
            {ventures.map((venture, index) => {
              const Icon = ventureIcons[venture.slug] ?? BookOpen;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={venture.slug}
                  className="group relative overflow-hidden rounded-none border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8 lg:p-10"
                >
                  <div
                    className={`grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12 ${
                      isEven ? "" : "lg:[&>div:first-child]:order-2"
                    }`}
                  >
                    {/* Image Block */}
                    {venture.image && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-none bg-subtle-surface lg:col-span-5">
                        <Image
                          src={venture.image}
                          alt={venture.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="rounded-none object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Content Block */}
                    <div className={venture.image ? "lg:col-span-7" : "lg:col-span-12"}>
                      <div className="flex items-center gap-4">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-none bg-primary/10 text-forest-green-text sm:size-14">
                          <Icon className="size-6" />
                        </span>
                        <p className="font-heading text-caption font-semibold uppercase tracking-wide text-text-secondary">
                          0{index + 1}
                        </p>
                      </div>

                      <h3 className="mt-4 font-heading text-h4 font-bold text-text-primary sm:text-h3">
                        {venture.name}
                      </h3>
                      <p className="mt-3 max-w-2xl text-body text-text-secondary">{venture.description}</p>

                      {venture.highlights && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {venture.highlights.map((h) => (
                            <span
                              key={h}
                              className="rounded-none border border-border bg-subtle-surface px-3 py-1 text-caption font-medium text-text-secondary"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-6">
                        <Link
                          href={venture.href}
                          className="inline-flex items-center gap-2 rounded-none text-small font-semibold text-forest-green-text transition-colors hover:text-primary-hover"
                        >
                          {venture.linkLabel}
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-none bg-ink px-6 py-16 text-center sm:py-20">
          <h2 className="font-heading text-h3 font-bold text-white sm:text-h2">
            One ecosystem. Eight ventures ready to partner with your school or organisation.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/70">
            Tell us what you need and we will connect you with the right venture.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-none" asChild>
              <Link href="/contact">Submit an enquiry</Link>
            </Button>
            <Button size="lg" variant="secondary" className="rounded-none" asChild>
              <Link href="/support-our-work">Donate</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
