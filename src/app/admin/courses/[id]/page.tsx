import { notFound } from "next/navigation";

import { AdminBackLink } from "@/components/admin/back-link";
import { AdminPageHeader } from "@/components/admin/page-header";
import { CourseForm } from "@/components/admin/course-form";
import { getCourse } from "@/lib/data/courses";
import { updateCourse } from "@/lib/actions/courses";

export default async function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourse(id);
  if (!course) notFound();

  return (
    <div>
      <AdminBackLink href="/admin/courses" label="Courses" />
      <AdminPageHeader title={`Edit ${course.title}`} description="Update this product's details." />
      <CourseForm action={updateCourse.bind(null, id)} course={course} submitLabel="Save changes" />
    </div>
  );
}
