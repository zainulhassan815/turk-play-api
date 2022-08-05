interface SortingParams {
	sortBy: 'ASC' | 'DESC';
	sortField: 'id' | 'title' | 'createdAt';
}

interface PaginationQueryParams {
	page: number;
	perPage: number;
}

interface SearchParams {
	query?: string | undefined;
}

interface ApiParams extends SortingParams, PaginationQueryParams, SearchParams {}

const DefaultApiParams: ApiParams = {
	sortBy: 'ASC',
	sortField: 'createdAt',
	page: 1,
	perPage: 20,
};

const parseQueryParams = (params: { [key: string]: string | undefined }): ApiParams => {
	const sortBy: 'ASC' | 'DESC' =
		params.sortBy && (params.sortBy === 'ASC' || params.sortBy === 'DESC')
			? params.sortBy
			: DefaultApiParams.sortBy;

	const sortField: 'id' | 'title' | 'createdAt' =
		params.sortField &&
		(params.sortField === 'id' || params.sortField === 'title' || params.sortField === 'createdAt')
			? params.sortField
			: DefaultApiParams.sortField;

	const page: number = params.page ? Number.parseInt(params.page) : DefaultApiParams.page;
	const perPage: number = params.perPage ? Number.parseInt(params.perPage) : DefaultApiParams.perPage;

	return {
		sortBy: sortBy,
		sortField: sortField,
		page: page,
		perPage: perPage,
		query: params.query,
	};
};

export default ApiParams;

export { DefaultApiParams, SortingParams, PaginationQueryParams, parseQueryParams };
