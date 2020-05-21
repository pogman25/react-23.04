import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Messages.css'

class Messages extends Component {
    render() {
        const { messages } = this.props;
        console.log(messages)
        return (
            <ul className={styles.list}>
                { messages.map(({author,text}, index) => (
                    <li
                        className={cx(styles.item, {
                            [styles.right]: author === "Bot",
                            [styles.left]: author !== "Bot",
                        })}
                        key={index}
                    >
                        {`${author}: ${text}`}
                    </li>
                )) }
            </ul>
        )
    }
}

// Messages.propTypes = {
//     messages: PropTypes.arrayOf(
//         PropTypes.shape({
//             text: PropTypes.string,
//             author: PropTypes.string,
//         })
//     ).isRequired,
// }

export default Messages;