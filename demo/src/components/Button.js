import React from "react";

class Button extends React.Component {
  state = {
    count: 0
  };

  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
      </div>
    );
  }
}

export default Button;
