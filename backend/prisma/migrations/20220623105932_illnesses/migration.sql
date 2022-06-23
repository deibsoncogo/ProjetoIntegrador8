-- CreateTable
CREATE TABLE "Illnesses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "prevention" TEXT NOT NULL,
    "recovery" INTEGER NOT NULL,
    "isQuarantine" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Illnesses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Illnesses_name_key" ON "Illnesses"("name");
