import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	stream: require('./streamReducer').default,
	routing: routerReducer
});