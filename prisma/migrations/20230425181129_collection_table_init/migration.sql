-- AlterTable
ALTER TABLE "CollectionsOfMeasurements" ADD COLUMN     "collectionsId" TEXT;

-- CreateTable
CREATE TABLE "Collections" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "url" TEXT,

    CONSTRAINT "Collections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collections_slug_key" ON "Collections"("slug");

-- AddForeignKey
ALTER TABLE "CollectionsOfMeasurements" ADD CONSTRAINT "CollectionsOfMeasurements_collectionsId_fkey" FOREIGN KEY ("collectionsId") REFERENCES "Collections"("id") ON DELETE SET NULL ON UPDATE CASCADE;
