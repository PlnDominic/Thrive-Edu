"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { TeamMember } from "@/lib/team-data";

interface TeamCarouselProps {
  members: TeamMember[];
}

function TeamCarousel({ members }: TeamCarouselProps) {
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [featured, ...rest] = members;

  const scrollByCard = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 260, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-caption font-semibold uppercase tracking-wide text-heading-accent">
            Our people
          </span>
          <h2 className="mt-4 font-heading text-h3 font-bold text-text-primary">Meet the team</h2>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll left"
            className="flex size-10 items-center justify-center bg-forest-green text-text-primary transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Scroll right"
            className="flex size-10 items-center justify-center bg-forest-green text-text-primary transition-opacity hover:opacity-90"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-8 flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {featured && (
          <div className="flex h-80 w-64 shrink-0 snap-start flex-col justify-between bg-forest-green p-6 sm:w-72">
            <div>
              <p className="font-heading text-h5 font-bold text-text-primary">{featured.name}</p>
              <p className="text-small font-medium text-text-primary/70">{featured.role}</p>
            </div>
            {featured.bio && <p className="text-small text-text-primary/80">{featured.bio}</p>}
          </div>
        )}

        {rest.map((member) => (
          <div key={member.name} className="relative h-80 w-64 shrink-0 snap-start overflow-hidden sm:w-72">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="18rem"
                className="object-cover object-top"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-brand" aria-hidden>
                <span className="font-heading text-display font-bold text-white/20">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-heading text-body-lg font-bold text-white">{member.name}</p>
              <p className="text-small text-white/70">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { TeamCarousel };
