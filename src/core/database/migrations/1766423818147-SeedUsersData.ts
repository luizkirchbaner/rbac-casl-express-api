import { MigrationInterface, QueryRunner } from "typeorm";
import { randomUUID } from 'crypto';
import bcrypt from 'bcryptjs';

export class SeedUsersData1766423818147 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		const [rule] = await queryRunner.query(
			`SELECT id FROM casl_rules ORDER BY created_at ASC LIMIT 1`
		);

		if (!rule?.id) {
			throw new Error('No CASL rule found')
		}

		const hashedPassword = await bcrypt.hash('admin123', 10);

		await queryRunner.query(
			`
      INSERT INTO users (
        id,
        name,
        email,
        password,
        casl_rule_id,
        created_at,
        updated_at
      ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
      )
      `,
			[
				randomUUID(),
				'Admin User',
				'admin@mail.com',
				hashedPassword,
				rule.id
			]
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return;
	}
}
