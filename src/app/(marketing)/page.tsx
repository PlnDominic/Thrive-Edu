import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  ChevronsRight,
  Compass,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Leaf,
  LineChart,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CourseCard } from "@/components/marketing/course-card";
import { HeroVisual } from "@/components/marketing/hero-visual";
import { TestimonialCarousel } from "@/components/marketing/testimonial-carousel";
import { EmptyState } from "@/components/feedback/empty-state";
import { courses } from "@/lib/courses-data";

const ecosystemThemes = [
  {
    title: "Read and Learn",
    description: "Foundational reading and the joy of it.",
    icon: BookOpen,
    href: "/ecosystem",
    items: ["Thrive Literacy and Publications", "Thrive Mobile Library and Books Hub"],
  },
  {
    title: "Explore and Create",
    description: "Curiosity, making and hands-on discovery.",
    icon: FlaskConical,
    href: "/ecosystem",
    items: ["Thrive STEM (Programme and Products)", "Thrive Talents Creative Hub"],
  },
  {
    title: "Skills and Futures",
    description: "Practical skills, leadership and livelihoods.",
    icon: Compass,
    href: "/ecosystem",
    items: ["Thrive TVET", "Thrive 360 Leadership and Coaching Services"],
  },
  {
    title: "Strengthen Schools",
    description: "Lifting whole schools and their teachers.",
    icon: Building2,
    href: "/ecosystem",
    items: ["Thrive Professional Development Institute", "Thrive Schools Improvement Services"],
  },
];

const valueProps = [
  {
    title: "Personalized learning paths",
    description: "Every learner gets a path shaped by their pace, strengths, and goals, not a fixed curriculum.",
    icon: Sparkles,
  },
  {
    title: "Real-time insights",
    description: "Progress, attendance, and skill growth are always visible to the people who need to see them.",
    icon: LineChart,
  },
  {
    title: "Certified educators",
    description: "Every course is led by vetted, trained teachers who care about long-term growth, not just grades.",
    icon: BookOpen,
  },
  {
    title: "Human-centered support",
    description: "Behind every dashboard is a real support team ready to help students and families thrive.",
    icon: HeartHandshake,
  },
];

const partners = [
  { name: "JoyJeff Academy", logo: "/images/partner-logo-joyjeff-academy.jpg" as string | undefined },
  { name: "Good Stewards Golden Pen School", logo: "/images/partner-logo-good-stewards.jpg" as string | undefined },
  { name: "Froebel Educational Centre", logo: "/images/partner-logo-froebel.jpg" as string | undefined },
];

interface ShopProduct {
  title: string;
  category: string;
  description: string;
  cardCount: string;
  originalPrice: number;
  salePrice: number;
  image?: string;
}

const shopProducts: ShopProduct[] = [
  {
    title: "Vegetables and Fruits",
    category: "Early Learners",
    description: "Bright, wipeable flash cards that introduce young learners to everyday fruits and vegetables.",
    cardCount: "30 Cards",
    originalPrice: 60,
    salePrice: 45,
    image: "/images/shop-dansly-fruits-vegetables.png",
  },
  {
    title: "Parts of the Human Body",
    category: "Early Learners",
    description: "A wipeable-clean flash card set that helps children learn and label parts of the human body.",
    cardCount: "30 Cards",
    originalPrice: 60,
    salePrice: 45,
    image: "/images/shop-dansly-human-body.png",
  },
  {
    title: "Shapes and Colours",
    category: "Early Learners",
    description: "A wipeable-clean flash card set that helps children recognize shapes and colours with ease.",
    originalPrice: 60,
    salePrice: 45,
    cardCount: "30 Cards",
    image: "/images/shop-dansly-shapes-colours.png",
  },
  {
    title: "Phonics",
    category: "Early Learners",
    description: "A wipeable-clean flash card set that helps children build letter sounds and early reading skills.",
    originalPrice: 60,
    salePrice: 45,
    cardCount: "30 Cards",
    image: "/images/shop-dansly-phonics.png",
  },
  {
    title: "Numerals",
    category: "Early Learners",
    description: "A wipeable-clean flash card set that helps children learn to count and recognize numbers.",
    originalPrice: 60,
    salePrice: 45,
    cardCount: "30 Cards",
    image: "/images/shop-dansly-numerals.png",
  },
  {
    title: "Memory Verse",
    category: "Early Learners",
    description: "A wipeable-clean flash card set of memory verses to help children learn and recall scripture.",
    originalPrice: 60,
    salePrice: 45,
    cardCount: "30 Cards",
    image: "/images/shop-dansly-memory-verse.png",
  },
];

