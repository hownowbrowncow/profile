import {getConnection, createConnection, ConnectionOptions} from 'typeorm';

import {
  BioEntity,
  LinkEntity,
  UserEntity,
  AccountEntity,
  SessionEntity,
  VerificationTokenEntity,
} from 'entities';

let connectionReadyPromise: Promise<void> | null = null;

export const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [
    BioEntity,
    LinkEntity,
    UserEntity,
    AccountEntity,
    SessionEntity,
    VerificationTokenEntity,
  ],
  synchronize: false,
  logging: true,
};

function prepareConnection() {
  if (!connectionReadyPromise) {
    connectionReadyPromise = (async () => {
      try {
        const stateConnection = getConnection();
        await stateConnection.close();
      } catch (error) {
        console.log('no stale connection');
      }

      await createConnection(connectionOptions);
    })();
  }

  return connectionReadyPromise;
}

export async function getOrCreateConnection() {
  try {
    await prepareConnection();

    const conn = getConnection();

    return conn;
  } catch (e) {
    console.log('Failed to initialize connection', e);
  }
}
