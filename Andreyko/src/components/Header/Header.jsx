import React, { Component } from 'react';

import './style.css'

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { chatName } = this.props;
    return (
      <>
        <h1 className="chat-heading">{`Чат ${chatName}`}</h1>
      </>
    )
  }
}