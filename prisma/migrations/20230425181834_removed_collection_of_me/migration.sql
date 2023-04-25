/*
  Warnings:

  - You are about to drop the `CollectionsOfMeasurements` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CollectionsOfMeasurements" DROP CONSTRAINT "CollectionsOfMeasurements_collectionsId_fkey";

-- DropForeignKey
ALTER TABLE "CollectionsOfMeasurements" DROP CONSTRAINT "CollectionsOfMeasurements_measurementId_fkey";

-- DropForeignKey
ALTER TABLE "CollectionsOfMeasurements" DROP CONSTRAINT "CollectionsOfMeasurements_sourceId_fkey";

-- DropForeignKey
ALTER TABLE "CollectionsOfMeasurements" DROP CONSTRAINT "CollectionsOfMeasurements_typeId_fkey";

-- AlterTable
ALTER TABLE "Collections" ADD COLUMN     "sourceId" TEXT,
ADD COLUMN     "typeId" TEXT;

-- DropTable
DROP TABLE "CollectionsOfMeasurements";

-- AddForeignKey
ALTER TABLE "Collections" ADD CONSTRAINT "Collections_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collections" ADD CONSTRAINT "Collections_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
