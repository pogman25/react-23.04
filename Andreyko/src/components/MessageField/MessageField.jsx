import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Message from '../Message/Message';
import './style.css';

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

export default class MessageField extends Component {
  constructor(props) {
    super(props);

    this.botTimer = false;

    this.state = {
      messages: [],
      inputValue: ''
    };
  }

  componentDidUpdate() {
    const { messages } = this.state;
    if (!messages.length) return;

    const botAnswers = this.props.botData.answers;
    const botName = this.props.botData.name;
    if (messages[0].author !== botName) {
      if (!this.botTimer) {
        setTimeout(() => {
          this.setState(({ messages }) => (
            { messages: [...messages, { text: choose(botAnswers), author: botName }] }
          ));
          this.botTimer = false;
        }, 2000);

        this.botTimer = true;
      }
    }
  };

  addMessage = () => {
    const { inputValue } = this.state;
    if (!inputValue) return;

    const { myNickname } = this.props;
    this.setState(({ messages }) => (
      {
        messages: [...messages, { text: inputValue, author: myNickname }],
        inputValue: ''
      }
    ));
  };

  onMessageChange = (event) => {
    const target = event.target.value;
    this.setState(({ messages }) => (
      { messages: messages, inputValue: target }
    ));
  }

  render() {
    const { messages, inputValue } = this.state;
    const botName = this.props.botData.name;

    const messageElements = messages.map(({ text, author }, i) => (
      <Message key={i} author={author} text={text} botName={botName} />
    ));

    return (
      <div className="message-filed">
        <div className="chat-field">
          {messageElements}
        </div>
        <div className="btn-text">
          <TextField label="Пишем..." variant="outlined" onChange={this.onMessageChange} value={inputValue} />
          <Button variant="contained" endIcon={<Icon>send</Icon>} onClick={this.addMessage} className="btn-send">Написать</Button>
        </div>
      </div>
    )
  };
}