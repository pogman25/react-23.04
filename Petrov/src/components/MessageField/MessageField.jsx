import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from "../Message";
import FormMessage from "../FormMessage";
import styles from './index.css';


class MessageField extends React.Component {
state = {
    chats: {
        1: {
          title: 'chats_1',
          messages: [
            {
                id: 1,
                message: 'привет, я бот из 1 чата',
              author: 'Бот',
            },
          ],
        },
        2: {
          title: 'chats_1',
          messages: [
            {
                id: 1,
                message: 'привет, я бот из второго чата',
              author: 'Бот',
            },
          ],
        },
        3: {
          title: 'chats_3',
          messages: [
            {
                id: 1,
                message: 'привет, я бот из 3 чата',
              author: 'Бот',
            },
          ],
        },
      },
    messages: [
        { id: 1, message: 'привет, я бОТ', author: 'Бот' },
        {id: 2, message: 'привет, я Человек', author: 'Pog' },
      ],
    };

    get messages() {
        const { chats } = this.state;
        const {
          match: { params },
        } = this.props;
        const { chatId } = params;    
        return chats[chatId].messages;
      }



  addMessage = (name, text) => {
    const {
      match: { params },
    } = this.props;
    const { chatId } = params;
    this.setState(({ chats }) => ({
      chats: {
        ...chats,
        [chatId]: { ...chats[chatId], messages: [...chats[chatId].messages, {id: (chats[chatId].messages.length+1), message: text, author: name}] },
      },
    }));
  };

      timer;
      componentDidUpdate(prevProps, prevState) {
        const {
          match: { params },
        } = this.props;
        const { chatId } = params;
        const { chats } = this.state;
        const messages = chats[chatId].messages;
        clearTimeout(this.timer);
        if (prevState.chats[chatId].messages.length !== messages.length) {
          if (messages[messages.length - 1].author !== 'Бот') {
            this.timer = setTimeout(() => {
                this.setState(this.addMessage('Бот', 'привет, я Бот'));
            }, 1000);
          }
        }
      }
      



  addNewMessage = (e) => {
   this.addMessage(e.author, e.text,);
    };

  render() {
    console.log(this.props.mess);
     const {
        match: { params },
      } = this.props;
      const { chatId } = params;
    return (
      <div className= {styles.MessageField}>
        <h2>чат {chatId} </h2>
        <Message words={this.messages} />      
        <FormMessage addNewMessage={this.addNewMessage} />
        </div>
    );
  }
}
MessageField.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
  };

  const mapStateToProps = store => ({
    messag: store.messages,
  });
  
  export default connect(mapStateToProps)(MessageField);
//export default MessageField;