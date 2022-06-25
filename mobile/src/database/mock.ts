export const mockPatients = [
  {
    name: 'Marcos Antonio da Silva',
    birthDate: '14/02/1978',
    cpf: '887.730.068-07',
    rg: '32.459.162-7',
    telephone: '(16) 99745-1269',
    district: 'Centro',
    city: 'Itápolis',
  },
  {
    name: 'Silvana Augusta Henrique Costa',
    birthDate: '25/08/1995',
    cpf: '650.774.322-44',
    rg: '15.189.013-4',
    telephone: '(16) 98564-1258',
    district: 'Boa Vista',
    city: 'Itápolis',
  },
  {
    name: 'Ana Maria Aparecida',
    birthDate: '05/04/2005',
    cpf: '301.665.594-23',
    rg: '31.285.376-2',
    telephone: '(16) 99412-7485',
    district: 'Centro',
    city: 'Itápolis',
  },
  {
    name: 'Miguel Leonardo Rodrigues Junior',
    birthDate: '25/10/1989',
    cpf: '681.747.217-20',
    rg: '30.264.076-9',
    telephone: '(16) 99612-3366',
    district: 'Centro',
    city: 'Itápolis',
  }
]

export const mockIllnessesCases = [
  {
    id: 1,
    name: 'Zika',
    prevention: 'Para se prevenir, é importante evitar água parada, as precauções são as mesmas da dengue, já que o vírus é transmitido pelo mesmo mosquito.',
    casesTotal: 27,
    casesMap: ` Centro: 5            Boa Vista: 1\nSão Benedito: 8   Portal: 3             Redenção: 2           São Lucas: 2        Vila Oeste: 6`
  },
  {
    id: 2,
    name: 'Chikungunya',
    prevention: 'A prevenção é feita por meio do combate a qualquer foco de mosquitos, como água parada, é evitando a reprodução desses insetos que previne-se a transmissão do chikungunya.',
    casesTotal: 8,
    casesMap: ` Centro: 1            Redenção: 2\nSão Lucas: 2         Santos: 3`
  },
  {
    id: 3,
    name: 'Dengue',
    prevention: 'Entre as doenças tropicais, a dengue é uma das mais simples de se combater, pois sua prevenção consiste em apenas não deixar recipientes com água parada, já que a criação do mosquito transmissor da doença bem como sua prolifera, tem como principal fonte a água parada.',
    casesTotal: 49,
    casesMap: ` Centro: 5           Boa Vista: 1\nSão Benedito: 8   Portal: 3            Redenção: 2\nSão Lucas: 2        Vila Oeste: 6    Colorado: 4\nNovo Centro: 6    Alturas: 5          Andorinhas: 7`
  }
]
