import Link from "next/link";
import { Image as ImageIcon, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EmptyState } from "@/components/feedback/empty-state";
import { DeleteButton } from "@/components/admin/delete-button";
import { getAllGalleryItems } from "@/lib/data/gallery";
import { deleteGalleryItem } from "@/lib/actions/gallery";

export default async function AdminGalleryPage() {
  const items = await getAllGalleryItems();

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-h4 font-bold text-text-primary">Gallery</h1>
          <p className="mt-1 text-body text-text-secondary">Photos and tiles shown on the /gallery page.</p>
        </div>
        <Button className="rounded-full" asChild>
          <Link href="/admin/gallery/new">
            <Plus className="size-4" />
            New item
          </Link>
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="mt-8">
          <EmptyState icon={ImageIcon} title="No gallery items yet" description="Add your first photo or tile." />
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-surface">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium text-text-primary">{item.title}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <Badge variant={item.published ? "success" : "neutral"}>
                      {item.published ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex justify-end gap-2 text-right">
                    <Button variant="secondary" size="sm" className="rounded-full" asChild>
                      <Link href={`/admin/gallery/${item.id}`}>Edit</Link>
                    </Button>
                    <DeleteButton
                      action={deleteGalleryItem.bind(null, item.id)}
                      confirmMessage={`Delete "${item.title}"? This can't be undone.`}
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
