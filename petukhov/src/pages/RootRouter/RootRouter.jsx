import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Chat from "../Chat";
import Layout from "../../components/Layout";

const RootRouter = () => {
    return (
    <Layout>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/chat">
                <Chat />
            </Route>
        </Switch>
    </Layout>
    );
}

export default RootRouter;