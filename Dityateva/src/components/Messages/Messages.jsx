import React from 'react';
import PropTypes from 'prop-types';
import { Container, List } from '@material-ui/core';
import MessageItem from '../MessageItem/MessageItem';

const listStyles = {
  border: '1px solid rgb(51, 51, 51, 0.2)',
  borderRadius: 3,
  width: '100vw',
  height: '65vh',
  overflowY: 'scroll',
  backgroundImage: 'linear-gradient(0deg, rgba(248, 248, 255, 0.3) 60%, rgba(255, 250, 250, 0.3) 100%), url(https://i.pinimg.com/736x/62/40/b6/6240b66d5c50c8661eee78b439a7d33c.jpg)',
  backgroundSize: 'contain, contain',
  margin: '0 auto'
};

const Messages = ({ messages }) => {
  return (
    <Container maxWidth="sm" style={listStyles}>
      <List>
        {messages.map(({ text, author }, index) => (
          <MessageItem key={index} text={text} author={author} />
        ))}
      </List>
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
