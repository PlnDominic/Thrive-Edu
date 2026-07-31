import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-gradient-brand">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center text-white">
        <Image src="/thrive-edu-logo.png" alt="THRIVE EDU" width={80} height={80} priority className="drop-shadow-lg" />
        <div className="space-y-4">
          <h1 className="font-heading text-display font-bold tracking-tight">THRIVE EDU</h1>
          <p className="text-body-lg text-white/90">
            Every learner has a unique path to thrive. Explore the design system built to guide students,
            parents, teachers, and school owners toward growth and achievement.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/showcase"
            className="inline-flex h-12 items-center gap-2 rounded-md bg-white px-6 text-small font-semibold text-forest-green shadow-elevation-2 transition-transform hover:scale-[1.02]"
          >
            View design system
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/dashboard/student"
            className="inline-flex h-12 items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 text-small font-semibold text-white transition-colors hover:bg-white/20"
          >
            View student dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
