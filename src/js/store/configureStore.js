import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'; // https://github.com/pburtchaell/redux-promise-middleware
import createLogger from 'redux-logger'; // https://github.com/theaqua/redux-logger
/*>>>>>>=============================================<<<<<<*/
import rootReducer from '../reducers';
import { reqStreams } from '../actions/streamActions';
/*>>>>>>=============================================<<<<<<*/
const middleware = applyMiddleware(
	promiseMiddleware(),
	createLogger()
);
// Set var for all the middleware + redux chrome extension
const enhancers = compose(
	middleware,
	window.devToolsExtension ? window.devToolsExtension() : f => f
);
// Initial State
const initialState = {};
// Create the store with the (reducer, initialState, compose)
const store = createStore(
	rootReducer,
	initialState,
	enhancers
);

store.dispatch(reqStreams());

// Make the history work with browserHistory
export const history = syncHistoryWithStore(browserHistory, store);
// Make the hot reload work with Redux
if (module.hot) {
	module.hot.accept('../reducers', () => {
		const nextRootReducer = require('../reducers/').default;
		store.replaceReducer(nextRootReducer);
	});
}
/*>>>>>>=============================================<<<<<<*/
export default store;
