import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'rbac_casl.sqlite',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/entities/**/*.{ts,js}'],
  migrations: ['src/core/database/migrations/*.ts']
});
