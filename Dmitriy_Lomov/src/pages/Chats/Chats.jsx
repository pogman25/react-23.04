import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import FormMessage from '../../components/FormMessage';
import Messages from '../../components/Messages';
import { getChatMessages } from '../../store/chats/selectors';
import { addMessage } from '../../store/chats/actions';

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
  timer;

  checkInputChange = boolean => {
    if (boolean) clearTimeout(this.timer);
  };

  addNewMessage = data => {
    const {
      addMessage,
      match: { params },
    } = this.props;
    const { chatId } = params;

    addMessage({ ...data, chatId });
  };

  render() {
    const { messages } = this.props;
    
    return (
      <Box p={3} mt={2} flexGrow={1}>
        <Messages messages={messages} />
        <FormMessage
          addNewMessage={this.addNewMessage}
          checkInputChange={this.checkInputChange}
        />
      </Box>
    );
  }
}

Chats.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (store, ownProps) => ({
  messages: getChatMessages(store, ownProps),
});

const mapDispatchToProps = {
  addMessage,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(muiStyles),
)(Chats);
