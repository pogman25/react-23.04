import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Header.css'

class Header extends Component {
    render() {
        const { name, lastname } = this.props;
        return (
            <div className={styles.container}>
                <h2 className={styles.greeting}>Hello, {name} {lastname||''}</h2>
            </div>
        )
    }
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string,
}

export default Header;