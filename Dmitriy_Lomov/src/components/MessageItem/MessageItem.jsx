import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    item: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 120,
      minHeight: 48,
      border: 0,
      borderRadius: 10,
      boxShadow: theme.shadows[5],
      padding: '10px 20px',
      marginTop: 10
    },
    left: {
      background: 'lightblue',
      alignSelf: 'flex-start',
    },
    right: {
      background: '#fff',
      alignSelf: 'flex-end',
    },
    text: {
      color: '#000',
      fontSize: '1em'
    },
    author: {
      fontSize: '0.8em',
      color: '#aaa'
    }
  };
});

const MessageItem = ({ author, text }) => {
  const classes = useStyles();
  return (
    <li
      className={cx(classes.item, {
        [classes.left]: author === 'Bot',
        [classes.right]: author !== 'Bot',
      })}
    >
      <span className={cx(classes.text)}>{text}</span>
      <span className={cx(classes.author)}>{author}</span>
    </li>
  );
};

MessageItem.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MessageItem;
