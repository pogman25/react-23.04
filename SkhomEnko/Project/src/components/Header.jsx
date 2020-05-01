import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  AppBar: {
    alignItems: 'center'
  }
}))

export default function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit">
            React Educational Messenger
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}