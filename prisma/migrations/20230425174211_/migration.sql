/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `CollectionsOfMeasurements` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `CollectionsOfMeasurements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `CollectionsOfMeasurements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CollectionsOfMeasurements" ADD COLUMN     "abbreviation" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CollectionsOfMeasurements_slug_key" ON "CollectionsOfMeasurements"("slug");
