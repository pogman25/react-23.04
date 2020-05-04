import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import styles from './index.css';
import MessageItem from '../MessageItem';

const listStyles = {
  border: '1px solid #333',
  padding: 15,
  borderRadius: 5,
  minHeight: 300,
};

const Messages = ({ messages }) => {
  return (
    <List component="ul" className={styles.list} style={listStyles}>
      {messages.map(({ text, author }, index) => (
        <MessageItem key={index} text={text} author={author} />
      ))}
    </List>
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
