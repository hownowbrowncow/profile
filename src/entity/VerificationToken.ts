import {Entity, PrimaryGeneratedColumn, Column, ValueTransformer} from "typeorm"

export const transformer: Record<"date", ValueTransformer> = {
  date: {
    from: (date: string | null) => date && new Date(parseInt(date, 10)),
    to: (date?: Date) => date?.valueOf().toString(),
  },
}

@Entity({name: "verification_tokens"})
export class VerificationTokenEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column()
  token!: string

  @Column()
  identifier!: string

  @Column({transformer: transformer.date})
  expires!: string
}
