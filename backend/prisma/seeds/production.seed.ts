/* eslint-disable max-len */
import { PrismaClient } from '@prisma/client'
import { UpSertIllnessDto } from 'src/illness/dto/upSertIllness.dto'

type IFactories = {
  illnesses: UpSertIllnessDto[];
};

const Factories: IFactories = {
  illnesses: [
    {
      name: 'Zika',
      prevention: 'Para se prevenir, é importante evitar água parada. As precauções são as mesmas da dengue, já que o vírus é transmitido pelo mesmo mosquito.',
      recovery: 12,
      isQuarantine: false,
    },
    {
      name: 'Chikungunya',
      prevention: 'A prevenção é feita por meio do combate a qualquer foco de mosquitos, como água parada. É evitando a reprodução desses insetos que previne-se a transmissão do chikungunya.',
      recovery: 10,
      isQuarantine: false,
    },
    {
      name: 'Dengue',
      prevention: 'Entre as doenças tropicais, a dengue é uma das mais simples de se combater, pois sua prevenção consiste em apenas não deixar recipientes com água parada, já que a criação do mosquito transmissor da doença bem como sua prolifera, tem como principal fonte a água parada.',
      recovery: 7,
      isQuarantine: false,
    },
  ],
}

const prisma = new PrismaClient()

export async function ProductionSeed() {
  try {
    prisma.$connect()

    for (const illness of Factories.illnesses) {
      await prisma.illnesses.upsert({ where: { name: illness.name }, update: illness, create: illness })
    }
  } catch (error) {
    prisma.$disconnect()
    console.error(error)
  } finally {
    prisma.$disconnect()
    console.info('Seeders the production finished with success')
  }
}

ProductionSeed()
