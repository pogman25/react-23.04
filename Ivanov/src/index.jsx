import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';

ReactDOM.render(
  <HelloMessage name="Саша" lastname="Погорелов"/>,
  document.getElementById('hello-example')
);