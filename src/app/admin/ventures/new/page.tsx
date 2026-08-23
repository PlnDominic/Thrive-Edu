import { VentureForm } from "@/components/admin/venture-form";
import { createVenture } from "@/lib/actions/ventures";

export default function NewVenturePage() {
  return (
    <div>
      <h1 className="font-heading text-h4 font-bold text-text-primary">New venture</h1>
      <VentureForm action={createVenture} submitLabel="Create venture" />
    </div>
  );
}
