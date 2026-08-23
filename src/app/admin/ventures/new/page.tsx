import { AdminBackLink } from "@/components/admin/back-link";
import { AdminPageHeader } from "@/components/admin/page-header";
import { VentureForm } from "@/components/admin/venture-form";
import { createVenture } from "@/lib/actions/ventures";

export default function NewVenturePage() {
  return (
    <div>
      <AdminBackLink href="/admin/ventures" label="Ventures" />
      <AdminPageHeader title="New venture" description="Add a new card to the ecosystem page." />
      <VentureForm action={createVenture} submitLabel="Create venture" />
    </div>
  );
}
