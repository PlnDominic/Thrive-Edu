import type { ReactNode } from "react";

export function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-16 first:border-t-0 first:pt-0">
      <div className="mb-8 max-w-2xl">
        <h2 className="font-heading text-h3 font-bold text-text-primary sm:text-h2">{title}</h2>
        {description && <p className="mt-2 text-body-lg text-text-secondary">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export function SubLabel({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-caption font-semibold uppercase tracking-wide text-text-secondary">{children}</p>;
}
