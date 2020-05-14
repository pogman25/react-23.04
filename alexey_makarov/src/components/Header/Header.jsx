import React, {Component} from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import cx from 'classnames'
import NotificationsIcon from '@material-ui/icons/Notifications';
import {withStyles} from "@material-ui/core/styles";

const muiStyles = theme => {
    console.log(theme);
    return {
        toolbar: {
            paddingRight: 24,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: 240,
            width: `calc(100% - 240px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        menuButtonHidden: {
            display: 'none',
        },
        title: {
            flexGrow: 1,
        },
    };
};


class Header extends Component{

    render() {
        const {classes} = this.props;
        return(
            <AppBar position="absolute" className={cx(classes.appBar, classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                className={cx(classes.menuButton, classes.menuButtonHidden)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                className={classes.title}>
                        Chat One</Typography>
                    <IconButton color="inherit">
                        {/*Note: интересный момент с уведомлением (объект Badge)*/}
                        <Badge badgeContent={999} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(muiStyles)(Header);