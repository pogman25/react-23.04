
import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import FormMessage from '../../components/FormMessage';
import Message from '../../components/Message';
import { getChatMessages } from '../../selectors/chatsSelectors';
import { addMessage } from '../../actions/chatsActions';
import styles from './index.css';


class MessageField extends Component {
  componentDidMount() {}


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
          <div className= {styles.MessageField}>
          <h2>чат</h2>
          <Message words={messages} />      
          <FormMessage addNewMessage={this.addNewMessage} />
          </div>


    );
  }
}

const mapStateToProps = (store, ownProps) => ({
  messages: getChatMessages(store, ownProps),
});

const mapDispatchToProps = {
  addMessage,
};

MessageField.defaultProps = {
  messages: [],
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps))(MessageField);




