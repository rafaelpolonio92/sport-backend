const dotenvExpand = require('dotenv-expand');
const envVariables = require('dotenv').config();

dotenvExpand.expand(envVariables);

module.exports = {
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
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
}