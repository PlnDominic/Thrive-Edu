import Image from "next/image";
import Link from "next/link";
import { Image as ImageIcon, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EmptyState } from "@/components/feedback/empty-state";
import { AdminPageHeader } from "@/components/admin/page-header";
import { DeleteButton } from "@/components/admin/delete-button";
import { getAllGalleryItems } from "@/lib/data/gallery";
import { deleteGalleryItem } from "@/lib/actions/gallery";

export default async function AdminGalleryPage() {
  const items = await getAllGalleryItems();

  return (
    <div>
      <AdminPageHeader
        eyebrow="Gallery"
        title="Gallery"
        description="Photos and tiles shown on the /gallery page."
        action={
          <Button className="rounded-full" asChild>
            <Link href="/admin/gallery/new">
              <Plus className="size-4" />
              New item
            </Link>
          </Button>
        }
      />

      {items.length === 0 ? (
        <div className="mt-8">
          <EmptyState icon={ImageIcon} title="No gallery items yet" description="Add your first photo or tile." />
        </div>
      ) : (
        <div className="mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead />
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="relative size-10 overflow-hidden rounded-lg border border-border bg-subtle-surface">
                      {item.photo ? (
                        <Image src={item.photo} alt="" fill sizes="40px" className="object-cover" unoptimized />
                      ) : (
                        <div className={`size-full ${item.color}`} />
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-text-primary">{item.title}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <Badge variant={item.published ? "success" : "neutral"}>
                      {item.published ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="secondary" size="sm" className="rounded-full" asChild>
                        <Link href={`/admin/gallery/${item.id}`}>Edit</Link>
                      </Button>
                      <DeleteButton
                        action={deleteGalleryItem.bind(null, item.id)}
                        confirmMessage={`Delete "${item.title}"? This can't be undone.`}
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
