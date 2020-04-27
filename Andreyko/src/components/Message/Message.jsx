import React from 'react';
import './style.css'

class Message extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };
  }

  addMessage() {
    const { messages } = this.state;

    this.setState({
      messages: [...messages, 'hello']
    })
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <button onClick={() => this.addMessage()} className='btn-send'>Отправить запрос</button>
        <div>
          {messages.map((item, i) => (
            <p key={i} className='message'>
              {item + ' ' + i}
            </p>
          ))}
        </div>
      </div>
    )
  }
}

export default Message;