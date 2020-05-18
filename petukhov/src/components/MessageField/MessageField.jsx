import React from "react";
import MessageItem from "../MessageItem";
import propTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingLeft: "0px",
    },
}));

const MessageField = (props) => {

    const classes = useStyles();

    const { messages } = props;

    const list = (<ul className={classes.root}>
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