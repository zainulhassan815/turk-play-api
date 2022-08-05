const calculateOffset = (page: number, perPage: number): number => {
	const currentPage = page <= 0 ? 0 : --page;
	const offset = currentPage * perPage;
	return offset;
};

const calculatePages = (count: number, perPage: number): number => {
	const pages = count / perPage;
	return Math.ceil(pages);
};

const calculatePreviousPage = (currentPage: number): number => {
	return currentPage <= 1 ? null : --currentPage;
};

const calculateNextPage = (currentPage: number, totalPages: number): number => {
	return currentPage >= totalPages ? null : ++currentPage;
};

export { calculateOffset, calculatePages, calculatePreviousPage, calculateNextPage };
