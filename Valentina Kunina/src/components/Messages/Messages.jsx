import React, { Component } from "react";
import PropTypes from "prop-types";
import MessageItem from "../MessageItem";
import styles from "./index.css";
import cx from "classnames";

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
                {messages.map(({ author, text }, idx) => ( //{ author, text } = item
                    <MessageItem key={idx} author={author} text={text}/> // author={author} text={text} = {...item}
                ))}
            </ul>
        );
    }
}

Messages.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string,
            text: PropTypes.string,
        })
    ),
};

export default Messages;
