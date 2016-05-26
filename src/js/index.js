import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import routes from './routes';

const ROOT = (
	<Provider store={store}>
		{routes}
	</Provider>
);

render (
	ROOT,
	document.getElementById('app')
);