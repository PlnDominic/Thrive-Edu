import Image from "next/image";

import { SectionHeading } from "@/components/marketing/section-heading";
import { getIcon } from "@/lib/icon-registry";
import { cn } from "@/lib/utils";
import { getPublishedGalleryItems } from "@/lib/data/gallery";

export default async function GalleryPage() {
  const galleryItems = await getPublishedGalleryItems();

  return (
    <>
      <section className="border-b border-border bg-subtle-surface py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-caption font-semibold uppercase tracking-wide text-heading-accent">Gallery</p>
          <h1 className="font-heading text-h3 font-bold text-text-primary sm:text-h1">See THRIVE EDU in action</h1>
          <p className="mt-4 text-body-lg text-text-secondary">
            Moments from our classrooms, showcases, and community, where growth and achievement come to
            life.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Moments" title="Life at THRIVE EDU" />
          <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {galleryItems.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div
                  key={item.id}
                  className={cn(
                    "group relative mb-6 flex break-inside-avoid items-end overflow-hidden rounded-lg shadow-elevation-1",
                    item.height,
                    item.color
                  )}
                >
                  {item.photo ? (
                    <Image
                      src={item.photo}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <Icon
                      className="absolute right-4 top-4 size-8 text-white/25 transition-transform duration-200 group-hover:scale-110"
                      aria-hidden
                    />
                  )}
                  <div className="relative w-full bg-gradient-to-t from-black/70 to-transparent p-5">
                    <p className="text-caption font-semibold uppercase tracking-wide text-white/70">{item.category}</p>
                    <p className="mt-1 font-heading text-body-lg font-semibold text-white">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
