import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function HeroVisual() {
  return (
    <div className="relative h-72 sm:h-96 lg:h-auto">
      <Image
        src="/images/hero-painting-outdoors.jpg"
        alt="Thrive EDU students painting outdoors at an art workshop"
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden />

      {/* Floating badge: brand chip */}
      <div className="absolute right-4 top-4 z-20 flex -rotate-2 items-center gap-2 rounded-2xl bg-surface px-3 py-2 shadow-elevation-3 sm:right-6 sm:top-6">
        <Image src="/thrive-edu-logo.png" width={20} height={20} alt="" />
        <span className="text-caption font-semibold text-text-primary">THRIVE EDU</span>
      </div>

      {/* Floating badge: verified check */}
      <div className="absolute left-4 top-4 z-20 flex size-11 items-center justify-center rounded-full bg-leaf-gold text-white shadow-elevation-2 sm:left-6 sm:top-6 sm:size-12">
        <BadgeCheck className="size-5 sm:size-6" />
      </div>

      {/* Floating card: student review */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-3 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-elevation-3 backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:w-64">
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
