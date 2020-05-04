import React, { Component } from "react";
import Message from "./Message";
import MessageForm from "./MessageForm";

export default class MessageField extends Component {
  state = {
    messages: [
      { text: "Hello!", author: "Computer" },
      { text: "How do you do?", author: "Computer" },
    ],
  };

  componentDidMount() {
    console.log("MessageField did mount");
  }

  componentDidUpdate() {
    console.log("MessageField did update");
    if (
      this.state.messages[this.state.messages.length - 1].author !== "Robot"
    ) {
      this.addNewMessage({ text: "This is bot...", author: "Robot" });
    }
  }

  addNewMessage = (message) => {
    this.setState(({ messages }) => ({
      messages: [...messages, message],
    }));
  };

  render() {
    console.log("MessageField render");
    const { messages } = this.state;
    const messageElements = messages.map((message, id) => (
      <Message key={id} text={message.text} author={message.author} />
    ));
    return (
      <div>
        {messageElements}
        <MessageForm addNewMessage={this.addNewMessage} />
      </div>
    );
  }
}
