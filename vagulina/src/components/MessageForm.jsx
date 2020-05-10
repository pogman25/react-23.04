import React, { PureComponent } from "react";
import ReactDom from "react-dom";

class MessageForm extends PureComponent {
  state = { text: "", author: "" };

  componentDidMount() {
    console.log("MessageForm did mount");
  }

  componentDidUpdate() {
    console.log("MessageForm did update");
  }

  onChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addNewMessage } = this.props;
    addNewMessage(this.state); // здесь можно использовать this.state или лучше создать новый объект?
    this.setState({ text: "", author: "" });
  };

  render() {
    console.log("MessageForm render");
    const { text, author } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={this.onChangeText}
        />
        <label>Message: </label>
        <textarea name="text" value={text} onChange={this.onChangeText} />
        <button>Send</button>
      </form>
    );
  }
}

export default MessageForm;
