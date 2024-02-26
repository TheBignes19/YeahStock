import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnDeletedAtAtUser1708611743445 implements MigrationInterface {
    name = 'AddColumnDeletedAtAtUser1708611743445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedat" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedat"`);
    }

}
