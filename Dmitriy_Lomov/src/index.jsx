import React from "react";
import ReactDOM from "react-dom";
import MessageRender from "./components/MessageRender";
import ChatBot from "./components/ChatBot";

ReactDOM.render(
  <div>
    <MessageRender />
    <hr />
    <ChatBot name="Dmitriy" />
  </div>,

  document.getElementById("app")
);
