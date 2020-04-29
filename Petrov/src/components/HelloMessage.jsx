import React from "react";
import Example from "./Example";
import Message from "./Message";
import FormMessage from "./FormMessage";


class HelloMessage extends React.Component {
state = {
      messages: [],
    };


  addMessage = (name, text) => {
    this.setState((prev) => ({ messages: [...prev.messages, {id: (prev.messages.length+1), message: text, author: name}] }));
  }

  componentDidUpdate() {
    const { messages } = this.state;
    if (messages[messages.length - 1].author !== "Бот") {
      setTimeout(() => {
        this.setState(this.addMessage('Бот', 'привет, я Бот'));
      }, 1000);
    }
  }
  
  addNewMessage = (e) => {
   this.addMessage(e.author, e.text);
  };

  render() {
    const { messages } = this.state;
    const { name } = this.props;
    return (
      <div>
        <h2>Привет, {name}</h2>
        <Example />
        <FormMessage addNewMessage={this.addNewMessage} />
        <button onClick={ () => this.addMessage('me', 'Нормально')}> Click</button>
        <Message words={messages} />
      </div>
    );
  }
}

export default HelloMessage;
