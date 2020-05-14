import React, { Component } from 'react';
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./index.css";

class Messages extends Component {
    render() {
        const { messages } = this.props;
        return (
            <ul className={styles.list}>
                {messages.map(({ text, author }, index) => (
                    <li key={index} className={cx(styles.list, {
                        [styles.colorBot]: author === 'bot',
                        [styles.colorUser]: author !== 'bot',
                    })}>
                    {`${text}`}
                    <div className={styles.author}>{author}</div>
                    </li>
                ))}
            </ul>
        )
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