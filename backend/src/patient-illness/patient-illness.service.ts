import { Injectable } from '@nestjs/common'
import { DatabaseService } from '../database/database.service'
import { CreatePatientIllnessDto } from './dto/createPatientIllness.dto'
import { PatientIllnessEntity } from './patient-illness.entity'

@Injectable()
export class PatientIllnessService {
  constructor(private databaseService: DatabaseService) {}

  async createPatientIllness(data: CreatePatientIllnessDto): Promise<PatientIllnessEntity> {
    const patientIllness = await this.databaseService.patientsIllnesses.create({ data })

    return patientIllness
  }
}
