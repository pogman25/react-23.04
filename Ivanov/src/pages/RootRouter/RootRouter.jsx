import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from '../../components/Layout'
import Home from '../Home'
import Chats from '../Chats'

const RootRouter = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/chats/:chatId" component={Chats} />
            </Switch>
        </Layout>
    )
}

export default RootRouter;

