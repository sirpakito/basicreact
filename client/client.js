import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from "./App/AppContainer";

import { store, history } from './../redux/store';

render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
  document.getElementById("App")
);
