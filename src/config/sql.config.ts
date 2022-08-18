import * as dotenv from 'dotenv';

interface SqlConfig {
  user: string;
  password: string;
  host: string;
  port: number;
  database: string;
}

// load environment variables from .env file at startup.
dotenv.config();

const DefaultDbConfig: SqlConfig = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT),
  database: process.env.DATABASE,
};

console.log('Default SQL configuration:', DefaultDbConfig);

export default DefaultDbConfig;
