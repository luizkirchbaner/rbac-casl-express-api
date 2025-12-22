import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCaslRulesTable1766421542333 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'casl_rules',
        columns: [
          {
            name: 'id',
            type: 'char',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'role',
            type: 'varchar',
            length: '100',
            isNullable: false
          },
          {
            name: 'action',
            type: 'json',
            isNullable: false
          },
          {
            name: 'subject',
            type: 'json',
            isNullable: true
          },
          {
            name: 'fields',
            type: 'json',
            isNullable: true
          },
          {
            name: 'conditions',
            type: 'json',
            isNullable: true
          },
          {
            name: 'inverted',
            type: 'boolean',
            default: false
          },
          {
            name: 'reason',
            type: 'varchar',
            length: '255',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('casl_rules');
  }
}
