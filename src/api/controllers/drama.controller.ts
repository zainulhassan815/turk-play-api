import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { Op } from 'sequelize';
import Drama from '../models/Drama';
import { PaginatedReponse } from '../utils/ApiResponse';
import { calculateNextPage, calculateOffset, calculatePages, calculatePreviousPage } from '../utils/PaginationUtils';
import ApiParams from '../utils/QueryParams';

const getDramas: RequestHandler = async (req, res, next) => {
  try {
    const apiParams: ApiParams = req.apiParams;
    const offset = calculateOffset(apiParams.page, apiParams.perPage);
    const result = await Drama.findAndCountAll({
      offset: offset,
      limit: apiParams.perPage,
      order: [[apiParams.sortField, apiParams.sortBy]],
      where: apiParams.query && {
        title: {
          [Op.like]: `%${apiParams.query}%`,
        },
      },
    });
    const totalPages = calculatePages(result.count, apiParams.perPage);
    const response: PaginatedReponse<Drama[]> = {
      status: httpStatus.OK,
      totlePages: totalPages,
      totalRows: result.count,
      perPage: apiParams.perPage,
      currentPage: apiParams.page,
      previousPage: calculatePreviousPage(apiParams.page),
      nextPage: calculateNextPage(apiParams.page, totalPages),
      data: result.rows,
    };
    res.status(response.status).json(response);
  } catch (e) {
    next(e);
  }
};

export { getDramas };
