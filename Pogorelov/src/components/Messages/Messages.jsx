import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./index.css";

const listStyles = {
  border: "1px solid #333",
  borderRadius: 3,
  minHeight: 300,
};

class Messages extends Component {
  render() {
    const { messages } = this.props;

    return (
      <ul className={styles.list} style={listStyles}>
        {messages.map(({ text, author }, index) => (
          <li
            key={index}
            className={cx(styles.list, {
              [styles.right]: author === "Bot",
              [styles.left]: author !== "Bot",
            })}
          >
            <p>{`${author}: ${text}`}</p>
          </li>
        ))}
      </ul>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      author: PropTypes.string,
    })
  ).isRequired,
};

export default Messages;
