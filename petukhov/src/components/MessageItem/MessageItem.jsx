import React from "react";
import style from "../MessageField/MessageField.css";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    messageBlock: {
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
    },
    userInfo: {
        marginRight: 20,
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
    const classes = useStyles();
    const { author, text } = props.item;
    return (
        <li className={classes.messageBlock}>
            <div className={classes.userInfo}>
                <Avatar className={classes.purple}>{author}</Avatar>
            </div>
            <div>{text}</div>
        </li>
    );
}

export default MessageItem;