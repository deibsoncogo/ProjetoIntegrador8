-- CreateTable
CREATE TABLE "PatientsIllnesses" (
    "id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "illness_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PatientsIllnesses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PatientsIllnesses" ADD CONSTRAINT "PatientsIllnesses_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "PatientsIllnesses" ADD CONSTRAINT "PatientsIllnesses_illness_id_fkey" FOREIGN KEY ("illness_id") REFERENCES "Illnesses"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
