import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { IChatContainerProps, IChatContainerState } from '../../interfaces';
import NotFound from '../../pages/NotFound';
import MessageList from '../../components/MessageList';
import ChatForm from '../../components/ChatForm';
import ChatList from '../../components/ChatList';
import ChatListForm from '../../components/ChatListForm';
import mockChats from '../../mocks/chats';
import styles from './styles.module.scss';

export default class ChatContainer extends Component<IChatContainerProps, IChatContainerState> {
  robotTimeouts: { [key: string]: number } = {};
  state = {
    chats: mockChats,
    chatList: [{ id: '', title: 'Loading', description: 'Loading' }],
  };

  get chatId() {
    if (this.props.match) {
      return this.props.match.params.chatId;
    } else if (this.state.chatList.length) {
      return this.state.chatList[0].id;
    } else {
      return '';
    }
  }

  get messages() {
    return this.chatId ? this.state.chats[this.chatId].messages : [];
  }

  updateChatList() {
    this.setState((state) => ({
      chatList: Object.entries(state.chats)
        .map(([id, { title, messages }]) => {
          const lastMessage = messages[messages.length - 1];

          return {
            id,
            title,
            description: lastMessage
              ? `${lastMessage?.author}: ${lastMessage?.text}`
              : `Type first message in ${title}`,
            lastMessageDate: lastMessage.date || 0,
          };
        })
        .sort((a, b) => b.lastMessageDate - a.lastMessageDate),
    }));
  }

  addNewMessage = (author: string, text: string, authorAccess: string = 'user', chatId: string = this.chatId) => {
    const message = { id: uuid(), author, authorAccess, text, date: new Date().getTime() };
    const robotAnswer = () => {
      if (authorAccess === 'user') {
        this.sendRobotMessage(author);
      }
    };

    this.setState(
      ({ chats }) => ({
        chats: {
          ...chats,
          [chatId]: {
            ...chats[chatId],
            messages: [...chats[chatId].messages, message],
          },
        },
      }),
      robotAnswer
    );
  };

  addNewChat = (chatName: string) => {
    this.setState(({ chats }) => ({
      chats: {
        ...chats,
        [uuid().split('-')[0]]: {
          title: chatName,
          messages: [],
        },
      },
    }));
  };

  // Для уменьшения условий, кода и для более тонкой реализации бота пришлось отказаться от бота в componentDidUpdate
  sendRobotMessage(author: string) {
    const cachedChatId = this.chatId;
    const prevMessage = this.messages[this.messages.length - 2];
    const lastMessage = this.messages[this.messages.length - 1];

    if (prevMessage?.author === lastMessage?.author) {
      clearTimeout(this.robotTimeouts[this.chatId]);
    }

    this.robotTimeouts[cachedChatId] = window.setTimeout(
      () => this.addNewMessage('Robot', `Hi ${author}, i am your personal assistant`, 'bot', cachedChatId),
      3000
    );
  }

  componentDidUpdate(prevProps: IChatContainerProps, prevState: IChatContainerState) {
    if (JSON.stringify(prevState.chats) !== JSON.stringify(this.state.chats)) {
      this.updateChatList();
    }
  }

  componentDidMount() {
    this.updateChatList();
  }

  render() {
    if (this.props.match?.params.chatId && !this.state.chats[this.props.match.params.chatId]) {
      return <NotFound />;
    }

    return (
      <div className={styles.chat}>
        <div className={styles.chatList}>
          <ChatList items={this.state.chatList} />
          <ChatListForm handleCreate={this.addNewChat} />
        </div>
        {this.state.chatList.length > 0 && (
          <div className={styles.chatContent}>
            <MessageList messages={this.messages} />
            <ChatForm handleSubmit={this.addNewMessage} />
          </div>
        )}
      </div>
    );
  }
}
