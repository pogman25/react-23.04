import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Chatlist from '../ChatList/ChatList';
import Header from '../Header/Header';
import MessageField from '../MessageField/MessageField';
import './style.css';

export default class Layout extends Component {
  constructor() {
    super();

    this.bots = [
      {
        name: 'Бот 1', answers: [
          'я Бот 1, а ты?',
          'как дела?',
          'я не в духе, отстань',
          'в Магните плохие работники'
        ]
      },
      {
        name: 'Бот 2', answers: [
          'я Бот 2, а ты?',
          'как дела?',
          'я не в духе, отстань',
          'в Магните плохие работники'
        ]
      },
      {
        name: 'Бот 3', answers: [
          'я Бот 3, а ты?',
          'как дела?',
          'я не в духе, отстань',
          'в Магните плохие работники'
        ]
      },
      {
        name: 'Бот 4', answers: [
          'я Бот 4, а ты?',
          'как дела?',
          'я не в духе, отстань',
          'в Магните плохие работники'
        ]
      }
    ]

    this.state = {
      botIdx: 0
    }

    this.pickCallback = this.pickCallback.bind(this);
  }

  pickCallback = idx => {
    this.setState(() => ({botIdx: parseInt(idx)}))
  }

  render() {
    const { botIdx } = this.state;
    return (
      <Container maxWidth="lg">
        <Header chatName={this.bots[botIdx].name} />
        <div className="chat-container">
          <Chatlist pickCallback={this.pickCallback} chatName={this.bots} />
          <MessageField myNickname='Стиф' botData={this.bots[botIdx]} />
        </div>
      </Container>
    )
  }
}