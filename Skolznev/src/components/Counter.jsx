import React, { Component } from "react";

class Counter extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    };

    decrement = () => {
        this.setState(({ count }) => ({ count: count - 1 }));
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <p>{count}</p>
                <span>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </span>
            </div>
        );
    }
}

export default Counter;