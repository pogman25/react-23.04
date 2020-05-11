import React, { useEffect, useRef } from 'react';
import { IMessageListProps } from '../../interfaces';
import Message from '../Message';
import styles from './styles.module.scss';

export default function MessageList({ messages }: IMessageListProps) {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof listRef.current?.lastElementChild?.scrollIntoView === 'function') {
      listRef.current.lastElementChild.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  });

  return (
    <div className={styles.messageList} ref={listRef}>
      {messages.map(({ id, author, text, authorAccess }) => (
        <Message key={id} author={author} text={text} isBot={authorAccess === 'bot'} />
      ))}
    </div>
  );
}
