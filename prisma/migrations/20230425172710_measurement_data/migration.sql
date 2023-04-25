/*
  Warnings:

  - Added the required column `measurement` to the `Measurements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Measurements" ADD COLUMN     "measured_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "measurement" TEXT NOT NULL;
