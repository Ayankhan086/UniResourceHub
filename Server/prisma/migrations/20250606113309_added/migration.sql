-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_semesterId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Semester" DROP CONSTRAINT "Semester_departmentId_fkey";

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
