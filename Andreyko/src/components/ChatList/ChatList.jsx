import React, { Component } from 'react';
import './style.css';

export default class ChatList extends Component {
  constructor(props) {
    super(props);
  }

  pickChat = (event) => {
    const target = event.target;
    if (target.tagName !== 'BUTTON') return;
    this.props.pickCallback(target.dataset.id);
  }

  render() {
    const { chatName } = this.props;

    return (
      <div className="chat-list">
        <div className="btn-container" onClick={this.pickChat}>
          <button type="button" data-id='0'>{chatName[0].name}</button>
          <button type="button" data-id='1'>{chatName[1].name}</button>
          <button type="button" data-id='2'>{chatName[2].name}</button>
          <button type="button" data-id='3'>{chatName[3].name}</button>
        </div>
      </div>
    )
  }
}