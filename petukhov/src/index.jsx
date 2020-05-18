import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import HelloMessage from "./components/HelloMessage/HelloMessage";

ReactDOM.render(
    <React.Fragment>
        <CssBaseline />
        <HelloMessage userName="Антон" />
    </React.Fragment>,
  document.getElementById("app")
);