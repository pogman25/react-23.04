import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class HelloMessage extends React.Component {
 
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  state = {
    messages: []
  };

  addMessage = () => {
    this.setState((prevState) => ({messages: [...prevState.messages, " clicked"]}));
  };

  render() {
    const {messages} = this.state;
    return (
      <div>
        <h1>Привет, {this.props.name}</h1>
        <button onClick={this.addMessage}>click me!</button>
        <div>{messages.map((val, i) => <span key={i}>{val}{i}</span>)}</div>
      </div>
    );
  }
}
  
//export default HelloMessage;