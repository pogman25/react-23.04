import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return <div>{this.props.text}</div>;
  }
}

export default Message;
