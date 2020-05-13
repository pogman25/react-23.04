import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LayoutContainer from '../containers/LayoutContainer';
import ChatContainer from '../containers/ChatContainer';
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
            <ChatContainer />
          </Route>
          <Route path="/chats/:chatId" component={ChatContainer} exact />
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
