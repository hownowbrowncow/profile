import {getConnection, createConnection, ConnectionOptions, ValueTransformer} from "typeorm";
import {
  UserEntity,
  AccountEntity,
  SessionEntity,
  VerificationTokenEntity,
} from "entity"

export const transformer: Record<"date" | "bigint", ValueTransformer> = {
  date: {
    from: (date: string | null) => date && new Date(parseInt(date, 10)),
    to: (date?: Date) => date?.valueOf().toString(),
  },
  bigint: {
    from: (bigInt: string | null) => bigInt && parseInt(bigInt, 10),
    to: (bigInt?: number) => bigInt?.toString(),
  },
}

export const connectionOptions: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [UserEntity, AccountEntity, SessionEntity, VerificationTokenEntity],
  synchronize: false,
  logging: true,
};

export async function getOrCreateConnection() {
  try {
    const conn = getConnection();
    return conn;
  } catch (e) {
    return createConnection(connectionOptions);
  }
}

