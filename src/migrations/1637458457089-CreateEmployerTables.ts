import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateEmployerTables1637458457089 implements MigrationInterface {
    name = 'CreateEmployerTables1637458457089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "positions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "link" character varying, "startDate" TIMESTAMP WITH TIME ZONE, "endDate" TIMESTAMP WITH TIME ZONE, "description" character varying, "highlights" jsonb, "keywords" jsonb, "employerId" uuid, CONSTRAINT "PK_17e4e62ccd5749b289ae3fae6f3" PRIMARY KEY ("id"))');
        await queryRunner.query('CREATE TABLE "employers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "link" character varying, "startDate" TIMESTAMP WITH TIME ZONE NOT NULL, "endDate" TIMESTAMP WITH TIME ZONE, "description" character varying, "highlights" jsonb, "keywords" jsonb, CONSTRAINT "PK_f2c1aea3e8d7aa3c5fba949c97d" PRIMARY KEY ("id"))');
        await queryRunner.query('ALTER TABLE "positions" ADD CONSTRAINT "FK_55297fa52a581f16f5133aee65d" FOREIGN KEY ("employerId") REFERENCES "employers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "positions" DROP CONSTRAINT "FK_55297fa52a581f16f5133aee65d"');
        await queryRunner.query('DROP TABLE "employers"');
        await queryRunner.query('DROP TABLE "positions"');
    }

}
