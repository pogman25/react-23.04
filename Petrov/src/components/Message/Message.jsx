import React from "react";
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import styles from './index.css';
import MessageItem from '../MessageItem';
class Message extends React.PureComponent {


  
  render() {

  return (
    <Container maxWidth="sm" component="ul" display="flex" className={styles.list} style={{display: 'flex'}}>
    
      {this.props.words.map(({ id, message, author }, index) =>
        <MessageItem key={id} text={message} author={author} />
      )}
     
    </Container>
  );

  }
}
Message.propTypes = {
  id: PropTypes.number,
  message: PropTypes.string,
  author: PropTypes.string,
};
export default Message;
