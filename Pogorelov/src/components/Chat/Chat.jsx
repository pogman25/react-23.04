import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import FormMessage from '../FormMessage';
import Messages from '../Messages/Messages';

const muiStyles = theme => {
  return {
    paper: {
      marginTop: theme.spacing(7),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
};

class Chat extends Component {
  state = {
    messages: [
      { text: 'привет, я бОТ', author: 'Bot' },
      { text: 'привет, я Человек', author: 'Pog' },
    ],
  };

  timer;

  componentDidUpdate() {
    const { messages } = this.state;
    clearTimeout(this.timer);

    if (messages[messages.length - 1].author !== 'Bot') {
      this.timer = setTimeout(() => {
        this.setState({ messages: [...messages, { text: 'привет, я бОТ', author: 'Bot' }] });
      }, 1000);
    }
  }

  addNewMessage = data => {
    this.setState(({ messages }) => ({ messages: [...messages, data] }));
  };

  render() {
    const { messages } = this.state;

    return (
      <Box p={3} mt={2} flexGrow={1}>
        <Messages messages={messages} />
        <FormMessage addNewMessage={this.addNewMessage} />
      </Box>
    );
  }
}

export default withStyles(muiStyles)(Chat);
