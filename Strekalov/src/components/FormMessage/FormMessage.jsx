import React, { Component } from 'react'
import styles from "./index.css";

class FormMessage extends Component {
    state = {
        text: "",
        author: "",
    };

    onChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { addNewMessage } = this.props;
        const { text, author } = this.state;

        addNewMessage({ text, author });
    };

    render() {
        const { text, author } = this.state

        return (
            <form className={styles.container} onSubmit={this.onSubmit} >
                <label className={styles.container}>
                    <span>Имя:</span>
                    <input
                        type="text"
                        name="author"
                        onChange={this.onChange}
                        value={author} />
                </label>
                <label className={styles.container}>
                    <span>Сообщение:</span>
                    <textarea
                        name="text"
                        onChange={this.onChange}
                        value={text} />
                </label>
                <button className={styles.btn_mess} type="submit">Add message</button>
            </form >
        );
    }
}

export default FormMessage;