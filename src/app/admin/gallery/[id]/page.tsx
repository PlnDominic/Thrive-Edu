import { notFound } from "next/navigation";

import { AdminBackLink } from "@/components/admin/back-link";
import { AdminPageHeader } from "@/components/admin/page-header";
import { GalleryForm } from "@/components/admin/gallery-form";
import { getGalleryItem } from "@/lib/data/gallery";
import { updateGalleryItem } from "@/lib/actions/gallery";

export default async function EditGalleryItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await getGalleryItem(id);
  if (!item) notFound();

  return (
    <div>
      <AdminBackLink href="/admin/gallery" label="Gallery" />
      <AdminPageHeader title={`Edit ${item.title}`} description="Update this gallery item's details." />
      <GalleryForm action={updateGalleryItem.bind(null, id)} item={item} submitLabel="Save changes" />
    </div>
  );
}
