import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton as ProfileButton } from '@material-ui/core'
import { Chat as ChatIcon, AccountBox as ProfileIcon } from '@material-ui/icons/'


const mui_theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#fff'
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  AppBar: {
    alignItems: "center"
  },
  icon: {
    verticalAlign: -3
  },
  ProfileBtn: {
    marginRight: 5
  },
  Toolbar: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "center"
  },
  TitleText: {
    flexGrow: 1,
    textAlign: "center"
  },
  Link: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: theme.zIndex.appBar,
    textDecoration: "none",
    color: "white"
  }
}))

export default function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ThemeProvider theme={mui_theme}>
        <AppBar className={classes.AppBar} position="static">
          <Toolbar variant="dense" className={classes.Toolbar}>
            <Typography variant="h5" color="inherit" className={classes.TitleText}>
              <Link to="/" key="home-page" className={classes.Link} />
              <ChatIcon className={classes.icon} /> React Educational Messenger
            </Typography>
            <ProfileButton color="inherit" edge="end" className={classes.ProfileBtn}>
              <Link to="/profile" key="profile" className={classes.Link} />
              <ProfileIcon />
            </ProfileButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  )
}