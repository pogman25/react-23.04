import React from 'react';
import Example from './Example';

class HelloMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            messages: []
        };
        this.addMessage = this.addMessage.bind(this);
    }

    addMessage() {
       this.setState(
           (prev) => ({messages: [...prev.messages, 'Normal']})
       )
    }

    render() {
        const messages = this.state.messages;
        return (
        <div>
            Привет, {this.props.name}
            <Example />
            <button onClick={this.addMessage}>Click</button>
            <ul>
                { messages.map((i, index) => (<li key={index}>{i}</li>)) }
            </ul>
        </div>
        );
    }
}

export default HelloMessage;