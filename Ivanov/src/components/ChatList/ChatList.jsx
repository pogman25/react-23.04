import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Toolbar,
} from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import pageLinks from './page-links'
import styles from './ChatList.css'

class ChatList extends Component {
    render() {
        return (   
            <Drawer 
                className={styles.drawer} 
                component="nav"
                variant="permanent"
                classes={{ paper: styles.drawerpaper}}
            >
                <Toolbar />
                <List>
                    { Object.values(pageLinks).map(({to, title}) => (
                        <Link to={to} key={title} className={styles.chatlink}>
                            <ListItem button>
                                <ListItemText primary={title} className={styles.chatname}/>
                            </ListItem>
                        </Link>
                    )) }
                </List>
            </Drawer>
        )
    }
}

// ChatList.propTypes = {
//     chatList: PropTypes.arrayOf( PropTypes.string ).isRequired,
// }

export default ChatList;