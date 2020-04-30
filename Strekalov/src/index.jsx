import React from "react";
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';
  
  ReactDOM.render(
    <HelloMessage name="Str" />,
    document.getElementById('hello-example')
  );