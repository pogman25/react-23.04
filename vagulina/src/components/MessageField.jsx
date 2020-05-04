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

  updateState = (text, author) => {
    this.setState(({ messages }) => ({
      messages: [...messages, { text: text, author: author }],
    }));
  };

  componentDidMount() {
    console.log("messagefield did mount");
  }

  componentDidUpdate() {
    console.log("messagefiled did update");
    if (this.state.messages[this.state.messages.length-1].author !== "Robot") {
      this.updateState("This is bot...", "Robot");
    }
  }

  addNewMessage = (message) => {
    const { text, author } = message;
    this.updateState(text, author);
  };

  render() {
    console.log("messagefield render");
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
