/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Source` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Matter" ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Source" ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Source_slug_key" ON "Source"("slug");
