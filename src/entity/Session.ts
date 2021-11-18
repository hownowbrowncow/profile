import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import {UserEntity} from 'entity';
import { dateTransformer } from 'utils/transformers';

@Entity({name: 'sessions'})
export class SessionEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({unique: true})
  sessionToken!: string

  @Column({type: 'uuid'})
  userId!: string

  @Column({transformer: dateTransformer})
  expires!: string

  @ManyToOne(() => UserEntity, (user) => user.sessions)
  user!: UserEntity
}
