import React, { useState, useRef } from 'react';
import { Button, Input } from 'antd';
import { IChatFormProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function ChatForm({ handleSubmit }: IChatFormProps) {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  let messageRef = useRef<Input | null>(null);

  const sendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    messageRef.current?.focus();

    if (author && message) {
      handleSubmit(author, message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={sendMessage} className={styles.chatForm}>
      <div className={styles.chatFormGroup}>
        <Input placeholder="Your NickName" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Input
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          ref={messageRef}
        />
        <Button type="primary" htmlType="submit">
          Send Message
        </Button>
      </div>
    </form>
  );
}
