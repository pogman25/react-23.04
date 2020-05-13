import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormMessage from '../FormMessage';
import Messages from '../Messages/Messages';

const muiStyles = theme => {
  return {
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
};

class HelloMessage extends Component {
  state = {
    messages: [],
  };

  componentDidUpdate() {
    const { messages } = this.state;

    if (messages[messages.length - 1].author !== 'Bot') {
      setTimeout(() => {
        this.setState(({ messages }) => ({
          messages: [...messages, { text: 'привет, я БОТ', author: 'Bot' }],
        }));
      }, 1000);
    }
  }

  addMessage = () => {
    this.setState(({ messages }) => ({
      messages: [...messages, { text: 'привет', author: 'Nasty' }],
    }));
  };

  addNewMessage = data => {
    this.setState(({ messages }) => ({ messages: [...messages, data] }));
  };

  render() {
    const { name, lastname, classes } = this.props;
    const { messages } = this.state;

    return (
      <div className={classes.paper}>
        <Messages messages={messages} />
        <FormMessage addNewMessage={this.addNewMessage} />
        <button type="button" onClick={this.addMessage}>
          Click
        </button>
      </div>
    );
  }
}

HelloMessage.defaultProps = {
  lastname: 'Dolgova',
};

HelloMessage.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};

export default withStyles(muiStyles)(HelloMessage);
