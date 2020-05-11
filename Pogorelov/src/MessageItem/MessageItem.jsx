import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    item: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: theme.shadows[5],
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    left: {
      alignSelf: 'flex-start',
    },
    right: {
      alignSelf: 'flex-end',
    },
  };
});

const MessageItem = ({ author, text }) => {
  const classes = useStyles();
  return (
    <li
      className={cx(classes.item, {
        [classes.left]: author !== 'Bot',
        [classes.right]: author === 'Bot',
      })}
    >
      <p>{`${author}: ${text}`}</p>
    </li>
  );
};

MessageItem.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MessageItem;
