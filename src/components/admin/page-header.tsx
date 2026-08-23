interface AdminPageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function AdminPageHeader({ eyebrow, title, description, action }: AdminPageHeaderProps) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-6">
      <div>
        {eyebrow && (
          <p className="mb-1.5 text-caption font-semibold uppercase tracking-wide text-forest-green-text">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading text-h4 font-bold text-text-primary">{title}</h1>
        {description && <p className="mt-1.5 max-w-2xl text-body text-text-secondary">{description}</p>}
      </div>
      {action}
    </div>
  );
}
