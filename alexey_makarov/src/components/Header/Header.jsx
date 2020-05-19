import React, {Component} from 'react';
import {AppBar, Badge, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import cx from 'classnames'
import NotificationsIcon from '@material-ui/icons/Notifications';
import {withStyles} from "@material-ui/core/styles";
import {Link, withRouter} from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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
        const {classes, location} = this.props;
        // Хотел попробовать обновлять заголовки, но Heaader ренедериться один раз и даже не реагирует на маршрутизацию
        console.log(location);
        console.log("Run header");
        return (
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
                        Page
                    </Typography>
                    <Link to="/profile" key="profile-page">
                        <IconButton color="secondary">
                            <AccountBoxIcon/>
                        </IconButton>
                    </Link>
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

export default withRouter(withStyles(muiStyles)(Header));