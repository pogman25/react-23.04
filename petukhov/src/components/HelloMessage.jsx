import React, { useState } from "react";

const HelloMessage = ({ userName }) => {

    const [messages, setMessages] = useState(['Привет!', 'Как дела?']);

    const addMessage = () => {
        setMessages(prev => [...prev, "Нормально..."]);
    }

    return (
        <div>
            <h2>Hello, {userName}!</h2>
            <button onClick={addMessage}>Add list item</button>
            <ul>
                {messages.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HelloMessage;