import React from "react";
import PropTypes from 'prop-types';
import Message from "../Message";
import FormMessage from "../FormMessage";
import styles from './index.css';


class MessageField extends React.Component {
state = {
      messages: [],
    };


  addMessage = (name, text) => {
    this.setState((prev) => ({ messages: [...prev.messages, {id: (prev.messages.length+1), message: text, author: name}] }));
  }

  componentDidUpdate() {
    setTimeout(this.answerForBot, 1000);
    }
    answerForBot = (props) =>{
        const { messages } = this.state;      
        if (messages[messages.length - 1].author !== "Бот") {
            this.setState(this.addMessage('Бот', 'привет, я Бот'));
        }
      }
  
  addNewMessage = (e) => {
   this.addMessage(e.author, e.text);
  };

  render() {
    const { messages } = this.state;
    const { name } = this.props;
    return (
      <div className= {styles.MessageField}>
        <h2>чат</h2>
        <Message words={messages} />      
        <FormMessage addNewMessage={this.addNewMessage} />
        </div>
    );
  }
}
MessageField.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
  };
export default MessageField;