import Link from "next/link";
import { Building2, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EmptyState } from "@/components/feedback/empty-state";
import { DeleteButton } from "@/components/admin/delete-button";
import { getAllVentures } from "@/lib/data/ventures";
import { deleteVenture } from "@/lib/actions/ventures";

export default async function AdminVenturesPage() {
  const ventures = await getAllVentures();

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-h4 font-bold text-text-primary">Ventures</h1>
          <p className="mt-1 text-body text-text-secondary">Cards shown on the /ecosystem page.</p>
        </div>
        <Button className="rounded-full" asChild>
          <Link href="/admin/ventures/new">
            <Plus className="size-4" />
            New venture
          </Link>
        </Button>
      </div>

      {ventures.length === 0 ? (
        <div className="mt-8">
          <EmptyState icon={Building2} title="No ventures yet" description="Add your first venture." />
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-surface">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ventures.map((venture) => (
                <TableRow key={venture.id}>
                  <TableCell className="font-medium text-text-primary">{venture.name}</TableCell>
                  <TableCell>{venture.slug}</TableCell>
                  <TableCell>
                    <Badge variant={venture.published ? "success" : "neutral"}>
                      {venture.published ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex justify-end gap-2 text-right">
                    <Button variant="secondary" size="sm" className="rounded-full" asChild>
                      <Link href={`/admin/ventures/${venture.id}`}>Edit</Link>
                    </Button>
                    <DeleteButton
                      action={deleteVenture.bind(null, venture.id)}
                      confirmMessage={`Delete "${venture.name}"? This can't be undone.`}
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
