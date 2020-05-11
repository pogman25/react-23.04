import React, { Component } from "react";
import PropTypes from "prop-types";
import Example from "../Example";
import FormMessage from "../FormMessage/FormMessage";
import styles from "./index.css";
import classname from 'classname';
 

class HelloMessage extends Component {
  

    state = {
      messages: [{ text : "Привет!" , author : 'bot' } , { text : "Как дела?" ,
      author : 'bot' }], 
    };



    addMessage = () => {
      this.setState(({ messages }) => ({
        messages: [...messages, { text: "привет", author: "User" }],
      }));
    };

    componentDidUpdate() {
      const { messages } = this.state;
      if (messages[messages.length - 1].author !== "Бот") {
        setTimeout(() => {
          this.setState(({ messages }) => ({
            messages: [...messages, { text: "привет, я бОТ", author: "Бот" }],
          }));
        }, 1000);
      }
    }

    addNewMessage = (data) => {
      this.setState(({messages}) => ({messages: [...messages, data]}))
    };

  render() {
    const { messages } = this.state;
    return (
      <div>
        <h2>Привет, {this.props.name}</h2>
        <ul className="MessageChat">
          
          {messages.map(({text, author}, index) => (
             <li key={index}> 
              <p className="Message">{`${author}: ${text}`}</p>
            </li>
          ))}          
        </ul>       
        <FormMessage addNewMessage={this.addNewMessage} />
        {/* <button onClick={this.addMessage}>Click</button> */}
      </div>
    );
  }
}

export default HelloMessage;
