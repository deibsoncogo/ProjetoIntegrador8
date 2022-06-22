import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './database/database.module'
import { PatientModule } from './patient/patient.module'

@Module({
  imports: [DatabaseModule, PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
