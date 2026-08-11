import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marketing/section-heading";
import { EmptyState } from "@/components/feedback/empty-state";
import { impactStats } from "@/lib/impact-data";
import { partners } from "@/lib/partners-data";

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[380px] overflow-hidden sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/images/hero-painting-group.jpg"
          alt="A group of Thrive EDU students at an outdoor painting workshop"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
          <Badge variant="primary" className="mb-6 bg-surface">
            Impact
          </Badge>
          <h1 className="font-heading text-h3 font-bold leading-[1.05] tracking-tight text-white sm:text-h2 lg:text-h1">
            Impact, <span className="text-growth-green">shown simply.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-body text-white/80 sm:text-body-lg">
            Real numbers, real stories, and alignment with the Sustainable Development Goals. This is
            what convinces both funders and institutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/support-our-work">Donate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Headline figures */}
      <div className="relative z-10 mx-auto -mt-6 max-w-4xl px-2 sm:-mt-8">
        <dl className="grid grid-cols-1 gap-px overflow-hidden bg-ink-border shadow-elevation-3 sm:grid-cols-3">
          {impactStats.map((s) => (
            <div key={s.label} className="bg-ink px-6 py-8 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-heading text-h3 font-bold text-white sm:text-h2">{s.value}</dd>
              <p className="mt-1 text-small text-white/60">{s.label}</p>
            </div>
          ))}
        </dl>
      </div>

      {/* Stories */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Stories from the field" title="One story at a time" align="center" className="mx-auto" />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="relative col-span-2 h-64 overflow-hidden sm:h-80">
              <Image
                src="/images/gallery-science-fair.jpg"
                alt="A Thrive EDU student at a science fair"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden sm:h-80">
              <Image
                src="/images/gallery-studio-arts.jpg"
                alt="A Thrive EDU student in a studio arts showcase"
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden sm:h-80">
              <Image
                src="/images/hero-painting-closeup.jpg"
                alt="Thrive EDU students painting a landscape on their easels"
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-10">
            <EmptyState
              icon={Quote}
              title="Impact stories coming soon"
              description="Short stories and testimonials from the schools and communities we work with will appear here as our programmes grow."
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-border bg-subtle-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Who we work with" title="Partners and organisations" align="center" className="mx-auto" />
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-8 sm:gap-x-20">
            {partners.map((partner) =>
              partner.logo ? (
                <Image
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  width={220}
                  height={110}
                  className="h-16 w-auto object-contain sm:h-24"
                />
              ) : (
                <p key={partner.name} className="text-caption font-semibold text-text-secondary">
                  {partner.name}
                </p>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-ink sm:rounded-none">
          <div className="grid lg:grid-cols-2 lg:items-center">
            <div className="px-6 py-16 text-center sm:py-20 lg:px-12 lg:text-left">
              <h2 className="font-heading text-h3 font-bold text-white sm:text-h2">See your support at work</h2>
              <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/70 lg:mx-0">
                Partner with us, or support our work directly, and help us grow the numbers on this page.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/support-our-work">Donate</Link>
                </Button>
                <Button size="lg" variant="secondary" className="rounded-full" asChild>
                  <Link href="/contact">Submit an enquiry</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden h-full min-h-[320px] lg:block">
              <Image
                src="/images/gallery-outdoor-lesson.jpg"
                alt="A Thrive EDU outdoor lesson"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
