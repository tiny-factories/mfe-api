-- AlterTable
ALTER TABLE "Measurements" ADD COLUMN     "collectionsId" TEXT;

-- AddForeignKey
ALTER TABLE "Measurements" ADD CONSTRAINT "Measurements_collectionsId_fkey" FOREIGN KEY ("collectionsId") REFERENCES "Collections"("id") ON DELETE SET NULL ON UPDATE CASCADE;
