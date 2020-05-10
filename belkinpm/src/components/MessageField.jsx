import React, { Component } from 'react';
import Message from './Message';

class MessageField extends Component {
  state = {
    messages: ['Hello, my friend! How are you?'],
  };

  messageSender = () => {
    this.setState({ messages: [...this.state.messages, 'Fine!'] });
  };

  componentDidUpdate() {
    if (this.state.messages.length % 2 !== 1) {
      setTimeout(
        () =>
          this.setState({
            messages: [
              ...this.state.messages,
              "Don't bother me, I'm just a robot!",
            ],
          }),
        1000
      );
    }
  }

  render() {
    const messageElements = this.state.messages.map((text, index) => (
      <Message key={index} text={text} />
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
