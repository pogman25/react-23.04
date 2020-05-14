import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import deepOrange from '@material-ui/core/colors/deepOrange';

const useStyles = makeStyles(theme => {
  return {
    item: {
      background: 'LightCyan',
      border: 0,
      borderRadius: '0 25px 25px 25px',
      boxShadow: theme.shadows[2],
      minHeight: 48,
      maxWidth: '30%',
      padding: '0 30px',
    },
    itemRight: {
      borderRadius: '25px 0 25px 25px',
    },
    left: {
      justifyContent: 'flex-start',
      alignItems: 'end',
      padding: 0
    },
    right: {
      justifyContent: 'flex-end',
      padding: 0 
    },
    avatar: {
      //color: theme.palette.getContrastText(deepOrange[500]),
      //backgroundColor: deepOrange[500],
    },
    hidden: {
      display: 'none'
    },
    inline: {
      display: 'inline',
      overflowWrap: 'anywhere'
    },
  };
});

const MessageItem = ({ author, text }) => {
  const classes = useStyles();
  return ( 
    <ListItem className={author == 'Bot' ? classes.left : classes.right}> 
      <ListItemAvatar>
        <Avatar className={author == 'Bot' ? classes.avatar : classes.hidden} />
      </ListItemAvatar>
      <ListItemText 
        primary={author}
        className={`${classes.item} ${author == 'Bot' ? classes.item : classes.itemRight}`}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {text}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

MessageItem.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MessageItem;
