import { createLogger } from 'winston';
import { WinstonRotatingFile } from 'winston-rotating-file';

const logger = createLogger({
  transports: [
    new WinstonRotatingFile({
      filename: (time) => `logs/${time}-errors.log`,
      level: 'error',
      rfsOptions: {
        maxSize: '10M',
        interval: '1d',
        compress: 'gzip',
      },
    }),
  ],
});

export default logger;
