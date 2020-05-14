import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Chat from '../Chats';
import Layout from '../../components/Layout/Layout';
import EmptyPage from '../EmptyPage';

const RootRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chats/:chatId" component={Chat} />
        <Route>
          <EmptyPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default RootRouter;
