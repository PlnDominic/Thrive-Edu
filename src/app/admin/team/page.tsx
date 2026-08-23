import Link from "next/link";
import { Plus, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EmptyState } from "@/components/feedback/empty-state";
import { DeleteButton } from "@/components/admin/delete-button";
import { getAllTeamMembers } from "@/lib/data/team";
import { deleteTeamMember } from "@/lib/actions/team";

export default async function AdminTeamPage() {
  const members = await getAllTeamMembers();

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-h4 font-bold text-text-primary">Team</h1>
          <p className="mt-1 text-body text-text-secondary">People shown on the /about page.</p>
        </div>
        <Button className="rounded-full" asChild>
          <Link href="/admin/team/new">
            <Plus className="size-4" />
            New team member
          </Link>
        </Button>
      </div>

      {members.length === 0 ? (
        <div className="mt-8">
          <EmptyState icon={Users} title="No team members yet" description="Add your first team member." />
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-surface">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium text-text-primary">{member.name}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>
                    <Badge variant={member.published ? "success" : "neutral"}>
                      {member.published ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex justify-end gap-2 text-right">
                    <Button variant="secondary" size="sm" className="rounded-full" asChild>
                      <Link href={`/admin/team/${member.id}`}>Edit</Link>
                    </Button>
                    <DeleteButton
                      action={deleteTeamMember.bind(null, member.id)}
                      confirmMessage={`Delete "${member.name}"? This can't be undone.`}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
