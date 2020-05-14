import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
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
        <Input 
          placeholder="Напишите сообщение..." 
          inputProps={{ 'aria-label': 'description' }} 
          name="text"
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={text}
          className={styles.input}
          autoFocus
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
        >
          Send 
        </Button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  addNewMessage: PropTypes.func.isRequired,
};

export default FormMessage;