const testimonials = [
  {
    quote:
      "Thrive Edu provides exceptional teaching resources and has been an invaluable literacy partner for our school. Their dedication to helping us foster independent learners is unmatched. We are proud to work alongside a team that cares so deeply about student success.",
    name: "William Adu-Donkor",
    role: "Director, JoyJeff Academy",
  },
  {
    quote:
      "As a school, we are determined to empower and equip our students with the 21st-century skills they need to stay relevant. Through our partnership with Thrive-Edu, who supplied us with all our STEM materials, we can boldly say we are one of the leading schools in STEM education.",
    name: "Abigail Owusu Afriyie",
    role: "Assistant Director, Golden Pen School",
    image: "/images/testimonial-abigail-owusu-afriyie.jpg",
  },
  {
    quote:
      "Thrive Edu has been our go-to partner for extracurricular programming, consistently exceeding our expectations. More than just a service provider, they have invested in our school community like true family. We couldn't ask for a more reliable or dedicated team!",
    name: "David Owusu",
    role: "Director, Froebel Educational Centre",
    image: "/images/testimonial-david-owusu.jpg",
  },
  {
    quote:
      "At Goshen Hybrid Academy, we believe that quality education requires innovation, commitment, and the right educational tools. Our experience with Thrive Edu has been remarkable, introducing innovative approaches that support our teachers and make learning more engaging and efficient for our pupils. We are proud to be associated with Thrive Edu, and I confidently recommend them to schools passionate about improving teaching and learning.",
    name: "Enock Osei Tutu",
    role: "Headmaster, Goshen Hybrid Academy",
    image: "/images/testimonial-enock-osei-tutu.jpg",
  },
];

