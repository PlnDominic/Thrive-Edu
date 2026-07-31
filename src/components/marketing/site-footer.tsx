import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

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
    heading: "Organization",
    links: [
      { label: "About us", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Learning",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Student portal", href: "/dashboard/student" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Design system", href: "/showcase" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
];

const socials = [
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "X (Twitter)", icon: XIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
];

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-subtle-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/thrive-edu-logo.png" alt="THRIVE EDU" width={32} height={32} />
              <span className="font-heading text-h5 font-bold tracking-tight text-forest-green">THRIVE EDU</span>
            </Link>
            <p className="mt-4 max-w-xs text-small text-text-secondary">
              Every learner has a unique path to thrive. Personalized education for students, parents,
              teachers, and school owners.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-colors hover:border-growth-green/50 hover:text-forest-green"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-3 text-caption font-semibold uppercase tracking-wide text-text-secondary">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-small text-text-secondary transition-colors hover:text-forest-green">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-caption text-text-secondary sm:flex-row">
          <p>© {new Date().getFullYear()} THRIVE EDU. All rights reserved.</p>
          <p>Accra, Ghana · hello@thriveedu.org</p>
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };
