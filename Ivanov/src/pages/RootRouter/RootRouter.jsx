import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from '../../components/Layout'
import Home from '../Home'
import Chats from '../Chats'
import Profile from '../Profile'

const RootRouter = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/chats/:chatId" component={Chats} />
                <Route path="/profile">
                    <Profile name="Nicholas" />
                </Route>
            </Switch>
        </Layout>
    )
}

export default RootRouter;

