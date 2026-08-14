"use client";

import * as React from "react";
import Image from "next/image";

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
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Image
        key={index}
        src={slides[index].src}
        alt={slides[index].alt}
        fill
        priority={index === 0}
        sizes="100vw"
        className="motion-safe:animate-[carousel-in_0.6s_ease_both] object-cover"
      />

      {/* Slide indicators */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5 sm:bottom-8 sm:right-10">
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
    </div>
  );
}

export { HeroVisual };
