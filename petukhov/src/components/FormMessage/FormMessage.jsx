import React, { useState, memo } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import propTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

const FormMessage = (props) => {
    const classes = useStyles();

    const [{ text, author }, setMessage] = useState([ { text: '', author: ''}])

    const onChange = ( { target } ) => {
        const { name, value } = target;
       setMessage({[name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { addNewMessage2 } = props;
        addNewMessage2({ text, author: "US" });
        setMessage({ text: '' });
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
            <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                name="text"
                onChange={onChange}
                value={text}>
            </TextField>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}>
                Send
            </Button>
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