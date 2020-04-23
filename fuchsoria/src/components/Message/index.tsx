import React from 'react';
import { IMessageProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function Message({ author, text }: IMessageProps) {
  return (
    <div className={styles.message}>
      <span className={styles.messageAuthor}>{author}:</span> {text}
    </div>
  );
}
