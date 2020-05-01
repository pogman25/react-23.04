import React, { Component } from "react";
class Counter extends Component {
  state = { count: 0 };

  changeCount = (e) => {
    const isDecrement = e.target.dataset.count === "dec";

    this.setState(({count}) => ({
      count: isDecrement ? count + 1 : count - 1,
    }));
  };

  render() {
    const {count} = this.state;
    return (
      <div>
        <p>{count}</p>
        <span>
          <button data-count= "inc" onClick={this.changeCount}>-</button>
          <button data-count= "dec" onClick={this.changeCount}>+</button>
        </span>
      </div>
    )
  }
}

export default Counter;