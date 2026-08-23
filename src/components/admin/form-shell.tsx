import Link from "next/link";

import { Button } from "@/components/ui/button";

export function AdminFormCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 max-w-2xl overflow-hidden rounded-2xl border border-border bg-surface shadow-elevation-1">
      {children}
    </div>
  );
}

export function AdminFormSection({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border p-6 last:border-b-0 sm:p-8">
      {title && (
        <p className="mb-5 text-caption font-semibold uppercase tracking-wide text-text-secondary">{title}</p>
      )}
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
}

interface AdminFormActionsProps {
  pending: boolean;
  submitLabel: string;
  cancelHref: string;
  error?: string;
}

export function AdminFormActions({ pending, submitLabel, cancelHref, error }: AdminFormActionsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-subtle-surface/60 px-6 py-5 sm:px-8">
      {error ? (
        <p role="alert" className="text-small font-medium text-error">
          {error}
        </p>
      ) : (
        <span />
      )}
      <div className="ml-auto flex items-center gap-3">
        <Link href={cancelHref} className="text-small font-medium text-text-secondary transition-colors hover:text-text-primary">
          Cancel
        </Link>
        <Button type="submit" className="rounded-full" loading={pending} disabled={pending}>
          {submitLabel}
        </Button>
      </div>
    </div>
  );
}
