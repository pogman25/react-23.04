import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { IChatContainerState } from '../../interfaces';
import MessageList from '../../components/MessageList';
import ChatForm from '../../components/ChatForm';

export default class ChatContainer extends Component<{}, IChatContainerState> {
  state = { messages: [] };

  addNewMessage = (author: string, text: string) => {
    const message = { id: uuid(), author, text };

    this.setState((state) => ({ messages: [...state.messages, message] }));
  };

  render() {
    return (
      <>
        <MessageList messages={this.state.messages} />
        <ChatForm handleSubmit={this.addNewMessage} />
      </>
    );
  }
}
