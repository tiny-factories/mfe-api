/*
  Warnings:

  - Added the required column `name` to the `Sensor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Measurements" DROP CONSTRAINT "Measurements_licenseId_fkey";

-- AlterTable
ALTER TABLE "Measurements" ALTER COLUMN "licenseId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Sensor" ADD COLUMN     "abbreviation" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Measurements" ADD CONSTRAINT "Measurements_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE SET NULL ON UPDATE CASCADE;
