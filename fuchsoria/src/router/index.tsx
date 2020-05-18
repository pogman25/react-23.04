import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LayoutContainer from '../components/Layout';
import Chats from '../pages/Chats';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <HashRouter>
      <LayoutContainer>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/chats" exact>
            <Chats />
          </Route>
          <Route path="/chats/:chatId" component={Chats} exact />
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </LayoutContainer>
    </HashRouter>
  );
}
