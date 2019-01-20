import * as types from '../constants/PaginationTypes';

export function changePage(page) {
	const newPage = page > 0 ? page : 1;
	return {
		type: types.CHANGE_PAGE,
		page: newPage
	};
}

export function changePageSize(pageSize) {
	return {
		type: types.CHANGE_PAGE_SIZE,
		pageSize
	};
}
