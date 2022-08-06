import path from 'path';
import { createStream } from 'rotating-file-stream';
import morgan from 'morgan';

const production = process.env.NODE_ENV === 'production';
const format = production ? 'combined' : 'dev';

const accessLogStream = production
  ? createStream('access.log', {
      interval: '1d',
      size: '10M',
      compress: 'gzip',
      path: path.join(__dirname, 'log'),
    })
  : undefined;

const logger = morgan(format, {
  stream: accessLogStream,
});

export default logger;
