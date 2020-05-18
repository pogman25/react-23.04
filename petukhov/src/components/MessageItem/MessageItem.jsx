import React from "react";
import style from "../MessageList/MessageList.css";

const MessageItem = (props) => {
    const { author, text } = props.item;
    return (
        <li>
            <p className={style.title}>{author}</p>
            <h2>{text}</h2>
        </li>
    );
}

export default MessageItem;