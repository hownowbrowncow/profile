import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity({name: 'links'})
export class LinkEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({type: 'varchar'})
  name!: string

  @Column({type: 'varchar'})
  href!: string

  @Column({type: 'varchar'})
  icon!: string
}
