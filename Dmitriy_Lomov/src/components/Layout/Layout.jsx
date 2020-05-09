import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import MessageField from '../MessageField';
import ChatList from '../ChatList';
import Header from '../Header';
import FormMessage from '../FormMessage';
import styles from './index.css';

class Layout extends Component {
  render() {
    return (
      <Container maxWidth="md" component="div">
        <Header />
        <div className={styles.bottomContainer}>
          <ChatList />
          <MessageField />
        </div>
      </Container>
    );
  }
}

export default Layout;
