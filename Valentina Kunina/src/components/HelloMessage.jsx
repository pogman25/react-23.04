import React from 'react';
import Example from './Example';

class HelloMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            messages: ['Привет!', 'Как дела?'],
        };

        this.addMessage = this.addMessage.bind(this);
    }

    addMessage() {
        this.setState({ messages: [...this.state.messages, 'Нормально']});
    }

    render() {
        const { messages } = this.state;
        return (
        <div>
            <h2>Hello {this.props.name}</h2>
            <Example />
            { messages.map((message, idx) => <div key={idx}>{ message }</div>) }
            <button onClick={ this.addMessage }>Ckick!</button>
        </div>
      );
    }
}

export default  HelloMessage;
