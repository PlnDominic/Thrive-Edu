import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
      {/* Soft accent circle, top-left */}
      <span
        className="absolute -left-2 -top-2 hidden size-20 rounded-full bg-leaf-gold/15 sm:-left-4 sm:-top-4 sm:block lg:size-24"
        aria-hidden
      />

      {/* Color block peeking from behind the photo */}
      <div
        className="absolute -bottom-3 -right-3 hidden h-full w-full rotate-3 rounded-[2rem] bg-leaf-gold sm:block"
        aria-hidden
      />

      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] shadow-elevation-3">
        <Image
          src="/images/hero-painting-outdoors.jpg"
          alt="Thrive EDU students painting outdoors at an art workshop"
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover"
        />
      </div>

      {/* Floating badge: brand chip */}
      <div className="absolute right-3 top-4 z-20 hidden -rotate-6 items-center gap-2 rounded-2xl bg-surface px-3 py-2 shadow-elevation-3 sm:flex lg:right-6 lg:top-8">
        <Image src="/thrive-edu-logo.png" width={20} height={20} alt="" />
        <span className="text-caption font-semibold text-text-primary">THRIVE EDU</span>
      </div>

      {/* Floating badge: verified check */}
      <div className="absolute left-3 top-1/3 z-20 hidden size-12 items-center justify-center rounded-full bg-leaf-gold text-white shadow-elevation-2 sm:flex lg:size-14">
        <BadgeCheck className="size-6" />
      </div>

      {/* Floating card: student review */}
      <div className="absolute -bottom-5 left-1/2 z-20 flex w-60 -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-elevation-3 sm:-bottom-6 sm:left-6 sm:translate-x-0">
        <Avatar className="size-10 shrink-0">
          <AvatarFallback>DB</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-small font-semibold text-text-primary">Dominic Boateng</p>
          <p className="text-caption text-text-secondary">Student</p>
          <div className="mt-0.5 flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3 fill-leaf-gold text-leaf-gold" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeroVisual };
