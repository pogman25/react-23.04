import React from "react";
import Example from "./Example";

class HelloMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };

    this.addMessage = this.addMessage.bind(this);
  }

  addMessage() {
    this.setState((prev) => ({ messages: [...prev.messages, "Нормально"] }));
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <h2>Привет, {this.props.name}</h2>
        <Example />
        {messages.map((message, index) => (
          <p key = {index}>{message}</p>
        ))}
        <button onClick={this.addMessage}>Ответить</button>
      </div>
    );
  }
}

export default HelloMessage;
  