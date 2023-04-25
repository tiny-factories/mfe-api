/*
  Warnings:

  - The primary key for the `CollectionsOfMeasurements` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `sourceId` to the `CollectionsOfMeasurements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CollectionsOfMeasurements" DROP CONSTRAINT "CollectionsOfMeasurements_pkey",
ADD COLUMN     "sourceId" TEXT NOT NULL,
ADD CONSTRAINT "CollectionsOfMeasurements_pkey" PRIMARY KEY ("measurementId", "typeId", "sourceId");

-- AddForeignKey
ALTER TABLE "CollectionsOfMeasurements" ADD CONSTRAINT "CollectionsOfMeasurements_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
