import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import Chat from '../Chat';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(8),
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.root}>
        <ChatList />
        <Chat />
      </main>
    </>
  );
};

export default Layout;
