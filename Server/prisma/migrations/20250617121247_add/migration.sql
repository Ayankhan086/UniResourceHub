-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];
