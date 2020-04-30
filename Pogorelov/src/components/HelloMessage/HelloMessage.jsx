import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormMessage from '../FormMessage';
import Messages from '../Messages/Messages';

const muiStyles = theme => {
  console.log(theme);
  return {
    paper: {
      marginTop: theme.spacing(7),
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
