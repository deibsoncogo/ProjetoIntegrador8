import { PatientsIllnesses } from '@prisma/client'

export class PatientIllnessEntity implements PatientsIllnesses {
  id: string

  patient_id: string

  illness_id: string

  created_at: Date
}
