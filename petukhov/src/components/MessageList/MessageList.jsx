import React from "react";
import MessageItem from "../MessageItem";
import propTypes from "prop-types";

const MessageList = (props) => {

    const { messages } = props;

    const list = (<ul>
                    {messages.map((item, index) => (
                        <MessageItem key={index} item={item}/>
                    ))}
                </ul>);

    return list;
}

MessageList.propTypes = {
    messages: propTypes.array.isRequired,
}

export default  MessageList;