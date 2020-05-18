import React, { useState, useEffect, memo } from "react";
import propTypes from "prop-types";
import Header from "../Header";
import ChatList from "../ChatList";
import FormMessage from "../FormMessage";
import MessageField from "../MessageField";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
    },
    mainField: {
        display: "flex",
        flexDirection: "column",
        flex: "1 0 auto",
    },
    mainMessageField: {
        flexShrink: 0,
    }
}));

const Layout = () => {

    const classes = useStyles();



    const [messages, setMessages] = useState([{text: 'Привет!', author: 'US'}, {text: 'Как дела!', author: 'US'}]);

    useEffect(() => {
        if(messages[messages.length-1].author !== "Bot") {
            setTimeout(() => {
                setMessages(prev => [...prev, { text: "Привет! Я бот.", author: "Bot" }]);
            }, 1000)
        }
    })

    const addNewMessage = (e) => {
        const { author, text } = e;
        setMessages(prev => [...prev, { text: text, author: author }]);
    }

    return (
        <div className={classes.root}>
            <Header />
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <ChatList chats={['chat 1', 'chat 2', 'chat 3']}/>
                </Grid>
                <Grid item xs>
                    <div className={classes.mainField}>
                        <MessageField
                            className={classes.mainMessageField}
                            messages={messages}/>
                        <FormMessage addNewMessage2={addNewMessage}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

Layout.defaultProps = {
    userName: "Петухов"
}

Layout.propTypes = {
    userName: propTypes.string
}

export default memo(Layout);