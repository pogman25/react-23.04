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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

  footerList: {
    marginTop: 'auto',
    marginBottom: theme.spacing(5),
  },
}));

const ChatList = () => {
  const classes = useStyles();

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
      <List disablePadding>
        {['chat1', 'chat2'].map(chat => (
          <ListItem
            key={chat}
            classes={{
              root: classes.itemRoot,
            }}
            button
          >
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText>{chat}</ListItemText>
          </ListItem>
        ))}
      </List>
      <List className={classes.footerList} disablePadding>
        {['Настройки', 'Помощь'].map((text, index) => (
          <ListItem
            classes={{
              root: classes.itemRoot,
            }}
            button
            key={text}
          >
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
        <ListItem
          key="logout-btn"
          classes={{
            root: classes.itemRoot,
          }}
          button
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText>Выйти</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default memo(ChatList);
