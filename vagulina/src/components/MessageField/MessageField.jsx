import React, { Component } from "react";
import Message from "../Message";
import MessageForm from "../MessageForm";
import css from "./index.css";
import PropTypes from "prop-types";

export default class MessageField extends Component {
  static ROBOT_NAME = "Robot";

  state = {
    chats: {
      1: { title: "Chat1", messageList: [1] },
      2: { title: "Chat2", messageList: [2] },
      3: { title: "Chat3", messageList: [] },
    },
    messages: {
      1: { text: "Hello!", author: this.ROBOT_NAME },
      2: { text: "How do you do?", author: this.ROBOT_NAME },
    },
  };

  componentDidMount() {
    //    console.log("MessageField did mount");
  }

  componentDidUpdate() {
    //    console.log("MessageField did update");
    if (
      this.state.messages[this.state.messages.length - 1].author !==
      this.ROBOT_NAME
    ) {
      this.addNewMessage({ text: "This is bot...", author: this.ROBOT_NAME });
    }
  }

  addNewMessage = (message) => {
    const { chatId } = this.props;
    const newMessageId = Object.keys(this.state.messages).length + 1;
    this.setState(({ messages, chats }) => ({
      messages: {
        ...messages,
        [newMessageId]: { text: message.text, author: message.author },
      },
      chats: {
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messageList: [...chats[chatId]["messageList"], messageId],
        },
      },
    }));
  };

  render() {
    //    console.log(`MessageField render`);
    const { messages, chats } = this.state;
    const { chatId } = this.props;
    const messageElements = chats[chatId].messageList.map((messageId, id) => (
      <Message
        key={id}
        text={messages[messageId].text}
        author={messages[messageId].author}
      />
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

MessageField.propTypes = {
  chatId: PropTypes.number.isRequired,
};
