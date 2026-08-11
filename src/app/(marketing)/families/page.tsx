import Image from "next/image";
import Link from "next/link";
import { BookOpen, GraduationCap, HardHat, Library, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marketing/section-heading";

interface Offering {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  linkLabel?: string;
}

const offerings: Offering[] = [
  {
    title: "Books",
    description:
      "Decodable readers, mathematics, financial literacy and picture books from Thrive Literacy and Publications.",
    icon: BookOpen,
    href: "/books",
    linkLabel: "Browse our series",
  },
  {
    title: "Mobile library",
    description: "A mobile and outreach library bringing books directly into homes and communities.",
    icon: Library,
  },
  {
    title: "Home practice",
    description:
      "Continue practical skills training at home, even if your child's school isn't yet a Thrive partner.",
    icon: HardHat,
    href: "/contact",
    linkLabel: "Ask about home practice",
  },
];

export default function FamiliesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[380px] overflow-hidden sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/images/every-learner.jpg"
          alt="Thrive EDU resources for families and readers"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
          <Badge variant="primary" className="mb-6 bg-surface">
            For Families and Readers
          </Badge>
          <h1 className="font-heading text-h3 font-bold leading-[1.05] tracking-tight text-white sm:text-h2 lg:text-h1">
            Books and practice for <span className="text-growth-green">every home.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-body text-white/80 sm:text-body-lg">
            Browse our published series, join our mobile library, and access home practice for your
            child, wherever your family is.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/books">Browse books</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What's available" title="For your family" align="center" className="mx-auto" />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering) => (
              <div key={offering.title} className="rounded-2xl border border-border bg-surface p-8 shadow-elevation-1">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-forest-green">
                  <offering.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-heading text-h5 font-bold text-text-primary">{offering.title}</h3>
                <p className="mt-2 text-small text-text-secondary">{offering.description}</p>
                {offering.href && (
                  <Link
                    href={offering.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-small font-semibold text-forest-green transition-colors hover:text-primary-hover"
                  >
                    {offering.linkLabel}
                  </Link>
                )}
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
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-caption font-bold uppercase tracking-wide text-heading-accent">
                Also available
              </span>
              <h2 className="mt-4 font-heading text-h4 font-bold text-text-primary">Continue learning online</h2>
              <p className="mt-2 max-w-lg text-body text-text-secondary">
                Live cohorts and self-paced courses across every subject, with a student portal to track
                progress along the way.
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
          <GraduationCap className="mx-auto size-10 text-leaf-gold" />
          <h2 className="mt-4 font-heading text-h3 font-bold text-white sm:text-h2">Ready to bring Thrive home?</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/70">
            Tell us a bit about your family and what you&apos;re looking for, and our team will follow up.
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
