import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import store from "./store/configureStore";
import routes from "./routes";

const Root = () => (

  <Provider store={store}>
    <div>
      {routes}
      <ReduxToastr timeOut={4000}
                   newestOnTop={false}
                   position="top-right" />
    </div>
  </Provider>

);

// Render the APP
render(
  <Root />,
  document.getElementById('app')
);
