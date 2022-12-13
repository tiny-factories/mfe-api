/*
  Warnings:

  - You are about to drop the column `sourceId` on the `Matter` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Matter" DROP CONSTRAINT "Matter_sourceId_fkey";

-- AlterTable
ALTER TABLE "Matter" DROP COLUMN "sourceId";

-- CreateTable
CREATE TABLE "_MatterToSource" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MatterToSource_AB_unique" ON "_MatterToSource"("A", "B");

-- CreateIndex
CREATE INDEX "_MatterToSource_B_index" ON "_MatterToSource"("B");

-- AddForeignKey
ALTER TABLE "_MatterToSource" ADD CONSTRAINT "_MatterToSource_A_fkey" FOREIGN KEY ("A") REFERENCES "Matter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MatterToSource" ADD CONSTRAINT "_MatterToSource_B_fkey" FOREIGN KEY ("B") REFERENCES "Source"("id") ON DELETE CASCADE ON UPDATE CASCADE;
