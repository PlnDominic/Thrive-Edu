import Image from "next/image";
import Link from "next/link";
import { Plus, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EmptyState } from "@/components/feedback/empty-state";
import { AdminPageHeader } from "@/components/admin/page-header";
import { DeleteButton } from "@/components/admin/delete-button";
import { getAllTeamMembers } from "@/lib/data/team";
import { deleteTeamMember } from "@/lib/actions/team";

export default async function AdminTeamPage() {
  const members = await getAllTeamMembers();

  return (
    <div>
      <AdminPageHeader
        eyebrow="About"
        title="Team"
        description="People shown on the /about page."
        action={
          <Button className="rounded-full" asChild>
            <Link href="/admin/team/new">
              <Plus className="size-4" />
              New team member
            </Link>
          </Button>
        }
      />

      {members.length === 0 ? (
        <div className="mt-8">
          <EmptyState icon={Users} title="No team members yet" description="Add your first team member." />
        </div>
      ) : (
        <div className="mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead />
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="relative size-10 overflow-hidden rounded-full border border-border bg-subtle-surface">
                      {member.image ? (
                        <Image src={member.image} alt="" fill sizes="40px" className="object-cover" unoptimized />
                      ) : (
                        <div className="flex size-full items-center justify-center text-caption font-bold text-text-secondary">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-text-primary">{member.name}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>
                    <Badge variant={member.published ? "success" : "neutral"}>
                      {member.published ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="secondary" size="sm" className="rounded-full" asChild>
                        <Link href={`/admin/team/${member.id}`}>Edit</Link>
                      </Button>
                      <DeleteButton
                        action={deleteTeamMember.bind(null, member.id)}
                        confirmMessage={`Delete "${member.name}"? This can't be undone.`}
                      />
                    </div>
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
