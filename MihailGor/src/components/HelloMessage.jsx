import React, { useState } from "react";
import Example from "./Example";
import Counter from './Counter'


const HelloMessage = () => {
  const[messages, setMessages] = useState(["Привет", "Как дела?"]);

  const addMessage = () => {
    setMessages((prev) => [...prev, "Нормально"]);
  }

  addMessage() {
    this.setState((prev) => ({ messages: [...prev.messages, "Нормально"] }));
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <h2>Привет, {this.props.name}</h2>
        <Example />
        {messages.map((message, index) => (
        <ul>
          <li key={index}>
            <p>{message}</p>
          </li>
        </ul>
        ))}
      <button onClick={addMessage}>Ответить</button>
      <Counter />
    </div>
  );
}

export default HelloMessage;