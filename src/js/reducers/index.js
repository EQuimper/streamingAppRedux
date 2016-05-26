import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { streamReducer } from './streamReducer';

export default combineReducers({
	stream: streamReducer,
	routing: routerReducer
});