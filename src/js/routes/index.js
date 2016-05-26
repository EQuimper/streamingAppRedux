import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import { history } from '../store/configureStore';

import App from '../containers/App';
import Home from '../components/Home';

export default (
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
		</Route>
	</Router>
);