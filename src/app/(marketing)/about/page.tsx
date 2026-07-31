import { Award, Compass, Heart, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
      <section className="border-b border-border bg-subtle-surface py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-caption font-semibold uppercase tracking-wide text-forest-green">About us</p>
          <h1 className="font-heading text-h3 font-bold text-text-primary sm:text-h1">
            We believe every learner has a unique path to thrive.
          </h1>
          <p className="mt-5 text-body-lg text-text-secondary">
            THRIVE EDU is an education technology organization building personalized learning journeys for
            students, parents, teachers, and school owners, grounded in growth, guidance, intelligence, and
            trust.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
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
            <div className="rounded-lg bg-forest-green p-6 text-white">
              <p className="font-heading text-h3 font-bold sm:text-h2">2019</p>
              <p className="mt-1 text-small text-white/80">Founded in Accra</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6 shadow-elevation-1">
              <p className="font-heading text-h3 font-bold text-text-primary sm:text-h2">48</p>
              <p className="mt-1 text-small text-text-secondary">Partner schools</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6 shadow-elevation-1">
              <p className="font-heading text-h3 font-bold text-text-primary sm:text-h2">12.4k</p>
              <p className="mt-1 text-small text-text-secondary">Active learners</p>
            </div>
            <div className="rounded-lg bg-leaf-gold p-6 text-white">
              <p className="font-heading text-h3 font-bold sm:text-h2">320+</p>
              <p className="mt-1 text-small text-white/85">Certified educators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-subtle-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What we stand for" title="Our values" align="center" className="mx-auto" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {orgValues.map((v) => {
              const Icon = valueIcons[v.title] ?? Heart;
              return (
                <div key={v.title} className="rounded-lg border border-border bg-surface p-6 text-center shadow-elevation-1">
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
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our people"
            title="Meet the team"
            description="A small, dedicated team of educators, engineers, and family-success specialists."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-4 rounded-lg border border-border bg-surface p-5 shadow-elevation-1">
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
