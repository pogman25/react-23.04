import React, { Component } from "react";
import Message from "../Message";
import MessageForm from "../MessageForm";
import css from "./index.css";

export default class MessageField extends Component {
  ROBOT_NAME = "Robot";
  state = {
    messages: [
      { text: "Hello!", author: this.ROBOT_NAME },
      { text: "How do you do?", author: this.ROBOT_NAME },
    ],
  };

  componentDidMount() {
//    console.log("MessageField did mount");
  }

  componentDidUpdate() {
//    console.log("MessageField did update");
    if (
      this.state.messages[this.state.messages.length - 1].author !== this.ROBOT_NAME
    ) {
      this.addNewMessage({ text: "This is bot...", author: this.ROBOT_NAME });
    }
  }

  addNewMessage = (message) => {
    this.setState(({ messages }) => ({
      messages: [...messages, message],
    }));
  };

  render() {
//    console.log(`MessageField render`);
    const { messages } = this.state;
    const messageElements = messages.map((message, id) => (
      <Message key={id} text={message.text} author={message.author} />
    ));
    return (
      <div className={css.container}>
        <div className={css.elements}>
          {messageElements}
          <MessageForm addNewMessage={this.addNewMessage} />
        </div>
      </div>
    );
  }
}
