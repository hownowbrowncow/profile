import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

import {dateTransformer} from 'utils/transformers';
import {SessionEntity, AccountEntity} from 'entities';

@Entity({name: 'users'})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({type: 'varchar', nullable: true})
  name!: string | null

  @Column({type: 'varchar', nullable: true, unique: true})
  email!: string | null

  @Column({type: 'varchar', nullable: true})
  password!: string | null

  @Column({type: 'varchar', nullable: true})
  salt!: string | null

  @Column({type: 'varchar', nullable: true, transformer: dateTransformer})
  emailVerified!: string | null

  @Column({type: 'varchar', nullable: true})
  role!: string | null

  @OneToMany(() => SessionEntity, (session) => session.userId)
  sessions!: SessionEntity[]

  @OneToMany(() => AccountEntity, (account) => account.userId)
  accounts!: AccountEntity[]
}
