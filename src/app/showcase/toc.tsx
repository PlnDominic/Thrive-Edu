"use client";

const links = [
  { href: "#foundations", label: "Foundations" },
  { href: "#buttons", label: "Buttons" },
  { href: "#inputs", label: "Inputs" },
  { href: "#navigation", label: "Navigation" },
  { href: "#cards", label: "Cards" },
  { href: "#data", label: "Data & analytics" },
  { href: "#feedback", label: "Feedback" },
  { href: "#collaboration", label: "Collaboration" },
];

export function Toc() {
  return (
    <nav aria-label="Section navigation" className="sticky top-24 hidden w-48 shrink-0 self-start xl:block">
      <p className="mb-3 text-caption font-semibold uppercase tracking-wide text-text-secondary">On this page</p>
      <ul className="space-y-2 border-l border-border pl-4">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-small text-text-secondary transition-colors hover:text-forest-green">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
