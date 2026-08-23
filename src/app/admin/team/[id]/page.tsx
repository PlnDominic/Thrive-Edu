import { notFound } from "next/navigation";

import { TeamForm } from "@/components/admin/team-form";
import { getTeamMember } from "@/lib/data/team";
import { updateTeamMember } from "@/lib/actions/team";

export default async function EditTeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = await getTeamMember(id);
  if (!member) notFound();

  return (
    <div>
      <h1 className="font-heading text-h4 font-bold text-text-primary">Edit team member</h1>
      <TeamForm action={updateTeamMember.bind(null, id)} member={member} submitLabel="Save changes" />
    </div>
  );
}
