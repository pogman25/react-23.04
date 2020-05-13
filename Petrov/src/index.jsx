import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './pages/RootRouter';


ReactDOM.render(
  <BrowserRouter>
  <RootRouter />
  </BrowserRouter>,
  document.getElementById("hello-example")
);
