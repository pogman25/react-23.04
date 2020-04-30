import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Message extends Component {
  render() {
    const { text, author } = this.props;

  return <div>{`${author}: ${text}`}</div>
  }
}

Message.defaultProps = {
  text: "Всегда существую!",
  author: "Создатель"
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
};