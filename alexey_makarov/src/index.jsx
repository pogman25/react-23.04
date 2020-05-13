import React from "react";
import ReactDOM from "react-dom";
import FirstMessage from "./components/Chat/Chat";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ChatList from "./components/ChatList/ChatList";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

//Note: Обязательно необходимо задать темы в рамках которой будет работать Материал
const theme = createMuiTheme({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Layout/>
        <CssBaseline/>
    </ThemeProvider>,
    document.getElementById("msg")
);