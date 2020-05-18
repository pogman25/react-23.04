import React from "react";
import PropTypes from "prop-types";
import MessageField from "../MessageField";
import ChatList from "../ChatList";
import Header from "../Header";
import css from "./index.css";

class Layout extends React.Component {
  ROBOT_NAME = "Robot";

  state = {
    chats: {
      1: { title: "Chat1", messageList: [1, 2] },
      2: { title: "Chat2", messageList: [] },
      3: { title: "Chat3", messageList: [] },
      4: { title: "Chat4", messageList: [] },
    },
    messages: {
      1: { text: "Hello!", author: this.ROBOT_NAME },
      2: { text: "How do you do?", author: this.ROBOT_NAME },
    },
  };

  componentDidUpdate() {
    const { chatId } = this.props;
    const { messages, chats } = this.state;
    const messageList = chats[chatId].messageList;
    if (messageList.length > 0) {
      const lastMsgId = messageList[messageList.length - 1];
      if (messages[lastMsgId].author !== this.ROBOT_NAME) {
        this.addNewMessage({ text: "This is bot...", author: this.ROBOT_NAME });
      }
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
          messageList: [...chats[chatId]["messageList"], newMessageId],
        },
      },
    }));
  };

  addChat = (title) => {
    const { chats } = this.state;
    const chatId = Object.keys(chats).length + 1;
    this.setState({
      chats: { ...chats, [chatId]: { title: title, messageList: [] } },
    });
  };

  render() {
    return (
      <div className={css.layout}>
        <Header chatId={this.props.chatId} />
        <div className={css.canvas}>
          <div className="layout-left-side">
            <ChatList chats={this.state.chats} addChat={this.addChat} />
          </div>
          <div className="layout-right-side">
            <MessageField
              chatId={this.props.chatId}
              chats={this.state.chats}
              messages={this.state.messages}
              addNewMessage={this.addNewMessage}
            />
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  chatId: PropTypes.number,
};

Layout.defaultProps = {
  chatId: 1,
};

export default Layout;
