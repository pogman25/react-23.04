import React from 'react';
import ChatList from '../ChatList'
import MessageField from '../MessageField'
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
        const { chatList } = this.state;
        const { name, lastName } = this.state.user;
        return (
            <div className={styles.container}>
                <Header name={name} lastname={lastName}/>
                <div className={styles.wrapper}>
                    <ChatList chatList={chatList}/>
                    <MessageField />
                </div>
                
            </div>
        )
    }
}

export default Layout;