import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
    state = {
        messages: [{text: 'Hello!', author: 'Computer'}, {text: 'How do you do?', author: 'Computer'}],
    };

    updateState = (text, author) => {
        this.setState((prevState) => ({messages: [...prevState.messages, {text: text, author: author}]}));
    }

    handleClick = () => {
        this.updateState('I\'m OK', 'User');
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => this.updateState('This is bot...', 'Robot'), 1000);
        }
    }

    render() {
        const messageElements = this.state.messages.map((message, id) => (
            <Message key={id} text={message.text} author={message.author} />
        ));
        return <div>
            {messageElements}
            <button onClick={this.handleClick}>Send message</button>
        </div>;
    }
}