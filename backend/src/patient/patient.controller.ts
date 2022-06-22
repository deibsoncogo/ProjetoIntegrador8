import { Response } from 'express'
import { Body, Controller, Get, Post, Res } from '@nestjs/common'
import { UpSertPatientDto } from './dto/upSertPatient.dto'
import { PatientService } from './patient.service'

@Controller('patient')
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Post()
  async upSertPatient(@Body() data: UpSertPatientDto, @Res() response: Response): Promise<Response> {
    return response.status(201).json(await this.patientService.upSertPatient(data))
  }

  @Get()
  async findPatients(@Res() response: Response): Promise<Response> {
    return response.status(200).json(await this.patientService.findPatients())
  }
}
