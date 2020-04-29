import React, { Component } from "react"
import './FormMessage.css'

class FormMessage extends Component {
  state = {
    text: "",
    author: this.props.uname,
    showEmojis: false,
    emojis: [..."😀😁😂🤣😃😄😅😆😉😊😋😎😍😘🥰😗😙😚🙂🤗🤩🤔🤨😐😑😶🙄😏😣😥😮🤐😯😪😫😴😌😛😜😝🤤😒😓😔😕🙃🤑😲😞😟😤😢😭😦😧😨😩🤯😬😰😱🥵🥶🤪😵😡😠🤬😷🤒🤕🤢🤮🤧😇🤠🤡🥳🥴🥺🤥🤫🤭🧐🤓😈👿👹👺💩😺😸😹😻😼😽🙀😿😾👍👎👊✊🤛🤜🤞✌️🤟🤘👌👈👉👆👇☝️✋🤚🖐🖖"]
  }

  onChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { addMessage, uname } = this.props
    const { text } = this.state
    this.setState(() => ({ text: "" }))
    addMessage({id: 5, author: uname, message: (text === "" ? "Пустое сообщение" : text), timestamp: new Date().getTime()})
  }

  onEmojiListToggle = (e) => {
    e.preventDefault()
    this.setState(({ showEmojis }) => ({ showEmojis: !showEmojis }))
  }

  onEmojiSelect = (e) => {
    const emojik = e.target.innerHtml
    e.preventDefault()
    this.setState(({ showEmojis, text }) => ({ showEmojis: !showEmojis, text: text+emojik }))
    console.log("selected emoji:", emojik)
  }

  render() {
    const { text, showEmojis, emojis } = this.state
    return (
      <form className="panel" onSubmit={this.onSubmit}>
        <textarea 
          name="text" 
          onChange={this.onChange} 
          onKeyDown={(e) => {if (!e.shiftKey && e.key == "Enter") this.onSubmit(e)} } 
          value={text} 
          autoFocus={true}
        />
        <div className="emoji-selector" style={{display: "inline-block"}}>
          <div className={`emoji-list${showEmojis ? '' : ' hide'}`} onClick={this.onEmojiSelect}>
            {emojis.map((char, index) => (
              <a href="" key={index}>{char}</a>
            ))}
          </div>
          <button className="emoji-list-toggle" onClick={this.onEmojiListToggle}></button>
        </div>
        <button type="submit">✈️ SEND</button>
      </form>
    )
  }
}

export default FormMessage
