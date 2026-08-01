import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  GraduationCap,
  HardHat,
  Library,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ventures } from "@/lib/ventures-data";

const ventureIcons: Record<string, LucideIcon> = {
  "literacy-and-publications": BookOpen,
  "mobile-library-and-books-hub": Library,
  "professional-development-institute": GraduationCap,
  tvet: HardHat,
  "360-leadership-and-coaching": Compass,
};

export default function EcosystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-surface shadow-elevation-2 sm:rounded-[2.25rem]">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
            <Badge variant="primary" className="mb-6">
              The Ecosystem
            </Badge>
            <h1 className="font-heading text-h2 font-bold leading-[1.05] tracking-tight text-text-primary sm:text-h1 lg:text-display">
              One brand. <span className="text-growth-green">Five connected ventures.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-secondary">
              Each venture needs its own space, so we give it one, shown simply. Together they equip
              learners, teachers, schools and communities to thrive.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/contact">Partner with us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="How we deliver"
            title="Five ventures, one mission"
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 divide-y divide-border">
            {ventures.map((venture, index) => {
              const Icon = ventureIcons[venture.slug] ?? BookOpen;
              return (
                <div key={venture.slug} className="grid gap-6 py-10 sm:grid-cols-[auto_1fr] sm:gap-8 lg:py-12">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-forest-green">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <p className="font-heading text-caption font-semibold uppercase tracking-wide text-text-secondary">
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 font-heading text-h4 font-bold text-text-primary">{venture.name}</h3>
                    <p className="mt-3 max-w-2xl text-body text-text-secondary">{venture.description}</p>

                    {venture.highlights && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {venture.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full border border-border bg-subtle-surface px-3 py-1 text-caption font-medium text-text-secondary"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      href={venture.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-small font-semibold text-forest-green transition-colors hover:text-primary-hover"
                    >
                      {venture.linkLabel}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-ink px-6 py-16 text-center sm:rounded-[2.25rem] sm:py-20">
          <h2 className="font-heading text-h3 font-bold text-white sm:text-h2">
            One ecosystem. Ready to partner with your school or organisation.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/70">
            Tell us what you need and we will connect you with the right venture.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Submit an enquiry</Link>
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full" asChild>
              <Link href="/support-our-work">Donate</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
