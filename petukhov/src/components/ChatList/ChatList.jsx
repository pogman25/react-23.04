import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

// function ListItemLink(props) {
//     return <ListItem button component="a" {...props} />;
// }

const ChatList = (props) => {

    const classes = useStyles();

    const chats = props.chats;

    const list = (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {
                    chats.map((chat) => (
                        <ListItem key={chat} button>
                            <ListItemIcon>
                                <ChatIcon />
                            </ListItemIcon>
                            <ListItemText primary={chat} />
                        </ListItem>
                    ))
                }
            </List>
        </div>
    );

    return list;
}

export default  ChatList;