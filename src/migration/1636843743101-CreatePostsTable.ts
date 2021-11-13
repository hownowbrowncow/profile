import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePostsTable1636843743101 implements MigrationInterface {
    name = 'CreatePostsTable1636843743101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "post" ("id" integer NOT NULL, "title" character varying(256) NOT NULL, "body" text NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "post"`);
    }

}
