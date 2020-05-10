import React from 'react';
import { List, Avatar } from 'antd';
import { IChatListProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function ChatList({ items }: IChatListProps) {
  return (
    <List
      className={styles.chatList}
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <List.Item className={styles.chatListItem}>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
}
