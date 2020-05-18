import React from "react";
import propTypes from "prop-types";
import style from "./MessageList.css"

const MessageList = (props) => {

    const { messages } = props;

    const list = (<ul>
                    {messages.map(({ text, author }, index) => (
                        <li key={index}>
                            <p className={style.title}>{author}</p>
                            <h2>{text}</h2>
                        </li>
                    ))}
                </ul>);

    return list;
}

MessageList.propTypes = {
    messages: propTypes.array.isRequired,
}

export default  MessageList;