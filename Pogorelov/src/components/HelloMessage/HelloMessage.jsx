import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core/styles';
import FormMessage from '../FormMessage';
import Messages from '../Messages/Messages';
import styles from './index.css';

const muiStyles = createStyles({
  paper: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

class HelloMessage extends Component {
  state = {
    messages: [],
  };

  addMessage = () => {
    this.setState(({ messages }) => ({
      messages: [...messages, { text: 'привет', author: 'Pog' }],
    }));
  };

  componentDidUpdate() {
    const { messages } = this.state;

    if (messages[messages.length - 1].author !== 'Bot') {
      setTimeout(() => {
        this.setState(({ messages }) => ({
          messages: [...messages, { text: 'привет, я бОТ', author: 'Bot' }],
        }));
      }, 1000);
    }
  }

  addNewMessage = data => {
    this.setState(({ messages }) => ({ messages: [...messages, data] }));
  };

  render() {
    const { name, lastname, classes } = this.props;
    const { messages } = this.state;

    return (
      <div className={classes.paper}>
        <h2 className="title">{`Привет, ${name} ${lastname}`}</h2>
        <Messages messages={messages} />
        <FormMessage addNewMessage={this.addNewMessage} />
        <button onClick={this.addMessage}>Click</button>
        <button onClick={this.toggle}>Visible</button>
      </div>
    );
  }
}

HelloMessage.defaultProps = {
  lastname: 'Погорелов',
};

HelloMessage.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};

export default withStyles(muiStyles)(HelloMessage);
