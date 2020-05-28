import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import MessageItem from '../../MessageItem/MessageItem';

const listStyles = {
  border: '1px solid #333',
  borderRadius: 3,
  minHeight: 300,
};

class Messages extends Component {
  render() {
    const { messages } = this.props;

    return (
      <ul className={styles.list} style={listStyles}>
        {messages.map(({ text, author }, index) => (
          <MessageItem key={index} text={text} author={author} />
        ))}
      </ul>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default Messages;
