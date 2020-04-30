import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage() {
    this.setState((prevState) => ({messages: [...prevState.messages, "add"]}));
  }

  render() {
    const {messages} = this.state;
    return (
      <div>
        Привет, {this.props.name}
        <button onClick={this.addMessage}>click me!</button>
        {messages.map(i => <span key={i}>{i}</span>)}
      </div>
    );
  }
}
  
export default HelloMessage;