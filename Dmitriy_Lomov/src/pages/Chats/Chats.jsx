import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import FormMessage from '../../components/FormMessage';
import Messages from '../../components/Messages';
import { putMessage } from '../../store/chatMessage/actions'

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

class Chats extends Component {
  state = {
    chats: {
      1: {
        messages: [
          {
            text: 'BOT FROM FIRST CHAT',
            author: 'Bot',
          },
        ],
      },
      2: {
        messages: [
          {
            text: 'SECOND CHAT BOT',
            author: 'Bot',
          },
        ],
      },
    },
  };

  timer;

  checkInputChange = boolean => {
    if (boolean) clearTimeout(this.timer);
  };

  componentDidUpdate() {
    const { match: { params } } = this.props;
    const { id } = params;
    const { message, putMessage } = this.props;
    const { chats } = this.state;
    const messages = message[id].messages;

    if (messages[messages.length - 1].author !== 'Bot') {
      this.timer = setTimeout(() => {
        this.setState(({ chats }) => ({
          chats: {
            ...chats,
            [id]: {
              ...chats[id],
              messages: [
                ...chats[id].messages,
                { text: 'Не приставай ко мне, я робот!', author: 'Bot' },
              ],
            },
          },
        }));
      }, 1000);
    }
  }

  get messages() {
    const { message } = this.props;
    const {
      match: { params },
    } = this.props;
    const { id } = params;

    return message[id].messages;
  }

  addNewMessage = data => {
    const { match: { params } } = this.props;
    const { id } = params;

    this.setState(({ chats }) => ({
      chats: {
        ...chats,
        [id]: { ...chats[id], messages: [...chats[id].messages, data] },
      },
    }));
  };

  render() {
    return (
      <Box p={3} mt={2} flexGrow={1}>
        <Messages messages={this.messages} />
        <FormMessage addNewMessage={this.addNewMessage} checkInputChange={this.checkInputChange} />
      </Box>
    );
  }
}

Chats.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = store => ({
  message: store.message
});

const mapDispatchToProps = {
  putMessage
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(muiStyles))(Chats);
