import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChatBot from './components/ChatBot';

const theme = createMuiTheme({
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ChatBot />
  </ThemeProvider>,

  document.getElementById('app'),
);
