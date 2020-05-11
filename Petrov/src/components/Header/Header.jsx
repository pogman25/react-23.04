import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import styles from './index.css';

class Header extends Component {
    render() {
        return (
            <Paper component="form" className={styles.lheaderContainer}>
                <IconButton className={styles.liconButton} aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <InputBase
                    className={styles.linput}
                    placeholder="Search"
                    inputProps={{'aria-label': 'search'}}
                />
                <IconButton type="submit" className={styles.liconButton} aria-label="search">
                    <SearchIcon/>
                </IconButton>
                <Divider className={styles.ldivider} orientation="vertical"/>

            </Paper>
        );
    }
}
export default Header;