import React from 'react';
import cn from 'classnames';
import { IMessageProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function Message({ author, text, isSelf }: IMessageProps) {
  return (
    <div className={cn([styles.message, { [styles.messageSelf]: isSelf }])}>
      <div className={styles.messageAuthor}>{author}</div>
      {text}
    </div>
  );
}
