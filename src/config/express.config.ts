import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { handleApiParams } from '../api/middlewares/apiparams';
import { handler } from '../api/middlewares/error';
import v1Router from '../api/routes/v1';

const app = express();

const production = process.env.NODE_ENV === 'production';
const format = production ? 'combined' : 'dev';
app.use(morgan(format));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// secure api by adding extra headers
app.use(helmet());

// parse query params and set apiParams on request object
app.use(handleApiParams);

app.use('/api/v1/', v1Router);

app.use(handler);

export default app;
