import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module'
import { PatientIllnessController } from './patient-illness.controller'
import { PatientIllnessService } from './patient-illness.service'

@Module({
  imports: [DatabaseModule],
  providers: [PatientIllnessService],
  controllers: [PatientIllnessController],
})
export class PatientIllnessModule {}
