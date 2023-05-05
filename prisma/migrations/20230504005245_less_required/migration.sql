-- DropForeignKey
ALTER TABLE "Measurements" DROP CONSTRAINT "Measurements_sensorId_fkey";

-- DropForeignKey
ALTER TABLE "Measurements" DROP CONSTRAINT "Measurements_sourceId_fkey";

-- DropForeignKey
ALTER TABLE "Measurements" DROP CONSTRAINT "Measurements_typeId_fkey";

-- DropForeignKey
ALTER TABLE "Measurements" DROP CONSTRAINT "Measurements_unitId_fkey";

-- AlterTable
ALTER TABLE "Measurements" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "sourceId" DROP NOT NULL,
ALTER COLUMN "unitId" DROP NOT NULL,
ALTER COLUMN "typeId" DROP NOT NULL,
ALTER COLUMN "sensorId" DROP NOT NULL,
ALTER COLUMN "measured_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Measurements" ADD CONSTRAINT "Measurements_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measurements" ADD CONSTRAINT "Measurements_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measurements" ADD CONSTRAINT "Measurements_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measurements" ADD CONSTRAINT "Measurements_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "Sensor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
