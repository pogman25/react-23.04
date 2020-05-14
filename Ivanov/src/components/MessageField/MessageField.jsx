import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import Messages from '../Messages'
import styles from './MessageField.css'

class MessageField extends Component {
    state = {
        messages: [ { text: 'Hello', author: 'Bot'}],
    };

    timer;

    componentDidUpdate() {
        const { messages } = this.state;
        
        clearTimeout(this.timer);
        if (messages[messages.length - 1].author !== "Bot") {
                this.timer = setTimeout(() => {
                    this.addNewMessage({ text: "привет, я Бот", author: "Bot" });
                    }, 1000);
              
        }
    }
    
    addNewMessage = ({text, author}) => {
        this.setState(({ messages }) => ({
            messages: [...messages, { text: text, author: author }],
        }));
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
        const { messages } = this.state;

        return (
            <div className={styles.container}>
                <Messages messages={messages} />
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

// MessageField.propTypes = {
//     addNewMessage: PropTypes.func.isRequired,
// }

export default MessageField;