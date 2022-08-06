import { RequestHandler } from 'express';
import { parseQueryParams } from '../utils/QueryParams';

const handleApiParams: RequestHandler = (req, _res, next) => {
  req.apiParams = parseQueryParams(req.query as { [key: string]: string | undefined });
  next();
};

export { handleApiParams };
