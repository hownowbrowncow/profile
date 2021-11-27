import {EntitySchema} from 'typeorm';

import {Position} from 'entities/Position';

export interface Employer {
  id: string
  title: string
  link?: string
  startDate: string
  endDate: string
  description?: string
  highlights?: Array<string>
  keywords?: Array<string>
  positions?: Position[]
}

export const EmployerEntity = new EntitySchema<Employer>({
  name: 'EmployerEntity',
  tableName: 'employers',
  columns: {
    id: {
      type: 'uuid',
      generated: true,
      primary: true,
    },
    title: {
      type: String,
    },
    link: {
      type: String,
      nullable: true,
    },
    startDate: {
      type: 'time with time zone',
    },
    endDate: {
      type: 'time with time zone',
    },
    description: {
      type: String,
      nullable: true,
    },
    highlights: {
      type: 'jsonb',
      nullable: true,
    },
    keywords: {
      type: 'jsonb',
      nullable: true,
    },
  },
  relations: {
    positions: {
      type: 'one-to-many',
      target: 'PositionEntity',
      inverseSide: 'employer',
      nullable: true,
    },
  },
});
