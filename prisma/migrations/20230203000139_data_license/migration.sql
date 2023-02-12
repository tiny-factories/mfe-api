-- AlterTable
ALTER TABLE "Data" ADD COLUMN     "licenseId" TEXT;

-- CreateTable
CREATE TABLE "License" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT,
    "description" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "License_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "License_slug_key" ON "License"("slug");

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE SET NULL ON UPDATE CASCADE;
