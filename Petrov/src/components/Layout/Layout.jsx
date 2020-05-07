import React, {Component} from 'react';
import Header from '../Header';
import MessageField from '../MessageField';
import ChatList from '../ChatList';
import styles from './index.css';
class Layout extends Component {


  
    render() {
        return (
            <div className={styles.layout}>
            <Header />
                <div className={styles.body}>
                <ChatList />
                <MessageField />
                </div>
            </div>
        );
  
    }
  }
  
  export default Layout;