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
    let id = 1;

    return (
      <div>
        <h2>Привет, {this.props.name}</h2>
        <Example />
        {messages.map((i) => (
          <p key = {id++}>{i}</p>
        ))}
        <button onClick={this.addMessage}>Ответить {id}-й раз</button>
      </div>
    );
  }
}

export default HelloMessage;
  