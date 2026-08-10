import Image from "next/image";
import Link from "next/link";
import { Award, Compass, Eye, Handshake, Heart, Lightbulb, ShieldCheck, Star, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TeamCarousel } from "@/components/marketing/team-carousel";
import { orgValues, teamMembers } from "@/lib/team-data";

const valueIcons: Record<string, LucideIcon> = {
  "God-first": Heart,
  Excellence: Award,
  Innovation: Lightbulb,
  Empowerment: Zap,
  Partnership: Handshake,
  Integrity: ShieldCheck,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-surface shadow-elevation-2 sm:rounded-[2.25rem]">
          <div className="grid gap-10 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-16 lg:py-20">
            <div>
              <Badge variant="primary" className="mb-6">
                About us
              </Badge>
              <h1 className="font-heading text-h2 font-bold leading-[1.05] tracking-tight text-text-primary sm:text-h1 lg:text-display">
                Why every learner deserves to <span className="text-growth-green">thrive.</span>
              </h1>
              <p className="mt-6 max-w-lg text-body-lg text-text-secondary">
                We exist because too many learners still lack access to products and programmes that build the
                knowledge, skills and attitudes they need to thrive.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/contact">Partner with us</Link>
                </Button>
                <Button size="lg" variant="secondary" className="rounded-full" asChild>
                  <Link href="/courses">Explore courses</Link>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto flex h-[420px] w-full max-w-xs items-end justify-center sm:h-[480px] lg:h-[560px] lg:max-w-none">
              <span
                className="absolute left-1/2 top-1/2 hidden size-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-growth-green/25 sm:block lg:size-[380px]"
                aria-hidden
              />
              <div className="relative z-10 aspect-[4/5] h-full overflow-hidden shadow-elevation-2">
                <Image
                  src="/images/team-salomey-owusu-barnes.jpg"
                  alt="Salomey Owusu Barnes, Chief Executive Officer of THRIVE EDU"
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  priority
                  className="object-cover"
                />
              </div>

              <div className="absolute right-0 top-4 z-20 hidden -rotate-3 flex-col items-center rounded-2xl bg-surface px-4 py-3 text-center shadow-elevation-3 sm:flex lg:right-4">
                <div className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-leaf-gold text-leaf-gold" />
                  ))}
                </div>
                <p className="mt-1 font-heading text-h5 font-bold text-text-primary">6+ Years</p>
                <p className="text-caption text-text-secondary">Experience</p>
              </div>

              <div className="absolute -bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-2xl border border-border bg-surface px-4 py-3 shadow-elevation-3 sm:-bottom-6 sm:left-0 sm:translate-x-0">
                <p className="text-small font-semibold text-text-primary">Salomey Owusu Barnes</p>
                <p className="text-caption text-text-secondary">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="Why we exist" title="Systems that make good teaching and learning last" />
          <div className="mt-5 space-y-4 text-body text-text-secondary">
            <p>
              We do more than supply materials. We help partners build the systems and structures that lock
              in quality, so good teaching and learning last. Everything we create is designed to embed
              lasting structure, not just deliver content.
            </p>
            <p>
              We work through partnership, and we deliver through five connected ventures. Together they
              equip learners, teachers, schools and communities to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left: intro copy */}
            <div>
              <p className="text-caption font-semibold uppercase tracking-wide text-heading-accent">
                Vision &amp; mission
              </p>
              <h2 className="mt-4 font-heading text-h2 font-bold leading-[1.05] text-text-primary sm:text-h1">
                What we&apos;re
                <br />
                working <span className="text-growth-green">toward.</span>
              </h2>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-small font-semibold uppercase tracking-wide text-forest-green">Our vision</p>
                  <p className="mt-1.5 text-body text-text-secondary">
                    To be the guiding light of education across Africa, inspiring excellence, innovation and
                    lifelong learning that empowers every child, educator and school to thrive.
                  </p>
                </div>
                <div>
                  <p className="text-small font-semibold uppercase tracking-wide text-forest-green">Our mission</p>
                  <p className="mt-1.5 text-body text-text-secondary">
                    Thrive EDU partners with schools, parents, NGOs and communities to provide quality,
                    innovative products, programmes and teaching and learning materials that equip and
                    empower all our stakeholders to thrive.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/contact">Partner with us</Link>
                </Button>
                <Link
                  href="/ecosystem"
                  className="text-small font-semibold text-forest-green underline-offset-4 hover:underline"
                >
                  See our ecosystem
                </Link>
              </div>
            </div>

            {/* Right: overlapping vision / mission cards */}
            <div className="relative mx-auto h-[380px] w-full max-w-sm sm:h-[440px]">
              <span
                className="absolute inset-0 hidden rounded-[2.5rem] border border-dashed border-border sm:block"
                aria-hidden
              />

              <div className="absolute left-0 top-0 flex h-52 w-52 flex-col justify-between rounded-[2rem] bg-ink p-6 shadow-elevation-3 sm:h-60 sm:w-60">
                <span className="font-heading text-h1 font-bold text-white/10">01</span>
                <p className="font-heading text-h5 font-bold text-white">Our Vision</p>
                <span className="absolute -right-6 -top-6 flex size-20 items-center justify-center rounded-full bg-surface shadow-elevation-3 sm:size-24">
                  <Eye className="size-8 text-forest-green sm:size-9" />
                </span>
              </div>

              <div className="absolute bottom-0 right-0 flex h-52 w-52 flex-col justify-between rounded-[2rem] bg-forest-green p-6 shadow-elevation-2 sm:h-60 sm:w-60">
                <span className="font-heading text-h1 font-bold text-text-primary/15">02</span>
                <p className="font-heading text-h5 font-bold text-text-primary">Our Mission</p>
                <span className="absolute -bottom-6 -left-6 flex size-20 items-center justify-center rounded-full bg-surface shadow-elevation-3 sm:size-24">
                  <Compass className="size-8 text-forest-green sm:size-9" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-subtle-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What we stand for" title="Our core values" align="center" className="mx-auto" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {orgValues.map((v) => {
              const Icon = valueIcons[v.title] ?? Heart;
              return (
                <div key={v.title} className="rounded-2xl border border-border bg-surface p-6 text-center shadow-elevation-1">
                  <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-forest-green">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-4 font-heading text-h5 font-semibold text-text-primary">{v.title}</p>
                  <p className="mt-2 text-small text-text-secondary">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <TeamCarousel members={teamMembers} />
        </div>
      </section>
    </>
  );
}
