import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage/HelloMessage';
import Message from './components/Message/Message';

ReactDOM.render(
  <React.Fragment>
    <HelloMessage name='Саша' />
    <Message />
  </React.Fragment>,
  document.getElementById('hello')
);