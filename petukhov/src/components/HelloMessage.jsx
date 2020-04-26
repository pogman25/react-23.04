import React from "react";

class HelloMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
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
        <h2>Hello, {this.props.name}!</h2>
        <Example />
        <button onClick={this.addMessage}>Click</button>
      </div>
    );
  }
}

export default HelloMessage;