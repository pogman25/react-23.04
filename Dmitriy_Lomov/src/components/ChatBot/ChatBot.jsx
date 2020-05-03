import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormMessage from '../FormMessage';
import Messages from '../Messages';

class ChatBot extends Component {
  state = {
    messages: [
      { text: 'Привет!', author: 'Bot' },
      { text: 'Как дела?', author: 'Bot' },
    ],
  };

  componentDidUpdate() {
    const { messages } = this.state;
    if (messages[messages.length - 1].author !== 'Bot') {
      setTimeout(() => {
        this.setState(({ messages }) => ({
          messages: [...messages, { text: 'Не приставай ко мне, я робот!', author: 'Bot' }],
        }));
      }, 1000);
    }
  }

  addNewMessage = ({ text, author }) => {
    this.setState(({ messages }) => ({
      messages: [...messages, { text, author }],
    }));
  };

  render() {
    const { messages } = this.state;

    return (
      <div>
        <Messages messages={messages} />
        <FormMessage addNewMessage={this.addNewMessage} />
      </div>
    );
  }
}

ChatBot.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
};

export default ChatBot;
