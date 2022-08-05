import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { Op } from 'sequelize';
import Episode from '../models/Episode';
import { PaginatedReponse } from '../utils/ApiResponse';
import { calculateNextPage, calculateOffset, calculatePages, calculatePreviousPage } from '../utils/PaginationUtils';
import ApiParams from '../utils/QueryParams';

const getEpisodes: RequestHandler = async (req, res, next) => {
	try {
		const apiParams: ApiParams = req.apiParams;
		const offset = calculateOffset(apiParams.page, apiParams.perPage);
		const dramaId = req.query['dramaId'];
		const result = await Episode.findAndCountAll({
			offset: offset,
			limit: apiParams.perPage,
			order: [[apiParams.sortField, apiParams.sortBy]],
			where: {
				...(apiParams.query && {
					title: {
						[Op.like]: `%${apiParams.query}%`,
					},
				}),

				...(dramaId && {
					dramaId: {
						[Op.eq]: dramaId.toString(),
					},
				}),
			},
		});
		const totalPages = calculatePages(result.count, apiParams.perPage);
		const response: PaginatedReponse<Episode[]> = {
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

export { getEpisodes };
