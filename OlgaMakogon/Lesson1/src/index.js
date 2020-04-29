import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from "./components/HelloMassage"
  
  ReactDOM.render(React.createElement(HelloMessage, { name: "Саша" }), document.getElementById('hello-example'));