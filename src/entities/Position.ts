import {EntitySchema} from 'typeorm';

import {Employer} from 'entities/Employer';

export interface Position {
  id: string
  title: string
  link?: string
  startDate?: string
  endDate?: string
  description?: string
  highlights?: Array<string>
  keywords?: Array<string>
  employer: Employer
}

export const PositionEntity = new EntitySchema<Position>({
  name: 'PositionEntity',
  tableName: 'positions',
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
      type: 'timestamp with time zone',
      nullable: true,
    },
    endDate: {
      type: 'timestamp with time zone',
      nullable: true,
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
    employer: {
      type: 'many-to-one',
      target: 'EmployerEntity',
      joinColumn: true,
    },
  },
});
