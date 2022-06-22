import { Patients } from '@prisma/client'

export class PatientEntity implements Patients {
  id: string

  name: string

  birth_date: string

  cpf: string

  rg: string

  telephone: string

  district: string

  city: string

  created_at: Date

  updated_at: Date
}
