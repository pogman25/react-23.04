import React from "react";
import Example from './Example';

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Привет, {this.props.name}
                <Example />
                <button>Click</button>
            </div>
        )
    }
}

export default HelloMessage