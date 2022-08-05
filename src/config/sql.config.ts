import * as dotenv from 'dotenv';

interface SqlConfig {
	user: string;
	password: string;
	host: string;
	port: number;
	database: string;
}

const production = process.env.NODE_ENV === 'production' ?? false;
if (!production) {
	// load environment variables from .env file at startup.
	dotenv.config();
}

const DefaultDbConfig: SqlConfig = {
	user: process.env.USER,
	password: process.env.PASSWORD,
	host: process.env.DB_HOST,
	port: Number.parseInt(process.env.DB_PORT),
	database: process.env.DATABASE,
};

if (!production) {
	console.log('Running in development mode.');
	console.log('Default SQL configuration:', DefaultDbConfig);
}

export default DefaultDbConfig;
