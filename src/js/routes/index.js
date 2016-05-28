import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
/*>>>>>>=============================================<<<<<<*/
import { history } from '../store/configureStore';
/*>>>>>>=============================================<<<<<<*/
import App from '../containers/App';
import Home from '../components/layout/Home';
import Games from '../components/layout/Games';
import NoMatch from '../components/layout/NoMatch';
/*>>>>>>=============================================<<<<<<*/
export default (
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="games" component={Games}/>
			<Route path="*" component={NoMatch}/>
		</Route>
	</Router>
);
