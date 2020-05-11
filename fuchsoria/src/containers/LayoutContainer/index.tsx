import React from 'react';
import { Layout as AntLayout } from 'antd';
import ChatContainer from '../ChatContainer';
import Header from '../../components/Header';
import styles from './styles.module.scss';

const { Header: AntHeader, Footer: AntFooter } = AntLayout;

export default function LayoutContainer() {
  return (
    <AntLayout className={styles.layout}>
      <AntHeader className={styles.layoutHeader}>
        <Header/>
      </AntHeader>
      <AntLayout>
        <ChatContainer />
      </AntLayout>
      <AntFooter className={styles.layoutFooter}>&copy; 2020 Fuchsoria</AntFooter>
    </AntLayout>
  );
}
