import React from 'react'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'

const mui_theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  AppBar: {
    alignItems: 'center'
  },
  icon: {
    verticalAlign: -3
  }
}))

export default function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ThemeProvider theme={mui_theme}>
        <AppBar className={classes.AppBar} position="static">
          <Toolbar variant="dense">
            <Typography variant="h5" color="inherit">
              <ChatIcon className={classes.icon} /> React Educational Messenger
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  )
}