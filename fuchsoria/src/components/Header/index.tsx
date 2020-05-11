import React from 'react';
import { Menu } from 'antd';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.headerLogo}>Messenger</h2>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Profile</Menu.Item>
      </Menu>
    </div>
  );
}
