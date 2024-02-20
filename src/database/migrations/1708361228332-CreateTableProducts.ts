import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableProducts1708361228332 implements MigrationInterface {
    name = 'CreateTableProducts1708361228332'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "quantity" integer NOT NULL, "mesureunity" character varying(2) NOT NULL, "purchaseprice" numeric(5,2) NOT NULL, "salesprice" numeric(5,2) NOT NULL, "currency" character varying(3) NOT NULL, "supplier" character varying NOT NULL, "active" boolean NOT NULL, "description" text NOT NULL, "createdat" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
