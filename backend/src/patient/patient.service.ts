import { Injectable } from '@nestjs/common'
import { DatabaseService } from '../database/database.service'
import { UpSertPatientDto } from './dto/upSertPatient.dto'
import { PatientEntity } from './patient.entity'

@Injectable()
export class PatientService {
  constructor(private databaseService: DatabaseService) {}

  async upSertPatient(data: UpSertPatientDto): Promise<PatientEntity> {
    const patient = await this.databaseService.patients.upsert({
      where: { cpf: data.cpf },
      update: data,
      create: data,
    })

    return patient
  }

  async findPatients(): Promise<PatientEntity[]> {
    const patients = await this.databaseService.patients.findMany({ orderBy: { name: 'asc' } })

    return patients
  }
}
