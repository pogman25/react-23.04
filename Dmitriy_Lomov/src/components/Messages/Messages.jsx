import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import styles from './index.css';
import MessageItem from '../MessageItem';

const listStyles = {
  border: '1px solid #333',
  borderRadius: 3,
  minHeight: 300,
};

const Messages = ({ messages }) => {
  return (
    <Container maxWidth="sm" component="ul" className={styles.list} style={listStyles}>
      {messages.map(({ text, author }, index) => (
        <MessageItem key={index} text={text} author={author} />
      ))}
    </Container>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default Messages;
