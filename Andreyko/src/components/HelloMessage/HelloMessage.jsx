import React from 'react';
import './style.css'

const HelloMessage = (props) => (
  <div className='content'>
    Привет, {props.name}
  </div>
)

export default HelloMessage;