import { Injectable } from '@nestjs/common'
import { DatabaseService } from 'src/database/database.service'
import { UpSertIllnessDto } from './dto/upSertIllness.dto'
import { IllnessEntity } from './illness.entity'

@Injectable()
export class IllnessService {
  constructor(private databaseService: DatabaseService) {}

  async upSertIllness(data: UpSertIllnessDto): Promise<IllnessEntity> {
    const illness = await this.databaseService.illnesses.upsert({
      where: { name: data.name },
      update: data,
      create: data,
    })

    return illness
  }

  async findIllnesses(): Promise<IllnessEntity[]> {
    const illnesses = await this.databaseService.illnesses.findMany()

    return illnesses
  }
}
