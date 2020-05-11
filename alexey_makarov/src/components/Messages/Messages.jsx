import React,{Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.css'

const listStyles = {border: '1px solid #123',
    borderRadius: 7,
    minHeight:100,
};

class Messages extends Component {
    render() {
        const {messages} = this.props;
        return (
            //Note: через style={{border: '1px solid #123', borderRadius: 7}} можно задать стиль напрямую
            // и можно вынести наверх см. переменную listStyles
          <ul className={styles.list} style={listStyles}>
              {messages.map(({text,author},index) =>(
                  //Note в className можно указать логику, но лучше использовать classnames
                  //TODO: не работает classnames
                  <li key={index} className={cx(styles.list,
                      {
                      [styles.left]: author !== "Bot",
                      [styles.right]: author === "Bot"
                  })}
                  >
                    <p>{`${author}:${text}`}</p>
                  </li>
              ))}
          </ul>
        );
    }
}

Messages.propTypes ={
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            author: PropTypes.string,
        })
    ).isRequired,
}

export default Messages;