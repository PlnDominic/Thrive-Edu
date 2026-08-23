import { AdminBackLink } from "@/components/admin/back-link";
import { AdminPageHeader } from "@/components/admin/page-header";
import { TeamForm } from "@/components/admin/team-form";
import { createTeamMember } from "@/lib/actions/team";

export default function NewTeamMemberPage() {
  return (
    <div>
      <AdminBackLink href="/admin/team" label="Team" />
      <AdminPageHeader title="New team member" description="Add a new person to the about page." />
      <TeamForm action={createTeamMember} submitLabel="Create team member" />
    </div>
  );
}
