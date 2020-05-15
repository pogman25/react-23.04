import React from "react";
import ReactDOM from "react-dom";
import MessageField from "./components/MessageField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <Router name="REACT" />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
