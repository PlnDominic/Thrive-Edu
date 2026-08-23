import { notFound } from "next/navigation";

import { GalleryForm } from "@/components/admin/gallery-form";
import { getGalleryItem } from "@/lib/data/gallery";
import { updateGalleryItem } from "@/lib/actions/gallery";

export default async function EditGalleryItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await getGalleryItem(id);
  if (!item) notFound();

  return (
    <div>
      <h1 className="font-heading text-h4 font-bold text-text-primary">Edit gallery item</h1>
      <GalleryForm action={updateGalleryItem.bind(null, id)} item={item} submitLabel="Save changes" />
    </div>
  );
}
