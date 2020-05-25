import React from "react";
import {compose} from 'redux';
import MessageForm from "../MessageForm/MessageForm";
import Messages from "../Messages/Messages";
import {withStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";
import {getChatMessages} from "../../selectors/messagesSelector";
import {addMessage} from "../../actions/chatActions";

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
    // state = {
    //     messages:[{text:"Hello", author:"Bot"}],
    //     isVisible:false,
    // }
    //
    // toggle = () =>{
    //     this.setState((prev)=>({
    //         isVisible:!prev.isVisible
    //     }));
    // }
    //
    // addMessage_Deprecated = () => {
    //     //Note:Устаревашая версия отправки сообщения, работает без формы
    //     this.setState((prev)=>({
    //         messages:[...prev.messages, {text:"add",author:"I'm"}]
    //     }));
    //     console.log("Send Message v.1")
    // }
    //
    addNewMessage = (data) => {
        const {
            addMessage,
            match: {params},
        } = this.props;
        const {chatId} = params;
        addMessage({...data, chatId});
    }
    //
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     const {messages} = this.state;
    //     if(messages.length%2 === 0){
    //         setTimeout(()=>{
    //             this.setState(({messages})=>({
    //                 messages:[...messages,{text:"Hello", author:"Bot"}]
    //             }));
    //         },1000);
    //     }
    // }

    render() {
        const {messages} = this.props;

        return (<Box /*className={classes.paper}*/ /*className={styles.container}*/>
            <Messages messages={messages}/>
            <MessageForm addMessage={this.addNewMessage}/>
            {/*<MessageButton run={this.addMessage_Deprecated}/>*/}
            {/*<button onClick={this.toggle}>Visible</button>*/}
            {/*    {isVisible && <Counter/>}*/}
        </Box>);
    }


}

const mapStateToProps = (store, ownProps) => ({
    messages: getChatMessages(store, ownProps),
});

const mapDispatchToProps = {
    addMessage,
}

Chat.defaultProps = {
    messages: []
};

//Note: Обертывание компонента стилями, которые полетят через Props
export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(muiStyles))(Chat);