const stats = [
  { label: "Active learners", value: "12,400+" },
  { label: "Certified educators", value: "320+" },
  { label: "Partner schools", value: "48" },
  { label: "Average satisfaction", value: "4.8/5" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-3 sm:pt-5">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-surface shadow-elevation-2 sm:rounded-[2.25rem]">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <h1 className="font-heading text-h2 font-bold leading-[1.05] tracking-tight text-text-primary sm:text-h1 lg:text-display">
                Rooted in Ghana.
                <br />
                Reaching for
                <br />
                <span className="text-growth-green">Africa.</span>
              </h1>
              <p className="mt-6 max-w-lg text-body-lg text-text-secondary">
                Thrive EDU is an international education NGO. We help schools, organisations and communities
                build the systems that lock in quality, so every learner gains the knowledge, skills and
                attitudes to thrive.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/contact">
                    Submit an enquiry
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
                <Link
                  href="/support-our-work"
                  className="group flex items-center gap-3 text-small font-semibold text-text-primary"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-leaf-gold text-white transition-transform duration-200 group-hover:scale-105">
                    <HeartHandshake className="size-5" />
                  </span>
                  Donate
                </Link>
              </div>
            </div>

            <HeroVisual />
          </div>
        </div>

        {/* Stats band, overlapping the hero card */}
        <div className="relative z-10 -mt-6 sm:-mt-8">
          <dl className="grid grid-cols-2 gap-px overflow-hidden bg-ink-border shadow-elevation-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink px-4 py-6 text-center sm:px-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-h4 font-bold text-white sm:text-h3">{s.value}</dd>
                <p className="mt-1 text-caption text-white/60">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Built for every role */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            {/* Photo */}
            <div className="lg:sticky lg:top-28">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  className="absolute -right-4 -top-4 hidden h-full w-full rounded-[2rem] bg-leaf-gold sm:block"
                  aria-hidden
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-elevation-2">
                  <Image
                    src="/images/gallery-painting-focus.jpg"
                    alt="A THRIVE EDU student focused on a painting during an outdoor art workshop"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 shadow-elevation-3 sm:left-6 sm:right-auto sm:w-64">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-leaf-gold/15 text-leaf-gold">
                    <Leaf className="size-5" />
                  </span>
                  <div>
                    <p className="font-heading text-h5 font-bold text-text-primary">8 ventures</p>
                    <p className="text-caption text-text-secondary">Across 4 connected themes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 lg:mt-0">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-subtle-surface px-4 py-2 text-caption font-bold uppercase tracking-wide text-heading-accent">
                  What we do
                </span>
                <Leaf className="size-5 text-leaf-gold" aria-hidden />
              </div>
              <h2 className="font-heading text-h2 font-bold leading-[1.05] text-text-primary sm:text-h1">
                Our ecosystem,
                <br />
                in <span className="text-leaf-gold">four</span> themes.
              </h2>
              <p className="mt-6 max-w-lg text-body-lg text-text-secondary">
                THRIVE EDU is one parent organisation made of connected, autonomous units, grouped into
                four clear themes so you can go straight to the one you need.
              </p>

              <div className="mt-10 divide-y divide-border border-t border-border">
                {ecosystemThemes.map((a, i) => (
                  <div key={a.title} className="flex gap-5 py-7 first:pt-0">
                    <span className="font-heading text-h3 font-bold leading-none text-border sm:text-h2">
                      0{i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <p className="font-heading text-h5 font-bold text-text-primary">{a.title}</p>
                        <p className="text-small italic text-text-secondary">{a.description}</p>
                      </div>
                      <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
                        {a.items.map((item, itemIndex) => (
                          <li key={item} className="text-small italic text-text-secondary">
                            {item}
                            {itemIndex < a.items.length - 1 && <span className="not-italic text-border"> ・</span>}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={a.href}
                        className="mt-3 inline-flex items-center gap-1.5 text-small font-semibold text-leaf-gold transition-colors hover:text-warm-amber"
                      >
                        Learn more
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-heading text-h4 font-bold uppercase tracking-wide text-text-primary sm:text-h3">
            Best Sellers
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {shopProducts.map((product) => (
              <Link
                key={product.title}
                href="/contact"
                aria-label={`Enquire to order ${product.title}`}
                className="group flex flex-col bg-surface"
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-surface sm:h-56">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={`${product.title} flash cards box`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-caption font-semibold text-text-secondary">{product.title}</span>
                  )}
                  <span className="absolute bottom-3 left-3 rounded-full bg-ink px-2.5 py-1 text-caption font-semibold text-white">
                    Sale
                  </span>
                </div>
                <div className="px-1 pb-6 pt-3">
                  <p className="text-small text-text-secondary">{product.title}</p>
                  <p className="mt-1 text-small">
                    <span className="text-text-secondary/70 line-through">
                      GH₵{product.originalPrice.toFixed(2)}
                    </span>{" "}
                    <span className="font-semibold text-text-primary">GH₵{product.salePrice.toFixed(2)}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why THRIVE EDU */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div
          className="absolute inset-x-0 top-0 h-3"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--color-growth-green) 0 10px, transparent 10px 20px)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-3"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--color-growth-green) 0 10px, transparent 10px 20px)",
          }}
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-leaf-gold">
                  <ChevronsRight className="size-3.5 text-ink" />
                </span>
                <span className="text-caption font-semibold uppercase tracking-wide text-white/70">
                  Why THRIVE EDU
                </span>
              </div>
              <h2 className="font-heading text-h2 font-bold leading-[1.1] text-white sm:text-h1">
                Calm, Intelligent Tools
                <br />
                for Real Growth
              </h2>
            </div>
            <Button className="rounded-full bg-white text-ink hover:bg-white/90" asChild>
              <Link href="/about">
                View all benefits
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-2xl">
              <div className="relative h-56 overflow-hidden bg-ink-surface">
                <Image
                  src="/images/why-thrive-personalized-paths.jpg"
                  alt="A student mapping out her own learning plan"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover grayscale transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-ink-surface p-6">
                <p className="font-heading text-h5 font-semibold text-white">{valueProps[0].title}</p>
                <p className="mt-2 text-small text-white/60">{valueProps[0].description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-small font-semibold text-leaf-gold">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </div>
            </div>

            <div className="lg:mt-10">
              <div className="rounded-2xl bg-leaf-gold p-6">
                <p className="font-heading text-h5 font-semibold text-ink">{valueProps[1].title}</p>
                <p className="mt-2 text-small text-ink/70">{valueProps[1].description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-small font-semibold text-ink">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </div>
              <div className="group relative mt-4 h-56 overflow-hidden rounded-2xl bg-ink-surface">
                <Image
                  src="/images/why-thrive-real-time-insights.jpg"
                  alt="A team member reviewing progress late in the evening"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover grayscale transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl">
              <div className="relative h-56 overflow-hidden bg-ink-surface">
                <Image
                  src="/images/why-thrive-certified-educators.jpg"
                  alt="A young man reading a personal development book"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover grayscale transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-ink-surface p-6">
                <p className="font-heading text-h5 font-semibold text-white">{valueProps[2].title}</p>
                <p className="mt-2 text-small text-white/60">{valueProps[2].description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-small font-semibold text-leaf-gold">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement band */}
      <div className="border-y-2 border-text-primary bg-background py-12 sm:py-16">
        <p className="flex flex-wrap items-center justify-center gap-3 px-6 text-center font-heading text-h3 font-bold uppercase tracking-tight text-text-primary sm:gap-4 sm:text-h2 lg:text-h1">
          <span>Grow</span>
          <Sparkles className="size-5 shrink-0 text-leaf-gold sm:size-7" aria-hidden />
          <span>Guide</span>
          <Sparkles className="size-5 shrink-0 text-leaf-gold sm:size-7" aria-hidden />
          <span className="text-growth-green">Thrive</span>
        </p>
      </div>

      {/* Featured courses */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Storefront"
              title="Featured courses"
              description="A sample of the live and self-paced courses available across every subject."
            />
            <Button variant="secondary" className="rounded-full" asChild>
              <Link href="/courses">
                View all courses
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          {courses.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.slice(0, 3).map((course, i) => (
                <CourseCard key={course.id} course={course} ribbon={i === 0 ? "Bestseller" : undefined} />
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <EmptyState
                icon={GraduationCap}
                title="Courses coming soon"
                description="Our course catalog is being finalized. Check back shortly to browse live cohorts and self-paced tracks."
              />
            </div>
          )}
        </div>
      </section>

      {/* CTA band */}
      <section className="overflow-hidden bg-black py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/thrive-edu-logo.png" alt="" width={28} height={28} aria-hidden />
              <span className="font-heading text-h5 font-bold text-white">
                THRIVE EDU<span className="text-leaf-gold">.</span>
              </span>
            </div>
            <p className="mt-2 text-caption font-semibold uppercase tracking-wide text-white/50">
              Everyone Thrives With Us.
            </p>

            <h2 className="mt-8 font-heading text-h2 font-bold leading-[1.05] sm:text-h1">
              <span className="text-white">Ready to build </span>
              <span className="text-growth-green">lasting quality</span>
              <span className="text-white"> together</span>
              <span className="text-leaf-gold">?</span>
            </h2>
            <p className="mt-6 max-w-md text-body-lg text-white/70">
              Tell us about your school, organisation, or community, and our team will connect you with
              the right Thrive venture.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" variant="accent" className="rounded-full" asChild>
                <Link href="/contact">Submit an enquiry</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/support-our-work">Donate</Link>
              </Button>
            </div>
          </div>

          {/* Photo collage */}
          <div className="hidden grid-cols-3 gap-4 lg:grid">
            <div className="flex flex-col gap-4 pt-10">
              <div className="relative aspect-[3/5] overflow-hidden rounded-[2.5rem] bg-ink-border">
                <Image
                  src="/images/cta-collage-blue-armchair.jpg"
                  alt="A Thrive EDU learner working on her laptop"
                  fill
                  sizes="16vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-warm-amber">
                <Image
                  src="/images/cta-collage-orange-laptop.jpg"
                  alt="A Thrive EDU learner holding a laptop"
                  fill
                  sizes="16vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-leaf-gold">
                <Image
                  src="/images/cta-collage-pink-backpack.jpg"
                  alt="A Thrive EDU learner with a backpack and notebooks"
                  fill
                  sizes="16vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-20">
              <div className="relative aspect-[3/5] overflow-hidden rounded-[2.5rem] bg-ink-border">
                <Image
                  src="/images/cta-collage-purple-phone.jpg"
                  alt="A Thrive EDU learner checking his phone"
                  fill
                  sizes="16vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured partners */}
      <section className="border-t border-border bg-subtle-surface py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-caption font-semibold uppercase tracking-wide text-heading-accent">
            Our Featured Partners
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="mx-auto flex aspect-square w-20 items-center justify-center border border-border bg-surface p-2 shadow-elevation-1 sm:w-28 sm:p-3"
              >
                {partner.logo ? (
                  <div className="relative size-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="7rem"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <p className="text-caption font-semibold text-text-secondary">{partner.name}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-background py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-caption font-semibold uppercase tracking-wide text-black">
            From our community
          </p>
          <div className="mt-10">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>
    </>
  );
}
