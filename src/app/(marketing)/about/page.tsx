import Image from "next/image";
import Link from "next/link";
import { Compass, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TeamCarousel } from "@/components/marketing/team-carousel";
import { orgValues, teamMembers } from "@/lib/team-data";

const valueImages = [
  "/images/hero-painting-outdoors.jpg",
  "/images/gallery-studio-arts.jpg",
  "/images/gallery-science-fair.jpg",
  "/images/hero-painting-closeup.jpg",
  "/images/gallery-outdoor-lesson.jpg",
  "/images/gallery-painting-group-seated.jpg",
];

export default function AboutPage() {
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
            About us
          </Badge>
          <h1 className="font-heading text-h3 font-bold leading-[1.05] tracking-tight text-white sm:text-h2 lg:text-h1">
            Why every learner deserves to <span className="text-growth-green">thrive.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-body text-white/80 sm:text-body-lg">
            We exist because too many learners still lack access to products and programmes that build the
            knowledge, skills and attitudes they need to thrive.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Partner with us</Link>
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full" asChild>
              <Link href="/courses">Explore courses</Link>
            </Button>
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
                  <p className="text-small font-semibold uppercase tracking-wide text-forest-green-text">Our vision</p>
                  <p className="mt-1.5 text-body text-text-secondary">
                    To be the guiding light of education across Africa, inspiring excellence, innovation and
                    lifelong learning that empowers every child, educator and school to thrive.
                  </p>
                </div>
                <div>
                  <p className="text-small font-semibold uppercase tracking-wide text-forest-green-text">Our mission</p>
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
                  className="text-small font-semibold text-forest-green-text underline-offset-4 hover:underline"
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
                  <Eye className="size-8 text-forest-green-text sm:size-9" />
                </span>
              </div>

              <div className="absolute bottom-0 right-0 flex h-52 w-52 flex-col justify-between rounded-[2rem] bg-forest-green p-6 shadow-elevation-2 sm:h-60 sm:w-60">
                <span className="font-heading text-h1 font-bold text-text-primary/15">02</span>
                <p className="font-heading text-h5 font-bold text-text-primary">Our Mission</p>
                <span className="absolute -bottom-6 -left-6 flex size-20 items-center justify-center rounded-full bg-surface shadow-elevation-3 sm:size-24">
                  <Compass className="size-8 text-forest-green-text sm:size-9" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="What we stand for" title="Our core values" align="center" className="mx-auto" />
          <div className="mt-14 divide-y divide-border border-t border-border">
            {orgValues.map((v, i) => {
              const image = valueImages[i % valueImages.length];
              const flipped = i % 2 === 1;
              return (
                <div key={v.title} className="grid items-center gap-6 py-10 sm:py-12 md:grid-cols-2 md:gap-10">
                  <div className={flipped ? "md:order-2" : undefined}>
                    <h3 className="font-heading text-h4 font-bold text-text-primary">{v.title}</h3>
                    <span className="mt-3 block h-0.5 w-12 bg-forest-green" aria-hidden />
                    <p className="mt-4 max-w-sm text-body text-text-secondary">{v.description}</p>
                  </div>
                  <div className={flipped ? "flex md:order-1 md:justify-end" : "flex justify-start"}>
                    <span
                      aria-hidden
                      className="select-none bg-clip-text font-heading text-[6rem] font-black leading-none text-transparent sm:text-[8rem]"
                      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
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
