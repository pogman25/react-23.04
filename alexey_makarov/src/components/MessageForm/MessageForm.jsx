import React,{Component} from 'react';
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from './index.css';

class MessageForm extends Component{
    state={
        text:"",
        author:""
    };

    onChange = (event)=>{
        const {value,name} = event.target;
        this.setState({[name]:value})
    };

    onSubmit = (e) =>{
        e.preventDefault();
        const {text, author} = this.state;
        const {addMessage} = this.props;
        addMessage({text,author})
        console.log("onSubmit event");
    };

    render(){
        const {text,author} = this.state;
        return(
        <form className={styles.container} onSubmit={this.onSubmit}>
            <TextField type="text" name="author" onChange={this.onChange} value={author} placeholder="Author" />
            <TextField name="text" value={text} onChange={this.onChange} placeholder="Message"/>
            <Button type="submit" variant="contained">Add message</Button>
        </form>
        )
    }

}

MessageForm.protoTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string
}

export default MessageForm;