import React from "react";
import Example from "./Example";

const initialState = {
    messages: ["Привет!", "Как дела?"],
    name: 'Samon'
}

class HelloMessage extends React.Component {
    state = initialState;

    addMessage = () => {
        const { messages } = this.state;
        this.setState({ messages: [...messages, "Нормально"], name: 'Peter' });
    }

    reset = () => {
        this.setState(initialState)
     }

    render() {
        const { messages, name } = this.state;
        return (
            <div>
                <h2>Hello {name}</h2>
                <Example />
                {messages.map((message, idx) => (
                    <div key={idx}>{message}</div>
                ))}
                <button onClick={this.addMessage}>Ckick</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default HelloMessage;
