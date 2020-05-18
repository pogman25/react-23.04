import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { IChatContainerProps, IChatContainerState, IChats, IProfileState } from '../../interfaces';
import NotFound from '../../pages/NotFound';
import MessageList from '../../components/MessageList';
import ChatForm from '../../components/ChatForm';
import ChatList from '../../components/ChatList';
import ChatListForm from '../../components/ChatListForm';
import { addChat, addMessage } from '../../store/actions/chatsActions';
import { selectChats, selectProfile } from '../../store/selectors';
import styles from './styles.module.scss';
import { State } from '../../store/reducers/reducerTypes';
import { StateType } from 'typesafe-actions';

class ChatsContainer extends Component<IChatContainerProps, IChatContainerState> {
  robotTimeouts: { [key: string]: number } = {};
  state = {
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
    return this.chatId && this.props.chats ? this.props.chats[this.chatId].messages : [];
  }

  updateChatList() {
    this.setState(() => ({
      chatList: Object.entries(this.props.chats)
        .map(([id, { title, messages }]) => {
          const lastMessage = messages[messages.length - 1];

          return {
            id,
            title,
            description: lastMessage
              ? `${lastMessage?.author}: ${lastMessage?.text}`
              : `Type first message in ${title}`,
            lastMessageDate: lastMessage?.date || 0,
          };
        })
        .sort((a, b) => b.lastMessageDate - a.lastMessageDate),
    }));
  }

  addNewMessage = (text: string, author?: string, authorAccess: string = 'user', chatId: string = this.chatId) => {
    const message = {
      id: uuid(),
      author: author ? author : this.props.profile.nickName,
      authorAccess: author ? authorAccess : 'self',
      text,
      date: new Date().getTime(),
    };
    const robotAnswer = () => {
      if (authorAccess === 'user') {
        this.sendRobotMessage(message.author);
      }
    };

    this.props.addMessage(message, chatId, robotAnswer);
  };

  addNewChat = (chatName: string) => {
    this.props.addChat(chatName, uuid().split('-')[0]);
  };

  sendRobotMessage(author: string) {
    const cachedChatId = this.chatId;
    const prevMessage = this.messages[this.messages.length - 2];
    const lastMessage = this.messages[this.messages.length - 1];

    if (prevMessage?.author === lastMessage?.author) {
      clearTimeout(this.robotTimeouts[this.chatId]);
    }

    this.robotTimeouts[cachedChatId] = window.setTimeout(
      () => this.addNewMessage(`Hi ${author}, i am your personal assistant`, 'Robot', 'bot', cachedChatId),
      3000
    );
  }

  componentDidUpdate(prevProps: IChatContainerProps, prevState: IChatContainerState) {
    if (JSON.stringify(prevProps.chats) !== JSON.stringify(this.props.chats)) {
      this.updateChatList();
    }
  }

  componentDidMount() {
    this.updateChatList();
  }

  render() {
    if (this.props.match?.params.chatId && !this.props.chats[this.props.match.params.chatId]) {
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

const mapStateToProps = (state: StateType<State>) => {
  return { chats: selectChats(state), profile: selectProfile(state) };
};

const mapDispatchToProps = {
  addChat,
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatsContainer);
