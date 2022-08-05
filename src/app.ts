import * as dotenv from 'dotenv';
import app from './config/express.config';

const production = process.env.NODE_ENV === 'production' ?? false;
if (!production) {
	// load environment variables from .env file at startup.
	dotenv.config();

	const port = Number.parseInt(process.env.PORT);
	app.listen(port, () => {
		console.log(`Server is running on ${port}.`);
	});
} else {
	app.listen();
}
