import React, { useState } from "react";
import Example from "./Example";
import Counter from './Counter'


const HelloMessage = () => {
  const[messages, setMessages] = useState(["Привет", "Как дела?"]);

  const addMessage = () => {
    setMessages((prev) => [...prev, "Нормально"]);
  }

  return (
    <div>
      <h2>Привет, {name}</h2>
      {/* '<Example /> */}
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <p>{message}</p>
          </li>
        ))}
      </ul>
      <button onClick={addMessage}>Ответить</button>
      <Counter />
    </div>
  );
}

export default HelloMessage;
  