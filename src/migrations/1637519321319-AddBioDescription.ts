import {MigrationInterface, QueryRunner} from "typeorm";

export class AddBioDescription1637519321319 implements MigrationInterface {
    name = 'AddBioDescription1637519321319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."bios" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."bios" DROP COLUMN "description"`);
    }

}
