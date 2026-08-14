import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-caption font-semibold uppercase tracking-wide text-heading-accent">{eyebrow}</p>
      )}
      <h2 className="font-heading text-h3 font-bold text-text-primary sm:text-h2">{title}</h2>
      {description && <p className="mt-3 text-body-lg text-text-secondary">{description}</p>}
    </div>
  );
}

export { SectionHeading };
