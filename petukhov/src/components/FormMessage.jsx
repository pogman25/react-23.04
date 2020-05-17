import React, { useState, useEffect, memo } from "react";
import propTypes from "prop-types";

const FormMessage = (props) => {
    const [{ text, author }, setMessage] = useState([ { text: '', author: ''}])

    const onChange = ( { target } ) => {
        const { name, value } = target;
       setMessage({[name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { addNewMessage } = props;
        addNewMessage({ text, author });
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="author" id="" onChange={onChange} value={author}/>
            <textarea name="text" onChange={onChange} value={text}></textarea>
            <button type="submit">Send</button>
        </form>
    );
}

FormMessage.defaultProps = {
    author: "Anton",
    text: "Empty"
}

FormMessage.propTypes = {
    author: propTypes.string,
    text: propTypes.string
}

export default memo(FormMessage);