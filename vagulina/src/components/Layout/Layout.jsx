import React from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import MessageField from "../MessageField";
import ChatList from "../ChatList";
import Header from "../Header";
import { addNewMessage } from "../../actions/messageActions";
import css from "./index.css";

class Layout extends React.Component {
  ROBOT_NAME = "Robot";

  state = {
    messages: {
      1: { text: "Hello!", author: this.ROBOT_NAME },
      2: { text: "How do you do?", author: this.ROBOT_NAME },
    },
  };

  componentDidUpdate() {
    /*const { chatId } = this.props;
    const { messages, chats } = this.state;
    const messageList = chats[chatId].messageList;
    if (messageList.length > 0) {
      const lastMsgId = messageList[messageList.length - 1];
      if (messages[lastMsgId].author !== this.ROBOT_NAME) {
        this.addNewMessage({ text: "This is bot...", author: this.ROBOT_NAME });
      }
    }*/
  }

  addNewMessage = (message) => {
    const { chatId } = this.props;
    const newMessageId = Object.keys(this.state.messages).length + 1;
    this.setState(({ messages }) => ({
      messages: {
        ...messages,
        [newMessageId]: { text: message.text, author: message.author },
      },
    }));
    this.props.addNewMessage(
      newMessageId,
      message.text,
      message.author,
      chatId
    );
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
            <ChatList />
          </div>
          <div className="layout-right-side">
            <MessageField
              chatId={this.props.chatId}
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
  addNewMessage: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  chatId: 1,
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addNewMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
