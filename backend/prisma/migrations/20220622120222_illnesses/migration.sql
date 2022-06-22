-- CreateTable
CREATE TABLE "Illnesses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quarantine" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Illnesses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Illnesses_name_key" ON "Illnesses"("name");
