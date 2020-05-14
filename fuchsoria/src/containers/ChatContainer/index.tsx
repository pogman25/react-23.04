import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { IChatContainerState, IMessage } from '../../interfaces';
import MessageList from '../../components/MessageList';
import ChatForm from '../../components/ChatForm';
import ChatList from '../../components/ChatList';
import styles from './styles.module.scss';

const chatList = [
  {
    id: 0,
    title: 'John',
    description: 'What are you doing?',
  },
  {
    id: 1,
    title: 'Heinz',
    description: 'What are you doing?',
  },
  {
    id: 2,
    title: 'Dungeon Master',
    description: 'What are you doing?',
  },
  {
    id: 3,
    title: 'Friedrich',
    description: 'What are you doing?',
  },
];

export default class ChatContainer extends Component<{}, IChatContainerState> {
  robotTimeout?: number;
  state = {
    messages: [],
    chatList,
  };

  addNewMessage = (author: string, text: string, authorAccess: string = 'user') => {
    const message = { id: uuid(), author, authorAccess, text };

    this.setState((state) => ({ messages: [...state.messages, message] }));
  };

  sendRobotMessage(author: string) {
    this.addNewMessage('Robot', `Hi ${author}, i am your personal assistant`, 'bot');
  }

  // робот отвечает пользователю лишь 1 раз до момента ответа робота, будь хоть 10 сообщений от одного пользователя
  componentDidUpdate(prevProps: Object, prevState: IChatContainerState) {
    const prevMessage: IMessage = prevState.messages[prevState.messages.length - 1];
    const lastMessage: IMessage = this.state.messages[this.state.messages.length - 1];

    if (prevMessage?.author === lastMessage?.author) {
      clearTimeout(this.robotTimeout);
    }

    if (lastMessage?.authorAccess === 'user') {
      // обычный setTimeout в тайпскрипте возвращает не число, в отличии от window.setTimeout :(
      this.robotTimeout = window.setTimeout(() => this.sendRobotMessage(lastMessage.author), 3000);
    }
  }

  render() {
    return (
      <div className={styles.chat}>
        <div className={styles.chatList}>
          <ChatList items={this.state.chatList}/>
        </div>
        <div className={styles.chatContent}>
          <MessageList messages={this.state.messages} />
          <ChatForm handleSubmit={this.addNewMessage} />
        </div>
      </div>
    );
  }
}
