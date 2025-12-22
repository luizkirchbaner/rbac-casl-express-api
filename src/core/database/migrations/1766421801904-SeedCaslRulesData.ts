import { MigrationInterface, QueryRunner } from "typeorm";
import { randomUUID } from 'crypto'

export class SeedCaslRulesData1766421801904 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		const id = randomUUID();
		await queryRunner.query(
			`
      INSERT INTO casl_rules (
        id,
        role,
        action,
        subject,
        fields,
        conditions,
        inverted,
        reason,
        created_at,
        updated_at
      ) VALUES (
        ?,
        'admin',
        '["manage"]',
        '["all"]',
        NULL,
        NULL,
        false,
        NULL,
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
      )
      `,
			[id]
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return;
	}
}
