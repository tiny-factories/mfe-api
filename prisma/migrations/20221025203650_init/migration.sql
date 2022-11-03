-- CreateTable
CREATE TABLE "CO2Yearly" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "measurement" TEXT NOT NULL,
    "unc" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "CO2Yearly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CO2Monthly" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "measurement" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "trend" TEXT NOT NULL,

    CONSTRAINT "CO2Monthly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CO2Weekly" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "measurement" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "CO2Weekly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CH4Yearly" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "measurement" TEXT NOT NULL,
    "unc" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "CH4Yearly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CH4Monthly" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "measurement" TEXT NOT NULL,
    "unc" TEXT NOT NULL,
    "trend" TEXT NOT NULL,
    "trend_unc" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "CH4Monthly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "N2OYearly" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "measurement" TEXT NOT NULL,
    "unc" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "N2OYearly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "N2OMonthly" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "measurement" TEXT NOT NULL,
    "unc" TEXT NOT NULL,
    "trend" TEXT NOT NULL,
    "trend_unc" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "N2OMonthly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SF6Yearly" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "measurement" TEXT NOT NULL,
    "unc" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "SF6Yearly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SF6Monthly" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "measurement" TEXT NOT NULL,
    "unc" TEXT NOT NULL,
    "trend" TEXT NOT NULL,
    "trend_unc" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "SF6Monthly_pkey" PRIMARY KEY ("id")
);
