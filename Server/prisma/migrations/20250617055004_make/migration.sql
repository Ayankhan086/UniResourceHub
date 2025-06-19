-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('DOWNLOAD', 'UPLOAD', 'SAVE');

-- CreateTable
CREATE TABLE "userActivity" (
    "id" SERIAL NOT NULL,
    "type" "ActivityType" NOT NULL,
    "userId" INTEGER NOT NULL,
    "resourceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userActivity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userActivity" ADD CONSTRAINT "userActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userActivity" ADD CONSTRAINT "userActivity_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
