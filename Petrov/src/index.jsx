import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import RootRouter from './pages/RootRouter';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <RootRouter />
  </BrowserRouter>
  </Provider>,
  document.getElementById("hello-example")
);
