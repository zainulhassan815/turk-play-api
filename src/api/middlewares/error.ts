import { ErrorRequestHandler } from 'express';
import httpStatus from 'http-status';
import { ConnectionError, DatabaseError, QueryError, ValidationError } from 'sequelize';
import { ErrorResponse } from '../utils/ApiResponse';

// Disable eslint for 'next' function as it is required for proper working of middleware.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handler: ErrorRequestHandler = (err, _req, res, next) => {
  let response: ErrorResponse;

  if (err instanceof ConnectionError) {
    response = {
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Failed to connect to database.',
    };
  } else if (err instanceof DatabaseError) {
    response = {
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Failed to get data from database due to timeout or some constraint error.',
    };
  } else if (err instanceof ValidationError) {
    response = {
      status: httpStatus.BAD_REQUEST,
      message: 'Validation error.',
    };
  } else if (err instanceof QueryError) {
    response = {
      status: httpStatus.BAD_REQUEST,
      message: 'Query error.',
    };
  } else {
    response = {
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Unknown error.',
    };
  }
  res.status(response.status).json(response);
};

export { handler };
