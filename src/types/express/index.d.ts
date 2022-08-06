import ApiParams from '../../api/utils/QueryParams';

declare global {
  namespace Express {
    interface Request {
      apiParams: ApiParams;
    }
  }
}
