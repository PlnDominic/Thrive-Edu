import Image from "next/image";
import Link from "next/link";
import { Building2, Gift, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marketing/section-heading";
import { DonatePanel } from "@/components/marketing/donate-panel";

interface GivingOption {
  title: string;
  description: string;
  icon: LucideIcon;
  linkLabel: string;
}

const otherGivingOptions: GivingOption[] = [
  {
    title: "Partner as a school",
    description:
      "Bring THRIVE EDU's ecosystem, books, and training into your school or organisation as a formal partner.",
    icon: HeartHandshake,
    linkLabel: "Start a partnership",
  },
  {
    title: "Corporate and CSR",
    description:
      "Align your organisation's social impact goals with a measurable, on-the-ground education programme.",
    icon: Building2,
    linkLabel: "Explore CSR partnership",
  },
  {
    title: "In-kind support",
    description:
      "Books, learning materials, equipment, and volunteer expertise all directly extend what we can offer learners.",
    icon: Gift,
    linkLabel: "Offer in-kind support",
  },
];

export default function SupportOurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[380px] overflow-hidden sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/images/gallery-outdoor-lesson.jpg"
          alt="Students and community learning together with Thrive EDU"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
          <Badge variant="primary" className="mb-6 bg-surface">
            Get Involved
          </Badge>
          <h1 className="font-heading text-h3 font-bold leading-[1.05] tracking-tight text-white sm:text-h2 lg:text-h1">
            Support work that <span className="text-growth-green">reaches real classrooms.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-body text-white/80 sm:text-body-lg">
            Every gift, partnership, and hour volunteered goes directly into the schools, teachers, and
            learners we serve. Here is how you can help THRIVE EDU grow.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Submit an enquiry</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ways to give */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Ways to help" title="Give directly to THRIVE EDU" align="center" className="mx-auto" />
          <p className="mx-auto mt-4 max-w-xl text-center text-body text-text-secondary">
            Choose an amount, then send it straight to us by Mobile Money or bank transfer. Every cedi goes
            directly into books, training, and classrooms.
          </p>

          <div className="mt-14">
            <DonatePanel />
          </div>

          {/* Other ways to give */}
          <div className="mt-16 border-t border-border pt-14">
            <p className="text-center text-small font-semibold uppercase tracking-wide text-text-secondary">
              Other ways to give
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {otherGivingOptions.map((option) => (
                <div key={option.title} className="rounded-2xl border border-border bg-surface p-6">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-forest-green-text">
                    <option.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-h5 font-bold text-text-primary">{option.title}</h3>
                  <p className="mt-2 text-small text-text-secondary">{option.description}</p>
                  <Link
                    href="/contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-small font-semibold text-forest-green-text transition-colors hover:text-primary-hover"
                  >
                    {option.linkLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-ink px-6 py-16 text-center sm:rounded-[2.25rem] sm:py-20">
          <h2 className="font-heading text-h3 font-bold text-white sm:text-h2">Ready to make a difference?</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/70">
            Tell us how you would like to get involved, and our team will follow up with the right next
            step.
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
