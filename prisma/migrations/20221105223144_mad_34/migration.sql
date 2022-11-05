-- AlterTable
ALTER TABLE "Data" ADD COLUMN     "internallyGeneratedData" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "internallyHostedData" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "title" TEXT,
ALTER COLUMN "measurement" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Matter" ADD COLUMN     "sourceId" TEXT;

-- AddForeignKey
ALTER TABLE "Matter" ADD CONSTRAINT "Matter_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;
