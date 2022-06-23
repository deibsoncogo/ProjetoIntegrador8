import { Response } from 'express'
import { Body, Controller, Post, Res } from '@nestjs/common'
import { CreatePatientIllnessDto } from './dto/createPatientIllness.dto'
import { PatientIllnessService } from './patient-illness.service'

@Controller('patientIllness')
export class PatientIllnessController {
  constructor(private patientIllnessService: PatientIllnessService) {}

  @Post()
  async createPatientIllness(
    @Body() data: CreatePatientIllnessDto,
    @Res() response: Response,
  ): Promise<Response> {
    return response.status(201).json(await this.patientIllnessService.createPatientIllness(data))
  }
}
