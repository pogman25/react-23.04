import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from "./components/HelloMessage"
  
  ReactDOM.render(React.createElement(HelloMessage, { name: "человек!" }), document.getElementById('hello-example'));