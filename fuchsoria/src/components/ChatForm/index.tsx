import React, { useState } from 'react';
import { IChatFormProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function ChatForm({ handleSubmit }: IChatFormProps) {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (author && message) {
      handleSubmit(author, message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={sendMessage} className={styles.chatForm}>
      <input className={styles.chatFormInput} type="text" placeholder="Your NickName" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input className={styles.chatFormInput} type="text" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button className={styles.chatFormButton} type="submit">Send Message</button>
    </form>
  );
}
