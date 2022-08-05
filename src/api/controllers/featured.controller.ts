import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import Episode from '../models/Episode';
import Featured from '../models/Featured';
import { PaginatedReponse } from '../utils/ApiResponse';
import { calculateNextPage, calculateOffset, calculatePages, calculatePreviousPage } from '../utils/PaginationUtils';
import ApiParams from '../utils/QueryParams';

const getFeatured: RequestHandler = async (req, res, next) => {
	try {
		const apiParams: ApiParams = req.apiParams;
		const offset = calculateOffset(apiParams.page, apiParams.perPage);
		const result = await Featured.findAndCountAll({
			offset: offset,
			limit: apiParams.perPage,
			order: [[apiParams.sortField, apiParams.sortBy]],
			include: {
				model: Episode,
				foreignKey: 'episodeId',
			},
		});
		const episodes = result.rows.map((row) => row['Episode']) as Episode[];
		const totalPages = calculatePages(result.count, apiParams.perPage);
		const response: PaginatedReponse<Episode[]> = {
			status: httpStatus.OK,
			totlePages: totalPages,
			totalRows: result.count,
			perPage: apiParams.perPage,
			currentPage: apiParams.page,
			previousPage: calculatePreviousPage(apiParams.page),
			nextPage: calculateNextPage(apiParams.page, totalPages),
			data: episodes,
		};
		res.status(response.status).json(response);
	} catch (e) {
		next(e);
	}
};

export { getFeatured };
