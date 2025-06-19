/*
  Warnings:

  - Added the required column `departmentId` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departmentId` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "departmentId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "departmentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
