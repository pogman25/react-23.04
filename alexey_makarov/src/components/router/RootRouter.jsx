import React from "react";
import {Route, Switch} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import About from "../../pages/About";
import Chat from "../Chat/Chat";
import Profile from "../Profile/Profile";
import EmptyPage from "../../pages/EmptyPage";

const RootRouter = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/chats/:chatId" component={Chat}/>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route>
                    <EmptyPage/>
                </Route>
            </Switch>
        </Layout>
    )
}

export default RootRouter;