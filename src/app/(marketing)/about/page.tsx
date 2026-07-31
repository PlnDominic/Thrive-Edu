import Image from "next/image";
import Link from "next/link";
import { Award, Compass, Heart, ShieldCheck, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SectionHeading } from "@/components/marketing/section-heading";
import { orgValues, teamMembers } from "@/lib/team-data";

const valueIcons: Record<string, LucideIcon> = {
  Growth: Compass,
  Guidance: Heart,
  Trust: ShieldCheck,
  "Human-centered": Award,
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
                Empowering learners through <span className="text-growth-green">personalized education.</span>
              </h1>
              <p className="mt-6 max-w-lg text-body-lg text-text-secondary">
                THRIVE EDU is an education technology organization building personalized learning journeys for
                students, parents, teachers, and school owners, grounded in growth, guidance, intelligence, and
                trust.
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
              <Image
                src="/images/about-founder.png"
                alt="Dr. Abena Owusu, Founder and CEO of THRIVE EDU"
                width={566}
                height={968}
                priority
                className="relative z-10 h-full w-auto drop-shadow-xl"
              />

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
                <p className="text-small font-semibold text-text-primary">Dr. Abena Owusu</p>
                <p className="text-caption text-text-secondary">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Our story" title="Built by educators, for real classrooms" />
            <div className="mt-5 space-y-4 text-body text-text-secondary">
              <p>
                THRIVE EDU started with a simple observation: most education platforms were built for
                administrators, not for the students, parents, and teachers who actually rely on them every
                day. We set out to build something different: calm, human-centered software that gives
                every part of the learning ecosystem a clear view of progress.
              </p>
              <p>
                Today, THRIVE EDU partners with schools and families across Ghana and beyond to deliver
                personalized learning paths, real-time performance insights, and the kind of guidance that
                turns data into real support, not just another dashboard to check.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-forest-green p-6 text-white">
              <p className="font-heading text-h3 font-bold sm:text-h2">2019</p>
              <p className="mt-1 text-small text-white/80">Founded in Accra</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-1">
              <p className="font-heading text-h3 font-bold text-text-primary sm:text-h2">48</p>
              <p className="mt-1 text-small text-text-secondary">Partner schools</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-1">
              <p className="font-heading text-h3 font-bold text-text-primary sm:text-h2">12.4k</p>
              <p className="mt-1 text-small text-text-secondary">Active learners</p>
            </div>
            <div className="rounded-2xl bg-leaf-gold p-6 text-white">
              <p className="font-heading text-h3 font-bold sm:text-h2">320+</p>
              <p className="mt-1 text-small text-white/85">Certified educators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-subtle-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What we stand for" title="Our values" align="center" className="mx-auto" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          <SectionHeading
            eyebrow="Our people"
            title="Meet the team"
            description="A small, dedicated team of educators, engineers, and family-success specialists."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-elevation-1">
                <Avatar className="size-12">
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-heading text-body-lg font-semibold text-text-primary">{member.name}</p>
                  <p className="text-small text-text-secondary">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
