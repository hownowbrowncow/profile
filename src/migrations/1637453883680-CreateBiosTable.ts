import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateBiosTable1637453883680 implements MigrationInterface {
    name = 'CreateBiosTable1637453883680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "bios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "phone" character varying NOT NULL, "displayName" character varying NOT NULL, CONSTRAINT "PK_dcfe932559c62d58a2da74da200" PRIMARY KEY ("id"))');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "bios"');
    }

}
