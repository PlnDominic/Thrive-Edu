import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function AdminBackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="mb-4 inline-flex items-center gap-1.5 text-small font-medium text-text-secondary transition-colors hover:text-text-primary"
    >
      <ArrowLeft className="size-3.5" />
      {label}
    </Link>
  );
}
