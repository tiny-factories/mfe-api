/*
  Warnings:

  - You are about to drop the `Data` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Unit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_sourceId_fkey";

-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_unitId_fkey";

-- AlterTable
ALTER TABLE "Source" ADD COLUMN     "abbreviation" TEXT;

-- DropTable
DROP TABLE "Data";

-- DropTable
DROP TABLE "Unit";

-- CreateTable
CREATE TABLE "data" (
    "id" SERIAL NOT NULL,
    "measurement" TEXT NOT NULL,
    "unitId" INTEGER,
    "sourceId" INTEGER,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "authorId" INTEGER,

    CONSTRAINT "data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT,

    CONSTRAINT "unit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "data" ADD CONSTRAINT "data_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data" ADD CONSTRAINT "data_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data" ADD CONSTRAINT "data_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
