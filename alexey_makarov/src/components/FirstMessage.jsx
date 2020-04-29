import React from "react";
import ReactDOM from "react-dom";
import MessageButton from "./MessageButton"

class FirstMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages:[1,2,3,4,5],
        }
    }

    newMessage(){
        this.setState((prev)=>({
            messages:[...prev.messages,"add"]
        }));
        console.log("Add message");
    }

    render() {
        return <div>Hello from FirstMessage Component: {this.props.name}
            {this.state.messages.map((msg,index) =>(
                <p key={index}>{msg}</p>
            ))}
        <MessageButton run={()=>this.newMessage()}/>
        </div>;
    }
}

export default FirstMessage;