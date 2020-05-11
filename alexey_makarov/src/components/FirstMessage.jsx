import React from "react";
import ReactDOM from "react-dom";
import MessageButton from "./MessageButton"
import Counter from "./Counter";
import PropTypes from "prop-types";
import MessageForm from "./MessageForm";

class FirstMessage extends React.Component {

    //Note:Благодаря Proposal не требуется конструктор.
    state = {
        messages:[{text:"Hello", author:"Bot"}],
        isVisible:true,
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
        const {messages} = this.state;
        const {name} = this.props;
        const {isVisible} = this.state;

        return <div>Hello from FirstMessage Component: {name}
            {messages.map(({text,author},index) =>(
                <p key={index}>{`${author}:${text}`}</p>
            ))}
            {/*TODO:Мои доработки 1.1. Переделал передачу в виде стрелочной функции*/}
        <MessageForm addMessage={this.addMessage}/>
        <MessageButton run={this.addMessage_Deprecated}/>
        <button onClick={this.toggle}>Visible</button>
            {isVisible && <Counter/>}
        </div>;
    }


}
FirstMessage.propTypes = {
    name: PropTypes.string.isRequired,
}

FirstMessage.defaultProps={}

export default FirstMessage;