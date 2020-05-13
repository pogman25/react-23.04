import React from 'react';
import PropTypes from 'prop-types'
import ChatList from '../ChatList'
import Header from '../Header'
import styles from './Layout.css'

class Layout extends React.Component {
    state = {
        chatList: ['First', 'Second', 'Third'],
        user: {
            name: 'Nick',
            lastName: 'Johnson'
        }
    };

    render() {
        const { children } = this.props;
        const { name, lastName } = this.state.user;
        return (
            <div className={styles.container}>
                <Header name={name} lastname={lastName}/>
                <div className={styles.wrapper}>
                    <ChatList />
                    { children }
                </div>
                
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;