/*
  Warnings:

  - You are about to drop the column `departmentId` on the `Resource` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Resource` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_userId_fkey";

-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "departmentId",
DROP COLUMN "userId";
