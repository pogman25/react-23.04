import React, { Component } from "react";

class FormMessage extends Component {
  state = {
    text: "",
    author: "",
  };

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { addNewMessage } = this.props;

    addNewMessage(this.state);
  };

  render() {
    const { text, author } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="author"
            onChange={this.onChange}
            value={author}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="text"
            onChange={this.onChange}
            value={text}
            required
          />
        </label>
        <button>Add message</button>
      </form>
    );
  }
}

export default FormMessage;
