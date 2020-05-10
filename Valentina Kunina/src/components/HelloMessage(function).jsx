import React, { useState, memo, useEffect } from "react";
import PropTypes from "prop-types";
import Example from "./Example";
import Counter from "./Counter";
import FormMessage from "./FormMessage";

const initialState = {
    messages: [
        { text: "Привет!", author: "User" },
        { text: "Как дела?", author: "User" },
    ],
    name: "Samon",
    visible: true,
};

const HelloMessage = ({ lastname }) => {
    // ({ lastname }) - деструктуризация входящего пропса, можно прописать props,
    // но тогда обращаться как к объекту - props.lastname
    //state = initialState; вместо классового state используется:

    const [messages, setMessages] = useState(initialState.messages);
    const [name, setName] = useState(initialState.name);
    const [isVisible, setVisibility] = useState(true);

    const toggle = () => {
        setVisibility((prev) => !prev);
    };

    const addMessage = () => {
        setMessages([...messages, { text: "Нормально" }]);
    };

    const addNewMessage = (message) => {
        setMessages([...messages, { text: message.text, author: message.author }]);
    };

    const changeName = () => {
        setName("Peter");
    };

    const reset = () => {
        setMessages(initialState.messages);
        setName(initialState.name);
    };

    const handleClick = () => {
        addMessage();
        changeName();
    };

    useEffect(() => {
        if (messages[messages.length - 1].author !== "Bot") {
            setTimeout(() => {
                setMessages([...messages, { text: "Привет, я Бот!", author: "Bot" }]),
                    setName("Bot");
            }, 500);
        }
    });

    return (
        <div>
            <h2>{`Hello, ${name} ${lastname}!`}</h2>
            <Example />
            {messages.map(({ text, author }, idx) => (
                <div key={idx}>{`${author}: ${text}`}</div>
            ))}
            <FormMessage addNewMessage={addNewMessage} />
            <button onClick={handleClick}>Ckick</button>
            <button onClick={reset}>Reset</button>
            <button onClick={toggle}>Visible</button>
            {isVisible && <Counter />}
        </div>
    );
};

HelloMessage.defaultProps = {
    lastname: "Ivanov",
};

HelloMessage.PropTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
};

export default memo(HelloMessage);
