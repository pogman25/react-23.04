import React from 'react';
import PropTypes from 'prop-types'
import {CssBaseline} from '@material-ui/core'
import ChatList from '../ChatList'
import Header from '../Header'
import styles from './Layout.css'

class Layout extends React.Component {
    state = {
        user: {
            name: 'Nick',
            lastName: 'Johnson'
        }
    };

    render() {
        const { children } = this.props;
        const { name, lastName } = this.state.user;
        return (
            <div className={styles.root}>
                <CssBaseline />
                <Header name={name} lastname={lastName}/>
                <ChatList />
                <main className={styles.wrapper}>    
                    { children }
                </main>
                
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;