import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Relation
} from 'typeorm';
import { CaslRuleEntity } from './CaslRuleEntity';

@Entity('users')
export class UserEntity {
  @PrimaryColumn({ type: 'char', length: 36 })
  id!: string;

  @Column({ type: 'varchar', nullable: false })
  name!: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email!: string;

  @Column({ type: 'varchar', nullable: false })
  password!: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: Date;

  @ManyToOne(() => CaslRuleEntity, (caslRule) => caslRule.users, { lazy: true })
  @JoinColumn({ name: 'casl_rule_id' })
  caslRule!: Relation<Promise<CaslRuleEntity>>;
}
