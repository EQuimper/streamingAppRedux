import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import routes from "./routes";
import ReduxToastr from "react-redux-toastr";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      {routes}
      <ReduxToastr timeOut={4000} newestOnTop={false} position="top-right" />
    </div>
  </Provider>,
  document.getElementById('root')
);
