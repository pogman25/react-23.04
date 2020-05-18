import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from "./components/Layout/Layout";

ReactDOM.render(
    <React.Fragment>
        <CssBaseline />
        <Layout userName="Антон" />
    </React.Fragment>,
  document.getElementById("app")
);