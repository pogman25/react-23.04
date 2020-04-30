import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import styles from './index.css';

class FormMessage extends Component {
  state = {
    text: '',
    author: '',
  };

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { addNewMessage } = this.props;
    const { text, author } = this.state;

    addNewMessage({ author, text });
  };

  render() {
    const { text, author } = this.state;

    return (
      <form className={styles.container} onSubmit={this.onSubmit}>
        <TextField
          id="standard-basic"
          label="Автор"
          name="author"
          onChange={this.onChange}
          value={author}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Текст сообщения"
          multiline
          rowsMax={4}
          onChange={this.onChange}
          value={text}
        />
        <Button type="submit">Add message</Button>
      </form>
    );
  }
}

export default FormMessage;
