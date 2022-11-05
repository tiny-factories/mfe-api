/*
  Warnings:

  - You are about to drop the column `matterId` on the `Data` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Matter` will be added. If there are existing duplicate values, this will fail.
  - Made the column `slug` on table `Matter` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_matterId_fkey";

-- AlterTable
ALTER TABLE "Data" DROP COLUMN "matterId",
ADD COLUMN     "matterSlug" TEXT;

-- AlterTable
ALTER TABLE "Matter" ALTER COLUMN "slug" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Matter_slug_key" ON "Matter"("slug");

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_matterSlug_fkey" FOREIGN KEY ("matterSlug") REFERENCES "Matter"("slug") ON DELETE SET NULL ON UPDATE CASCADE;
