import React, { useState, useEffect } from "react";

import MessageField from "../../components/MessageField";
import FormMessage from "../../components/FormMessage";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainMessageField: {
        flexShrink: 0,
    }
}));

const Chat = () => {

    const classes = useStyles();

    const addNewMessage = (e) => {
        const { author, text } = e;
        setMessages(prev => [...prev, { text: text, author: author }]);
    }

    const [messages, setMessages] = useState([{text: 'Привет!', author: 'US'}, {text: 'Как дела!', author: 'US'}]);

    useEffect(() => {
        if(messages[messages.length-1].author !== "Bot") {
            setTimeout(() => {
                setMessages(prev => [...prev, { text: "Привет! Я бот.", author: "Bot" }]);
            }, 1000)
        }
    })

    return (
        <div>
            <MessageField
                className={classes.mainMessageField}
                messages={messages}/>
            <FormMessage addNewMessage2={addNewMessage}/>
        </div>
    );
}

export default  Chat;