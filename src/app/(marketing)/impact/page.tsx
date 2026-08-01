import Link from "next/link";
import { Handshake, Quote, Target } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marketing/section-heading";
import { EmptyState } from "@/components/feedback/empty-state";
import { impactStats } from "@/lib/impact-data";

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-surface shadow-elevation-2 sm:rounded-[2.25rem]">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
            <Badge variant="primary" className="mb-6">
              Impact
            </Badge>
            <h1 className="font-heading text-h2 font-bold leading-[1.05] tracking-tight text-text-primary sm:text-h1 lg:text-display">
              Impact, <span className="text-growth-green">shown simply.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-secondary">
              Real numbers, real stories, and alignment with the Sustainable Development Goals. This is
              what convinces both funders and institutions.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/support-our-work">Donate</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Headline figures */}
        <div className="relative z-10 mx-auto -mt-6 max-w-4xl px-2 sm:-mt-8">
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink-border shadow-elevation-3 sm:grid-cols-3">
            {impactStats.map((s) => (
              <div key={s.label} className="bg-ink px-6 py-8 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-h3 font-bold text-white sm:text-h2">{s.value}</dd>
                <p className="mt-1 text-small text-white/60">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Stories */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Stories from the field" title="One story at a time" align="center" className="mx-auto" />
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
          <div className="mt-10">
            <EmptyState
              icon={Handshake}
              title="Partner organisations coming soon"
              description="We're building out this space to showcase the schools, NGOs and organisations we partner with."
            />
          </div>
        </div>
      </section>

      {/* SDG alignment */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[1.75rem] bg-forest-green p-8 text-white sm:p-12">
            <span className="flex size-14 items-center justify-center rounded-full bg-white/15">
              <Target className="size-6" />
            </span>
            <p className="mt-6 text-caption font-semibold uppercase tracking-wide text-white/70">
              Global alignment
            </p>
            <h2 className="mt-2 font-heading text-h3 font-bold sm:text-h2">
              Aligned with the Sustainable Development Goals
            </h2>
            <p className="mt-4 max-w-2xl text-body-lg text-white/85">
              Our work is grounded in SDG 4: Quality Education, the United Nations goal to ensure inclusive
              and equitable quality education and promote lifelong learning opportunities for all. We
              pursue it through the partnerships that connect every part of our ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-ink px-6 py-16 text-center sm:rounded-[2.25rem] sm:py-20">
          <h2 className="font-heading text-h3 font-bold text-white sm:text-h2">See your support at work</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/70">
            Partner with us, or support our work directly, and help us grow the numbers on this page.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/support-our-work">Donate</Link>
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full" asChild>
              <Link href="/contact">Submit an enquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
