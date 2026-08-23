import { notFound } from "next/navigation";

import { AdminBackLink } from "@/components/admin/back-link";
import { AdminPageHeader } from "@/components/admin/page-header";
import { VentureForm } from "@/components/admin/venture-form";
import { getVenture } from "@/lib/data/ventures";
import { updateVenture } from "@/lib/actions/ventures";

export default async function EditVenturePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const venture = await getVenture(id);
  if (!venture) notFound();

  return (
    <div>
      <AdminBackLink href="/admin/ventures" label="Ventures" />
      <AdminPageHeader title={`Edit ${venture.name}`} description="Update this venture's details." />
      <VentureForm action={updateVenture.bind(null, id)} venture={venture} submitLabel="Save changes" />
    </div>
  );
}
