import React from "react";
import ReactDOM from "react-dom";

/*
 ****** HW 1-2 *********
import MessageField from "./HW2/components/MessageField";

ReactDOM.render(
	<MessageField />,
	document.getElementById("messenger")
);
*/

/* ++++ HW3 ++++ */
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './HW3/components/Layout';

const theme = createMuiTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout />
  </ThemeProvider>,
  document.getElementById('messenger'),
);