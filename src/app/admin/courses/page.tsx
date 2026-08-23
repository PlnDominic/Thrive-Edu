import Link from "next/link";
import { BookOpen, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EmptyState } from "@/components/feedback/empty-state";
import { AdminPageHeader } from "@/components/admin/page-header";
import { DeleteButton } from "@/components/admin/delete-button";
import { getAllCourses } from "@/lib/data/courses";
import { deleteCourse } from "@/lib/actions/courses";

export default async function AdminCoursesPage() {
  const courses = await getAllCourses();

  return (
    <div>
      <AdminPageHeader
        eyebrow="Storefront"
        title="Courses"
        description="Products shown on the /courses storefront and homepage."
        action={
          <Button className="rounded-full" asChild>
            <Link href="/admin/courses/new">
              <Plus className="size-4" />
              New course
            </Link>
          </Button>
        }
      />

      {courses.length === 0 ? (
        <div className="mt-8">
          <EmptyState icon={BookOpen} title="No courses yet" description="Add your first course or product." />
        </div>
      ) : (
        <div className="mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium text-text-primary">{course.title}</TableCell>
                  <TableCell>{course.subject}</TableCell>
                  <TableCell>₵{course.price}</TableCell>
                  <TableCell>
                    <Badge variant={course.published ? "success" : "neutral"}>
                      {course.published ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="secondary" size="sm" className="rounded-full" asChild>
                        <Link href={`/admin/courses/${course.id}`}>Edit</Link>
                      </Button>
                      <DeleteButton
                        action={deleteCourse.bind(null, course.id)}
                        confirmMessage={`Delete "${course.title}"? This can't be undone.`}
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
