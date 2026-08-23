import Image from "next/image";
import Link from "next/link";

interface AdminAuthShellProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  tagline: string;
  title: string;
  description: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}

// Shared split-screen frame for /admin/login and /admin/signup: a brand
// photo panel on one side, the form on the other. Kept out of the
// (marketing) route group deliberately (no public site header/footer) - this
// is its own quieter, focused space.
export function AdminAuthShell({
  image,
  imageAlt,
  eyebrow,
  tagline,
  title,
  description,
  children,
  footer,
}: AdminAuthShellProps) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Photo panel */}
      <div className="relative hidden overflow-hidden bg-ink lg:block">
        <Image src={image} alt={imageAlt} fill sizes="50vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" aria-hidden />

        <div className="relative flex h-full flex-col justify-between p-12">
          {/* Text-only wordmark here, not the logo image - its dark-green
              mark reads fine on the light form panel but disappears against
              this dark photo overlay. */}
          <Link href="/" className="font-heading text-h5 font-bold tracking-tight text-white">
            THRIVE EDU<span className="text-leaf-gold">.</span>
          </Link>

          <div className="max-w-md">
            <p className="text-caption font-semibold uppercase tracking-wide text-leaf-gold">{eyebrow}</p>
            <p className="mt-3 font-heading text-h4 font-bold leading-snug text-white">{tagline}</p>
          </div>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex min-h-screen flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" className="flex items-center gap-2 lg:hidden">
            <Image
              src="/thrive-edu-logo.png"
              alt="THRIVE EDU"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0"
            />
            <span className="font-heading text-body-lg font-bold tracking-tight text-heading-accent">
              THRIVE EDU<span className="text-leaf-gold">.</span>
            </span>
          </Link>

          <h1 className="mt-8 font-heading text-h4 font-bold text-text-primary lg:mt-0">{title}</h1>
          <p className="mt-2 text-body text-text-secondary">{description}</p>

          {children}

          <div className="mt-6 text-small text-text-secondary">{footer}</div>
        </div>
      </div>
    </div>
  );
}
