import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from '../Message/Message';

export default class MessageField extends Component {
  state = {
    messages: [
      "Кто здесь?"
    ]
  };

  componentDidUpdate() {
    const { messages } = this.state;
    
    if (messages[messages.length - 1].author !== "Бот") {
      setTimeout(() => {
        this.setState(({ messages }) => (
          { messages: [...messages, { text: "я робот, а ты?", author: "Бот" }] }
        ));
      }, 1000);
    }
  }

  addMessage = () => {
    this.setState(({ messages }) => (
      { messages: [...messages, { text: "я человек!", author: "Гоша" }] }
    ));
  };

  render() {
    const { messages } = this.state;

    const messageElements = messages.map(({ text, author }, i) => (
      <Message key={i} author={author} text={text} />
    ));

    return (
      <div>
        <button onClick={this.addMessage}>Отправить сообщение</button>
        {messageElements}
      </div>
    )
  }
}