import React from "react";
import MessageItem from "../MessageItem";
import propTypes from "prop-types";

const MessageField = (props) => {

    const { messages } = props;

    const list = (<ul>
                    {messages.map((item, index) => (
                        <MessageItem key={index} item={item}/>
                    ))}
                </ul>);

    return list;
}

MessageField.propTypes = {
    messages: propTypes.array.isRequired,
}

export default  MessageField;