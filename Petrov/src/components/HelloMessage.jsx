import React from "react";
import Example from "./Example";
import ListMessages from "./ListMessages";


class HelloMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };
// Привязка необходима, чтобы сделать this доступным в коллбэке
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage() {
    this.setState((prev) => ({ messages: [...prev.messages, {id: (prev.messages.length+1), message: "Нормально"}] }));
  }

  render() {
   // const { messages } = this.state;
    return (
      <div>
        <h2>Привет, {this.props.name}</h2>
        <Example />
        <button onClick={this.addMessage}> Click</button>
        <ListMessages words={this.state.messages} />
      </div>
    );
  }
}

export default HelloMessage;
