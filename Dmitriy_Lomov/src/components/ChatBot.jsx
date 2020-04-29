import React from "react";
import PropTypes from "prop-types";
import FormMessage from "./FormMessage";

class ChatBot extends React.Component {
  state = {
    messages: [],
  };

  addMessage = () => {
    this.setState(({ messages }) => ({
      messages: [...messages, { text: "Привет", author: "DimkaLom" }],
    }));
  };

  componentDidUpdate() {
    const { messages } = this.state;
    if (messages[messages.length - 1].author !== "Бот") {
      setTimeout(() => {
        this.setState(({ messages }) => ({
          messages: [...messages, { text: "Привет, я БОТ!", author: "Бот" }],
        }));
      }, 1000);
    }
  }

  addNewMessage = ({ text, author }) => {
    this.setState(({ messages }) => ({
      messages: [...messages, { text: text, author: author }],
    }));
  };

  render() {
    const { name, lastname } = this.props;
    const { messages } = this.state;

    return (
      <div>
        <h2>{`Привет, ${name} ${lastname}`}</h2>
        <ul>
          {messages.map(({ text, author }, index) => (
            <li key={index}>
              <p>{`${author}: ${text}`}</p>
            </li>
          ))}
        </ul>
        <button onClick={this.addMessage}>Click</button>
        <FormMessage addNewMessage={this.addNewMessage} />
      </div>
    );
  }
}

ChatBot.defaultProps = {
  lastname: "Lomov",
};

ChatBot.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string,
  author: PropTypes.string,
  text: PropTypes.string,
};

export default ChatBot;
