import React, { PureComponent } from "react";
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

class HelloMessage extends PureComponent {
    state = initialState;

    addMessage = () => {
        const { messages } = this.state;
        this.setState({
            messages: [...messages, { text: "Нормально", author: "User" }],
            name: "Peter",
        });
    };

    componentDidUpdate() {
        const { messages } = this.state;
        if (messages[messages.length - 1].author !== "Bot") {
            setTimeout(() => {
                this.setState({
                    messages: [...messages, { text: "Привет, я Бот!", author: "Bot" }],
                    name: "Bot",
                });
            }, 500);
        }
    }

    reset = () => {
        this.setState(initialState);
    };

    toggle = () => {
        this.setState(({ visible }) => ({ visible: !visible }));
    };

    addNewMessage = (message) => {
        const { messages } = this.state;
        this.setState({ messages: [...messages, { text: message.text, author: message.author }] });
    };

    render() {
        const { messages, name, visible } = this.state;
        const { lastname } = this.props;

        return (
            <div>
                {/* this.props.name - если прилетают внешние пропсы */}
                <h2>{`Hello, ${name} ${lastname}`}</h2>
                <Example />
                {messages.map(({ text, author }, idx) => (
                    <div key={idx}>{`${author}: ${text}`}</div>
                ))}
                <FormMessage addNewMessage={this.addNewMessage} />
                <button onClick={this.addMessage}>Ckick</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.toggle}>Visible</button>
                {visible && <Counter />}
            </div>
        );
    }
}

HelloMessage.defaultProps = {
    lastname: "Ivanov",
};

HelloMessage.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
};

export default HelloMessage;
