import React from 'react';

class MessageRender extends React.Component {
    constructor() {
      super();
  
      this.state = {
        messages: [],
      };
    }
  
    addMessage() {
      this.setState((prev) => ({ messages: [...prev.messages, " Нормально"] }));
    }
  
    render() {
      const { messages } = this.state;
      return (
        <div>
          <p> { messages } </p>
          <button onClick = { () => this.addMessage() } >Click</button>
        </div>
      )
    }
  }
  
  export default MessageRender;