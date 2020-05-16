import React, { Component } from "react";

class HelloMessage extends Component {
  state = {
    messages: [],
  }

  addMessage = () => {
    this.setState(({messages}) => ({ messages: [...messages, "Привет!"] }));
  };

  render() {
    const messages = this.state.messages;
    return (
      <div>
        <h2>Привет</h2>
        <button onClick={this.addMessage}>Add</button>
          <ul>
            {messages.map((message, index) => (
              <li key={index}>
                <p>{message}</p>
              </li>
            ))}
          </ul>
      </div>
    );
  }
};

export default HelloMessage;