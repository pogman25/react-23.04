import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import Home from '../Home';
import Chats from '../Chats';
import Profile from '../Profile';
import { setChats } from '../../actions/chatsActions';
import mockPageLinks from './mockPageLinks'

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
                    <Route path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </Layout>
        )
    }
}

const mapStateToProps = store => ({
    chats: store.chats,
});
const mapDispatchToProps = {
    setChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);

