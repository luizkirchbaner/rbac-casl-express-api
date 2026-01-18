import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Relation,
  PrimaryGeneratedColumn
} from 'typeorm';
import { CaslRuleEntity } from './CaslRuleEntity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: false })
  name!: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email!: string;

  @Column({ type: 'varchar', nullable: false })
  password!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => CaslRuleEntity, (caslRule) => caslRule.users, { lazy: true })
  @JoinColumn({ name: 'casl_rule_id' })
  caslRule!: Relation<Promise<CaslRuleEntity>>;
}
