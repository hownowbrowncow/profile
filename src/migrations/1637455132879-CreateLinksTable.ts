import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLinksTable1637455132879 implements MigrationInterface {
    name = 'CreateLinksTable1637455132879'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "links" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "href" character varying NOT NULL, "icon" character varying NOT NULL, CONSTRAINT "PK_ecf17f4a741d3c5ba0b4c5ab4b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "links"`);
    }

}
