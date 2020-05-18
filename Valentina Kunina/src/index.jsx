import React from "react";
import ReactDOM from "react-dom";
// import HelloMessage from "./components/HelloMessage/HelloMessageFunctional";
// import HelloMessage from "./components/Archive/HelloMessage/HelloMessage";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./index.css";
import Menu from './components/Menu';
// import Layout from './components/Layout'

const theme = createMuiTheme({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
});

ReactDOM.render(
    <BrowserRouter>
        <Menu open={true}/>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <Layout /> */}
            {/* <HelloMessage name="Taylor" /> */}
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("hello-example")
);
