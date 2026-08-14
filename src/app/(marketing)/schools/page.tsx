import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ClipboardList,
  Compass,
  FlaskConical,
  GraduationCap,
  HardHat,
  type LucideIcon,
} from "lucide-react";

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
    title: "Teacher training",
    description:
      "Continuing development through the Thrive Professional Development Institute lifts teaching quality across your whole staff.",
    icon: GraduationCap,
  },
  {
    title: "TVET curriculum",
    description:
      "We license a practical skills curriculum to your school and train your staff to teach it, with learners practising at home too.",
    icon: HardHat,
  },
  {
    title: "STEM programme",
    description:
      "A hands-on STEM programme and products that bring science, technology, engineering and maths to life in the classroom.",
    icon: FlaskConical,
  },
  {
    title: "Published products",
    description:
      "Decodable readers, mathematics, financial literacy and picture books from Thrive Literacy and Publications, ready for your classrooms.",
    icon: BookOpen,
    href: "/books",
    linkLabel: "Browse books and curricula",
  },
  {
    title: "Consultation services",
    description: "Contact us directly for consultation, advice and support tailored to your school or organisation.",
    icon: ClipboardList,
  },
  {
    title: "Thrive 360 for students",
    description: "Leadership development and coaching that builds character, confidence and voice in your students.",
    icon: Compass,
    href: "/young-adults",
    linkLabel: "More on Thrive 360",
  },
];

export default function SchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[380px] overflow-hidden sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/images/why-thrive-certified-educators.jpg"
          alt="Thrive EDU certified educators and school improvement training"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
          <Badge variant="primary" className="mb-6 bg-surface">
            For Schools and Organisations
          </Badge>
          <h1 className="font-heading text-h3 font-bold leading-[1.05] tracking-tight text-white sm:text-h2 lg:text-h1">
            The systems that make <span className="text-growth-green">quality last.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-body text-white/80 sm:text-body-lg">
            Teacher training, curriculum, products and hands-on support, all in one partnership. We help
            your school build what keeps good teaching and learning going.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Partner with us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What we offer"
            title="Everything your school needs, in one partnership"
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering) => (
              <div key={offering.title} className="rounded-2xl border border-border bg-surface p-8 shadow-elevation-1">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-forest-green-text">
                  <offering.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-heading text-h5 font-bold text-text-primary">{offering.title}</h3>
                <p className="mt-2 text-small text-text-secondary">{offering.description}</p>
                {offering.href && (
                  <Link
                    href={offering.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-small font-semibold text-forest-green-text transition-colors hover:text-primary-hover"
                  >
                    {offering.linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-ink px-6 py-16 text-center sm:rounded-[2.25rem] sm:py-20">
          <h2 className="font-heading text-h3 font-bold text-white sm:text-h2">
            Ready to partner with Thrive EDU?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/70">
            Tell us about your school or organisation, and our team will follow up within one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Partner with us</Link>
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
