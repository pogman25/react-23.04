import React from 'react';
//import Example from './Example';

class HelloMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            messages: [],
        };

        this.addMessage = this.addMessage.bind(this);
    }
    
    addMessage() {
        this.setState((prev) => ({ messages: [...prev.messages, " Нормально"] }));  //всё, что в стэйте this.state нужно обновлять только через setState()
    }                                                                       
        
    render() {
        const { messages } = this.state;
        return (
            <div>
                <h2>Home work {this.props.num}</h2> 
                {/* <Example /> */}
                
                <button onClick = {() => this.addMessage()}>Click</button>
                { messages.map((val,key) => (
                    <p key={key.toString()}>{ val }</p>            
                ))}

            </div>
        );
    }
}

export default HelloMessage;