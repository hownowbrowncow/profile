import {Seeder} from 'typeorm-seeding';

import {getOrCreateConnection} from 'utils/database';
import {LinkEntity} from 'entities';

export default class CreateLink implements Seeder {
  public async run(): Promise<any> {
    const conn = await getOrCreateConnection();

    await conn.createQueryBuilder()
      .insert()
      .into(LinkEntity)
      .values([
        {
          name: 'Link 1',
          href: 'https://github.com',
          icon: 'GitHub',
        },
        {
          name: 'Link 2',
          href: 'https://github.com',
          icon: 'GitHub',
        },
        {
          name: 'Link 1',
          href: 'https://github.com',
          icon: 'GitHub',
        },
      ])
      .execute();
  }
}
