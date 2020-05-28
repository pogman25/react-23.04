import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Messages from '../../components/Messages';
import { addMessage } from '../../actions/chatsActions';
import getMessagesData from '../../actions/messagesActions';
import { getChatsMessages } from '../../selectors/chatSelectors';
import styles from './Chats.css'

class Chats extends Component {
     state = {
        messages: [ { text: 'Hello', author: 'Bot'}],
    };    

    componentDidMount() {
        const { getMessagesData } = this.props;
        getMessagesData();
    }
    
    addNewMessage = data => {  
        const {
            addMessage,
            match: { params }
        } = this.props;
        const { chatId } = params;
        addMessage({...data, chatId});
    };

    onChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
      };
    
    onSubmit = (e) => {
        e.preventDefault();
        this.sendMessage();
    };

    sendMessage = () => {
        const {text} = this.state;
        this.addNewMessage({text, author:'Nick'});
        this.setState({'text':''});
    }

    onKeyUP = (event) => {
        if(event.keyCode === 13) {
            this.sendMessage();
        }
    }
    
    render() {
        const { text } = this.state;
        const { messages, isFetching } = this.props;
        if(isFetching) return (<CircularProgress />)
        return (
            <div className={styles.container}>             
                <Messages messages={ messages } />
                <form className={styles.form} onSubmit={this.onSubmit} onKeyUp={this.onKeyUP}>
                    <textarea
                        className={styles.messageField}
                        name="text" 
                        onChange={this.onChange}
                        value={text}
                    />
                    <Button
                        className={styles.button} 
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Add message
                    </Button>
                </form>
            </div>
            
        );
    }
}

Chats.propTypes = {
    messages: PropTypes.array.isRequired,
}

const mapStateToProps = (store, ownProps) => ({
    messages: getChatsMessages(store, ownProps),
    isFetching: store.messages.isFetching
});

// Chats.defaultProps = {
//     messages: [],
//     isFetching: false
// }

const mapDispatchToProps = {
    addMessage, getMessagesData
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);