import React, { useState, useEffect, memo } from "react";
import propTypes from "prop-types";
import FormMessage from "./FormMessage";

const HelloMessage = ({ userName }) => {

    const [messages, setMessages] = useState([{text: 'Привет!', author: 'Anton'}, {text: 'Как дела!', author: 'Anton'}]);

    useEffect(() => {
        if(messages[messages.length-1].author !== "Bot") {
            setTimeout(() => {
                setMessages(prev => [...prev, { text: "Привет! Я бот.", author: "Bot" }]);
            }, 1000)
        }
    })

    const addMessage = () => {
        setMessages(prev => [...prev, { text: "Нормально...", author: "Anton" }]);
    }

    const addNewMessage = (e) => {
        const { author, text } = e;
        setMessages(prev => [...prev, { text: text, author: author }]);
    }

    return (
        <div>
            <h2>Hello, {userName}!</h2>
            <FormMessage addNewMessage2={addNewMessage}/>
            <button onClick={addMessage}>Add list item</button>
            <ul>
                {messages.map(({ text, author }, index) => (
                    <li key={index}>
                        <p>{author}</p>
                        <h2>{text}</h2>
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