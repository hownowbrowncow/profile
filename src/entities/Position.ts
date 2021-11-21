import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import {EmployerEntity} from 'entities/Employer';

@Entity({name: 'positions'})
export class PositionEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({type: 'varchar'})
  title!: string

  @Column({type: 'varchar', nullable: true})
  link!: string | null

  @Column({type: 'timestamp with time zone', nullable: true})
  startDate!: string | null

  @Column({type: 'timestamp with time zone', nullable: true})
  endDate!: string | null

  @Column({type: 'varchar', nullable: true})
  description!: string | null

  @Column({type: 'jsonb', nullable: true})
  highlights!: object[] | null

  @Column({type: 'jsonb', nullable: true})
  keywords!: object[] | null

  @ManyToOne(() => EmployerEntity, (employer) => employer.positions)
  employer!: EmployerEntity
}
