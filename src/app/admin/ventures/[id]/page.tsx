import { notFound } from "next/navigation";

import { VentureForm } from "@/components/admin/venture-form";
import { getVenture } from "@/lib/data/ventures";
import { updateVenture } from "@/lib/actions/ventures";

export default async function EditVenturePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const venture = await getVenture(id);
  if (!venture) notFound();

  return (
    <div>
      <h1 className="font-heading text-h4 font-bold text-text-primary">Edit venture</h1>
      <VentureForm action={updateVenture.bind(null, id)} venture={venture} submitLabel="Save changes" />
    </div>
  );
}
