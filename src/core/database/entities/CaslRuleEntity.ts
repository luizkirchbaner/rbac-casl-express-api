import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Relation,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './UserEntity';
import { MongoQuery } from '@casl/ability';

@Entity('casl_rules')
export class CaslRuleEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 100, nullable: false })
  role!: string;

  @Column('json', { nullable: false })
  action!: string | string[];

  @Column('json', { nullable: true })
  subject!: string | string[];

  @Column('json', { nullable: true })
  fields!: string[] | null;

  @Column('json', { nullable: true })
  conditions!: MongoQuery<Record<string, unknown>> | null;

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
