import Link from "next/link";
import { Compass, HardHat, HeartHandshake, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marketing/section-heading";

interface Offering {
  title: string;
  description: string;
  icon: LucideIcon;
}

const offerings: Offering[] = [
  {
    title: "Thrive 360 leadership and coaching",
    description:
      "Leadership development and coaching that builds character, confidence and voice, one on one and in groups.",
    icon: Compass,
  },
  {
    title: "TVET skills training",
    description:
      "Practical, technical and vocational skills training you can start today, whether or not your school offers it.",
    icon: HardHat,
  },
];

export default function YoungAdultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-surface shadow-elevation-2 sm:rounded-[2.25rem]">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
            <Badge variant="primary" className="mb-6">
              For Young Adults
            </Badge>
            <h1 className="font-heading text-h2 font-bold leading-[1.05] tracking-tight text-text-primary sm:text-h1 lg:text-display">
              Grow your character, <span className="text-growth-green">skills, and voice.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-secondary">
              Leadership coaching and practical skills training built for young adults ready to stand
              strong and thrive.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/contact">Submit an enquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="What's available" title="Built for you" align="center" className="mx-auto" />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {offerings.map((offering) => (
              <div key={offering.title} className="rounded-2xl border border-border bg-surface p-8 shadow-elevation-1">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-forest-green">
                  <offering.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-heading text-h5 font-bold text-text-primary">{offering.title}</h3>
                <p className="mt-2 text-small text-text-secondary">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue online */}
      <section className="border-t border-border bg-subtle-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 rounded-[1.75rem] bg-surface p-8 shadow-elevation-1 sm:flex-row sm:p-10">
            <div className="text-center sm:text-left">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-caption font-bold uppercase tracking-wide text-forest-green">
                Also available
              </span>
              <h2 className="mt-4 font-heading text-h4 font-bold text-text-primary">Continue learning online</h2>
              <p className="mt-2 max-w-lg text-body text-text-secondary">
                Live cohorts and self-paced courses, including test prep and life skills, with a student
                portal to track progress along the way.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
              <Button className="rounded-full" asChild>
                <Link href="/courses">Browse courses</Link>
              </Button>
              <Button variant="secondary" className="rounded-full" asChild>
                <Link href="/dashboard/student">Student portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-ink px-6 py-16 text-center sm:rounded-[2.25rem] sm:py-20">
          <HeartHandshake className="mx-auto size-10 text-leaf-gold" />
          <h2 className="mt-4 font-heading text-h3 font-bold text-white sm:text-h2">Ready to grow with Thrive?</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/70">
            Tell us what you&apos;re looking for, and our team will follow up within one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Submit an enquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
