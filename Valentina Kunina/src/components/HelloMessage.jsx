import React from 'react';
import Example from './Example';

class HelloMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            messages: [],
        };

        this.addMessage = this.addMessage.bind(this);
    }

    addMessage() {
        this.setState();
    }

    render() {
      return (
        <div>
            Hello <h2>{this.props.name}</h2>
            <Example />
            <button onClick={ this.addMessage }></button>
        </div>
      );
    }
}

export default  HelloMessage;
