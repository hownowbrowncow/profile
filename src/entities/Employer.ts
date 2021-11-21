import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

import {PositionEntity} from 'entities';

@Entity({name: 'employers'})
export class EmployerEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({type: 'varchar'})
  title!: string

  @Column({type: 'varchar', nullable: true})
  link!: string | null

  @Column({type: 'timestamp with time zone'})
  startDate!: string

  @Column({type: 'timestamp with time zone', nullable: true})
  endDate!: string | null

  @Column({type: 'varchar', nullable: true})
  description!: string | null

  @Column({type: 'jsonb', nullable: true})
  highlights!: Array<string> | null

  @Column({type: 'jsonb', nullable: true})
  keywords!: Array<string> | null

  @OneToMany(() => PositionEntity, position => position.employer)
  positions: PositionEntity[]
}
