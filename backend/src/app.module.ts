import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './database/database.module'
import { IllnessModule } from './illness/illness.module'
import { PatientIllnessModule } from './patient-illness/patient-illness.module'
import { PatientModule } from './patient/patient.module'

@Module({
  imports: [DatabaseModule, PatientModule, IllnessModule, PatientIllnessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
