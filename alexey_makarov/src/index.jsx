import React from "react";
import ReactDOM from "react-dom";
import FirstMessage from "./components/FirstMessage/FirstMessage";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Note: Обязательно необходимо задать темы в рамках которой будет работать Материал
const theme = createMuiTheme({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <FirstMessage name="Ready"/>
    </ThemeProvider>,
    document.getElementById("msg")
);