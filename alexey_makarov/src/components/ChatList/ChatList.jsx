import React, {Component} from 'react';
import PropTypes from "prop-types";
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import styles from './index.css'
import cx from 'classnames';
import {withStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const drawerWidth = 240;

const muiStyles = theme => {
    console.log(theme);
    return {

        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },

        logo: {
            marginRight: 'auto',
            marginLeft: theme.spacing(1),
        },

        paper: {
            color: theme.palette.text.primary,
        },

        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },

        itemRoot: {
            position: 'relative',
            whiteSpace: 'pre-line',
        },

        link: {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: theme.zIndex.appBar,
        },

        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: theme.spacing(3, 2),
        },

        toolbarClose: {
            justifyContent: 'flex-start',
        },

        footerList: {
            marginTop: 'auto',
            marginBottom: theme.spacing(5),
        },
    };
};

class ChatList extends Component{

    state={
        pageLinks:[
            {
                to:"1",
                title:"chat1",
            },
            {
                to:"2",
                title:"chat2",
            },
        ]
    }

    render() {

        const {classes} = this.props;

        return (
            <Drawer
                className={cx(classes.drawer, classes.drawerOpen)}
                classes={{
                    paper: cx(classes.paper, classes.drawerOpen),
                }}
                variant="permanent">
                <div className={classes.toolbar}>
                    <Typography variant="body1">Список чатов</Typography>
                </div>
                <Link to="/" key="home-page">
                    <ListItem
                        classes={{
                            root: classes.itemRoot,
                        }}
                        button
                    >
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </Link>
                <List disablePadding>
                    {Object.values(this.state.pageLinks).map(({ title, to }) => (
                        <Link to={to} key={title}>
                            <ListItem
                                classes={{
                                    root: classes.itemRoot,
                                }}
                                button
                            >
                                <ListItemIcon>
                                    <MenuIcon />
                                </ListItemIcon>
                                <ListItemText>{title}</ListItemText>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <List className={classes.footerList} disablePadding>
                    <Link to="/about" key="about-page">
                        <ListItem
                            classes={{
                                root: classes.itemRoot,
                            }}
                            button
                        >
                            <ListItemIcon>
                                <InfoIcon/>
                            </ListItemIcon>
                            <ListItemText>About</ListItemText>
                        </ListItem>
                    </Link>

                </List>
            </Drawer>
        )
    }

}


export default withStyles(muiStyles)(ChatList);