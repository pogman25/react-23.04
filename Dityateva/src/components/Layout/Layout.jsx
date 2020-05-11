import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormMessage from '../FormMessage';
import ChatList from '../ChatList';

const muiStyles = theme => {
  console.log(theme);
  return {
    paper: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
};

class Layout extends Component {
  state = {
    messages: [{text: 'Привет!', author: 'Я'},{text: 'Привет, я БОТ', author: 'Bot'},{text: 'Как дела?', author: 'Я'},{text: 'Нормально', author: 'Bot'}],
  };

  componentDidUpdate() {
    const { messages } = this.state;

    if (messages[messages.length - 1].author !== 'Bot') {
      setTimeout(() => {
        this.setState({ messages: [...messages, { text: 'Привет, я БОТ', author: 'Bot' }] });
      }, 1000);
    }
  }

  addNewMessage = data => {
    this.setState(({ messages }) => ({ messages: [...messages, data] }));
  };

  render() {
    const { classes } = this.props;
    const { messages } = this.state;

    return (
      <div className={classes.paper}>
        <ChatList messages={messages} />
        <FormMessage addNewMessage={this.addNewMessage} />
      </div>
    );
  }
}

Layout.defaultProps = {
  classes: {},
};

Layout.propTypes = {
  classes: PropTypes.shape(PropTypes.any),
};

export default withStyles(muiStyles)(Layout);
