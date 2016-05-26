import * as types from '../constants/';

const initialStream = {
	isFetching: false,
	items: []
};

export const streamReducer = (state = [], action) => {
	switch (action.type) {
		case types.RECEIVE_STREAMS:
			return state;
		default:
			return state;
	}
};