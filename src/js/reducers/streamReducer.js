import * as types from '../constants/';

// const initialStream = {
// 	isFetching: false,
// 	items: []
// };

const streamReducer = (streams = { loaded: false }, action) => {
	switch (action.type) {
		case `${types.RECEIVE_STREAMS}_PENDING`:
			return {};
		case `${types.RECEIVE_STREAMS}_FULFILLED`:
			return {
				streams: action.payload,
				err: null,
				loaded: true
			};
		case `${types.RECEIVE_STREAMS}_REJECTED`:
			return {
				streams: null,
				err: action.payload,
				loaded: true
			};
		default:
			return streams;
	}
};

export default streamReducer;