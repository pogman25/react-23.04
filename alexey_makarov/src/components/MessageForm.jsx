import React,{Component} from 'react';
import PropTypes from "prop-types";

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
        <form onSubmit={this.onSubmit}>
            <input type="text" name="author" onChange={this.onChange} value={author} placeholder="Author" />
            <textarea name="text" value={text} onChange={this.onChange} placeholder="Message"/>
            <button type="submit">Add message</button>
        </form>
        )
    }

}

MessageForm.protoTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string
}

export default MessageForm;