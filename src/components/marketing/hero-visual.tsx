"use client";

import * as React from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";

const slides = [
  { src: "/images/hero-painting-outdoors.jpg", alt: "A Thrive EDU student painting outdoors at an art workshop" },
  { src: "/images/hero-painting-closeup.jpg", alt: "Thrive EDU students painting a landscape on their easels" },
  { src: "/images/hero-painting-group.jpg", alt: "A group of Thrive EDU students at an outdoor painting workshop" },
];

function HeroVisual() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative h-72 overflow-hidden sm:h-96 lg:h-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Image
        key={index}
        src={slides[index].src}
        alt={slides[index].alt}
        fill
        priority={index === 0}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="motion-safe:animate-[carousel-in_0.6s_ease_both] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden />

      {/* Slide indicators */}
      <div className="absolute inset-x-0 top-4 z-20 flex items-center justify-center gap-1.5 sm:top-6">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/75"
            )}
          />
        ))}
      </div>

      {/* Floating badge: brand chip */}
      <div className="absolute right-4 top-12 z-20 flex -rotate-2 items-center gap-2 rounded-2xl bg-surface px-3 py-2 shadow-elevation-3 sm:right-6 sm:top-14">
        <Image src="/thrive-edu-logo.png" width={20} height={20} alt="" />
        <span className="text-caption font-semibold text-text-primary">THRIVE EDU</span>
      </div>

      {/* Floating badge: verified check */}
      <div className="absolute left-4 top-12 z-20 flex size-11 items-center justify-center rounded-full bg-leaf-gold text-white shadow-elevation-2 sm:left-6 sm:top-14 sm:size-12">
        <BadgeCheck className="size-5 sm:size-6" />
      </div>
    </div>
  );
}

export { HeroVisual };
