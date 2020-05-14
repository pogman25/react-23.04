import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    AppBar,
    Button,
    CssBaseline,
    Toolbar,
    Typography
} from '@material-ui/core'
import styles from './Header.css'

class Header extends Component {
    render() {
        const { name, lastname } = this.props;
        return (
            <AppBar>
                <Toolbar>
                    <Typography
                        component="h2"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={styles.title}
                    >
                        Hello, {name} {lastname||''}
                    </Typography>
                    <Button color="inherit">
                        <Link to='/profile'>Profile</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        )
    }
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string,
}

export default Header;