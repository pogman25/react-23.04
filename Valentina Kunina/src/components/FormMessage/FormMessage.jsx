import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.css";

class FormMessage extends PureComponent {
    state = {
        text: "",
        author: "",
    };

    inputRef = React.createRef();

    focusInput = () => {
        this.inputRef.focus();
    };

    componentDidMount() {
        this.focusInput();
    }

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

    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            this.focusInput();
        }
    };

    handleKeyPress = (event) => {
        if ((event.key === "Enter" && event.metaKey) || (event.key === "Enter" && event.ctrlKey)) {
            event.preventDefault();
            event.stopPropagation();
            this.onSubmit(event);
        }
    };

    render() {
        const { text, author } = this.state;

        return (
            <form className={styles.container} onSubmit={this.onSubmit}>
                <input
                    aria-label="author"
                    type="text"
                    name="author"
                    onChange={this.onChange}
                    value={author}
                    onKeyDown={this.handleKeyDown}
                />
                <textarea
                    aria-label="text"
                    name="text"
                    onChange={this.onChange}
                    value={text}
                    multiple
                    ref={(input) => (this.inputRef = input)}
                    onKeyDown={this.handleKeyPress}
                />
                <button type="submit">Add message</button>
            </form>
        );
    }
}

FormMessage.propTypes = {
    addNewMessage: PropTypes.func,
};

export default FormMessage;
