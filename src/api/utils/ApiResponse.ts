interface BaseResponse {
	status: number;
}

interface SuccessResponse<T> extends BaseResponse {
	data: T;
}

interface PaginatedReponse<T> extends SuccessResponse<T> {
	totlePages: number;
	totalRows: number;
	perPage: number;
	previousPage?: number;
	currentPage: number;
	nextPage?: number;
}

interface ErrorResponse extends BaseResponse {
	message: string;
}

export { BaseResponse, SuccessResponse, PaginatedReponse, ErrorResponse };
