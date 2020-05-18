import React from "react";
import style from "../MessageField/MessageField.css";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    userAns: {
        border: "1px solid rgba(0, 0, 0, 0.23)",
        padding: "20px",
        alignSelf: "flex-start",
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
        minWidth: "100%"
    },
    botAns: {
        border: "1px solid rgba(0, 0, 0, 0.23)",
        padding: "20px",
        alignSelf: "flex-end",
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
        minWidth: "100%"
    },
    userInfo: {
        marginRight: 20,
    },
    botInfo: {
        marginLeft: 20,
        order: 2
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));


const MessageItem = (props) => {
    const { author, text } = props.item;

    const classes = useStyles();

    const userMessage = (
        <li className = {classes.userAns}>
            <div className={classes.userInfo}>
                <Avatar className={classes.purple}>{author}</Avatar>
            </div>
            <div>{text}</div>
        </li>

    )

    const botMessage = (
        <li className = {classes.botAns}>
            <div className={classes.botInfo}>
                <Avatar className={classes.orange}>{author}</Avatar>
            </div>
            <div>{text}</div>
        </li>
    )

    return (
        (author !== "Bot" ? userMessage : botMessage)
    );
}

export default MessageItem;