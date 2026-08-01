"use client";

import * as React from "react";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  intervalMs?: number;
}

function TestimonialCarousel({ testimonials, intervalMs = 6000 }: TestimonialCarouselProps) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = testimonials.length;

  React.useEffect(() => {
    if (paused || count <= 1) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => clearInterval(id);
  }, [paused, count, intervalMs]);

  const prevIndex = (index - 1 + count) % count;
  const nextIndex = (index + 1) % count;
  const current = testimonials[index];

  return (
    <div
      className="mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="mb-4 text-right text-caption text-text-secondary">
        <span className="font-semibold text-text-primary">{index + 1}</span>
        <span>/{count}</span>
      </p>

      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={() => setIndex(prevIndex)}
          aria-label={`View testimonial from ${testimonials[prevIndex].name}`}
          className="hidden h-64 w-28 shrink-0 rounded-lg bg-border/50 transition-opacity hover:opacity-70 sm:block lg:w-36"
        />

        <div
          key={index}
          className="motion-safe:animate-[carousel-in_0.6s_cubic-bezier(0.16,1,0.3,1)_both] w-full max-w-sm shrink-0 rounded-lg bg-subtle-surface p-8 sm:p-10"
        >
          <p className="text-caption font-semibold uppercase tracking-widest text-text-secondary">
            {current.name}
          </p>
          <div aria-hidden className="mt-6 aspect-square w-full rounded-md bg-border/60" />
          <blockquote className="mt-8 text-h5 font-bold leading-snug text-text-primary text-pretty sm:text-h4">
            {current.quote}
          </blockquote>
          <p className="mt-4 text-small text-text-secondary">{current.role}</p>
        </div>

        <button
          type="button"
          onClick={() => setIndex(nextIndex)}
          aria-label={`View testimonial from ${testimonials[nextIndex].name}`}
          className="hidden h-64 w-28 shrink-0 rounded-lg bg-border/50 transition-opacity hover:opacity-70 sm:block lg:w-36"
        />
      </div>
    </div>
  );
}

export { TestimonialCarousel };
