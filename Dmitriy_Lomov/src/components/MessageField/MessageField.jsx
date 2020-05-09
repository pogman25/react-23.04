import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormMessage from '../FormMessage';
import Messages from '../Messages';
import styles from './index.css';

class MessageField extends Component {
  state = {
    messages: [
      { text: 'Привет!', author: 'Bot' },
      { text: 'Как дела?', author: 'Bot' },
    ],
  };
  timer = null;

  checkInputChange = boolean => {
    if (boolean) clearTimeout(this.timer);
  };

  componentDidUpdate() {
    const { messages } = this.state;

    if (messages[messages.length - 1].author !== 'Bot') {
      this.timer = setTimeout(() => {
        this.setState(({ messages }) => ({
          messages: [...messages, { text: 'Не приставай ко мне, я робот!', author: 'Bot' }],
        }));
      }, 1000);
    }
  }

  addNewMessage = data => {
    this.setState(({ messages }) => ({ messages: [...messages, data] }));
  };

  render() {
    const { messages } = this.state;

    return (
      <div className={styles.wrapper}>
        <Messages messages={messages} />
        <FormMessage
          addNewMessage={this.addNewMessage}
          checkInputChange={this.checkInputChange}
        />
      </div>
    );
  }
}

MessageField.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
};

export default MessageField;
