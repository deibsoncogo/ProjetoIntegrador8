import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module'
import { IllnessController } from './illness.controller'
import { IllnessService } from './illness.service'

@Module({
  imports: [DatabaseModule],
  providers: [IllnessService],
  controllers: [IllnessController],
})
export class IllnessModule {}
