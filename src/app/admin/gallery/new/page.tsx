import { GalleryForm } from "@/components/admin/gallery-form";
import { createGalleryItem } from "@/lib/actions/gallery";

export default function NewGalleryItemPage() {
  return (
    <div>
      <h1 className="font-heading text-h4 font-bold text-text-primary">New gallery item</h1>
      <GalleryForm action={createGalleryItem} submitLabel="Create item" />
    </div>
  );
}
