"use client";

import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { ArrowRight } from "lucide-react";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 3h-2a5 5 0 0 0-5 5v3H6v4h2v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v5M8 8v.01M12 16v-5M12 11c0-1.5 1-2 2-2s2 .5 2 2v5" />
    </svg>
  );
}

const columns = [
  {
    heading: "About",
    links: [
      { label: "About us", href: "/about" },
      { label: "The Ecosystem", href: "/ecosystem" },
      { label: "Gallery", href: "/gallery" },
      { label: "Impact", href: "/impact" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Get involved",
    links: [
      { label: "Donate", href: "/support-our-work" },
      { label: "Join our team", href: "/join-our-team" },
      { label: "Resources and blog", href: "/resources" },
    ],
  },
  {
    heading: "For you",
    links: [
      { label: "For schools and organisations", href: "/schools" },
      { label: "Books and curricula", href: "/books" },
      { label: "For families and readers", href: "/families" },
      { label: "For young adults", href: "/young-adults" },
      { label: "Courses", href: "/courses" },
      { label: "Student portal", href: "/dashboard/student" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms of service", href: "#" },
];

const socials = [
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "X (Twitter)", icon: XIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
];

function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-ink-border pb-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-heading text-h4 font-bold text-white">Get impact updates in your inbox</p>
            <p className="mt-1 text-small text-white/60">New resources, programme updates, and stories from the field. No spam.</p>
          </div>
          <form
            className="flex w-full max-w-sm items-center gap-2 rounded-full border border-ink-border bg-ink-surface p-1.5 sm:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              aria-label="Email address"
              className="h-10 min-w-0 flex-1 bg-transparent px-3 text-small text-white outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-leaf-gold text-white transition-transform hover:scale-105"
              aria-label="Subscribe"
            >
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>

        <div className="grid gap-10 pt-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/thrive-edu-logo.png" alt="THRIVE EDU" width={32} height={32} />
              <span className="font-heading text-h5 font-bold tracking-tight text-white">THRIVE EDU</span>
            </Link>
            <p className="mt-4 max-w-xs text-small text-white/60">
              An international education NGO rooted in Ghana, reaching for Africa.
            </p>
            <p className="mt-2 text-small font-semibold text-leaf-gold">Everyone Thrives With Us.</p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-ink-border text-white/70 transition-colors hover:border-leaf-gold hover:text-leaf-gold"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-3 inline-flex rounded-full bg-ink-surface px-3 py-1 text-caption font-semibold uppercase tracking-wide text-leaf-gold">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-small text-white/70 transition-colors hover:text-leaf-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-border pt-6 text-caption text-white/50 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <p>© {new Date().getFullYear()} THRIVE EDU. All rights reserved.</p>
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-leaf-gold">
                {link.label}
              </Link>
            ))}
          </div>
          <p>Kumasi, Ghana · hello@thriveedu.org · 0242806144</p>
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };
