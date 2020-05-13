import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link, useHistory } from 'react-router-dom'
import pageLinks from './page-links'
import styles from './ChatList.css'

class ChatList extends Component {
    render() {
        // const { chatList } = this.props;
        console.log(Object.values(pageLinks));
        return (
            <div className={styles.container}>
                <h3 className={styles.chatListTitle}>ChatList</h3>
                <List>
                    { Object.values(pageLinks).map(({to, title}) => (
                        <Link to={to} key={title}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </Link>
                    )) }
                </List>
            </div>
        )
    }
}

// ChatList.propTypes = {
//     chatList: PropTypes.arrayOf( PropTypes.string ).isRequired,
// }

export default ChatList;