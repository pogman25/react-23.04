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
    this.setState((prevState) => ({messages: [...prevState.messages, " clicked"]}));
  }

  render() {
    const {messages} = this.state;
    return (
      <div>
        <h1>Привет, {this.props.name}</h1>
        <button onClick={this.addMessage}>click me!</button>
        {messages.map((val, i) => <span key={i}>{val}{i}</span>)}
      </div>
    );
  }
}
  
export default HelloMessage;