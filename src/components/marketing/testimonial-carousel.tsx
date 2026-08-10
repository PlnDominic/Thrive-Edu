"use client";

import * as React from "react";
import Image from "next/image";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
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
          className="relative hidden h-40 w-28 shrink-0 overflow-hidden bg-border/50 transition-opacity hover:opacity-70 sm:block lg:h-48 lg:w-36"
        >
          {testimonials[prevIndex].image && (
            <Image
              src={testimonials[prevIndex].image!}
              alt=""
              fill
              sizes="9rem"
              className="object-cover object-top"
            />
          )}
        </button>

        <div
          key={index}
          className="motion-safe:animate-[carousel-in_0.6s_cubic-bezier(0.16,1,0.3,1)_both] w-full max-w-sm shrink-0 bg-subtle-surface p-6 sm:p-8"
        >
          <p className="text-caption font-semibold uppercase tracking-widest text-text-secondary">
            {current.name}
          </p>
          <div className="relative mx-auto mt-4 aspect-[4/5] w-40 bg-border/60 sm:w-48">
            {current.image && (
              <Image src={current.image} alt={current.name} fill sizes="12rem" className="object-cover object-top" />
            )}
          </div>
          <blockquote className="mt-5 text-h5 font-bold leading-snug text-text-primary text-pretty sm:text-h4">
            {current.quote}
          </blockquote>
          <p className="mt-3 text-small text-text-secondary">{current.role}</p>
        </div>

        <button
          type="button"
          onClick={() => setIndex(nextIndex)}
          aria-label={`View testimonial from ${testimonials[nextIndex].name}`}
          className="relative hidden h-40 w-28 shrink-0 overflow-hidden bg-border/50 transition-opacity hover:opacity-70 sm:block lg:h-48 lg:w-36"
        >
          {testimonials[nextIndex].image && (
            <Image
              src={testimonials[nextIndex].image!}
              alt=""
              fill
              sizes="9rem"
              className="object-cover object-top"
            />
          )}
        </button>
      </div>
    </div>
  );
}

export { TestimonialCarousel };
