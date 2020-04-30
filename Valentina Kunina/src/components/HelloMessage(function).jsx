import React, { useState } from "react";
import Example from "./Example";

const HelloMessage = () => {
    //state = initialState; вместо классового state используется:
    [messages, setMessages] = useState(["Привет!", "Как дела?"]);

    const addMessage = () => {
        const { messages } = this.state;
        this.setState({ messages: [...messages, "Нормально"], name: "Peter" });
    };

    return (
        <div>
            <h2>Hello {name}</h2>
            <Example />
            {messages.map((message, idx) => (
                <div key={idx}>{message}</div>
            ))}
            <button onClick={addMessage}>Ckick</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    reset = () => {
        this.setState(initialState);
    };
};

export default HelloMessage;
