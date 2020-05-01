import React from 'react';
import Example from './Example';
import MessageField from "./MessageField"

class HelloMessage extends React.Component {
    state = {
            messages: []
        };

    addMessage = () => {
       this.setState(({ messages }) => ({
        messages: [...messages, { text: "привет", author: "Nick" }],
      }));
    }

    componentDidUpdate() {
        const { messages } = this.state;
        if (messages[messages.length - 1].author !== "Бот") {
                setTimeout(() => {
                this.setState(({ messages }) => ({
                    messages: [...messages, { text: "привет, я Бот", author: "Бот" }],
                }));
                }, 1000);
        }
    }
    
    addNewMessage = (text, author) => {
        console.log(`${author}: ${text}`);
        this.setState(({ messages }) => ({
            messages: [...messages, { text: text, author: author }],
        }));
    };

    render() {
        const messages = this.state.messages;
        return (
        <div>
            Привет, {this.props.name}
            <Example />
            <button onClick={this.addMessage}>Click</button>
            <MessageField addNewMessage={this.addNewMessage} />
            <ul>
                { messages.map((i, index) => (<li key={index}>{`${i.author}: ${i.text}`}</li>)) }
            </ul>
        </div>
        );
    }
}

export default HelloMessage;