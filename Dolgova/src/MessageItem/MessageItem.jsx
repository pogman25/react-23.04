import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';

const useStyles = makeStyles(theme => {
  return {
    root: {
      background: 'linear-gradient(15deg, #00D4FF 30%, #090979 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  };
});

const MessageItem = ({ author, text }) => {
  const classes = useStyles();
  return (
    <li className={classes.root}>
      <p>{`${author}: ${text}`}</p>
    </li>
  );
};

export default MessageItem;
