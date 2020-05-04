import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/Layout';

const theme = createMuiTheme({
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout />
  </ThemeProvider>,

  document.getElementById('app'),
);
