import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Relation,
} from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('casl_rules')
export class CaslRuleEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column('varchar', { length: 100, nullable: false })
  role!: string;

  @Column('json', { nullable: false })
  action: any;

  @Column('json', { nullable: true })
  subject: any;

  @Column('json', { nullable: true })
  fields: any;

  @Column('json', { nullable: true })
  conditions: any;

  @Column('boolean', { default: false })
  inverted!: boolean;

  @Column('varchar', { length: 255, nullable: true })
  reason!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToMany(() => UserEntity, (user) => user.caslRule, { lazy: true })
  users!: Relation<Promise<UserEntity[]>>;
}
