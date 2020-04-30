import React, { useState } from 'react';
import './style.css'

const HelloMessage = (props) => {
  const [messages, setMessages] = useState(["привет", "как дела?"]);

  const addMessage = () => {
    setMessages((prev) => [...prev, "супер!"]);
  };

  return (
    <>
      <div className='content'>
        Привет, {props.name}
      </div>
      <button onClick={addMessage} className='btn-send'>Отправить запрос</button>
      <div>
        {messages.map((item, i) => (
          <p key={i} className='message'>
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default HelloMessage;