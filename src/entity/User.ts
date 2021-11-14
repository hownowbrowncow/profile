import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ValueTransformer,
} from "typeorm"

import {SessionEntity, AccountEntity} from "entity"

export const transformer: Record<"date", ValueTransformer> = {
  date: {
    from: (date: string | null) => date && new Date(parseInt(date, 10)),
    to: (date?: Date) => date?.valueOf().toString(),
  },
}

@Entity({name: "users"})
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({type: "varchar", nullable: true})
  name!: string | null

  @Column({type: "varchar", nullable: true, unique: true})
  email!: string | null

  @Column({type: "varchar", nullable: true})
  password!: string | null

  @Column({type: "varchar", nullable: true})
  salt!: string | null

  @Column({type: "varchar", nullable: true, transformer: transformer.date})
  emailVerified!: string | null

  @Column({type: "varchar", nullable: true})
  role!: string | null

  @OneToMany(() => SessionEntity, (session) => session.userId)
  sessions!: SessionEntity[]

  @OneToMany(() => AccountEntity, (account) => account.userId)
  accounts!: AccountEntity[]
}
