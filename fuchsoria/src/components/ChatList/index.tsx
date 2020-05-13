import React from 'react';
import { List, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';
import { IChatListProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function ChatList({ items }: IChatListProps) {
  const history = useHistory();
  const switchChat = (chatId: string) => (): void => {
    history.push(`/chats/${chatId}`);
  };

  return (
    <List
      className={styles.chatList}
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <List.Item className={styles.chatListItem} onClick={switchChat(String(item.id))}>
          <List.Item.Meta
            avatar={<Avatar src="https://source.unsplash.com/random/300x300" />}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
}
