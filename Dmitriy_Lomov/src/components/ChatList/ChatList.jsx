import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useHistory } from 'react-router-dom';
import pageLinks from './page-links';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },

  logo: {
    marginRight: 'auto',
    marginLeft: theme.spacing(1),
  },

  paper: {
    color: theme.palette.text.primary,
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  itemRoot: {
    position: 'relative',
    whiteSpace: 'pre-line',
  },

  link: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: theme.zIndex.appBar,
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(3, 2),
  },

  toolbarClose: {
    justifyContent: 'flex-start',
  },
}));

const ChatList = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Drawer
      variant="permanent"
      className={cx(classes.drawer, classes.drawerOpen)}
      classes={{
        paper: cx(classes.paper, classes.drawerOpen),
      }}
    >
      <div className={classes.toolbar}>
        <Typography variant="body1">Список чатов</Typography>
      </div>
      <Link to="/" key="home-page">
        <ListItem
          classes={{
            root: classes.itemRoot,
          }}
          button
        >
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
      </Link>
      <List disablePadding>
        {Object.values(pageLinks).map(({ title, to }) => (
          <Link to={to} key={title}>
            <ListItem
              classes={{
                root: classes.itemRoot,
              }}
              button
            >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText>{title}</ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default memo(ChatList);
