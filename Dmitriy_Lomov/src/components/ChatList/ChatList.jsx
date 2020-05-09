import React, { Component } from 'react';
import { List } from '@material-ui/core';

const styles = {
  list: {
    flex: '1 1 30%',
    textAlign: 'center',
    border: '1px solid #333',
    borderRadius: 5,
    background: '#ddd',
  },
  item: {
    padding: 5,
  },
  activeItem: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    textDecoration: 'underline',
    padding: 10,
    background: 'lightblue',
    borderRadius: 5,
    boxShadow: '0 0 2px #000',
  },
};

class ChatList extends Component {
  state = {
    chats: [
      { name: 'Чат с ботом' },
      { name: 'GB_Education' },
      { name: 'Мемасики' },
      { name: 'Болтология' },
      { name: 'Просто чат' },
    ],
  };

  render() {
    const { chats } = this.state;

    return (
      <List component="ul" disablePadding={true} style={styles.list}>
        {chats.map(({ name }, index) => (
          <li style={index === 0 ? styles.activeItem : styles.item} key={index}>
            <span>{name}</span>
          </li>
        ))}
      </List>
    );
  }
}

export default ChatList;
