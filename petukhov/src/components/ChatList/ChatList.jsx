import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const ChatList = (props) => {

    const classes = useStyles();

    const chats = props.chats;

    const list = (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {
                    chats.map(({ to, title }) => (
                        <ListItem key={title} button>
                            <ListItemIcon>
                                <ChatIcon />
                            </ListItemIcon>
                            <Link to={to}>{title}</Link>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    );

    return list;
}

export default  ChatList;