import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm"

import { bigIntTransformer } from "utils/transformers"
import {UserEntity} from "entity"

@Entity({name: "accounts"})
export class AccountEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({type: "uuid"})
  userId!: string

  @Column()
  type!: string

  @Column()
  provider!: string

  @Column()
  providerAccountId!: string

  @Column({type: "varchar", nullable: true})
  refresh_token!: string

  @Column({type: "varchar", nullable: true})
  access_token!: string | null

  @Column({
    nullable: true,
    type: "bigint",
    transformer: bigIntTransformer,
  })
  expires_at!: number | null

  @Column({type: "varchar", nullable: true})
  token_type!: string | null

  @Column({type: "varchar", nullable: true})
  scope!: string | null

  @Column({type: "varchar", nullable: true})
  id_token!: string | null

  @Column({type: "varchar", nullable: true})
  session_state!: string | null

  @Column({type: "varchar", nullable: true})
  oauth_token_secret!: string | null

  @Column({type: "varchar", nullable: true})
  oauth_token!: string | null

  @ManyToOne(() => UserEntity, (user) => user.accounts, {
    createForeignKeyConstraints: true,
  })
  user!: UserEntity
}
