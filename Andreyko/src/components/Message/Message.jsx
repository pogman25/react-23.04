import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.css'

export default class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, author, botName } = this.props;

    return (
      <div className={cx("message", {"my-message": author !== botName})}>
        <div className="message-text">{text}</div>
        <div className="message-author">{author}</div>
      </div>
    )
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