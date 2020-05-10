import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./components/HelloMessage(function)";
// import HelloMessage from "./components/HelloMessage";

ReactDOM.render(
    <HelloMessage name="Taylor"/>,
    document.getElementById("hello-example")
);
