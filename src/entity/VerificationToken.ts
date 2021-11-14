import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

import { dateTransformer } from "utils/transformers"

@Entity({name: "verification_tokens"})
export class VerificationTokenEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column()
  token!: string

  @Column()
  identifier!: string

  @Column({transformer: dateTransformer})
  expires!: string
}
