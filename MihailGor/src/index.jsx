import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./components/HelloMessage";
import Button from "./components/Button";

<App>
  <HelloMessage name="Саша" />
  <p/>
  <Button />
</App>,

ReactDOM.render(
  <HelloMessage name="Саша" />,
  document.getElementById("hello-example")
);