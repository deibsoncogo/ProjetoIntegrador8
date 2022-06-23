import { Illnesses } from '@prisma/client'

export class IllnessEntity implements Illnesses {
  id: string

  name: string

  prevention: string

  recovery: number

  isQuarantine: boolean

  created_at: Date

  updated_at: Date
}
