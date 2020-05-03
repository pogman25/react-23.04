import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import HelloMessage from './components/HelloMessage';
import './index.css';

const theme = createMuiTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HelloMessage name="Саша!!!" />
  </ThemeProvider>,
  document.getElementById('hello-example'),
);
