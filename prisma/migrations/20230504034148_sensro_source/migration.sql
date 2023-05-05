-- AlterTable
ALTER TABLE "Source" ADD COLUMN     "sensorId" TEXT;

-- AddForeignKey
ALTER TABLE "Source" ADD CONSTRAINT "Source_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "Sensor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
