-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];
