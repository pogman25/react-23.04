import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import styles from './index.css';

class FormMessage extends Component {
  state = {
    text: '',
    author: 'Я',
  };

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  sendMessage = () => {
    const { addNewMessage } = this.props;
    const { text, author } = this.state;

    addNewMessage({ author, text });
    this.setState({
      text: '',
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.sendMessage();
  };

  onKeyDown = e => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      this.sendMessage();
    }
  };

  render() {
    const { text, author } = this.state;

    return (
      <form className={styles.container} noValidate autoComplete="off" onSubmit={this.onSubmit}>
        <TextField
          id="standard-multiline-flexible"
          //label="Текст сообщения"
          //multiline
          rowsMax={4}
          placeholder="Напишите сообщение..." 
          inputProps={{ 'aria-label': 'description' }} 
          name="text"
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={text}
          className={styles.input}
          autoFocus
        />
        <IconButton type="submit" color="primary">
          <SendIcon />
        </IconButton>
      </form>
    );
  }
}

FormMessage.propTypes = {
  addNewMessage: PropTypes.func.isRequired,
};

export default FormMessage;
