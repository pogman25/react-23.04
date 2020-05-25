import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import RootRouter from "./pages/RootRouter";

const theme = createMuiTheme({
   background: "black",
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <CssBaseline />
            <RootRouter />
        </BrowserRouter>
    </ThemeProvider>,
  document.getElementById("app")
);