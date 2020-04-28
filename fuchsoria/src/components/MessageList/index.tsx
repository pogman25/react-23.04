import React from 'react';
import { IMessageListProps } from '../../interfaces';
import Message from '../Message';

export default function MessageList({ messages }: IMessageListProps) {
  return (
    <>
      {messages.map(({ id, author, text }) => (
        <Message key={id} author={author} text={text} />
      ))}
    </>
  );
}
