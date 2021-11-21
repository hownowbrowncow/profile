import {Seeder} from 'typeorm-seeding';
import {getRepository} from 'typeorm';
import faker from 'faker';

import {getOrCreateConnection} from 'utils/database';
import {EmployerEntity, PositionEntity} from 'entities';

export default class CreateEmploymentHistory implements Seeder {
  public async run(): Promise<any> {
    const conn = await getOrCreateConnection();

    await conn.createQueryBuilder()
      .insert()
      .into(EmployerEntity)
      .values([
        {
          title: 'Sr. Software Engineer',
          startDate: new Date(Date.now()).toISOString(),
          endDate: new Date(Date.now()).toISOString(),
          description: faker.lorem.paragraph(1),
          highlights: [`${faker.lorem.sentence()}`, `${faker.lorem.sentence()}`],
          keywords: [`${faker.lorem.word()}`],
        },
        {
          title: 'Sr. Software Engineer',
          startDate: new Date(Date.now()).toISOString(),
          endDate: new Date(Date.now()).toISOString(),
          description: faker.lorem.paragraph(1),
          highlights: [`${faker.lorem.sentence()}`, `${faker.lorem.sentence()}`],
          keywords: [`${faker.lorem.word()}`],
        },
        {
          title: 'Sr. Software Engineer',
          startDate: new Date(Date.now()).toISOString(),
          endDate: new Date(Date.now()).toISOString(),
          description: faker.lorem.paragraph(1),
          highlights: [`${faker.lorem.sentence()}`, `${faker.lorem.sentence()}`],
          keywords: [`${faker.lorem.word()}`],
        },
        {
          title: 'Sr. Software Engineer',
          startDate: new Date(Date.now()).toISOString(),
          endDate: new Date(Date.now()).toISOString(),
          description: faker.lorem.paragraph(1),
          highlights: [`${faker.lorem.sentence()}`, `${faker.lorem.sentence()}`],
          keywords: [`${faker.lorem.word()}`],
        },
      ])
      .execute();

    const employerRepo = getRepository(EmployerEntity);
    const employer = await employerRepo.findOneOrFail({title: 'Sr. Software Engineer'}, {relations: ['positions']});
    const positionRepo = getRepository(PositionEntity);
    const position = positionRepo.create({
      title: 'Sr. Software Engineer',
      startDate: new Date(Date.now()).toISOString(),
      endDate: new Date(Date.now()).toISOString(),
      description: faker.lorem.paragraph(1),
      highlights: [`${faker.lorem.sentence()}`, `${faker.lorem.sentence()}`],
      keywords: [`${faker.lorem.word()}`],
    });

    employer.positions.push(position);

    await positionRepo.save(position);
    await employerRepo.save(employer);
  }
}
