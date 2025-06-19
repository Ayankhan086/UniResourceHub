-- DropForeignKey
ALTER TABLE "userActivity" DROP CONSTRAINT "userActivity_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "userActivity" DROP CONSTRAINT "userActivity_userId_fkey";

-- AddForeignKey
ALTER TABLE "userActivity" ADD CONSTRAINT "userActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userActivity" ADD CONSTRAINT "userActivity_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
