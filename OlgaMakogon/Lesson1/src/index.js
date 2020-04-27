import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from "./components/HelloMassage"
  
  ReactDOM.render(React.createElement(HelloMessage, { name: "Саша" }), document.getElementById('hello-example'));

  const Massenger = ({messages}) => {
      const sendMassage = () => {
        messages.push({name:"test", content:"Нормально"});
        renderApp;
      }
      return (
          <div>
          <button onClick={sendMassage}>Send message</button>
          </div>
      )
  }
  function renderApp() { (Massenger, { name:"test" }), document.getElementById('hello-example'));
  } 