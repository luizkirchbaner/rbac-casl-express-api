import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('users')
export class UserEntity {
  @PrimaryColumn({ type: 'char', length: 36 })
  id!: string

  @Column({ type: 'varchar', nullable: false })
  name!: string

  @Column({ type: 'varchar', unique: true, nullable: false })
  email!: string

  @Column({ type: 'varchar', nullable: false })
  password!: string

  // @Column({ name: 'casl_rule_id', type: 'char', length: 36 })
  // caslRuleId!: string

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: Date
}
