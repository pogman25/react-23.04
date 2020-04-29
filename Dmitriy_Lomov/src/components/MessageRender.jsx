import React from 'react';

class MessageRender extends React.Component {
    state = {
        messages: ["Привет", "Как дела?"],
      };
            
    addMessage = () => {
      this.setState((prev) => ({ messages: [...prev.messages, "Нормально"] }));
    }
    
    render() {
      const { messages } = this.state;
      return (
        <div>
          {messages.map((item, i) => (
            <p key={i}>
              {`${item}`}
            </p>
          ))}
          <button onClick = {this.addMessage} >Click</button>
        </div>
      )
    }
  }
  
  export default MessageRender;