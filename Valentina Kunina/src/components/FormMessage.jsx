import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class FormMessage extends PureComponent {
    state = {
        text: "",
        author: "",
    };

    onChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        const { addNewMessage } = this.props;
        addNewMessage(this.state);
        this.setState({ text: "", author: "" });
    };

    render() {
        const { text, author } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="author" onChange={this.onChange} value={author} />
                <textarea name="text" onChange={this.onChange} value={text} />
                <button type="submit">Add message</button>
            </form>
        );
    }
}

FormMessage.propTypes = {
    addNewMessage: PropTypes.func,
};

export default FormMessage;
