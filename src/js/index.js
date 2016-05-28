import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
/*>>>>>>=============================================<<<<<<*/
import store from './store/configureStore';
import routes from './routes';
/*>>>>>>=============================================<<<<<<*/
const ROOT = (
	<Provider store={store}>
		{routes}
	</Provider>
);
// Render the APP
render (
	ROOT,
	document.getElementById('app')
);
