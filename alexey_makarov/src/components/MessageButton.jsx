import React from "react";
import ReactDOM from "react-dom";

class MessageButton extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return <button onClick={()=>this.props.run()}>Send Message</button>
    };


}

export default MessageButton;