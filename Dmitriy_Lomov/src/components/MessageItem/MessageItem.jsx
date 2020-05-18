import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, Typography } from '@material-ui/core';

const muiStyles = theme => {
  return {
    item: {},
    message: {
      maxWidth: '75%',
      border: 0,
      borderRadius: 12,
      boxShadow: theme.shadows[5],
      color: '#fff',
      padding: theme.spacing(1, 2),
      textShadow: '1px 1px 4px #444'
    },
    left: {
      justifyContent: 'flex-start',
    },
    right: {
      justifyContent: 'flex-end',
    },
    leftBg: {
      backgroundColor: theme.palette.info.light,
    },
    rightBg: {
      backgroundColor: theme.palette.success.light,
    }
  };
};

class MessageItem extends PureComponent {
  render() {
    const { author, text, classes } = this.props;

    return (
      <ListItem
        className={cx(classes.item, {
          [classes.right]: author !== 'Bot',
          [classes.left]: author === 'Bot',
        })}
      >
        <Typography
          component="p"
          variant="body1"
          color="textPrimary"
          className={cx(classes.message, {
            [classes.rightBg]: author !== 'Bot',
            [classes.leftBg]: author === 'Bot',
          })}
        >
          {text}
          <Typography variant="caption" display="block" color="textSecondary">
            {author}
          </Typography>
        </Typography>
      </ListItem>
    );
  }
};

MessageItem.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(muiStyles)(MessageItem);
