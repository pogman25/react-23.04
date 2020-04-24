import React from "react"
import Example from "./Example"

class HelloMessage extends React.Component {
  constructor() {
    super()

    this.state = { messages: [] }

    this.addMessage = this.addMessage.bind(this)
  }

  addMessage() {
    this.setState((prev) => ({ messages: [...prev.messages, {msg: "Нормально", id: "id-"+(prev.messages.length+1)}] }))
  }

  render() {
    const { messages } = this.state
    return (
      <div>
        <h2>Привет, {this.props.name}</h2>
        <Example />
        <button onClick={this.addMessage}>Click</button>
        {messages.map(data => <p key={data.id}>{data.msg}</p>)}
      </div>
    )
  }
}

export default HelloMessage
