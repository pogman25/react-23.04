import React, { useState } from "react";
import Example from "./Example";
import Counter from './Counter';


const HelloMessage = ({name, lastname}) => {
  const[messages, setMessages] = useState(["Привет", "Как дела?"]);
  const [isVisible, setVisibility] = useState(true);

  const toggle = () => {
    setVisibility((prev) => !prev);
  };

  const addMessage = () => {
    setMessages((prev) => [...prev, "Нормально"]);
  };


  return (
    <div>
      <h2>Привет, {`${name} ${lastname}`}</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <p>{message}</p>
          </li>
        ))}
      </ul>
      <button onClick={addMessage}>Ответить</button>
      <button onClick={toggle}>Visible</button>
      {isVisible && <Counter />}
    </div>
  );
};

export default HelloMessage;