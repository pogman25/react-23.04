import React, { Component } from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import Message from "../Message";
import MessageForm from "../MessageForm";
import css from "./index.css";
import PropTypes from "prop-types";

class MessageField extends Component {
  componentDidMount() {
    //    console.log("MessageField did mount");
  }

  render() {
    //    console.log(`MessageField render`);
    const { chatId, messages, chats, addNewMessage } = this.props;

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
          <MessageForm addNewMessage={addNewMessage} />
        </div>
      </div>
    );
  }
}

MessageField.propTypes = {
  chatId: PropTypes.number.isRequired,
  chats: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  addNewMessage: PropTypes.func.isRequired,
};

const mapStateToProps = ({ chatReducer }) => ({ chats: chatReducer.chats });

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
