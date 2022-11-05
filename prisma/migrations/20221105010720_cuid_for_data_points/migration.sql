/*
  Warnings:

  - The primary key for the `Matter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Source` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Unit` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_matterId_fkey";

-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_sourceId_fkey";

-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_unitId_fkey";

-- AlterTable
ALTER TABLE "Data" ALTER COLUMN "unitId" SET DATA TYPE TEXT,
ALTER COLUMN "sourceId" SET DATA TYPE TEXT,
ALTER COLUMN "matterId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Matter" DROP CONSTRAINT "Matter_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Matter_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Matter_id_seq";

-- AlterTable
ALTER TABLE "Source" DROP CONSTRAINT "Source_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Source_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Source_id_seq";

-- AlterTable
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Unit_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Unit_id_seq";

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_matterId_fkey" FOREIGN KEY ("matterId") REFERENCES "Matter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
