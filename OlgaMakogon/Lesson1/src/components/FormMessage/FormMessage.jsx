import React, { Component } from "react";
import styles from "./index.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


class FormMessage extends Component {
  state = {
    messages: [],
  };

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addNewMessage } = this.props;
    const { text, author } = this.state;
    addNewMessage({author, text})
  };

  render() {
    const { text, author } = this.state;
    

    return (
      <form>
        <TextField
          type="text"
          label="Author"
          name="author"
          onChange={this.onChange}
          value={author}
          variant="outlined"
        />
        <TextField 
        label="Text"
        autoFocus
        name="text"
        multiline 
        onChange={this.onChange} 
        value={text}
        placeholder="Введите сообщение"
        variant="outlined" />
        <Button
        variant="contained"
        color="primary"
        onClick={this.onSubmit}
        >
        Send
      </Button>
      </form>
    );
  }
}

export default FormMessage;