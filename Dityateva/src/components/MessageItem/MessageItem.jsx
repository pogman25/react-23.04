import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    item: {
      
    },
    message: {
      backgroundColor: 'LightCyan',
      color: 'rgba(0, 0, 0, 0.7)',
      border: 0,
      borderRadius: '0 25px 25px 25px',
      //borderRadius: 12,
      boxShadow: theme.shadows[3],
      minHeight: 48,
      maxWidth: '75%',
      minWidth: '20%',
      padding: '5px 30px',
      //padding: theme.spacing(1, 2),
      overflowWrap: 'anywhere'
    },
    itemRight: {
      borderRadius: '25px 0 25px 25px',
    },
    left: {
      justifyContent: 'flex-start',
    },
    right: {
      justifyContent: 'flex-end',
    },
  };
});

const MessageItem = ({ author, text }) => {
  const classes = useStyles();

  return (
    <ListItem
      color="primary"
      className={cx(classes.item, {
        [classes.right]: author !== 'Bot',
        [classes.left]: author === 'Bot',
      })}
    >
      <Typography
        component="p"
        variant="body1"
        color="textPrimary"
        className={`${classes.message} ${author == 'Bot' ? classes.message : classes.itemRight}`}
      >
        {text}
        <Typography variant="caption" display="block">
          {author}
        </Typography>
      </Typography>
    </ListItem>
  );
};

MessageItem.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MessageItem;
