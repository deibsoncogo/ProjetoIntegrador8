import { Illnesses } from '@prisma/client'

export class IllnessEntity implements Illnesses {
  id: string

  name: string

  quarantine: number

  created_at: Date

  updated_at: Date
}
