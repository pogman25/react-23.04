import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Profile from '../Profile';
import MessageField from '../../components/MessageField';
import Layout from '../../components/Layout/Layout';
import EmptyPage from '../EmptyPage';

const RootRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>       
        <Route path="/chats/:chatId" component={MessageField} />
        <Route>
          <EmptyPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default RootRouter;