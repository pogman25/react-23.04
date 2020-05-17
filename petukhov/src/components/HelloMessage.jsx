import React, { useState, useEffect, memo } from "react";
import propTypes from "prop-types";

const HelloMessage = ({ userName }) => {

    const [messages, setMessages] = useState([{text: 'Привет!', author: 'Anton'}, {text: 'Как дела!', author: 'Anton'}]);

    useEffect(() => {
        if(messages[messages.length-1].author === "Anton") {
            setTimeout(() => {
                setMessages(prev => [...prev, { text: "Привет! Я бот.", author: "Bot" }]);
            }, 1000)
        }
    })

    const addMessage = () => {
        setMessages(prev => [...prev, { text: "Нормально...", author: "Anton" }]);
    }

    return (
        <div>
            <h2>Hello, {userName}!</h2>
            <button onClick={addMessage}>Add list item</button>
            <ul>
                {messages.map((item, index) => (
                    <li key={index}>
                        <h2>{item.author}</h2>
                        <h2>{item.text}</h2>
                        <hr/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

HelloMessage.defaultProps = {
    userName: "Петухов"
}

HelloMessage.propTypes = {
    userName: propTypes.string
}

export default memo(HelloMessage);