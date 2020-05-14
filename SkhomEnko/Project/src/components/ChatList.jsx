import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core/'
import dayjs from 'dayjs'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  link: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: theme.zIndex.appBar,
    textDecoration: "none",
    color: "white"
  }
}))

export default function ChatList(props) {
    const classes = useStyles()
    const { select, current, users: chats_data} = props

    return (
        <List className={classes.root} disablePadding>
            {chats_data.map(({user}, index) => (
                <ListItem alignItems="flex-start" key={`id-${index}`} selected={index === current}>
                    <Link to={`/chat/${index}`} key={`chat-${index}`} onClick={() => select(index)} className={classes.link} />
                    <ListItemAvatar>
                        <Avatar>
                            <img src={user.picture.thumbnail} width="48" alt={`${user.name.last} ${user.name.first}`} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={`${user.name.last} ${user.name.first}`} secondary={dayjs(user.registered).fromNow()} />
                </ListItem>
            ))}
        </List>
    )
}