import {Seeder} from 'typeorm-seeding';
import * as bcrypt from 'bcrypt';

import {getOrCreateConnection} from 'utils/database';
import {UserEntity} from 'entities';

export default class CreateAdmin implements Seeder {
  public async run(): Promise<any> {
    const conn = await getOrCreateConnection();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash('password', salt);

    await conn.createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values([
        {
          name: 'admin',
          email: 'admin@localhost.io',
          emailVerified: '1636514322',
          password: hash,
          role: 'admin',
          salt,
        }
      ])
      .execute();
  }
}
