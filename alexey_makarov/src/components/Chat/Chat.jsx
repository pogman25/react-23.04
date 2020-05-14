import React from "react";
import ReactDOM from "react-dom";
import MessageButton from "../MessageButton/MessageButton"
import Counter from "../Counter/Counter";
import PropTypes from "prop-types";
import MessageForm from "../MessageForm/MessageForm";
import Messages from "../Messages/Messages";
import styles from "./index.css";
import { withStyles } from '@material-ui/core/styles';

const muiStyles = theme => {
    console.log(theme);
    return {
        paper: {
            marginTop: theme.spacing(7),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    };
};

class Chat extends React.Component {

    //Note:Благодаря Proposal не требуется конструктор.
    state = {
        messages:[{text:"Hello", author:"Bot"}],
        isVisible:false,
    }

    toggle = () =>{
        this.setState((prev)=>({
            isVisible:!prev.isVisible
        }));
    }

    addMessage_Deprecated = () => {
        //Note:Устаревашая версия отправки сообщения, работает без формы
        this.setState((prev)=>({
            messages:[...prev.messages, {text:"add",author:"I'm"}]
        }));
        console.log("Send Message v.1")
    }

    addMessage = (eventData) =>{
        //Note: Новая версия сообщения работает при помощи формы
        console.log(`${eventData.text}`)
        this.setState(({messages})=>({messages:[...messages,eventData]}));
        console.log("Send Message v.2")
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const {messages} = this.state;
        if(messages.length%2 === 0){
            setTimeout(()=>{
                this.setState(({messages})=>({
                    messages:[...messages,{text:"Hello", author:"Bot"}]
                }));
            },1000);
        }
    }

    render() {
        //TODO:Замечание Замечание 1.1 (Исправлено) . переменные из this.state и this.props лучше объявлять перед return,
        // так код будет элегантнее смотреться и форматирование по приятнее будет
        const {messages,isVisible} = this.state;
        const {name, classes} = this.props;

        return (<div /*className={classes.paper}*/ /*className={styles.container}*/>
            <h2 className="title">Hello from FirstMessage Component: {name}</h2>
            <Messages messages={messages}/>
        <MessageForm addMessage={this.addMessage}/>
        <MessageButton run={this.addMessage_Deprecated}/>
        <button onClick={this.toggle}>Visible</button>
            {isVisible && <Counter/>}
        </div>);
    }


}
Chat.propTypes = {
    name: PropTypes.string.isRequired,
}

Chat.defaultProps={}

//Note: Обертывание компонента стилями, которые полетят через Props
export default withStyles(muiStyles)(Chat);