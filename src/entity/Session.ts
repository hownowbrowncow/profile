import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ValueTransformer,
} from "typeorm"

import {UserEntity} from "entity"

export const transformer: Record<"date", ValueTransformer> = {
  date: {
    from: (date: string | null) => date && new Date(parseInt(date, 10)),
    to: (date?: Date) => date?.valueOf().toString(),
  },
}

@Entity({name: "sessions"})
export class SessionEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({unique: true})
  sessionToken!: string

  @Column({type: "uuid"})
  userId!: string

  @Column({transformer: transformer.date})
  expires!: string

  @ManyToOne(() => UserEntity, (user) => user.sessions)
  user!: UserEntity
}
