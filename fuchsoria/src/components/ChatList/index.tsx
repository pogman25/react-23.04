import React from 'react';
import { List, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect, useStore } from 'react-redux';
import { IChatListProps } from '../../interfaces';
import { State } from '../../store/reducers/reducerTypes';
import { deleteChat } from '../../store/actions/chatsActions';
import styles from './styles.module.scss';

function ChatList({ items, blinkingIds }: IChatListProps) {
  const history = useHistory();
  const store = useStore();

  const switchChat = (chatId: string) => () => {
    history.push(`/chats/${chatId}`);
  };

  const handleDelete = (chatId: string) => () => {
    const isConfirmed = confirm('Remove chat?');

    if (isConfirmed) {
      store.dispatch(deleteChat(chatId));

      setTimeout(() => history.push('/chats/'), 300);
    }
  };

  return (
    <List
      className={styles.chatList}
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <List.Item
          className={styles.chatListItem}
          onClick={switchChat(String(item.id))}
          onDoubleClick={handleDelete(String(item.id))}
        >
          <List.Item.Meta
            avatar={<Avatar src="https://source.unsplash.com/random/300x300" />}
            title={item.title}
            description={blinkingIds.includes(String(item.id)) ? '[NEW ROBOT MSG]' : item.description}
          />
        </List.Item>
      )}
    />
  );
}

const mapStateToProps = (store: State) => {
  const {
    chatlist: { blinkingIds },
  } = store;

  return { blinkingIds };
};

export default connect(mapStateToProps)(ChatList);
