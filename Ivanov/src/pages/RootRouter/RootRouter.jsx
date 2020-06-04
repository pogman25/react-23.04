import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from '../../components/Layout';
import Home from '../Home';
import Chats from '../Chats';
import Profile from '../Profile';
import { getChatsData } from '../../actions/chatsActions';
import getProfileData from '../../actions/profileActions';

class RootRouter extends Component {
    componentDidMount() {
        const { getChatsData, getProfileData } = this.props;
        getChatsData();
        getProfileData();
    }
    render() {
        const {profile, open} = this.props;
        return (
            <Layout>
                <Backdrop open={open}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/chats/:chatId" component={Chats} />
                    <Route path="/profile">
                        <Profile name={profile.name}/>
                    </Route>
                </Switch>
            </Layout>
        )
    }
}

const mapStateToProps = store => ({
    chats: store.chats,
    profile: store.profile,
    open: store.chats.isFetching
});
const mapDispatchToProps = {
    getChatsData, getProfileData
};

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);

