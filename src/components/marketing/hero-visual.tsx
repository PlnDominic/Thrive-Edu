import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-[440px] w-full max-w-xs items-end justify-center sm:h-[500px] lg:h-[600px] lg:max-w-none">
      {/* Soft accent circle, top-left */}
      <span
        className="absolute -left-2 -top-2 hidden size-20 rounded-full bg-leaf-gold/15 sm:-left-4 sm:-top-4 sm:block lg:size-24"
        aria-hidden
      />

      {/* Diagonal solid color shapes behind the photo (single-hue blocks, not a blended gradient) */}
      <div
        className="absolute right-1 top-2 hidden h-72 w-52 -rotate-6 items-center justify-center overflow-hidden rounded-[2rem] bg-forest-green sm:flex lg:h-[26rem] lg:w-72"
        aria-hidden
      >
        <span className="rotate-90 whitespace-nowrap font-heading text-[4.5rem] font-bold text-white/10 lg:text-[6rem]">
          GROW
        </span>
      </div>
      <div
        className="absolute -left-2 bottom-8 hidden h-56 w-40 rotate-6 rounded-[1.5rem] bg-leaf-gold sm:block lg:h-72 lg:w-56"
        aria-hidden
      />

      {/* Dashed orbit ring */}
      <span
        className="absolute left-1/2 top-1/2 hidden size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-growth-green/25 sm:block lg:size-[420px]"
        aria-hidden
      />

      <Image
        src="/images/hero-student.png"
        alt="THRIVE EDU student celebrating a learning milestone"
        width={462}
        height={1005}
        priority
        className="relative z-10 h-full w-auto drop-shadow-xl"
      />

      {/* Floating badge: brand chip */}
      <div className="absolute right-0 top-4 z-20 hidden -rotate-6 items-center gap-2 rounded-2xl bg-surface px-3 py-2 shadow-elevation-3 sm:flex lg:right-4 lg:top-10">
        <Image src="/thrive-edu-logo.png" width={20} height={20} alt="" />
        <span className="text-caption font-semibold text-text-primary">THRIVE EDU</span>
      </div>

      {/* Floating badge: verified check */}
      <div className="absolute left-2 top-1/3 z-20 hidden size-12 items-center justify-center rounded-full bg-leaf-gold text-white shadow-elevation-2 sm:flex lg:size-14">
        <BadgeCheck className="size-6" />
      </div>

      {/* Floating card: student review */}
      <div className="absolute -bottom-5 left-1/2 z-20 flex w-60 -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-elevation-3 sm:-bottom-6 sm:left-0 sm:w-64 sm:translate-x-0">
        <Avatar className="size-10 shrink-0">
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-small font-semibold text-text-primary">Amara Boateng</p>
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
