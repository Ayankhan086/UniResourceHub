/*
  Warnings:

  - You are about to drop the column `isPublished` on the `Resource` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PublishStatus" AS ENUM ('PUBLISHED', 'WAITING_FOR_APPROVAL', 'REJECTED');

-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "isPublished",
ADD COLUMN     "publishStatus" "PublishStatus" NOT NULL DEFAULT 'WAITING_FOR_APPROVAL';
