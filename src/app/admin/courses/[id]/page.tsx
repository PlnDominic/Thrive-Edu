import { notFound } from "next/navigation";

import { CourseForm } from "@/components/admin/course-form";
import { getCourse } from "@/lib/data/courses";
import { updateCourse } from "@/lib/actions/courses";

export default async function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourse(id);
  if (!course) notFound();

  return (
    <div>
      <h1 className="font-heading text-h4 font-bold text-text-primary">Edit course</h1>
      <CourseForm action={updateCourse.bind(null, id)} course={course} submitLabel="Save changes" />
    </div>
  );
}
