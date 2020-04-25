import React from "react";
import Example from "./Example";

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: ["Нормально"],
    };

    this.addMessage = this.addMessage.bind(this);
  }

  addMessage() {
    this.setState((prev) => ({ messages: [...prev.messages, "add"] }));
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <h2>Привет, {this.props.name}</h2>
        <Example />
        <button onClick={this.addMessage}>Click</button>
      </div>
    );
  }
}

export default HelloMessage;
