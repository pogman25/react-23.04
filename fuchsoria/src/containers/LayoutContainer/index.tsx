import React from 'react';
import ChatContainer from '../ChatContainer';
import styles from './styles.module.scss';

export default function LayoutContainer() {
  return (
    <div className={styles.layout}>
      <ChatContainer />
    </div>
  );
}
