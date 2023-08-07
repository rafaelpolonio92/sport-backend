import 'dotenv/config'
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT!),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  logging: false,
  entities: [
    'dist/entities/**/*.js'
  ],
  migrations: [
    'dist/migrations/**/*.js',
  ],
  ssl: false
})
