import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./components/HelloMessage";

ReactDOM.render(
	<HelloMessage name="Ivan"/>,
	document.getElementById("hello-example")
);