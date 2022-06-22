import { Response } from 'express'
import { Body, Controller, Get, Post, Res } from '@nestjs/common'
import { UpSertIllnessDto } from './dto/upSertIllness.dto'
import { IllnessService } from './illness.service'

@Controller('illness')
export class IllnessController {
  constructor(private illnessService: IllnessService) {}

  @Post()
  async upSertIllness(@Body() body: UpSertIllnessDto, @Res() response: Response): Promise<Response> {
    return response.status(201).json(await this.illnessService.upSertIllness(body))
  }

  @Get()
  async findIllnesses(@Res() response: Response): Promise<Response> {
    return response.status(200).json(await this.illnessService.findIllnesses())
  }
}
