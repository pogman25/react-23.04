import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Link, useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import styles from './index.css';

class Header extends Component {
    render() {
        return (
            <Paper component="form" className={styles.lheaderContainer}>
                <Link to="/profile" key="profile-page">
                <IconButton className={styles.liconButton} aria-label="menu">
                    <AccountBoxIcon/>
                </IconButton>
                </Link>
                

            </Paper>
        );
    }
}
export default Header;