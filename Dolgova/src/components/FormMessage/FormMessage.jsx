import React, { Component } from 'react';
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
        <input type="text" name="author" onChange={this.onChange} value={author} />
        <textarea name="text" onChange={this.onChange} value={text} />
        <button type="submit">Add message</button>
      </form>
    );
  }
}

export default FormMessage;
