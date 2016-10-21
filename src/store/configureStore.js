import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import { applyMiddleware, compose, createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import createLogger from "redux-logger";
import rootReducer from "../reducers";

const middleware = [
  promiseMiddleware(),
  createLogger()
];

// Set var for all the middleware + redux chrome extension
const enhancers = compose(
  applyMiddleware(...middleware),
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

// Make the history work with browserHistory
export const history = syncHistoryWithStore(browserHistory, store);


export default store;
