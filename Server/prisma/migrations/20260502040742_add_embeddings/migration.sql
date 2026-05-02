-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector";

-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "embedding" vector(768);

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "embedding" vector(768);
