import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { fetchChatsData } from '../../store/chats/actions';

import Home from '../Home';
import Chats from '../Chats';
import Layout from '../../components/Layout';
import EmptyPage from '../EmptyPage';

class RootRouter extends Component {
  componentDidMount() {
    const { fetchChatsData } = this.props;

    fetchChatsData();
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
  fetchChatsData,
};

export default connect(null, mapDispatchToProps)(RootRouter);
