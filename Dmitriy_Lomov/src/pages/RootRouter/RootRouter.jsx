import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { setChats } from '../../store/chats/actions';

import Home from '../Home';
import Chats from '../Chats';
import Layout from '../../components/Layout';
import EmptyPage from '../EmptyPage';
import mockPageLinks from './mockPageLinks';

class RootRouter extends Component {
  componentDidMount() {
    const { setChats } = this.props;
    setTimeout(() => {
      setChats(mockPageLinks);
    }, 1000);
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chats/:chatId" component={Chats} />
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  setChats,
};

export default connect(null, mapDispatchToProps)(RootRouter);
