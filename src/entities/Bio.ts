import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity({name: 'bios'})
export class BioEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({type: 'varchar'})
  title!: string

  @Column({type: 'varchar'})
  phone!: string

  @Column({type: 'varchar'})
  displayName!: string
}
