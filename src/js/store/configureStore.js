import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from '../reducers';

const middleware = applyMiddleware(promiseMiddleware);

const enhancers = compose(
	middleware,
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const initialState = {

};

const store = createStore(
	rootReducer,
	initialState,
	enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
	module.hot.accept('../reducers', () => {
		const nextRootReducer = require('../reducers/').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;