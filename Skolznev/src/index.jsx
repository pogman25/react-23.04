import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./components/HelloMessage";

ReactDOM.render(
    <HelloMessage name="Валера" nickname="Терминатор" />,
    document.getElementById('hello-example')
)