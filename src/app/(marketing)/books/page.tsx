"use client";

import * as React from "react";
import Image from "next/image";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { BookOpen } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marketing/section-heading";
import { EmptyState } from "@/components/feedback/empty-state";
import { cn } from "@/lib/utils";
import { bookSeries, subjects } from "@/lib/books-data";

export default function BooksPage() {
  const [subject, setSubject] = React.useState<string>("All");

  const filtered = subject === "All" ? bookSeries : bookSeries.filter((b) => b.subject === subject);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[380px] overflow-hidden sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/images/why-thrive-personalized-paths.jpg"
          alt="Books and decodable readers authored by Thrive Edu"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
          <Badge variant="primary" className="mb-6 bg-surface">
            Books and Curricula
          </Badge>
          <h1 className="font-heading text-h3 font-bold leading-[1.05] tracking-tight text-white sm:text-h2 lg:text-h1">
            Stories and skills, <span className="text-growth-green">authored in Ghana.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-body text-white/80 sm:text-body-lg">
            Decodable readers, phonics, mathematics, financial literacy, practical skills and picture
            books from Thrive Literacy and Publications.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Order for your school</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Series */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Our series" title="Browse by subject" />

          <TabsPrimitive.Root value={subject} onValueChange={setSubject} className="mt-10">
            <TabsPrimitive.List
              aria-label="Filter series by subject"
              className="flex flex-wrap gap-2 border-b border-border pb-4"
            >
              {["All", ...subjects].map((s) => (
                <TabsPrimitive.Trigger
                  key={s}
                  value={s}
                  className={cn(
                    "rounded-full border border-border px-4 py-2 text-small font-medium text-text-secondary transition-colors",
                    "hover:bg-subtle-surface hover:text-text-primary",
                    "data-[state=active]:border-forest-green data-[state=active]:bg-primary/10 data-[state=active]:font-semibold data-[state=active]:text-forest-green"
                  )}
                >
                  {s}
                </TabsPrimitive.Trigger>
              ))}
            </TabsPrimitive.List>

            <TabsPrimitive.Content value={subject} className="mt-10">
              {filtered.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((series) => (
                    <div key={series.title} className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-1">
                      <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-forest-green">
                        <BookOpen className="size-5" />
                      </span>
                      <p className="mt-4 text-caption font-semibold uppercase tracking-wide text-text-secondary">
                        {series.subject}
                      </p>
                      <h3 className="mt-1 font-heading text-h5 font-bold text-text-primary">{series.title}</h3>
                      <p className="mt-2 text-small text-text-secondary">{series.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={BookOpen}
                  title="No series in this subject yet"
                  description="We're expanding our catalog. Check back soon or get in touch about upcoming titles."
                />
              )}
            </TabsPrimitive.Content>
          </TabsPrimitive.Root>

          <div className="mt-6">
            <EmptyState
              icon={BookOpen}
              title="Individual titles coming soon"
              description="We're finalizing product pages for each book. In the meantime, get in touch to order series in bulk for your school or library."
            />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-ink px-6 py-16 text-center sm:rounded-[2.25rem] sm:py-20">
          <h2 className="font-heading text-h3 font-bold text-white sm:text-h2">Want these books in your classroom?</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/70">
            Talk to us about bulk orders, library packs, and licensing our published curricula.
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
