import * as types from '../constants/PaginationTypes';

const initialState = {
	pageSize: 2,
	page: 1
};

export default function pagination(state = initialState, action) {
	switch (action.type) {
		case types.CHANGE_PAGE:
			return {
				...state,
				page: action.page
			};
		case types.CHANGE_PAGE_SIZE:
			return {
				...state,
				pageSize: action.pageSize
			};

		default:
			return state;
	}
}
