import { AdminBackLink } from "@/components/admin/back-link";
import { AdminPageHeader } from "@/components/admin/page-header";
import { CourseForm } from "@/components/admin/course-form";
import { createCourse } from "@/lib/actions/courses";

export default function NewCoursePage() {
  return (
    <div>
      <AdminBackLink href="/admin/courses" label="Courses" />
      <AdminPageHeader title="New course" description="Add a new product to the storefront." />
      <CourseForm action={createCourse} submitLabel="Create course" />
    </div>
  );
}
