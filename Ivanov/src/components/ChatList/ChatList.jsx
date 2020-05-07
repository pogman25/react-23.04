import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import styles from './ChatList.css'

class ChatList extends Component {
    render() {
        const { chatList } = this.props;

        return (
            <div className={styles.container}>
                <h3 className={styles.chatListTitle}>ChatList</h3>
                <List>
                    { chatList.map((chatListItem, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={chatListItem} />
                        </ListItem>
                    )) }
                </List>
            </div>
        )
    }
}

ChatList.propTypes = {
    chatList: PropTypes.arrayOf( PropTypes.string ).isRequired,
}

export default ChatList;