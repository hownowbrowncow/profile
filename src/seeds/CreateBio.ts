import {Seeder} from 'typeorm-seeding';
import faker from 'faker';

import {getOrCreateConnection} from 'utils/database';
import {BioEntity} from 'entities';

export default class CreateBio implements Seeder {
  public async run(): Promise<any> {
    const conn = await getOrCreateConnection();

    await conn.createQueryBuilder()
      .insert()
      .into(BioEntity)
      .values([
        {
          title: 'Sr. Software Engineer',
          phone: '555-555-5555',
          displayName: 'Nick Coffey',
          description: `${faker.lorem.paragraph()}`,
          email: 'admin@ocalhost',
        },
      ])
      .execute();
  }
}
