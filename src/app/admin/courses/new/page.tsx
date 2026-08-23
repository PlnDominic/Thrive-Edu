import { CourseForm } from "@/components/admin/course-form";
import { createCourse } from "@/lib/actions/courses";

export default function NewCoursePage() {
  return (
    <div>
      <h1 className="font-heading text-h4 font-bold text-text-primary">New course</h1>
      <CourseForm action={createCourse} submitLabel="Create course" />
    </div>
  );
}
