-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_semesterId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_userId_fkey";

-- DropForeignKey
ALTER TABLE "Semester" DROP CONSTRAINT "Semester_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "userActivity" DROP CONSTRAINT "userActivity_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "userActivity" DROP CONSTRAINT "userActivity_userId_fkey";
