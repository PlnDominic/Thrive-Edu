import { AdminBackLink } from "@/components/admin/back-link";
import { AdminPageHeader } from "@/components/admin/page-header";
import { GalleryForm } from "@/components/admin/gallery-form";
import { createGalleryItem } from "@/lib/actions/gallery";

export default function NewGalleryItemPage() {
  return (
    <div>
      <AdminBackLink href="/admin/gallery" label="Gallery" />
      <AdminPageHeader title="New gallery item" description="Add a new photo or tile to the gallery page." />
      <GalleryForm action={createGalleryItem} submitLabel="Create item" />
    </div>
  );
}
