import React from "react";
import propTypes from "prop-types";

import Header from "../Header";
import ChatList from "../ChatList";
import Chat from "../../pages/Chat";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
    },
    mainField: {
        display: "flex",
        flexDirection: "column",
        flex: "1 0 auto",
    },
    mainMessageField: {
        flexShrink: 0,
    }
}));

const Layout = ({ children }) => {

    const classes = useStyles();

    return (
        <div>
            <Header />
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <ChatList chats={['chat 1', 'chat 2', 'chat 3']}/>
                </Grid>
                <Grid item xs>
                    <div className={classes.mainField}>
                        {/*<Chat />*/}
                        { children }
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

Layout.propTypes = {
    children: propTypes.node.isRequired,
}


export default Layout;