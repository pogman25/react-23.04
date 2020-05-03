import React, { Component } from "react";
import Counter from './Counter';

class HelloMessage extends Component {
    state = {
        messages: [],
    };

    addMessage = () => {
        this.setState(({ messages }) => ({
            messages: [...messages, { text: "Привет!", author: "Пользователь" }]
        }));
    };

    componentDidUpdate() {
        const { messages } = this.state;
        if (messages[messages.length - 1].author !== "Терминатор") {
            setTimeout(() => {
                this.setState(({ messages }) => ({
                    messages: [...messages, { text: "Мне нужна твоя одежда!", author: "Терминатор" }]
                }));
            }, 1000);
        }
    }

    render() {
        const { name, nickname } = this.props;
        const { messages } = this.state;
        return (
            <div>
                <h2>{`Привет! Я ${nickname} по имени ${name} o_o`}</h2>
                <ul>
                    {messages.map(({ text, author }, index) => (
                        <li key={index}>{`${author}: ${text}`}</li>
                    ))}
                </ul>

                <button onClick={this.addMessage}>Click</button>
                <Counter />
            </div>
        );
    }
}

export default HelloMessage