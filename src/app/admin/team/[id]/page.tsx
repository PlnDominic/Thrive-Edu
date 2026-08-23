import { notFound } from "next/navigation";

import { AdminBackLink } from "@/components/admin/back-link";
import { AdminPageHeader } from "@/components/admin/page-header";
import { TeamForm } from "@/components/admin/team-form";
import { getTeamMember } from "@/lib/data/team";
import { updateTeamMember } from "@/lib/actions/team";

export default async function EditTeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = await getTeamMember(id);
  if (!member) notFound();

  return (
    <div>
      <AdminBackLink href="/admin/team" label="Team" />
      <AdminPageHeader title={`Edit ${member.name}`} description="Update this team member's details." />
      <TeamForm action={updateTeamMember.bind(null, id)} member={member} submitLabel="Save changes" />
    </div>
  );
}
