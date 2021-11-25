import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEmailToBio1637799988737 implements MigrationInterface {
    name = 'AddEmailToBio1637799988737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."bios" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."bios" DROP COLUMN "email"`);
    }

}
