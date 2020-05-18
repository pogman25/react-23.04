import React, { useState, useEffect, memo } from "react";
import propTypes from "prop-types";
import FormMessage from "../FormMessage";
import MessageList from "../MessageList";
import { makeStyles } from '@material-ui/core/styles';
import style from "./HellowMessage.css";

const HelloMessage = ({ userName }) => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    }));

    const classes = useStyles();


    const [messages, setMessages] = useState([{text: 'Привет!', author: 'Anton'}, {text: 'Как дела!', author: 'Anton'}]);

    useEffect(() => {
        if(messages[messages.length-1].author !== "Bot") {
            setTimeout(() => {
                setMessages(prev => [...prev, { text: "Привет! Я бот.", author: "Bot" }]);
            }, 1000)
        }
    })

    const addMessage = () => {
        setMessages(prev => [...prev, { text: "Нормально...", author: "Anton" }]);
    }

    const addNewMessage = (e) => {
        const { author, text } = e;
        setMessages(prev => [...prev, { text: text, author: author }]);
    }

    return (
        <div className={classes.paper}>
            <h2 className={style.title}>Hello, {userName}!</h2>
            <FormMessage addNewMessage2={addNewMessage}/>
            <button onClick={addMessage}>Add list item</button>
            <MessageList messages={messages}/>
        </div>
    );
}

HelloMessage.defaultProps = {
    userName: "Петухов"
}

HelloMessage.propTypes = {
    userName: propTypes.string
}

export default memo(HelloMessage);