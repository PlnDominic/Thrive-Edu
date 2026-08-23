import { TeamForm } from "@/components/admin/team-form";
import { createTeamMember } from "@/lib/actions/team";

export default function NewTeamMemberPage() {
  return (
    <div>
      <h1 className="font-heading text-h4 font-bold text-text-primary">New team member</h1>
      <TeamForm action={createTeamMember} submitLabel="Create team member" />
    </div>
  );
}
