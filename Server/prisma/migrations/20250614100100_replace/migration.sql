/*
  Warnings:

  - You are about to drop the column `name` on the `Semester` table. All the data in the column will be lost.
  - Added the required column `Number` to the `Semester` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Semester" DROP COLUMN "name",
ADD COLUMN     "Number" INTEGER NOT NULL;
