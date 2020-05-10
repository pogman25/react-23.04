import React, { Component } from 'react';
import Message from './Message';

class MessageField extends Component {
  state = {
    messages: [
      { text: 'Hello, my friend!', name: 'bot' },
      { text: 'How are you?', name: 'bot' },
    ],
  };

  messageSender = () => {
    this.setState({
      messages: [...this.state.messages, { text: 'Fine!', name: 'Paul' }],
    });
  };

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].name !== 'bot') {
      setTimeout(
        () =>
          this.setState({
            messages: [
              ...this.state.messages,
              {text: "Don't bother me, " + this.state.messages[this.state.messages.length - 1].name + ". I'm just a robot!", name: 'bot'},
            ],
          }),
        1000
      );
    }
  }

  render() {
    const messageElements = this.state.messages.map((message, index) => (
      <Message key={index} name={message.name} text={message.text} />
    ));

    return (
      <div>
        {messageElements}
        <button onClick={this.messageSender}>Send</button>
      </div>
    );
  }
}

export default MessageField;
